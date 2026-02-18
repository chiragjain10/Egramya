import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight, 
  Dna, 
  ShieldCheck, 
  Warehouse, 
  Sprout, 
  Clock, 
  BookOpen, 
  Target,
  FlaskConical 
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../SEO";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// --- Sub-Components ---
const TopicCard = ({ code, title, description, items, practical, duration, outcome, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative bg-white rounded-[2.5rem] p-10 border border-rose-100 shadow-sm hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500 flex flex-col h-full"
  >
    {/* Large Background Decorative Number */}
    <span className="absolute top-4 right-8 text-8xl font-bold text-rose-50 opacity-40 select-none group-hover:opacity-70 transition-opacity">
      {code.split('.')[1]}
    </span>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-[#fff1f2] rounded-2xl text-[#be123c] group-hover:bg-[#be123c] group-hover:text-white transition-all duration-300">
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <div>
          <span className="text-[#be123c] font-bold tracking-widest text-[10px] uppercase block">Chapter {code}</span>
          <h3 className="text-2xl font-bold text-[#881337] leading-tight">{title}</h3>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>

      {/* Topics List */}
      <div className="space-y-4 mb-8">
        <div className="text-[10px] uppercase tracking-wider text-rose-400 font-bold">Theoretical Focus</div>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#fb7185] shrink-0" />
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>

      {/* Practical Section */}
      {practical && practical.length > 0 && (
        <div className="mb-8 p-6 bg-[#fff1f2]/50 rounded-2xl border border-rose-50">
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical size={14} className="text-[#be123c]" />
            <span className="text-[10px] uppercase tracking-wider text-[#be123c] font-bold">Practical Exposure</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {practical.map((item, idx) => (
              <span key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                • {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Outcome */}
      <div className="pt-6 border-t border-rose-100 mt-auto">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-rose-50 rounded-lg">
             <Target size={16} className="text-[#be123c]" />
          </div>
          <p className="text-xs font-semibold text-[#881337] leading-relaxed">
            <span className="text-rose-400 uppercase tracking-widest text-[9px] block mb-1">Learning Outcome</span>
            {outcome}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const StatPill = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-rose-50 shadow-sm">
    <div className="w-12 h-12 bg-[#fff1f2] rounded-xl flex items-center justify-center text-[#be123c]">
      <Icon size={24} />
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-widest text-rose-400 font-bold mb-0.5">{label}</div>
      <div className="text-[#881337] font-bold text-lg">{value}</div>
    </div>
  </div>
);

const ModuleOnePage = () => {
  return (
    <div className="min-h-screen bg-[#fff1f2] font-sans selection:bg-[#be123c]/20">
      <SEO 
        title="Module 1: Dairy Farming Basics" 
        description="Foundation module of VDC program. Learn about cattle breeds, hygiene, and nutrition."
        keywords="Dairy Farming, Animal Husbandry, Rural Skills"
      />
      
      {/* ================= 1. PREMIUM HEADER ================= */}
      <header className="relative h-[55vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce" 
            className="w-full h-full object-cover"
            alt="Scientific Dairy Farming"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#881337]/90 via-[#881337]/40 to-[#fff1f2]" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white/80 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/programs" className="hover:text-white transition-colors">Programs</Link>
            <ChevronRight size={12} />
            <span className="text-rose-200">Module 01</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Scientific <br/>
            <span className="text-[#fb7185] italic font-light">Dairy Farming</span>
          </motion.h1>
        </div>
      </header>

      {/* ================= 2. CONTEXT SECTION ================= */}
      <section className="relative -mt-20 z-10 px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-10 lg:p-14 shadow-2xl shadow-rose-900/5 border border-rose-100 flex flex-col justify-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fff1f2] text-[#be123c] text-[10px] font-bold tracking-widest uppercase mb-8 w-fit">
              Technical Foundation
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium mb-10">
              This module builds <span className="text-[#881337] font-bold">technical competence</span> in high-yield animal management, milk safety, and disease prevention.
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <StatPill icon={Clock} label="Course Duration" value="4 Weeks" />
              <StatPill icon={BookOpen} label="Learning Mode" value="Hybrid" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative rounded-[3rem] overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30" 
              className="w-full h-full object-cover" 
              alt="Hands-on training" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#881337]/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <p className="text-rose-200 text-[10px] font-bold uppercase tracking-widest mb-1">Core Objective</p>
              <p className="text-white font-bold text-xl">Farm-Level Advisory Mastery</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 3. CURRICULUM GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-rose-100 pb-8">
          <div>
            <span className="text-[#be123c] font-bold tracking-widest text-xs uppercase mb-3 block">Full Syllabus</span>
            <h2 className="text-4xl font-bold text-[#881337]">Curriculum Breakdown</h2>
          </div>
          <div className="w-24 h-1 bg-[#fb7185] rounded-full hidden md:block mb-4"></div>
        </div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <TopicCard 
            code="1.1"
            icon={Warehouse}
            title="Animal Husbandry"
            description="Selection of suitable cattle based on local climate, housing design, and welfare to ensure higher productivity."
            items={[
              "Indigenous vs Crossbred breeds",
              "Climate-resilient breed selection",
              "Scientific housing design"
            ]}
            practical={["Body scoring", "Layout planning"]}
            outcome="VDC can advise on infrastructure and breed selection."
          />

          <TopicCard 
            code="1.2"
            icon={Sprout}
            title="Nutrition Management"
            description="Balanced feeding practices and ration formulation using locally available resources for yield optimization."
            items={[
              "Ruminant digestion principles",
              "Ration balancing for lactation",
              "Feed cost optimization"
            ]}
            practical={["Feed mixing", "Ration worksheets"]}
            outcome="VDC can reduce feed costs by up to 15%."
          />

          <TopicCard 
            code="1.3"
            icon={Dna}
            title="Reproduction & Genetics"
            description="Advanced heat detection and breeding cycles to reduce calving intervals and enhance long-term genetics."
            items={[
              "Breeding cycle management",
              "AI concepts & equipment",
              "Reproductive health"
            ]}
            practical={["AI demo", "Calving management"]}
            outcome="Ensures better offspring and consistent milk flow."
          />

          <TopicCard 
            code="1.4"
            icon={ShieldCheck}
            title="Disease & Hygiene"
            description="Vaccination schedules and clean milk production standards to ensure product quality and herd health."
            items={[
              "Common disease identification",
              "Vaccination protocols",
              "Hygienic milking methods"
            ]}
            practical={["Milk testing", "First aid kits"]}
            outcome="VDC acts as the primary health advisor."
          />
        </motion.div>

        {/* ================= 4. NAVIGATION ================= */}
        <div className="mt-24 flex justify-between items-center bg-white p-8 rounded-[2.5rem] border border-rose-100 shadow-sm">
          <Link to="/programs" className="text-gray-400 hover:text-[#be123c] font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
            <ChevronRight className="rotate-180" size={16} /> Back to Overview
          </Link>
          
          <Link to="/module-2" className="group flex items-center gap-4 text-[#881337]">
            <span className="text-sm font-bold tracking-widest uppercase">Next: Module 02</span>
            <div className="w-12 h-12 rounded-full bg-[#881337] text-white flex items-center justify-center group-hover:bg-[#be123c] group-hover:translate-x-2 transition-all">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ModuleOnePage;