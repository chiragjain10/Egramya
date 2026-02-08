import React from "react";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FDFDFC] overflow-hidden">
      {/* Visual continuity: matching the Header's ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0ea771]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-8  w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content - Reduced scale for elegant matching */}
          <div className="lg:col-span-6 space-y-8 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-stone-200 rounded-full shadow-sm"
            >
              <span className="w-1.5 h-1.5 bg-[#0ea771] rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">
                Professional Certification
              </span>
            </motion.div>

            {/* Reduced Heading Size to match Header refinement */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-serif text-stone-900 leading-[1.2] tracking-tight"
            >
              Building the Future of <br />
              <span className="italic text-[#0ea771] font-light">Village Dairy.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-md text-stone-500 text-lg font-light leading-relaxed"
            >
              A specialized 12-week intensive for aspiring Dairy Counsellors,
              blending field-first learning with modern livestock science.
            </motion.p>

            {/* Micro-Features - High-end Minimalist style */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              {["12 Week Program", "Field Practice", "Certified"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#0ea771]/40" />
                  <span className="text-[11px] uppercase tracking-widest font-bold text-stone-400">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons - Matching Header's button height and weight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              <button className="px-10 py-4 bg-stone-900 text-white rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#0ea771] transition-all duration-500 shadow-xl shadow-stone-900/10">
                Enroll Now
              </button>
              <a href="#" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-900">
                View Guide
                <span className="w-6 h-[1px] bg-stone-300 group-hover:w-10 group-hover:bg-[#0ea771] transition-all duration-500" />
              </a>
            </motion.div>
          </div>

          {/* Right Visual - Clean Glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden bg-white p-3 border border-stone-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
              <div className="rounded-[30px] overflow-hidden relative aspect-[1.2/1]">
                <img
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
                  alt="Dairy Training"
                  className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            {/* Floating Lordicon Stat - Minimalist version */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-5 rounded-2xl shadow-lg border border-white"
            >
              <div className="flex items-center gap-4">
                 <lord-icon
                    src="https://cdn.lordicon.com/lupuorrc.json"
                    trigger="loop"
                    colors="primary:#1c1917,secondary:#0ea771"
                    style={{ width: "32px", height: "32px" }}
                  />
                <div>
                  <div className="text-xl font-serif text-stone-900 leading-none">100%</div>
                  <div className="text-[8px] uppercase tracking-widest font-bold text-stone-400 mt-1">Practical</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;