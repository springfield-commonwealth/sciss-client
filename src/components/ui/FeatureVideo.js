const FeatureVideo = ({ VideoObject, autoPlay, muted, loop, playsInline,playBackSpeed }) => {
  return (
    <section className="section">
      <video
        className="feature-video"
        src={VideoObject.src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline} 
        poster={VideoObject.fallback} // optional: fallback image
        playBackRate={playBackSpeed}
      />
    </section>
  );
};

export default FeatureVideo;
