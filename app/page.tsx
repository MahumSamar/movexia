"use client";

import * as React from "react";
import { 
  Truck, 
  Package, 
  Home, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  PhoneCall,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Work } from "@/components/sections/Work";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Get a Quote",
    description: "Fill out our simple form or give us a call for a free, no-obligation estimate.",
    icon: Calendar,
  },
  {
    title: "Plan Your Move",
    description: "Our experts help you organize everything, from timelines to special requirements.",
    icon: MapPin,
  },
  {
    title: "Moving Day",
    description: "Our professional crew arrives on time and handles all the heavy lifting.",
    icon: Truck,
  },
  {
    title: "Settle In",
    description: "We place everything exactly where you want it in your new home.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Work />
        <CTA />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
