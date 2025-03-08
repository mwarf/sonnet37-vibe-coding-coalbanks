import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';

interface InteractiveDemoProps {
  title: string;
  description?: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  hasReset?: boolean;
  onReset?: () => void;
}

export default function InteractiveDemo({
  title,
  description,
  children,
  defaultExpanded = false,
  hasReset = false,
  onReset
}: InteractiveDemoProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-8 rounded-lg border bg-card shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-muted/50 px-4 py-3 border-b">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-primary" />
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {hasReset && (
            <button
              onClick={handleReset}
              className="p-1.5 rounded-md text-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground transition-colors"
              aria-label="Reset demo"
            >
              <RefreshCw size={16} />
            </button>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-md text-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground transition-colors"
            aria-label={expanded ? "Minimize" : "Expand"}
          >
            {expanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Description (if provided) */}
      {description && (
        <div className="px-4 py-2 bg-muted/20 border-b text-sm text-muted-foreground">
          {description}
        </div>
      )}

      {/* Content */}
      <motion.div
        animate={{ height: expanded ? 'auto' : '300px' }}
        className={`relative ${!expanded && 'overflow-hidden'}`}
      >
        <div className="p-4">
          {children}
        </div>
        
        {/* Gradient overlay when collapsed */}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </motion.div>
    </motion.div>
  );
}
