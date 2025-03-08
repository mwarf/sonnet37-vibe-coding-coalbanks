import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BookMarked } from "lucide-react";
import type { CollectionEntry } from "astro:content";

interface SeriesBannerProps {
  seriesInfo: {
    series: {
      id: string;
      title: string;
      description: string;
      posts: string[];
      featuredImage: string;
    };
    currentIndex: number;
    totalPosts: number;
    nextPost?: CollectionEntry<"blog">;
    prevPost?: CollectionEntry<"blog">;
  };
}

export default function SeriesBanner({ seriesInfo }: SeriesBannerProps) {
  const { series, currentIndex, totalPosts, nextPost, prevPost } = seriesInfo;
  const progress = ((currentIndex + 1) / totalPosts) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 bg-muted rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <BookMarked size={18} className="text-primary" />
          <span className="text-sm font-medium">Part {currentIndex + 1} of {totalPosts}</span>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">
          <a 
            href={`/blog/series/${series.id}`}
            className="hover:text-primary transition-colors"
          >
            {series.title}
          </a>
        </h2>
        
        <p className="text-muted-foreground mb-4">{series.description}</p>
        
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-muted-foreground/20 rounded-full mb-4">
          <div 
            className="h-full bg-primary rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center">
          {prevPost ? (
            <a 
              href={`/blog/${prevPost.slug}`}
              className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
            >
              <ChevronLeft size={16} />
              <span>Previous: {prevPost.data.title}</span>
            </a>
          ) : (
            <div></div>
          )}
          
          {nextPost ? (
            <a 
              href={`/blog/${nextPost.slug}`}
              className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
            >
              <span>Next: {nextPost.data.title}</span>
              <ChevronRight size={16} />
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
