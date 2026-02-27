import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Wind, 
  Sprout, 
  Compass, 
  Instagram, 
  Twitter, 
  Linkedin 
} from "lucide-react";

const ConstructionPage = () => {
  // Animation Variants
  const containerStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#062c1b] flex flex-col items-center justify-center overflow-hidden selection:bg-rose-500/30">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/30 blur-[120px] rounded-full" />

      {/* 2. TOP NAVIGATION (Minimal) */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-rose-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">A</div>
          <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">ASRE Foundation</span>
        </div>
        <button 
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>
      </nav>

      {/* 3. MAIN CONTENT */}
      <motion.main 
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6"
      >
        <motion.div variants={itemFade} className="flex justify-center mb-8">
           <div className="p-4 rounded-full bg-white/5 border border-white/10 text-rose-500 animate-pulse">
             <Sprout size={32} />
           </div>
        </motion.div>

        <motion.h1 variants={itemFade} className="text-[12vw] lg:text-[8rem] font-serif text-white leading-none mb-4 opacity-90">
          Tilling <span className="text-rose-600 italic">Soon</span>
        </motion.h1>

        <motion.div variants={itemFade} className="max-w-lg mx-auto">
          <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            This digital field is currently being prepared for harvest. We are sowing seeds of innovation to bring you a better rural experience.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemFade} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Enter email for updates" 
              className="bg-white/5 border border-white/10 rounded-full px-8 py-4 w-72 text-white text-sm focus:outline-none focus:border-rose-500/50 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-rose-700 hover:bg-rose-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
              Notify Me
            </button>
          </div>
          
          <div className="h-[1px] w-12 bg-stone-700 hidden md:block" />
          
          <button className="flex items-center gap-3 text-white/50 hover:text-white transition-all text-xs uppercase tracking-widest font-bold">
            <Compass size={18} />
            Explore Other Initiatives
          </button>
        </motion.div>
      </motion.main>

      {/* 4. FOOTER / SOCIALS */}
      <footer className="absolute bottom-0 w-full p-12 flex flex-col md:flex-row justify-between items-center gap-8 z-20">
        <div className="flex gap-8">
          {[
            { Icon: Linkedin, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Instagram, href: "#" }
          ].map((social, i) => (
            <a key={i} href={social.href} className="text-stone-500 hover:text-rose-500 transition-colors">
              <social.Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold mb-2">Estimated Arrival</p>
          <div className="flex gap-4 text-white font-serif text-2xl">
            <div className="flex flex-col items-center">
              <span>Q2</span>
              <span className="text-[8px] uppercase tracking-tighter text-stone-500">Quarter</span>
            </div>
            <span className="text-stone-700">/</span>
            <div className="flex flex-col items-center">
              <span>2024</span>
              <span className="text-[8px] uppercase tracking-tighter text-stone-500">Year</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Decorative Moving Element */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 text-white/5 pointer-events-none"
      >
        <Wind size={200} />
      </motion.div>

    </div>
  );
};

export default ConstructionPage;