"use client";

import useAutoplayOnView from "@/hooks/useAutoplayOnView";
import { useRef } from "react";

interface VideoObject {
  src: string;
  alt: string;
  fallback: string;
}

interface FeatureVideoProps {
  VideoObject: VideoObject;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  playBackSpeed?: number;
}

const FeatureVideo: React.FC<FeatureVideoProps> = ({
  VideoObject,
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  playBackSpeed = 1,
}) => {
  const videoRef = useRef(null);
  useAutoplayOnView(videoRef, 0.5);

  return (
    <section className="section">
      <div className="container">
        <video
          ref={videoRef}
          className="feature-video"
          src={VideoObject.src}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          poster={VideoObject.fallback}
        />
      </div>
    </section>
  );
};

export default FeatureVideo;
