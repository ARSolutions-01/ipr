"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, FileIcon, ShieldIcon } from "lucide-react";

export default function IPInfringementForm() {
  const [ipTypes, setIpTypes] = useState<string[]>([]);
  const [selectedIpType, setSelectedIpType] = useState("");
  const [infringementLocation, setInfringementLocation] = useState("");
  const [hasEvidence, setHasEvidence] = useState("");
  const [forSale, setForSale] = useState("");

  const handleIpTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setIpTypes([...ipTypes, type]);
      if (!selectedIpType) setSelectedIpType(type);
    } else {
      setIpTypes(ipTypes.filter((t) => t !== type));
      if (selectedIpType === type) {
        setSelectedIpType(ipTypes.find((t) => t !== type) || "");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <ShieldIcon className="h-8 w-8 text-black" />
            <h1 className="text-3xl font-bold text-black">
              Intellectual Property Infringement Report
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please provide detailed information about the alleged intellectual
            property infringement. All fields marked with an asterisk (*) are
            required.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4" />
            <span>Date of Report: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <form className="space-y-8">
          {/* Reporter Information */}
          <Card className="border-2 border-gray-200">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-xl text-black">
                Your Information (Reporter)
              </CardTitle>
              <CardDescription>
                Please provide your contact details and relationship to the
                intellectual property
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="reporter-name"
                    className="text-black font-medium"
                  >
                    Name (Individual/Organization) *
                  </Label>
                  <Input
                    id="reporter-name"
                    placeholder="Enter your full name or organization name"
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="reporter-role"
                    className="text-black font-medium"
                  >
                    Role/Relationship to IP *
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="owner">IP Owner</SelectItem>
                      <SelectItem value="employee">Employee</SelectItem>
                      <SelectItem value="agent">Authorized Agent</SelectItem>
                      <SelectItem value="concerned-citizen">
                        Concerned Citizen
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="reporter-email"
                    className="text-black font-medium"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="reporter-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="reporter-phone"
                    className="text-black font-medium"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="reporter-phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-gray-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="reporter-address"
                  className="text-black font-medium"
                >
                  Address (Optional)
                </Label>
                <Textarea
                  id="reporter-address"
                  placeholder="Enter your address"
                  className="border-gray-300"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* IP Information */}
          <Card className="border-2 border-gray-200">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-xl text-black">
                Information about the Infringed Intellectual Property
              </CardTitle>
              <CardDescription>
                Select the type(s) of intellectual property being infringed and
                provide details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <Label className="text-black font-medium">
                  Type of Intellectual Property (Select all that apply) *
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { id: "trademark", label: "Trademark" },
                    { id: "copyright", label: "Copyright" },
                    { id: "patent", label: "Patent" },
                    { id: "design", label: "Design Right" },
                    { id: "other", label: "Other" },
                  ].map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={type.id}
                        checked={ipTypes.includes(type.id)}
                        onCheckedChange={(checked) =>
                          handleIpTypeChange(type.id, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={type.id}
                        className="text-sm font-medium text-black"
                      >
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {ipTypes.length > 0 && (
                <div className="space-y-6">
                  <Separator />
                  <div className="space-y-2">
                    <Label className="text-black font-medium">
                      Select IP Type for Details
                    </Label>
                    <RadioGroup
                      value={selectedIpType}
                      onValueChange={setSelectedIpType}
                    >
                      {ipTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <RadioGroupItem value={type} id={`detail-${type}`} />
                          <Label
                            htmlFor={`detail-${type}`}
                            className="capitalize"
                          >
                            {type === "other" ? "Other IP" : type}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Trademark Details */}
                  {selectedIpType === "trademark" && (
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Trademark Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="trademark-name">
                              Trademark Name *
                            </Label>
                            <Input
                              id="trademark-name"
                              placeholder="Enter trademark name"
                              className="border-gray-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="trademark-reg">
                              Registration Number
                            </Label>
                            <Input
                              id="trademark-reg"
                              placeholder="Registration number (if applicable)"
                              className="border-gray-300"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="trademark-goods">
                            Goods/Services Associated
                          </Label>
                          <Textarea
                            id="trademark-goods"
                            placeholder="Describe the goods or services"
                            className="border-gray-300"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="trademark-visual">
                            Visual Representation (Link or Description)
                          </Label>
                          <Input
                            id="trademark-visual"
                            placeholder="Provide link or describe the trademark"
                            className="border-gray-300"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Copyright Details */}
                  {selectedIpType === "copyright" && (
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Copyright Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="copyright-title">
                              Title of the Work *
                            </Label>
                            <Input
                              id="copyright-title"
                              placeholder="Enter work title"
                              className="border-gray-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="copyright-type">Type of Work</Label>
                            <Select>
                              <SelectTrigger className="border-gray-300">
                                <SelectValue placeholder="Select work type" />
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
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="copyright-reg">
                              Registration Number
                            </Label>
                            <Input
                              id="copyright-reg"
                              placeholder="Registration number (if applicable)"
                              className="border-gray-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="copyright-date">
                              Date of Creation
                            </Label>
                            <Input
                              id="copyright-date"
                              type="date"
                              className="border-gray-300"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="copyright-link">
                            Link or Description of Original Work
                          </Label>
                          <Textarea
                            id="copyright-link"
                            placeholder="Provide link or detailed description"
                            className="border-gray-300"
                            rows={3}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Patent Details */}
                  {selectedIpType === "patent" && (
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Patent Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="patent-number">
                              Patent Number *
                            </Label>
                            <Input
                              id="patent-number"
                              placeholder="Enter patent number"
                              className="border-gray-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="patent-date">
                              Date of Patent Grant
                            </Label>
                            <Input
                              id="patent-date"
                              type="date"
                              className="border-gray-300"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patent-title">
                            Title of the Invention *
                          </Label>
                          <Input
                            id="patent-title"
                            placeholder="Enter invention title"
                            className="border-gray-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patent-description">
                            Brief Description of the Patented Invention
                          </Label>
                          <Textarea
                            id="patent-description"
                            placeholder="Describe the patented invention"
                            className="border-gray-300"
                            rows={4}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Design Right Details */}
                  {selectedIpType === "design" && (
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Design Right Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="design-name">
                              Design Name/Description *
                            </Label>
                            <Input
                              id="design-name"
                              placeholder="Enter design name"
                              className="border-gray-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="design-reg">
                              Registration Number
                            </Label>
                            <Input
                              id="design-reg"
                              placeholder="Registration number (if applicable)"
                              className="border-gray-300"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="design-date">
                              Date of Registration
                            </Label>
                            <Input
                              id="design-date"
                              type="date"
                              className="border-gray-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="design-product">
                              Product Incorporating the Design
                            </Label>
                            <Input
                              id="design-product"
                              placeholder="Enter product name"
                              className="border-gray-300"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="design-visual">
                            Visual Representation (Link or Description)
                          </Label>
                          <Input
                            id="design-visual"
                            placeholder="Provide link or describe the design"
                            className="border-gray-300"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Other IP Details */}
                  {selectedIpType === "other" && (
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Other Intellectual Property Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="other-description">
                            Description *
                          </Label>
                          <Textarea
                            id="other-description"
                            placeholder="Describe the intellectual property"
                            className="border-gray-300"
                            rows={4}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="other-protection">
                            Relevant Registration/Protection Details
                          </Label>
                          <Textarea
                            id="other-protection"
                            placeholder="Provide any registration or protection details"
                            className="border-gray-300"
                            rows={3}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Infringement Information */}
          <Card className="border-2 border-gray-200">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-xl text-black">
                Information about the Alleged Infringement
              </CardTitle>
              <CardDescription>
                Provide details about the infringement and the alleged infringer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="infringer-name"
                    className="text-black font-medium"
                  >
                    Name of Alleged Infringer
                  </Label>
                  <Input
                    id="infringer-name"
                    placeholder="Individual or organization name (if known)"
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="infringer-website"
                    className="text-black font-medium"
                  >
                    Website/Online Presence
                  </Label>
                  <Input
                    id="infringer-website"
                    placeholder="Website URL or social media link"
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="infringer-address"
                  className="text-black font-medium"
                >
                  Physical Address (if known)
                </Label>
                <Textarea
                  id="infringer-address"
                  placeholder="Enter physical address if known"
                  className="border-gray-300"
                  rows={2}
                />
              </div>

              <div className="space-y-4">
                <Label className="text-black font-medium">
                  Where did you observe the infringement? *
                </Label>
                <RadioGroup
                  value={infringementLocation}
                  onValueChange={setInfringementLocation}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="location-online" />
                    <Label htmlFor="location-online">
                      Online (Website, Social Media, Marketplace, etc.)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="physical" id="location-physical" />
                    <Label htmlFor="location-physical">
                      Physical Location (Store, Market, Event, etc.)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="location-other" />
                    <Label htmlFor="location-other">Other</Label>
                  </div>
                </RadioGroup>

                {infringementLocation === "online" && (
                  <div className="space-y-2">
                    <Label htmlFor="online-links">Specific Link(s) *</Label>
                    <Textarea
                      id="online-links"
                      placeholder="Provide specific URLs where infringement was observed"
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                )}

                {infringementLocation === "physical" && (
                  <div className="space-y-2">
                    <Label htmlFor="physical-address">
                      Address/Description *
                    </Label>
                    <Textarea
                      id="physical-address"
                      placeholder="Provide address or description of physical location"
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                )}

                {infringementLocation === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="other-location">
                      Specify Other Location *
                    </Label>
                    <Textarea
                      id="other-location"
                      placeholder="Describe where the infringement was observed"
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="infringement-description"
                  className="text-black font-medium"
                >
                  Describe the infringing activity in detail *
                </Label>
                <Textarea
                  id="infringement-description"
                  placeholder="Provide a detailed description of the infringement"
                  className="border-gray-300"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="infringement-aspects"
                  className="text-black font-medium"
                >
                  What specific aspects of the IP are being infringed? *
                </Label>
                <Textarea
                  id="infringement-aspects"
                  placeholder="e.g., logo, exact copy of software, patented features, overall design"
                  className="border-gray-300"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="awareness-date"
                  className="text-black font-medium"
                >
                  When did you first become aware of the infringement?
                </Label>
                <Input
                  id="awareness-date"
                  type="date"
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-4">
                <Label className="text-black font-medium">
                  Do you have evidence of the infringement?
                </Label>
                <RadioGroup value={hasEvidence} onValueChange={setHasEvidence}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="evidence-yes" />
                    <Label htmlFor="evidence-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="evidence-no" />
                    <Label htmlFor="evidence-no">No</Label>
                  </div>
                </RadioGroup>

                {hasEvidence === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="evidence-description">
                      Describe your evidence
                    </Label>
                    <Textarea
                      id="evidence-description"
                      placeholder="Describe screenshots, photos, receipts, advertisements, etc."
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <Label className="text-black font-medium">
                  Is the infringing product/service being offered for sale?
                </Label>
                <RadioGroup value={forSale} onValueChange={setForSale}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="sale-yes" />
                    <Label htmlFor="sale-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="sale-no" />
                    <Label htmlFor="sale-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unknown" id="sale-unknown" />
                    <Label htmlFor="sale-unknown">Unknown</Label>
                  </div>
                </RadioGroup>

                {forSale === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="sale-price">Price (if known)</Label>
                    <Input
                      id="sale-price"
                      placeholder="Enter price"
                      className="border-gray-300"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="infringement-scale"
                  className="text-black font-medium"
                >
                  Estimated scale of the infringement
                </Label>
                <Textarea
                  id="infringement-scale"
                  placeholder="Describe the estimated scale or impact of the infringement"
                  className="border-gray-300"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Declaration */}
          <Card className="border-2 border-black">
            <CardHeader className="bg-black text-white">
              <CardTitle className="text-xl flex items-center gap-2">
                <FileIcon className="h-5 w-5" />
                Declaration
              </CardTitle>
              <CardDescription className="text-gray-300">
                Please read and confirm the following declaration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  I hereby declare that the information provided in this report
                  is true and accurate to the best of my knowledge and belief. I
                  understand that providing false or misleading information may
                  have legal consequences. I further assure you that this report
                  is submitted without any personal bias, ill will, or grievance
                  against the company or individual identified above.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="declaration" />
                <Label
                  htmlFor="declaration"
                  className="text-sm font-medium text-black"
                >
                  I agree to the declaration above and confirm that all
                  information provided is accurate *
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-12 py-3 text-lg font-medium"
            >
              Submit IP Infringement Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
