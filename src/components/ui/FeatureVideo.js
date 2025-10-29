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

  // Only use autoplay hook when autoPlay is explicitly true
  useAutoplayOnView(videoRef, autoPlay ? 0.5 : false);

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
          {...(autoPlay && { autoPlay: true })}
        />
      </div>
    </section>
  );
};

export default FeatureVideo;
