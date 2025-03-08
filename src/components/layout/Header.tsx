import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInDown, fadeIn } from "@/lib/animations";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className={cn(
        "container-wide py-4 flex items-center justify-between transition-all duration-200",
        scrolled ? "py-2" : "py-4"
      )}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <span className="sr-only">Coalbanks Creative</span>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-10 w-auto"
        >
          <img 
            src="/images/coalbanks-logo.svg" 
            alt="Coalbanks" 
            className="h-10 w-auto"
          />
        </motion.div>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              item.isActive ? "text-primary" : "text-foreground/80"
            )}
          >
            {item.label}
          </a>
        ))}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium"
        >
          Get in Touch
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "block h-0.5 w-6 bg-foreground transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-45 translate-y-2" : ""
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 bg-foreground transition-opacity duration-300 ease-in-out",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 bg-foreground transition-transform duration-300 ease-in-out",
            isOpen ? "-rotate-45 -translate-y-2" : ""
          )}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-background border-b z-50 md:hidden"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors hover:text-primary",
                    item.isActive ? "text-primary" : "text-foreground/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                href="/contact"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
