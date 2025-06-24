import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Report IP Infringement | IPR Guardians",
  description:
    "Report intellectual property infringement including trademark, copyright, patent, and design right violations.",
};

export default function ReportPiracyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Report IP Infringement
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Help us protect intellectual property rights by reporting any
            suspected infringement. Your information will be treated with strict
            confidentiality.
          </p>
        </div>
        <ContactPageClient />
      </div>
    </div>
  );
}
