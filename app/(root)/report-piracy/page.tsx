import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | IP Guardians",
};

export default function ContactPage() {
  return (
    <div className="pt-12">
      <ContactPageClient />
    </div>
  );
}
