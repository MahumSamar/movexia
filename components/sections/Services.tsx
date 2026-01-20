"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Capability",
    title: "Local moves",
    description: "Professional packing keeps your items safe from damage during transit and handling.",
    image: "/images/services/local moves.png",
    href: "#",
    linkText: "Explore",
  },
  {
    category: "Reliability",
    title: "Long-distance",
    description: "Secure climate-controlled storage for short-term or long-term needs whenever you need it.",
    image: "/images/services/Long-distance.png",
    href: "#",
    linkText: "More",
  },
  {
    category: "Precision",
    title: "Packing services",
    description: "We handle every box with care and precision from start to finish.",
    image: "/images/services/Packing services.png",
    href: "#",
    linkText: "Details",
  },
  {
    category: "Security",
    title: "Storage solutions",
    description: "Keep your belongings safe in our secure facilities for as long as needed.",
    image: "/images/services/storage solutions.png",
    href: "#",
    linkText: "More",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-background">
      <div className="text-center mb-12 md:mb-16">
        <Badge className="mb-4">Services</Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-foreground mb-6">
          What we do for you
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Movexia offers everything you need for a clean transition. From packing your first box to setting up your new place, we've got it covered.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Grid - 4 Smaller Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl group bg-card flex flex-col h-full overflow-hidden shadow-[inset_0_0_20px_oklch(from_var(--primary)_l_c_h_/_0.6)] hover:shadow-[inset_0_0_30px_oklch(from_var(--primary)_l_c_h_/_0.1)] transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">
                  {service.category}
                </span>
                <h3 className="text-2xl font-normal tracking-tighter text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={service.href}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors gap-2 group/link"
                  >
                    {service.linkText}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right - Large Feature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl lg:col-span-4 border border-border/50 bg-card flex flex-col h-full overflow-hidden group shadow-[inset_0_0_30px_oklch(from_var(--primary)_l_c_h_/_0.6)] hover:shadow-[inset_0_0_40px_oklch(from_var(--primary)_l_c_h_/_0.1)] transition-all duration-300"
        >
          <div className="relative flex-1 min-h-[300px] overflow-hidden bg-muted/40">
            <Image
              src="/images/services/Around town.png"
              alt="Specialty Moving Services"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-10">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
              Care
            </span>
            <h3 className="text-4xl md:text-5xl font-normal tracking-tighter text-foreground mb-6">
              Around town
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Pianos, art, antiques, and fragile goods receive expert attention and protection.
            </p>
            <div className="flex items-center gap-8">
              <PrimaryButton className="px-8 h-12">
                Details
              </PrimaryButton>
              <a
                href="#"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors gap-2 group/link"
              >
                More
                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
