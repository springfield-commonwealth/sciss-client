import { useRef } from "react";
import useAutoplayOnView from "@/hooks/useAutoplayOnView";

const FeatureVideo = ({
  VideoObject,
  muted,
  loop,
  playsInline,
  playBackSpeed,
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
          playbackrate={playBackSpeed}
        />
      </div>
    </section>
  );
};

export default FeatureVideo;
