import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Add file size limits and allowed types
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Zod schema for form validation
const ipInfringementSchema = z.object({
  // Reporter Information
  reporterName: z.string().min(1, "Name is required"),
  reporterRole: z.string().min(1, "Role/Relationship is required"),
  reporterEmail: z.string().email("Invalid email address"),
  reporterPhone: z.string().min(1, "Phone number is required"),
  reporterAddress: z.string().optional(),
  dateOfReport: z.string().min(1, "Date of report is required"),

  // IP Type
  ipTypes: z.array(
    z.enum(["Trademark", "Copyright", "Patent", "Design Right", "Other"])
  ),
  otherIpType: z.string().optional(),

  // Trademark Details
  trademarkName: z.string().optional(),
  trademarkRegistrationNumber: z.string().optional(),
  trademarkGoods: z.string().optional(),
  trademarkImage: z.string().optional(), // URL or base64 for visual representation

  // Copyright Details
  copyrightTitle: z.string().optional(),
  copyrightType: z.string().optional(), // e.g., book, software, music, image, video
  copyrightRegistrationNumber: z.string().optional(),
  copyrightCreationDate: z.string().optional(),
  copyrightDescription: z.string().optional(),
  copyrightLink: z.string().optional(), // Link to original work

  // Patent Details
  patentNumber: z.string().optional(),
  patentTitle: z.string().optional(),
  patentGrantDate: z.string().optional(),
  patentDescription: z.string().optional(),

  // Design Right Details
  designName: z.string().optional(),
  designRegistrationNumber: z.string().optional(),
  designRegistrationDate: z.string().optional(),
  designProduct: z.string().optional(),
  designImage: z.string().optional(), // URL or base64 for visual representation

  // Other IP Details
  otherIpDescription: z.string().optional(),
  otherIpRegistration: z.string().optional(),

  // Infringer Information
  infringerName: z.string().optional(),
  infringerWebsite: z.string().optional(),
  infringerAddress: z.string().optional(),
  infringerContact: z.string().optional(),

  // Location of Infringement
  infringingLocations: z.array(
    z.enum(["Online", "Physical Location", "Other"])
  ),
  locationDetails: z.string().min(1, "Location details are required"),
  onlineLinks: z.string().optional(), // Specific links for online infringement
  physicalAddress: z.string().optional(), // Address for physical location
  otherLocationDetails: z.string().optional(), // Details for other location type

  // Infringement Details
  infringingActivity: z
    .string()
    .min(1, "Description of infringing activity is required"),
  infringedAspects: z
    .string()
    .min(1, "Specific aspects of infringement are required"),
  discoveryDate: z.string().min(1, "Date of discovery is required"),

  // Evidence
  hasEvidence: z.boolean(),
  evidenceDescription: z.string().optional(),
  evidenceFiles: z.array(z.string()).optional(), // Keep as string array for base64 data
  evidenceSendingSeparately: z.boolean().optional(), // Indicator if evidence will be sent separately

  // Sale Information
  isForSale: z.enum(["Yes", "No", "Unknown"]),
  price: z.string().optional(),
  estimatedScale: z.string().optional(),

  // Declaration
  declaration: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the declaration" }),
  }),
});

type IpInfringementReport = z.infer<typeof ipInfringementSchema>;

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function generateEmailBody(data: IpInfringementReport): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>IP Infringement Report</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f8fafc;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                border-radius: 12px;
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
                position: relative;
            }
            .header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="20" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="70" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="80" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
                opacity: 0.3;
            }
            .header h1 {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 10px;
                position: relative;
                z-index: 1;
            }
            .header .subtitle {
                font-size: 16px;
                opacity: 0.9;
                position: relative;
                z-index: 1;
            }
            .content {
                padding: 40px 30px;
            }
            .section {
                margin-bottom: 35px;
                background-color: #fafbfc;
                border-radius: 10px;
                padding: 25px;
                border-left: 4px solid #667eea;
                position: relative;
                overflow: hidden;
            }
            .section::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 70%);
                pointer-events: none;
            }
            .section-title {
                font-size: 20px;
                font-weight: 700;
                color: #1a202c;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .section-title::before {
                content: '';
                width: 6px;
                height: 6px;
                background-color: #667eea;
                border-radius: 50%;
            }
            .info-grid {
                display: grid;
                gap: 15px;
            }
            .info-item {
                background-color: #ffffff;
                padding: 15px;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                transition: all 0.3s ease;
            }
            .info-item:hover {
                border-color: #667eea;
                box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
            }
            .info-label {
                font-weight: 600;
                color: #4a5568;
                font-size: 14px;
                margin-bottom: 5px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .info-value {
                color: #1a202c;
                font-size: 16px;
                word-break: break-word;
            }
            .highlight {
                background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
                padding: 20px;
                border-radius: 10px;
                border: none !important;
                color: #2d3748;
                font-weight: 500;
            }
            .badge {
                display: inline-block;
                background-color: #667eea;
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin: 2px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .declaration {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                color: white;
                padding: 30px;
                border-radius: 15px;
                margin-top: 40px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            .declaration::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><polygon points="30,5 35,20 50,20 38,30 43,45 30,37 17,45 22,30 10,20 25,20" fill="rgba(255,255,255,0.1)"/></svg>');
                opacity: 0.1;
                animation: float 6s ease-in-out infinite;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(180deg); }
            }
            .declaration h3 {
                font-size: 22px;
                margin-bottom: 15px;
                position: relative;
                z-index: 1;
            }
            .declaration p {
                position: relative;
                z-index: 1;
                opacity: 0.95;
            }
            .footer {
                background-color: #1a202c;
                color: #a0aec0;
                padding: 30px;
                text-align: center;
                font-size: 14px;
            }
            .footer strong {
                color: #ffffff;
            }
            .status-indicator {
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin-right: 8px;
            }
            .status-yes { background-color: #48bb78; }
            .status-no { background-color: #f56565; }
            .status-unknown { background-color: #ed8936; }
            .divider {
                height: 2px;
                background: linear-gradient(90deg, transparent, #667eea, transparent);
                margin: 30px 0;
                border-radius: 1px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🛡️ IP Infringement Report</h1>
                <div class="subtitle">Comprehensive Intellectual Property Violation Report</div>
            </div>
            
            <div class="content">
                <div class="highlight">
                    <div class="info-label">Report Date</div>
                    <div class="info-value">${formatDate(
                      data.dateOfReport
                    )}</div>
                </div>

                <div class="section">
                    <h2 class="section-title">👤 Reporter Information</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Name (Individual/Organization)</div>
                            <div class="info-value">${data.reporterName}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Role/Relationship to IP</div>
                            <div class="info-value">${data.reporterRole}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Email Address</div>
                            <div class="info-value">${data.reporterEmail}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Phone Number</div>
                            <div class="info-value">${data.reporterPhone}</div>
                        </div>
                        ${
                          data.reporterAddress
                            ? `
                        <div class="info-item">
                            <div class="info-label">Address</div>
                            <div class="info-value">${data.reporterAddress}</div>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">📋 IP Type Information</h2>
                    <div class="info-item">
                        <div class="info-label">Intellectual Property Types</div>
                        <div class="info-value">
                            ${data.ipTypes
                              .map(
                                (type) => `<span class="badge">${type}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                    ${
                      data.otherIpType
                        ? `
                    <div class="info-item">
                        <div class="info-label">Other Type Details</div>
                        <div class="info-value">${data.otherIpType}</div>
                    </div>
                    `
                        : ""
                    }
                </div>

                ${
                  data.ipTypes.includes("Trademark")
                    ? `
                <div class="section">
                    <h2 class="section-title">™️ Trademark Details</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Trademark Name</div>
                            <div class="info-value">${
                              data.trademarkName || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Registration Number</div>
                            <div class="info-value">${
                              data.trademarkRegistrationNumber || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Goods/Services</div>
                            <div class="info-value">${
                              data.trademarkGoods || "Not provided"
                            }</div>
                        </div>
                        ${
                          data.trademarkImage
                            ? `
                        <div class="info-item">
                            <div class="info-label">Visual Representation</div>
                            <div class="info-value">✅ Attached to this email</div>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>
                `
                    : ""
                }

                ${
                  data.ipTypes.includes("Copyright")
                    ? `
                <div class="section">
                    <h2 class="section-title">©️ Copyright Details</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Copyright Title</div>
                            <div class="info-value">${
                              data.copyrightTitle || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Content Type</div>
                            <div class="info-value">${
                              data.copyrightType || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Registration Number</div>
                            <div class="info-value">${
                              data.copyrightRegistrationNumber || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Creation Date</div>
                            <div class="info-value">${
                              data.copyrightCreationDate
                                ? formatDate(data.copyrightCreationDate)
                                : "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Description</div>
                            <div class="info-value">${
                              data.copyrightDescription || "Not provided"
                            }</div>
                        </div>
                        ${
                          data.copyrightLink
                            ? `
                        <div class="info-item">
                            <div class="info-label">Link to Original Work</div>
                            <div class="info-value"><a href="${data.copyrightLink}" style="color: #667eea; text-decoration: none;">${data.copyrightLink}</a></div>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>
                `
                    : ""
                }

                ${
                  data.ipTypes.includes("Patent")
                    ? `
                <div class="section">
                    <h2 class="section-title">🔬 Patent Details</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Patent Number</div>
                            <div class="info-value">${
                              data.patentNumber || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Patent Title</div>
                            <div class="info-value">${
                              data.patentTitle || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Grant Date</div>
                            <div class="info-value">${
                              data.patentGrantDate
                                ? formatDate(data.patentGrantDate)
                                : "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Description</div>
                            <div class="info-value">${
                              data.patentDescription || "Not provided"
                            }</div>
                        </div>
                    </div>
                </div>
                `
                    : ""
                }

                ${
                  data.ipTypes.includes("Design Right")
                    ? `
                <div class="section">
                    <h2 class="section-title">🎨 Design Right Details</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Design Name/Description</div>
                            <div class="info-value">${
                              data.designName || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Registration Number</div>
                            <div class="info-value">${
                              data.designRegistrationNumber || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Registration Date</div>
                            <div class="info-value">${
                              data.designRegistrationDate
                                ? formatDate(data.designRegistrationDate)
                                : "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Associated Product</div>
                            <div class="info-value">${
                              data.designProduct || "Not provided"
                            }</div>
                        </div>
                        ${
                          data.designImage
                            ? `
                        <div class="info-item">
                            <div class="info-label">Visual Representation</div>
                            <div class="info-value">✅ Attached to this email</div>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>
                `
                    : ""
                }

                <div class="divider"></div>

                <div class="section">
                    <h2 class="section-title">⚠️ Alleged Infringer Information</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Infringer Name</div>
                            <div class="info-value">${
                              data.infringerName || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Website/Online Presence</div>
                            <div class="info-value">${
                              data.infringerWebsite || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Physical Address</div>
                            <div class="info-value">${
                              data.infringerAddress || "Not provided"
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Contact Details</div>
                            <div class="info-value">${
                              data.infringerContact || "Not provided"
                            }</div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">📍 Infringement Details</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Location Types</div>
                            <div class="info-value">
                                ${data.infringingLocations
                                  .map(
                                    (location) =>
                                      `<span class="badge">${location}</span>`
                                  )
                                  .join("")}
                            </div>
                        </div>
                        ${
                          data.onlineLinks
                            ? `
                        <div class="info-item">
                            <div class="info-label">Online Links</div>
                            <div class="info-value">${data.onlineLinks}</div>
                        </div>
                        `
                            : ""
                        }
                        ${
                          data.physicalAddress
                            ? `
                        <div class="info-item">
                            <div class="info-label">Physical Location</div>
                            <div class="info-value">${data.physicalAddress}</div>
                        </div>
                        `
                            : ""
                        }
                        ${
                          data.otherLocationDetails
                            ? `
                        <div class="info-item">
                            <div class="info-label">Other Location Details</div>
                            <div class="info-value">${data.otherLocationDetails}</div>
                        </div>
                        `
                            : ""
                        }
                        <div class="info-item">
                            <div class="info-label">Location Details</div>
                            <div class="info-value">${
                              data.locationDetails
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Infringing Activity</div>
                            <div class="info-value">${
                              data.infringingActivity
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Specific Infringed Aspects</div>
                            <div class="info-value">${
                              data.infringedAspects
                            }</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Discovery Date</div>
                            <div class="info-value">${formatDate(
                              data.discoveryDate
                            )}</div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">🔍 Evidence Information</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Has Evidence</div>
                            <div class="info-value">
                                <span class="status-indicator ${
                                  data.hasEvidence ? "status-yes" : "status-no"
                                }"></span>
                                ${data.hasEvidence ? "Yes" : "No"}
                            </div>
                        </div>
                        ${
                          data.evidenceDescription
                            ? `
                        <div class="info-item">
                            <div class="info-label">Evidence Description</div>
                            <div class="info-value">${data.evidenceDescription}</div>
                        </div>
                        `
                            : ""
                        }
                        ${
                          data.evidenceFiles && data.evidenceFiles.length > 0
                            ? `
                        <div class="info-item">
                            <div class="info-label">Attached Evidence Files</div>
                            <div class="info-value">📎 ${data.evidenceFiles.length} file(s) attached</div>
                        </div>
                        `
                            : ""
                        }
                        ${
                          data.evidenceSendingSeparately
                            ? `
                        <div class="info-item highlight">
                            <div class="info-label">Note</div>
                            <div class="info-value">📧 Additional evidence will be sent separately</div>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">💰 Sale Information</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Is Item/Service For Sale</div>
                            <div class="info-value">
                                <span class="status-indicator ${
                                  data.isForSale === "Yes"
                                    ? "status-yes"
                                    : data.isForSale === "No"
                                    ? "status-no"
                                    : "status-unknown"
                                }"></span>
                                ${data.isForSale}
                            </div>
                        </div>
                        ${
                          data.price
                            ? `
                        <div class="info-item">
                            <div class="info-label">Price</div>
                            <div class="info-value">${data.price}</div>
                        </div>
                        `
                            : ""
                        }
                        ${
                          data.estimatedScale
                            ? `
                        <div class="info-item">
                            <div class="info-label">Estimated Scale of Infringement</div>
                            <div class="info-value">${data.estimatedScale}</div>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>

                <div class="declaration">
                    <h3>✓ Declaration & Verification</h3>
                    <p>The reporter has confirmed that all information provided is true and accurate to the best of their knowledge and belief.</p>
                </div>
            </div>
            
            <div class="footer">
               
                <p><strong>Report Generated:</strong> ${formatDate(
                  data.dateOfReport
                )}</p>
                <p style="margin-top: 15px; opacity: 0.7;">This is an automated report generated by the IP Infringement Reporting System</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    if (request.method === "OPTIONS") {
      return new NextResponse(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    const body = await request.json();

    try {
      const validatedData = ipInfringementSchema.parse(body);

      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS
      ) {
        console.error("Missing email configuration");
        return NextResponse.json(
          {
            success: false,
            message: "Email service is not configured properly.",
          },
          { status: 500 }
        );
      }

      try {
        const emails = ["mail@iprguardians.com"];

        // Process attachments
        const attachments =
          validatedData.evidenceFiles
            ?.map((base64String, index) => {
              // Extract the MIME type and base64 data
              const matches = base64String.match(/^data:(.+);base64,(.+)$/);

              if (!matches) {
                console.error("Invalid base64 string format");
                return null;
              }

              const mimeType = matches[1];
              const base64Data = matches[2];
              const ext = mimeType.split("/")[1];

              return {
                filename: `evidence-${index + 1}.${ext}`,
                content: Buffer.from(base64Data, "base64"),
                contentType: mimeType,
                encoding: "base64",
              };
            })
            .filter(
              (attachment): attachment is NonNullable<typeof attachment> =>
                attachment !== null
            ) || [];

        // Create transporter
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        // Send email with attachments
        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: emails,
          subject: "New IP Infringement Report",
          html: generateEmailBody(validatedData),
          attachments,
        });

        console.log("Email sent successfully");

        return NextResponse.json({
          success: true,
          message:
            "Your report has been submitted successfully. A confirmation email has been sent.",
        });
      } catch (emailError: any) {
        console.error("Email sending error:", emailError);

        let errorMessage = "Failed to send email. Please try again later.";

        if (emailError.responseCode === 552) {
          errorMessage =
            "The recipient's mailbox is full. Please try a different email address.";
        } else if (emailError.code === "EMSGSIZE") {
          errorMessage =
            "The total size of attachments is too large. Please reduce the size or number of attachments.";
        } else if (emailError.code === "ECONNREFUSED") {
          errorMessage =
            "Could not connect to the email server. Please check your email configuration.";
        } else if (emailError.code === "EAUTH") {
          errorMessage =
            "Email authentication failed. Please check your email credentials.";
        }

        return NextResponse.json(
          {
            success: false,
            message: errorMessage,
            technicalDetails:
              process.env.NODE_ENV === "development"
                ? emailError.message
                : undefined,
          },
          { status: 500 }
        );
      }
    } catch (validationError) {
      console.error("Validation error:", validationError);
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          {
            success: false,
            message: "Validation error",
            errors: validationError.errors,
          },
          { status: 400 }
        );
      }
      throw validationError;
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
