"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { useParams } from "next/navigation";
import { Play, Share2, Download, Info } from "lucide-react";
import { useState } from "react";

export default function VideoPage() {
  const params = useParams();
  const videoId = params.id as string;
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample project data - in a real app, this would come from an API or database
  const videoDatabase = {
    "wedding-portal-demo": {
      title: "WeddingConnect Pro Demo",
      client: "Wedding Industry Solutions",
      description: "A comprehensive demonstration of our Teams-like collaboration platform designed specifically for wedding planning, showcasing real-time communication and vendor management features.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      videoUrl: "https://www.youtube.com/embed/QH2-TGUlwu4",
      stats: {
        users: "150+",
        efficiency: "85%",
        satisfaction: "92%"
      },
      tags: ["Collaboration Platform", "Wedding Planning", "Teams-like"]
    },
    "tax-automation-demo": {
      title: "TaxFlow AI Platform Demo",
      client: "Enterprise Tax Solutions",
      description: "Demonstration of our intelligent tax processing platform that combines AI automation with team collaboration features for streamlined tax preparation workflows.",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stats: {
        firms: "60+",
        accuracy: "99.8%",
        efficiency: "75%"
      },
      tags: ["AI Automation", "Tax Processing", "Enterprise Software"]
    },
    "lidar-data-platform": {
      title: "LidarSynth Engine Overview",
      client: "Autonomous Vehicle Research",
      description: "Overview of our advanced synthetic data generation platform that creates high-quality LIDAR datasets for machine learning training and autonomous vehicle development.",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stats: {
        companies: "25+",
        accuracy: "95%",
        speed: "10x"
      },
      tags: ["Synthetic Data", "LIDAR", "Machine Learning"]
    }
  };

  // Default project data if ID doesn't match
  const defaultVideo = {
    title: "Enterprise Software Solution",
    client: "Unizel Client",
    description: "Enterprise-grade software solution that enhances collaboration, automates processes, and delivers measurable business value.",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: {
      users: "1000+",
      uptime: "99.9%",
      efficiency: "40%+"
    },
    tags: ["Enterprise Software", "Collaboration Platform", "Custom Development"]
  };

  // Get video data based on ID or use default
  const video = videoDatabase[videoId as keyof typeof videoDatabase] || defaultVideo;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <main>
      {/* Video Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Video Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-border/50 shadow-xl">
              {isPlaying ? (
                <iframe
                  src={video.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button
                      onClick={handlePlayClick}
                      className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform hover:scale-110"
                    >
                      <Play className="h-10 w-10 text-white" fill="white" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{video.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">Client: {video.client}</p>
                <p className="text-lg mb-6">{video.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {video.tags.map((tag, index) => (
                    <span key={index} className="badge">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4 mb-8">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Specs
                  </Button>
                  <Button className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Technical Details
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-64 bg-card rounded-xl p-6 border border-border/50 h-fit">
                <h3 className="text-lg font-bold mb-4">Project Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{Object.keys(video.stats)[0].charAt(0).toUpperCase() + Object.keys(video.stats)[0].slice(1)}</p>
                    <p className="text-2xl font-bold">{Object.values(video.stats)[0]}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{Object.keys(video.stats)[1].charAt(0).toUpperCase() + Object.keys(video.stats)[1].slice(1)}</p>
                    <p className="text-2xl font-bold">{Object.values(video.stats)[1]}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{Object.keys(video.stats)[2].charAt(0).toUpperCase() + Object.keys(video.stats)[2].slice(1)}</p>
                    <p className="text-2xl font-bold">{Object.values(video.stats)[2]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Videos Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">More Projects Like This</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(videoDatabase)
              .filter(([id]) => id !== videoId)
              .slice(0, 3)
              .map(([id, videoData]) => (
                <Link key={id} href={`/video/${id}`} className="group">
                  <div className="bg-card rounded-xl overflow-hidden border border-border/50 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={videoData.thumbnail}
                        alt={videoData.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{videoData.title}</h3>
                      <p className="text-sm text-muted-foreground">{videoData.client}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
