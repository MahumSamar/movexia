"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  containerClassName?: string;
  animate?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, containerClassName, animate = true, ...props }, ref) => {
    const content = (
      <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    );

    if (!animate) {
      return (
        <section
          ref={ref as React.RefObject<any>}
          className={cn("py-8 md:py-12 overflow-hidden", className)}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {content}
        </section>
      );
    }

    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn("py-8 md:py-12 overflow-hidden", className)}
        {...props}
      >
        {content}
      </motion.section>
    );
  }
);

Section.displayName = "Section";

export { Section };

