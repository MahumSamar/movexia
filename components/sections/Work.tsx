"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Downtown office relocation",
    description: "We got a full law firm with zero downtime for their practice.",
    tags: ["Commercial", "Same-day", "Precision"],
    image: "/images/case studies/Downtown office relocation.png",
  },
  {
    title: "Cross-country family move",
    description: "Transported a family and their belongings over two thousand miles.",
    tags: ["Residential", "Long-distance", "Care"],
    image: "/images/case studies/Cross-country family move.png",
  },
  {
    title: "Storage and transition",
    description: "Provided secure storage while clients waited for their new home to be ready.",
    tags: ["Storage", "Flexible", "Reliable"],
    image: "/images/case studies/Storage and transition.png",
  },
];

export function Work() {
  return (
    <Section id="work" className="bg-background">
      <div className="text-center mb-16 md:mb-24">
        <Badge className="mb-4">Work</Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-foreground mb-6">
          Moves we've completed
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every job tells a story of careful planning and flawless execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl overflow-hidden shadow-[inset_0_0_20px_oklch(from_var(--primary)_l_c_h_/_0.6)] hover:shadow-[inset_0_0_30px_oklch(from_var(--primary)_l_c_h_/_0.1)] transition-all duration-300 relative aspect-[3/4] min-h-[500px]"
          >
            {/* Full Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Content at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4 text-white">
              <h3 className="text-2xl font-normal tracking-tighter">
                {project.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href="#"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors gap-2 group/link mt-2"
              >
                View project
                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
