import { useEffect } from "react";

const useAutoplayOnView = (videoRef, threshold = 0.5) => {
  useEffect(() => {
    // Don't set up autoplay if threshold is null/false/undefined
    if (threshold === null || threshold === false) return;

    const video = videoRef.current;
    if (!video) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [videoRef, threshold]);
};

export default useAutoplayOnView;
