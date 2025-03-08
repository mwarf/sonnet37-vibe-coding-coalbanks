import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  // Filter out headings that are too deep (h4, h5, h6)
  const filteredHeadings = headings.filter((heading) => heading.depth <= 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    // Observe all section headings
    filteredHeadings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup observer
      filteredHeadings.forEach((heading) => {
        const element = document.getElementById(heading.slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [filteredHeadings]);

  if (filteredHeadings.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/50 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <nav>
        <ul className="space-y-2">
          {filteredHeadings.map((heading) => (
            <li
              key={heading.slug}
              className={`${
                heading.depth === 2 ? "ml-0" : "ml-4"
              }`}
            >
              <a
                href={`#${heading.slug}`}
                className={`block py-1 border-l-2 pl-3 text-sm hover:text-primary transition-colors ${
                  activeId === heading.slug
                    ? "border-primary text-primary font-medium"
                    : "border-transparent text-muted-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${heading.slug}`)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
