"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, useVelocity, useTransform } from 'framer-motion';

const MouseFollower = () => {
  const [trail, setTrail] = useState([]);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Velocity tracking for the "Liquid Stretch" effect
  const xVelocity = useVelocity(mouseX);
  const yVelocity = useVelocity(mouseY);
  
  // High-end deforming physics: stretches on fast movement
  const stretchX = useTransform(xVelocity, [-2000, 0, 2000], [1.4, 1, 1.4]);
  const stretchY = useTransform(yVelocity, [-2000, 0, 2000], [0.6, 1, 0.6]);

  // Elite Spring Physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Cyber-Smoke particle logic
      const newParticle = { id: Math.random(), x: clientX, y: clientY };
      setTrail((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      
      {/* 1. CYBER SMOKE TRAIL */}
      <AnimatePresence>
        {trail.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            className="absolute rounded-full bg-blue-500/30 blur-[4px] mix-blend-screen"
            style={{ left: p.x, top: p.y, width: 6 + i, height: 6 + i, x: "-50%", y: "-50%" }}
          />
        ))}
      </AnimatePresence>

      {/* 2. THE STRETCHING LENS (Fixed Size) */}
      <motion.div
        style={{ 
          x: cursorX, y: cursorY, 
          translateX: "-50%", translateY: "-50%",
          scaleX: stretchX, scaleY: stretchY 
        }}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/40 backdrop-blur-[5px] mix-blend-difference"
      >
        {/* CENTER DOT */}
        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
      </motion.div>

      {/* 3. OUTER LIQUID GLOW */}
      <motion.div
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-[350px] h-[350px] bg-blue-600/10 blur-[100px] z-[-1] rounded-full"
      />
    </div>
  );
};

export default MouseFollower;