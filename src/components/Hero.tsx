import React, { useRef, memo, lazy, Suspense } from 'react';
import { motion } from "framer-motion";

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const spline = useRef<any>(null);

  function onLoad(splineApp: any) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  function triggerAnimation() {
    if (spline.current) {
      spline.current.emitEvent('mouseHover', 'Cube');
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden w-full px-0"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Spline
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            onLoad={onLoad}
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Hallifax Energy and Mining
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80">
          Mining Supplies, Fuel Services, and Expert Advisory for the Energy Sector.
        </p>
        <button
          type="button"
          onClick={triggerAnimation}
          className="mt-8 px-6 py-3 bg-yellow-600 rounded-full text-white hover:bg-yellow-700 transition"
        >
          Discover Now
        </button>
      </motion.div>
    </section>
  );
};

export default memo(Hero);

