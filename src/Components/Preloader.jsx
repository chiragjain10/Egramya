import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Slightly longer to let the premium animation breathe

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fffafa]"
        >
          <div className="relative flex flex-col items-center justify-center">
            
            {/* --- CENTRAL LOGO ANIMATION --- */}
            <div className="relative w-32 h-32 mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#be123c" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                </defs>

                {/* Outer Rotating Ring (Thin) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#fb7185"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                />
                
                {/* Active Spinner Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#roseGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, rotate: -90 }}
                  animate={{ 
                    pathLength: 1, 
                    rotate: 270,
                    transition: { duration: 2, ease: "easeInOut" }
                  }}
                />

                {/* Central Milk/Teardrop Shape */}
                <motion.path
                  d="M50 20 C50 20 25 50 25 65 C25 80 36 90 50 90 C64 90 75 80 75 65 C75 50 50 20 50 20 Z"
                  fill="#881337"
                  stroke="none"
                  initial={{ scale: 0, opacity: 0, y: 10 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 } 
                  }}
                />

                {/* Inner Highlight (Glossy effect) */}
                <motion.path
                  d="M40 55 Q 40 45 48 38"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    transition: { delay: 0.8, duration: 0.5 } 
                  }}
                />
              </svg>

              {/* Pulsing Glow behind */}
              <motion.div 
                className="absolute inset-0 bg-rose-500 blur-2xl rounded-full -z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 0.2, 0], 
                  scale: [0.8, 1.2, 1.2],
                  transition: { duration: 2, repeat: Infinity } 
                }}
              />
            </div>

            {/* --- TEXT REVEAL --- */}
            <div className="text-center space-y-3 overflow-hidden">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.8, ease: "backOut" }
                }}
                className="font-bold text-3xl tracking-tight text-[#881337]"
              >
                GRAMYA
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ 
                  width: "100%",
                  transition: { delay: 0.7, duration: 0.8 } 
                }}
                className="h-[1px] bg-rose-200 mx-auto"
              />

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 1, duration: 0.8 }
                }}
                className="text-[10px] font-black tracking-[0.3em] text-[#be123c] uppercase"
              >
                VDC Program Loading
              </motion.p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;