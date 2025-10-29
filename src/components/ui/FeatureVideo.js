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

  // Use autoplay hook only when autoPlay is enabled
  // Hook is always called but internally checks autoPlay
  useAutoplayOnView(videoRef, autoPlay ? 0.5 : null);

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
