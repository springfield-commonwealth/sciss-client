"use client";

import { useEffect } from "react";

const useAutoplayOnView = (videoRef, threshold = 0.5) => {
  useEffect(() => {
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
