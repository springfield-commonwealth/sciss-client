import { useRef, useState } from "react";
import useAutoplayOnView from "@/hooks/useAutoplayOnView";

const FeatureVideo = ({
  VideoObject,
  autoPlay,
  muted,
  loop,
  playsInline,
  playBackSpeed,
}) => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  useAutoplayOnView(videoRef, 0.5);

  const handleVideoError = () => {
    setVideoError(true);
  };

  if (videoError) {
    return (
      <section className="section">
        <div className="container">
          <div className="video-fallback">
            <img 
              src={VideoObject.fallback} 
              alt={VideoObject.alt || "Video placeholder"}
              className="feature-video-fallback"
            />
            <div className="video-fallback-overlay">
              <p>Welcome to SCISS</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <video
          ref={videoRef}
          className="feature-video"
          src={VideoObject.src}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          poster={VideoObject.fallback}
          playbackRate={playBackSpeed}
          onError={handleVideoError}
        />
      </div>
    </section>
  );
};

export default FeatureVideo;
