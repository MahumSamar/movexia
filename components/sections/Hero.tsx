"use client";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Section - Image Container */}
      <div className="relative w-full h-[70vh] bg-muted/30">
        <Image
          src="/images/hero img.png"
          alt="Professional Moving Services"
          fill
          className="object-cover"
          priority
        />
        
        {/* Stats Overlay - Bottom Right of Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 right-6 md:right-12 lg:right-24 z-10 w-[calc(100%-3rem)] md:w-auto"
        >
          {/* Rectangular Glassmorphism Stats Card */}
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl md:min-w-[540px]">
            <div className="grid grid-cols-3 gap-6 md:gap-10 divide-x divide-white/20">
              {/* Stat 1 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold text-foreground mb-1 tracking-tight">5k+</span>
                <span className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest">Moves Made</span>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pl-6 md:pl-10">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">4.9</span>
                  <Star className="text-primary w-4 h-4 md:w-5 md:h-5 fill-current" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest">Client Rating</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pl-6 md:pl-10">
                <span className="text-2xl md:text-3xl font-bold text-foreground mb-1 tracking-tight">15+</span>
                <span className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest">Years Exp.</span>
              </div>
            </div>
          </div>
        </motion.div>



      </div>

      {/* Bottom Section - Content */}
      <div className="relative w-full bg-background flex items-center px-6 pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Title - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge icon={Star} className="mb-6">
                Top Rated Service
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tighter text-foreground">
                We move you <br />
                <span className="text-primary">without the worry</span>
              </h1>
            </motion.div>

            {/* Description & Buttons - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8 w-full max-w-xl"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Movexia handles the heavy lifting so you don't have to. 
                Professional movers, honest prices, and your belongings treated like our own.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <PrimaryButton className="px-10 h-14 uppercase text-xs font-bold tracking-[0.2em] min-w-[160px]">
                  Move
                </PrimaryButton>
                <SecondaryButton className="px-10 h-14 uppercase text-xs font-bold tracking-[0.2em] min-w-[160px]">
                  Learn
                </SecondaryButton>
              </div>

              {/* Trust markers */}
              <div className="flex items-center gap-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">Fast Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">Local Experts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

