import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import { Instagram, Facebook, Linkedin, Video } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Documentary", href: "/services#documentary" },
      { label: "Commercial", href: "/services#commercial" },
      { label: "Brand Stories", href: "/services#brand-stories" },
      { label: "Event Coverage", href: "/services#event-coverage" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/coalbanks", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/coalbanks", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com/company/coalbanks", icon: Linkedin },
  { label: "Vimeo", href: "https://vimeo.com/coalbanks", icon: Video },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="container-wide py-12 md:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <img 
            src="/images/coalbanks-logo.svg" 
            alt="Coalbanks Creative" 
            className="h-10 w-auto"
          />
          <p className="text-muted-foreground max-w-xs">
            Documentary-style video production capturing authentic stories in Southern Alberta and beyond.
          </p>
          <div className="flex space-x-4 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {footerSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="font-semibold text-foreground">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-12 pt-8 border-t">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-muted-foreground max-w-md">
              Subscribe to our newsletter for updates on our latest projects and insights into our creative process.
            </p>
          </div>
          <div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t text-center text-muted-foreground text-sm">
        <p>
          © {currentYear} Coalbanks Creative. All rights reserved. Proudly based in Lethbridge, Alberta.
        </p>
      </div>
    </motion.footer>
  );
}
