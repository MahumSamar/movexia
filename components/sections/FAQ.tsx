"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much does it cost?",
    answer: "We provide free quotes based on your specific move. Our pricing is transparent with no hidden fees. You'll know the exact cost before we load the first box.",
  },
  {
    question: "What if something breaks?",
    answer: "Our comprehensive insurance covers your belongings from pickup to delivery. We handle your items like they're our own. In the rare event of damage, we make it right.",
  },
  {
    question: "Can you move on short notice?",
    answer: "We offer same-day and next-day service for local moves whenever possible. Call us to check availability for your dates. We work hard to accommodate urgent timelines.",
  },
  {
    question: "Do you pack everything?",
    answer: "Professional packing is available for any part of your move. We can pack everything or just the fragile items. You decide what works best for your situation.",
  },
  {
    question: "How far do you travel?",
    answer: "We handle local moves within the region and long-distance moves across state lines. Our team has experience moving people everywhere. Tell us where you're going and we'll make it happen.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <Section id="faq" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex flex-col gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-foreground mb-6">
              Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              We answer what matters most to you before you move.
            </p>
          </div>

          <PrimaryButton className="w-fit px-10 h-12">
            Contact
          </PrimaryButton>
        </motion.div>

        {/* Right FAQ List */}
        <div className="lg:col-span-8 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 overflow-hidden shadow-[inset_0_0_20px_oklch(from_var(--primary)_l_c_h_/_0.03)] hover:shadow-[inset_0_0_30px_oklch(from_var(--primary)_l_c_h_/_0.08)] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 group"
              >
                <h3 className="text-xl font-normal tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
