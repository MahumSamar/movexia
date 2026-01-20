"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    rating: 5,
    text: "They packed my entire house in one afternoon and nothing broke. I was skeptical, but they proved me wrong.",
    author: "Sarah Mitchell",
    role: "Homeowner, Boston",
  },
  {
    rating: 5,
    text: "Moving across the country seemed impossible but Movexia handled everything with precision and care.",
    author: "James Rodriguez",
    role: "Business owner, Denver",
  },
  {
    rating: 5,
    text: "The most honest quote I've ever received. No surprises, no extra charges, just professional work from start to finish.",
    author: "Margaret Chen",
    role: "Executive, San Francisco",
  },
  {
    rating: 4,
    text: "They arrived early and had my apartment packed and moved before dinner.",
    author: "David Park",
    role: "Resident, Seattle",
  },
];

export function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Section id="testimonials" className="bg-background overflow-hidden">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-foreground mb-4">
          Real voices
        </h2>
        <p className="text-lg text-muted-foreground">
          What people say
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1 * (400 + 24) * testimonials.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl group bg-card flex flex-col gap-6 shadow-[inset_0_0_20px_oklch(from_var(--primary)_l_c_h_/_0.6)] hover:shadow-[inset_0_0_30px_oklch(from_var(--primary)_l_c_h_/_0.1)] transition-all duration-300 flex-shrink-0 w-[400px] p-8"
            >
              {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5 transition-colors",
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    )}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed flex-1">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
