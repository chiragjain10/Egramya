import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5s allows the premium "reveal" to complete fully
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: -100, 
            opacity: 0, 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fdfcfb]"
        >
          {/* Subtle Grainy Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative flex flex-col items-center">
            
            {/* --- LOGO SECTION --- */}
            <motion.div 
              className="relative w-28 h-28 mb-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Soft Ambient Glow */}
              <motion.div 
                className="absolute inset-0 bg-rose-200 blur-[40px] rounded-full"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* The Logo */}
              <motion.img 
                src="img/logo.png" 
                alt="Gramya Logo"
                className="relative z-10 w-full h-full object-contain"
                initial={{ filter: "blur(10px)", brightness: 0.8 }}
                animate={{ filter: "blur(0px)", brightness: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />

              {/* Elegant Ring Border */}
              <svg className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] rotate-[-90deg]">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  fill="none"
                  stroke="#be123c"
                  strokeWidth="1"
                  strokeDasharray="1, 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* --- TEXT SECTION --- */}
            <div className="text-center">
              {/* Brand Name with Letter Spacing Animation */}
              <motion.h1 
                initial={{ letterSpacing: "0.2em", opacity: 0, y: 10 }}
                animate={{ letterSpacing: "0.5em", opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-light text-4xl text-[#4a0404] uppercase"
              >
                Gramya
              </motion.h1>

              {/* Animated Accent Line */}
              <div className="relative h-[1px] w-48 mx-auto my-4 bg-gray-200 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#be123c] to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Tagline Reveal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex items-center justify-center space-x-3"
              >
                <span className="text-[10px] font-medium tracking-[0.4em] text-[#be123c]/60 uppercase">
                  VDC Program
                </span>
                <span className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 h-1 rounded-full bg-[#be123c]"
                    />
                  ))}
                </span>
              </motion.div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;