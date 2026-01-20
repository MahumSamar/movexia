"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    moveType: "",
    movingSize: "",
    message: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Section id="contact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left - Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <Badge className="mb-4">Connect</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-foreground mb-6">
            Get in touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Reach out to Movexia and let's talk about your move.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Move Type Dropdown */}
            <div>
              <label htmlFor="moveType" className="block text-sm font-medium text-foreground mb-2">
                What's your move
              </label>
              <select
                id="moveType"
                value={formData.moveType}
                onChange={(e) => setFormData({ ...formData, moveType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="">Select one...</option>
                <option value="local">Local move</option>
                <option value="long-distance">Long-distance move</option>
                <option value="commercial">Commercial move</option>
                <option value="storage">Storage only</option>
              </select>
            </div>

            {/* Moving Size Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Who are you moving
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "myself", label: "Just myself" },
                  { value: "small-family", label: "Small family" },
                  { value: "large-household", label: "Large household" },
                  { value: "business", label: "Business office" },
                  { value: "multiple", label: "Multiple locations" },
                  { value: "other", label: "Other" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="movingSize"
                      value={option.value}
                      checked={formData.movingSize === option.value}
                      onChange={(e) => setFormData({ ...formData, movingSize: e.target.value })}
                      className="w-4 h-4 text-primary border-border focus:ring-2 focus:ring-primary/20"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your move..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                I agree to the terms
              </span>
            </label>

            {/* Submit Button */}
            <PrimaryButton type="submit" className="px-10 h-12">
              Send
            </PrimaryButton>
          </form>
        </motion.div>

        {/* Right - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-xl font-normal tracking-tighter text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground mb-2">Reach us anytime</p>
              <a
                href="mailto:hello@movexia.com"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                hello@movexia.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-xl font-normal tracking-tighter text-foreground mb-2">
                Phone
              </h3>
              <p className="text-muted-foreground mb-2">Call for immediate assistance</p>
              <a
                href="tel:+18005550147"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                +1 (800) 555-0147
              </a>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-xl font-normal tracking-tighter text-foreground mb-2">
                Office
              </h3>
              <p className="text-muted-foreground mb-4">Visit us at our main headquarters location</p>
              <a
                href="#"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors gap-2 group"
              >
                Get directions
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-[inset_0_0_40px_oklch(from_var(--primary)_l_c_h_/_0.08)] h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
