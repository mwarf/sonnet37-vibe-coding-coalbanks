import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, FolderOpen, BookMarked } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: {
    slug: string;
    data: {
      title: string;
      description: string;
      publishDate: Date;
      author: string;
      featuredImage: string;
      category: string;
      series?: string;
      readingTime?: number;
    };
  };
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  const { slug, data } = post;
  const { title, description, publishDate, author, featuredImage, category, series, readingTime } = data;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-6" : ""
      }`}
    >
      {/* Featured Image */}
      <a href={`/blog/${slug}`} className={`block overflow-hidden ${featured ? "lg:h-full" : "aspect-video"}`}>
        <img
          src={featuredImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      {/* Content */}
      <div className="p-6">
        {/* Category & Series */}
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
          <a
            href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center gap-1 text-primary"
          >
            <FolderOpen size={14} />
            <span>{category}</span>
          </a>

          {series && (
            <>
              <span className="text-muted-foreground">•</span>
              <a
                href={`/blog/series/${series.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary"
              >
                <BookMarked size={14} />
                <span>Series</span>
              </a>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className={`mb-2 font-bold tracking-tight ${featured ? "text-2xl" : "text-xl"}`}>
          <a href={`/blog/${slug}`} className="hover:text-primary">
            {title}
          </a>
        </h3>

        {/* Description */}
        <p className="mb-4 text-muted-foreground line-clamp-2">{description}</p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <time dateTime={publishDate.toISOString()}>{formatDate(publishDate)}</time>
          </div>

          {readingTime && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readingTime} min read</span>
            </div>
          )}

          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
