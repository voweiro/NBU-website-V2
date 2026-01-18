"use client";

import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import contactImg from "@/asserts/nigerian-british-school-2-560x560.png";

export default function ContactPage() {
  return (
    <main className="w-full">
      <ContactHero backgroundImage={contactImg.src} />
      <ContactDetails />
      <ContactForm />
    </main>
  );
}
