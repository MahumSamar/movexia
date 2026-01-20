"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Resources", href: "#resources", hasDropdown: true },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-6 z-50 transition-all duration-300 px-6",
        scrolled ? "top-4" : "top-6"
      )}
    >
      <nav 
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 py-3 transition-all duration-300 rounded-full border border-border/50",
          scrolled 
            ? "bg-background/90 backdrop-blur-md border-border shadow-lg" 
            : "bg-background border-border/20 shadow-sm"
        )} 
        aria-label="Global"
      >
        {/* Logo - Left */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 ml-2">
            <Image 
              src="/images/movexia logo.png" 
              alt="Movexia Logo" 
              width={100} 
              height={32} 
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        
        {/* Navigation - Center */}
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[14px] font-semibold leading-6 text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown size={14} className="text-foreground/40" />}
            </Link>
          ))}
        </div>
        
        {/* Action - Right */}
        <div className="flex lg:flex-1 lg:justify-end items-center gap-4">
          <div className="hidden lg:block">
            <PrimaryButton size="sm" className="px-6 uppercase text-[10px] font-bold tracking-widest">
              Get Quote
            </PrimaryButton>
          </div>
          
          <button
            type="button"
            className="flex lg:hidden -m-2.5 items-center justify-center rounded-md p-2.5 text-foreground mr-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/images/movexia logo.png" 
                  alt="Movexia Logo" 
                  width={120} 
                  height={40} 
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="space-y-6 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <PrimaryButton className="w-full h-14 uppercase text-sm font-bold tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                  Quote
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

