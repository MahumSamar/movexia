"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const navigation = {
  services: [
    { name: "Local moves", href: "#" },
    { name: "Long distance", href: "#" },
    { name: "Commercial", href: "#" },
    { name: "Storage", href: "#" },
    { name: "Packing", href: "#" },
  ],
  company: [
    { name: "About us", href: "#" },
    { name: "Our team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "X", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground m-4 md:m-8 rounded-4xl overflow-hidden relative group shadow-[inset_4px_4px_22.8px_10px_rgba(253,242,214,0.28)]">
      {/* Background Blobs - Scaled for footer */}
      <div className="absolute -left-32 -top-32 w-[32rem] h-[32rem] bg-secondary rounded-full blur-[6rem] group-hover:scale-110 transition-transform duration-1000 pointer-events-none opacity-30" />
      <div className="absolute -right-32 -bottom-32 w-[32rem] h-[32rem] bg-secondary rounded-full blur-[6rem] group-hover:scale-110 transition-transform duration-1000 pointer-events-none opacity-30" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Newsletter */}
          <div className="space-y-8">
            <Image
              src="/images/movexia logo.png"
              alt="Movexia"
              width={150}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-6 text-primary-foreground/80 max-w-sm">
              Get moving tips and updates delivered straight to you.
            </p>
            <div className="flex gap-x-4 max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                readOnly
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-2 text-primary-foreground shadow-sm ring-1 ring-inset ring-primary-foreground/10 placeholder:text-primary-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary-foreground sm:text-sm sm:leading-6"
                placeholder="Your email"
              />
              <PrimaryButton className="flex-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-lg h-auto py-2.5">
                Subscribe
              </PrimaryButton>
            </div>
            <p className="text-xs leading-5 text-primary-foreground/60 max-w-sm">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Movexia.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:flex xl:justify-end xl:gap-20">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Follow us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="group flex items-center gap-3 text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-primary-foreground/60">
            &copy; 2026 Movexia Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs leading-5 text-primary-foreground/60 hover:text-primary-foreground">
              Privacy policy
            </Link>
            <Link href="#" className="text-xs leading-5 text-primary-foreground/60 hover:text-primary-foreground">
              Terms of service
            </Link>
            <Link href="#" className="text-xs leading-5 text-primary-foreground/60 hover:text-primary-foreground">
              Cookies settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
