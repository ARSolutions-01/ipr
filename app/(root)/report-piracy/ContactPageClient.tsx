"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  // Reporter Information
  reporterName: z.string().min(1, "Name is required"),
  reporterRole: z.string().min(1, "Role/Relationship is required"),
  reporterEmail: z.string().email("Invalid email address"),
  reporterPhone: z.string().min(1, "Phone number is required"),
  reporterAddress: z.string().optional(),
  dateOfReport: z.string().min(1, "Date of report is required"),

  // IP Type
  ipTypes: z.array(z.string()).min(1, "Select at least one IP type"),
  otherIpType: z.string().optional(),

  // Trademark Details
  trademarkName: z.string().optional(),
  trademarkRegistrationNumber: z.string().optional(),
  trademarkGoods: z.string().optional(),
  trademarkImage: z.string().optional(),

  // Copyright Details
  copyrightTitle: z.string().optional(),
  copyrightType: z.string().optional(),
  copyrightRegistrationNumber: z.string().optional(),
  copyrightCreationDate: z.string().optional(),
  copyrightDescription: z.string().optional(),
  copyrightLink: z.string().optional(),

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
  designImage: z.string().optional(),

  // Other IP Details
  otherIpDescription: z.string().optional(),
  otherIpRegistration: z.string().optional(),

  // Infringer Information
  infringerName: z.string().optional(),
  infringerWebsite: z.string().optional(),
  infringerAddress: z.string().optional(),
  infringerContact: z.string().optional(),

  // Location of Infringement
  infringingLocations: z
    .array(z.string())
    .min(1, "Select at least one location type"),
  locationDetails: z.string().min(1, "Location details are required"),
  onlineLinks: z.string().optional(),
  physicalAddress: z.string().optional(),
  otherLocationDetails: z.string().optional(),

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
  evidenceFiles: z.array(z.string()).optional(),
  evidenceSendingSeparately: z.boolean().optional(),

  // Sale Information
  isForSale: z.enum(["Yes", "No", "Unknown"]),
  price: z.string().optional(),
  estimatedScale: z.string().optional(),

  // Declaration
  declaration: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const ipTypes = [
  "Trademark",
  "Copyright",
  "Patent",
  "Design Right",
  "Other",
] as const;

const locationTypes = ["Online", "Physical Location", "Other"] as const;

// Add file size and type constants
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ContactPageClient = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploadError, setFileUploadError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reporterName: "",
      reporterRole: "",
      reporterEmail: "",
      reporterPhone: "",
      reporterAddress: "",
      dateOfReport: new Date().toISOString().split("T")[0],
      ipTypes: [],
      otherIpType: "",
      trademarkName: "",
      trademarkRegistrationNumber: "",
      trademarkGoods: "",
      trademarkImage: "",
      copyrightTitle: "",
      copyrightType: "",
      copyrightRegistrationNumber: "",
      copyrightCreationDate: "",
      copyrightDescription: "",
      copyrightLink: "",
      patentNumber: "",
      patentTitle: "",
      patentGrantDate: "",
      patentDescription: "",
      designName: "",
      designRegistrationNumber: "",
      designRegistrationDate: "",
      designProduct: "",
      designImage: "",
      otherIpDescription: "",
      otherIpRegistration: "",
      infringerName: "",
      infringerWebsite: "",
      infringerAddress: "",
      infringerContact: "",
      infringingLocations: [],
      locationDetails: "",
      onlineLinks: "",
      physicalAddress: "",
      otherLocationDetails: "",
      infringingActivity: "",
      infringedAspects: "",
      discoveryDate: "",
      hasEvidence: false,
      evidenceDescription: "",
      evidenceFiles: [],
      evidenceSendingSeparately: false,
      isForSale: "Unknown",
      price: "",
      estimatedScale: "",
      declaration: false,
    },
  });

  const selectedIpTypes = form.watch("ipTypes");

  // Function to handle file validation
  const validateFile = (file: File) => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "File type not supported. Please upload images, PDFs, or Word documents.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 10MB";
    }
    return null;
  };

  // Function to process file upload
  const handleFileUpload = async (files: FileList | null, field: any) => {
    setFileUploadError(null);

    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const totalSize = fileArray.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > MAX_FILE_SIZE * 3) {
      // Limit total size to 30MB
      setFileUploadError("Total file size must be less than 30MB");
      return;
    }

    const processedFiles = await Promise.all(
      fileArray.map(async (file) => {
        const error = validateFile(file);
        if (error) {
          setFileUploadError(error);
          return null;
        }

        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.readAsDataURL(file);
        });
      })
    );

    const validFiles = processedFiles.filter(Boolean) as string[];
    if (validFiles.length > 0) {
      field.onChange(validFiles);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!data.declaration) {
      toast({
        title: "Declaration Required",
        description: "Please agree to the declaration before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description:
            "Your IP infringement report has been submitted successfully.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description:
            result.message || "Failed to submit the report. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add a debug log for form errors
  const formErrors = form.formState.errors;
  React.useEffect(() => {
    if (Object.keys(formErrors).length > 0) {
      console.log("Form validation errors:", formErrors);
    }
  }, [formErrors]);

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              IP Infringement Report Form
            </CardTitle>
            <CardDescription className="text-center text-lg mt-2">
              Please provide detailed information about the intellectual
              property infringement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Reporter Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    Reporter Information
                  </h2>
                  <FormField
                    control={form.control}
                    name="dateOfReport"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Report</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="reporterName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Full Name (Individual/Organization)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name or organization name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reporterRole"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role/Relationship to IP</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Owner, Employee, Concerned Citizen"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Specify your relationship to the intellectual
                            property
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reporterEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reporterPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="reporterAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* IP Type Selection */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    IP Type Information
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ipTypes.map((type) => (
                      <FormField
                        key={type}
                        control={form.control}
                        name="ipTypes"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(type)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...field.value, type]
                                    : field.value?.filter(
                                        (value) => value !== type
                                      );
                                  field.onChange(updatedValue);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              {type}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  {selectedIpTypes.includes("Other") && (
                    <FormField
                      control={form.control}
                      name="otherIpType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please Specify Other IP Type</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Describe the other IP type"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <FormMessage />
                </div>

                {/* Conditional IP Type Details */}
                {selectedIpTypes.includes("Trademark") && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">
                      Trademark Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="trademarkName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trademark Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter trademark name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="trademarkRegistrationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registration Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter registration number"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>If applicable</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="trademarkGoods"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Goods/Services</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the goods/services associated with the trademark"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="trademarkImage"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Visual Representation</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      field.onChange(reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </FormControl>
                            <FormDescription>
                              Upload an image of your trademark (optional)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Copyright Details */}
                {selectedIpTypes.includes("Copyright") && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">
                      Copyright Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="copyrightTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title of the Work</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter copyright title"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="copyrightType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type of Work</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type of work" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="book">Book</SelectItem>
                                  <SelectItem value="software">
                                    Software
                                  </SelectItem>
                                  <SelectItem value="music">Music</SelectItem>
                                  <SelectItem value="image">Image</SelectItem>
                                  <SelectItem value="video">Video</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="copyrightRegistrationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registration Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter registration number"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>If applicable</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="copyrightCreationDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Creation Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormDescription>
                              Approximate date is acceptable
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="copyrightDescription"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the copyrighted work"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="copyrightLink"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Link to Original Work</FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="Enter URL to original work"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              If available online
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Patent Details */}
                {selectedIpTypes.includes("Patent") && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">
                      Patent Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="patentNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Patent Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter patent number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="patentTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title of the Invention</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter patent title"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="patentGrantDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grant Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="patentDescription"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Description of the Invention</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the patented invention"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Design Right Details */}
                {selectedIpTypes.includes("Design Right") && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">
                      Design Right Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="designName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Design Name/Description</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter design name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="designRegistrationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registration Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter registration number"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>If applicable</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="designRegistrationDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registration Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormDescription>If applicable</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="designProduct"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Product Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the product incorporating the design"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="designImage"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Visual Representation</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      field.onChange(reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </FormControl>
                            <FormDescription>
                              Upload an image of your design (optional)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Infringer Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    Alleged Infringer Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="infringerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name of Alleged Infringer</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter individual or organization name (if known)"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Individual or organization name if known
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="infringerWebsite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website/Online Presence</FormLabel>
                          <FormControl>
                            <Input
                              type="url"
                              placeholder="Enter website URL, social media link, etc."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="infringerAddress"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Physical Address</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter physical address of the alleged infringer (if known)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="infringerContact"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Other Contact Information</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter any other known contact details (phone, email, etc.)"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Any additional contact information that might help
                            identify the infringer
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Location of Infringement */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    Location of Infringement
                  </h2>
                  <FormField
                    control={form.control}
                    name="infringingLocations"
                    render={() => (
                      <FormItem>
                        <FormLabel>
                          Where did you observe the infringement?
                        </FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {locationTypes.map((type) => (
                            <FormField
                              key={type}
                              control={form.control}
                              name="infringingLocations"
                              render={({ field }) => (
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(type)}
                                      onCheckedChange={(checked) => {
                                        const updatedValue = checked
                                          ? [...field.value, type]
                                          : field.value?.filter(
                                              (value) => value !== type
                                            );
                                        field.onChange(updatedValue);
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {type}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch("infringingLocations").includes("Online") && (
                    <FormField
                      control={form.control}
                      name="onlineLinks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Online Links</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Provide specific website URLs, social media links, marketplace listings, etc."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Please provide all relevant online locations where
                            the infringement was observed
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {form
                    .watch("infringingLocations")
                    .includes("Physical Location") && (
                    <FormField
                      control={form.control}
                      name="physicalAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Physical Location Address</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Provide the address or description of the physical location"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include store name, market location, or any
                            identifying details of the physical location
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {form.watch("infringingLocations").includes("Other") && (
                    <FormField
                      control={form.control}
                      name="otherLocationDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Other Location Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe where else the infringement was observed"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="locationDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Location Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Provide any additional details about where and how the infringement was observed"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Infringement Details */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    Infringement Details
                  </h2>
                  <FormField
                    control={form.control}
                    name="infringingActivity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Description of Infringing Activity
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Provide a detailed description of how the intellectual property is being infringed"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Include as much detail as possible about the
                          infringing activity
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="infringedAspects"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Aspects of Infringement</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe which specific aspects of your IP are being infringed (e.g., logo, exact copy of software, patented features, overall design)"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="discoveryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Discovery</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormDescription>
                          When did you first become aware of the infringement?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Evidence */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    Evidence
                  </h2>
                  <FormField
                    control={form.control}
                    name="hasEvidence"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          I have evidence of the infringement
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch("hasEvidence") && (
                    <>
                      <FormField
                        control={form.control}
                        name="evidenceDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Evidence Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the evidence you have (e.g., screenshots, photos, purchase receipts, advertisements)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="evidenceFiles"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload Evidence Files</FormLabel>
                            <FormControl>
                              <div className="space-y-4">
                                <Input
                                  type="file"
                                  multiple
                                  accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
                                  onChange={(e) =>
                                    handleFileUpload(e.target.files, field)
                                  }
                                />
                                {fileUploadError && (
                                  <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>
                                      {fileUploadError}
                                    </AlertDescription>
                                  </Alert>
                                )}
                                {field.value && field.value.length > 0 && (
                                  <div className="text-sm text-muted-foreground">
                                    {field.value.length} file(s) selected
                                  </div>
                                )}
                              </div>
                            </FormControl>
                            <FormDescription>
                              Upload relevant files as evidence (images, PDFs,
                              or Word documents). Maximum size per file: 10MB,
                              total: 30MB
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="evidenceSendingSeparately"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              I will send additional evidence separately
                            </FormLabel>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </div>

                {/* Sale Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    Sale Information
                  </h2>
                  <FormField
                    control={form.control}
                    name="isForSale"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Is the infringing item/service being offered for sale?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="No" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Unknown" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Unknown
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch("isForSale") === "Yes" && (
                    <>
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price (if known)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter the price of the infringing item/service"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="estimatedScale"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Estimated Scale of Infringement
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the estimated scale of infringement (e.g., number of items, frequency of sales, market reach)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </div>

                {/* Declaration */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold border-b pb-2">
                    Declaration
                  </h2>
                  <FormField
                    control={form.control}
                    name="declaration"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal cursor-pointer">
                            I hereby declare that the information provided in
                            this report is true and accurate to the best of my
                            knowledge and belief. I understand that providing
                            false or misleading information may have legal
                            consequences. I further assure that this report is
                            submitted without any personal bias, ill will, or
                            grievance against the company or individual
                            identified above.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Report"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactPageClient;
