"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Medal, Shield, Receipt, Timer, ChevronRight } from "lucide-react";
import Image from "next/image";

const credentials = {
  left: [
    {
      title: "Licensed teams",
      description: "No hidden fees, no surprises. You get a fair quote and we stick to it.",
      icon: Medal,
    },
    {
      title: "Full coverage",
      description: "We respect your schedule and arrive when we say we will, every single time.",
      icon: Shield,
    },
  ],
  right: [
    {
      title: "Transparent pricing",
      description: "Every team member is fully licensed and insured for your protection.",
      icon: Receipt,
    },
    {
      title: "On-time delivery",
      description: "We arrive on schedule and handle your belongings with genuine care.",
      icon: Timer,
    },
  ],
};

export function WhyUs() {
  return (
    <Section id="why-us" className="bg-primary text-primary-foreground overflow-hidden m-8 rounded-2xl">
      <div className="text-center mb-16 md:mb-24">
        <Badge className="mb-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
          Why us
        </Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-primary-foreground mb-6">
          Trust built on credentials
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          We're licensed, insured, and transparent about every cost. Your peace of mind matters more than anything else to us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-16 md:space-y-24">
          {credentials.left.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-background p-8 flex flex-col items-center text-center shadow-[inset_0_0_20px_oklch(from_var(--primary)_l_c_h_/_0.6)] hover:shadow-[inset_0_0_30px_oklch(from_var(--primary)_l_c_h_/_0.1)] transition-all duration-300"
            >
              <div className="mb-6 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <h3 className="text-2xl font-normal tracking-tighter text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square rounded-[2rem] overflow-hidden border border-primary-foreground/20 group shadow-[inset_0_0_60px_oklch(from_var(--primary-foreground)_l_c_h_/_0.08)]"
        >
          <Image
            src="/images/trust.png"
            alt="Trust and credentials"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Right Column */}
        <div className="space-y-16 md:space-y-24">
          {credentials.right.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-background p-8 flex flex-col items-center text-center shadow-[inset_0_0_20px_oklch(from_var(--primary)_l_c_h_/_0.6)] hover:shadow-[inset_0_0_30px_oklch(from_var(--primary)_l_c_h_/_0.1)] transition-all duration-300"
            >
              <div className="mb-6 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <h3 className="text-2xl font-normal tracking-tighter text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="mt-20 md:mt-32 flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <PrimaryButton className="px-10 h-14 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Details
          </PrimaryButton>
          <a
            href="#"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary-foreground hover:text-primary-foreground/80 transition-colors gap-2 group"
          >
            More
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </Section>
  );
}
