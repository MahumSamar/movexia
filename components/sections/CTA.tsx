"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Image from "next/image";

export function CTA() {
  return (
    <Section id="cta" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-foreground">
            Ready to move forward
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Get your free quote today and see why thousands trust us with their moves.
          </p>

          <div className="flex flex-wrap gap-4">
            <PrimaryButton className="px-10 h-14">
              Quote
            </PrimaryButton>
            <SecondaryButton className="px-10 h-14">
              Button
            </SecondaryButton>
          </div>
        </motion.div>

        {/* Right Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] lg:h-[600px]"
        >
          {/* Grid Container */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Top Left */}
            <div className="relative rounded-2xl overflow-hidden shadow-[inset_0_0_40px_oklch(from_var(--primary)_l_c_h_/_0.08)] group">
              <Image
                src="/images/services/local moves.png"
                alt="Local moves"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Top Right */}
            <div className="relative rounded-2xl overflow-hidden shadow-[inset_0_0_40px_oklch(from_var(--primary)_l_c_h_/_0.08)] group">
              <Image
                src="/images/case studies/Cross-country family move.png"
                alt="Cross-country move"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Bottom Left */}
            <div className="relative rounded-2xl overflow-hidden shadow-[inset_0_0_40px_oklch(from_var(--primary)_l_c_h_/_0.08)] group">
              <Image
                src="/images/services/Packing services.png"
                alt="Packing services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Bottom Right */}
            <div className="relative rounded-2xl overflow-hidden shadow-[inset_0_0_40px_oklch(from_var(--primary)_l_c_h_/_0.08)] group">
              <Image
                src="/images/case studies/Storage and transition.png"
                alt="Storage solutions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
