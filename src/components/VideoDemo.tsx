"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";

interface VideoDemoProps {
  title: string;
  description: string;
  thumbnailUrl?: string;
  videoUrl: string;
  className?: string;
}

export function VideoDemo({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  className = ""
}: VideoDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {/* Video Thumbnail */}
      <motion.div
        className={`relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/20 to-primary/5 cursor-pointer group ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={handlePlay}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }} />
        </div>

        {/* Thumbnail image if provided */}
        {thumbnailUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-8 w-8 text-white ml-1" fill="white" />
          </motion.button>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>

        {/* Duration badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded">
            2:30
          </span>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Mute button */}
              <button
                className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              {/* Video element */}
              <video
                src={videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                controls
                loop
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Preset video demos for common use cases
export function PlatformDemo() {
  return (
    <VideoDemo
      title="Enterprise Collaboration Platform"
      description="See how our Teams-like platforms enhance productivity"
      videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      thumbnailUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      className="max-w-md"
    />
  );
}

export function AIDemo() {
  return (
    <VideoDemo
      title="AI Automation Solutions"
      description="Watch our AI systems streamline complex business processes"
      videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      thumbnailUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      className="max-w-md"
    />
  );
}

export function DataDemo() {
  return (
    <VideoDemo
      title="Advanced Data Technologies"
      description="Explore our synthetic data generation and analytics platforms"
      videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      thumbnailUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      className="max-w-md"
    />
  );
}
