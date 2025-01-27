import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Lenis from '@studio-freight/lenis';
import CursorFollower from "./container/components/CustomCursor";
import Router from "./routes";

const App = () => {

  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.5, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
      // infinite: true,
      mouseMultiplier: 1.5
    });
    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  return (
    <>
      <CursorFollower />
      <Router />
    </>
  );
};

export default App;
