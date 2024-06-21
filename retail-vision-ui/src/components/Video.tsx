"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl cursor-pointer">
        <video className="w-full h-full aspect-video" controls>
          <source src="/demo-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Container>
  );
}
