import useAutoplayOnView from "@/hooks/useAutoplayOnView";
import { useRef } from "react";

const FeatureVideo = ({
  VideoObject,
  muted,
  loop,
  playsInline,
  playBackSpeed,
  autoPlay = false,
}) => {
  const videoRef = useRef(null);

  // Always call the hook, but it will only autoplay if video is in view
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
          playbackRate={playBackSpeed}
          controls
          autoPlay={autoPlay}
        />
      </div>
    </section>
  );
};

export default FeatureVideo;
