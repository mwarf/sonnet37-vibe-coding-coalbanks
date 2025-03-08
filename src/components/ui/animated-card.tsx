import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  [key: string]: any;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  hover = true,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={className}
      {...props}
    >
      <Card className="h-full">{children}</Card>
    </motion.div>
  );
}

export function AnimatedCardGrid({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            delay: index * staggerDelay,
          });
        }
        return child;
      })}
    </div>
  );
}

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
