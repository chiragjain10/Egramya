import React from "react";
import { motion } from "framer-motion";
import { 
  Sprout, 
  Heart, 
  Users, 
  TrendingUp, 
  ShoppingBag, 
  GraduationCap, 
  ShieldCheck, 
  Leaf,
  ArrowRight
} from "lucide-react";

const AnnapurnaPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-[#be123c]/20">
      
      {/* 1. HERO SECTION: THE METAPHOR */}
      <header className="relative h-[80vh] flex items-center overflow-hidden bg-[#0a2e1f]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Indian Rural Woman in Farm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f] via-transparent to-[#0a2e1f]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-rose-500" />
              <span className="text-rose-400 font-bold tracking-[0.4em] uppercase text-xs">
                Empowering Agro Women
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl lg:text-8xl font-serif text-white mb-6">
              The <span className="text-rose-500 italic">Annapurna</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-stone-300 font-light leading-relaxed mb-8 border-l-2 border-rose-900 pl-6">
              "Just like Goddess Annapurna, rural women nurture, sustain, and nourish the nation. 
              They are the silent architects of India's food security."
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold">
              <span>Samriddh Gram</span>
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Samriddh Bharat</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-[#be123c]/10 blur-[120px] rounded-full" />
      </header>

      {/* 2. THE BACKBONE: AGRICULTURAL ROLES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10">
              <img src="https://images.unsplash.com/photo-1590766948561-5f07ff1c5563?auto=format&fit=crop&q=80" alt="Sowing Seeds" />
            </div>
            {/* Decorative Card */}
            <div className="absolute -right-8 -bottom-8 bg-rose-600 p-8 rounded-3xl text-white shadow-xl z-20 hidden md:block max-w-[240px]">
              <Leaf className="mb-4" />
              <p className="text-lg font-medium leading-tight italic">"The foundation of a bountiful harvest begins in her hands."</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl font-bold text-[#1a3a2a] leading-tight">The Guardians of <br/><span className="text-[#be123c]">Food Security</span></h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              For centuries, Indian rural women have been the backbone of agriculture. Their dedication nourishes families and the entire nation, moving through every stage of the agricultural lifecycle.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-[#be123c]">
                  <Sprout size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Foundational Work</h4>
                  <p className="text-sm text-gray-500">Selecting seeds, preparing soil, and meticulous sowing.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-[#be123c]">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Nurturing Growth</h4>
                  <p className="text-sm text-gray-500">Watering, weeding, and applying natural fertilizers with care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASRE'S INTERVENTION: THE MISSION */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-rose-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Commitment</h2>
            <h3 className="text-4xl font-bold text-white leading-tight">Empowering Annapurnas Through ASRE Initiatives</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
              <GraduationCap className="text-rose-400 mb-6" size={40} />
              <h4 className="text-xl font-bold text-white mb-4">Education & Tech</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Providing access to modern resources and technology to improve agricultural productivity and economic security.</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
              <TrendingUp className="text-rose-400 mb-6" size={40} />
              <h4 className="text-xl font-bold text-white mb-4">Income Generation</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Tailored activities like crop diversification, livestock management, and agroforestry to boost rural household earnings.</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
              <ShoppingBag className="text-rose-400 mb-6" size={40} />
              <h4 className="text-xl font-bold text-white mb-4">Market Access</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Development of retail outlets that provide high-quality products and direct services to rural women entrepreneurs.</p>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/5 pointer-events-none select-none">
          ASRE
        </div>
      </section>

      {/* 4. CHALLENGES & SOLUTIONS: THE GLASS CARD SECTION */}
      <section className="py-24 bg-[#fffafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-xl border border-stone-100 overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-[#be123c] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} />
                Addressing Realities
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Recognizing the Challenges</h3>
              <p className="text-gray-600 leading-relaxed">
                While the ‘Annapurna’ comparison highlights her importance, ASRE recognizes the systemic barriers: 
                <span className="text-[#be123c] font-semibold italic"> limited land ownership, lack of technology, and unequal wages.</span>
              </p>
              <ul className="space-y-4">
                {['Sustainable Community Development', 'Tailored Resource Access', 'Village Cluster Transformation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#be123c]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a3a2a] p-12 lg:p-20 flex flex-col justify-center text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
              <h4 className="text-2xl font-serif mb-6 italic text-rose-300">"Village Cluster Development is transforming rural economies and improving access to basic services."</h4>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                Our initiatives are designed to promote sustainable economic development and improve the quality of life for rural women and their families.
              </p>
              <button className="mt-10 group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs">
                Explore Our Programs
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-rose-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION: FINAL QUOTE */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-serif text-[#1a3a2a] mb-8 leading-tight">
            Nurturing the <span className="text-[#be123c]">Nourishers</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-12">
            By investing in education and technology, we empower these "Annapurnas" to achieve economic security, leading to a more prosperous rural India.
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <p className="text-[#be123c] text-3xl font-bold">ASRE</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Impact Partner</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AnnapurnaPage;