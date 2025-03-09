import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import VideoModal from './VideoModal';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, thumbnailUrl, title }: VideoPlayerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <motion.div 
        className="relative aspect-video w-full rounded-lg overflow-hidden bg-black cursor-pointer"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        onClick={() => setIsModalOpen(true)}
      >
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
            <Play className="h-8 w-8" />
          </div>
        </div>
        
        {!videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-center p-4">
            <div>
              <p className="font-medium mb-2">Placeholder Image</p>
              <p className="text-sm opacity-80">Replace with actual project video/image</p>
            </div>
          </div>
        )}
      </motion.div>
      
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
        title={title}
      />
    </>
  );
}
