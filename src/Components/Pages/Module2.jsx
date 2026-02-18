import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  Building2, 
  Lightbulb, 
  Briefcase, 
  Target, 
  DollarSign,
  PieChart,
  BadgePercent
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
const BusinessTopicCard = ({ code, title, description, items, outcome, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative bg-white rounded-[2.5rem] p-10 border border-rose-100 shadow-sm hover:shadow-2xl hover:shadow-rose-100/40 transition-all duration-500 flex flex-col h-full overflow-hidden"
  >
    {/* Subtle Pattern Overlay */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff1f2] rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500" />
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-10">
        <div className="p-4 bg-[#881337] text-white rounded-2xl shadow-lg shadow-rose-200">
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <span className="text-rose-100 font-bold text-5xl tracking-tighter select-none">
          {code}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-[#881337] mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-8">{description}</p>

      {/* Strategy Points */}
      <div className="space-y-4 mb-10">
        <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 font-black">Strategic Pillars</div>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-[#fb7185]" />
            {item}
          </div>
        ))}
      </div>

      {/* Outcome Footer */}
      <div className="mt-auto pt-6 border-t border-rose-50">
        <div className="flex items-center gap-3 bg-[#fff1f2] p-4 rounded-xl">
          <div className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <TrendingUp size={14} className="text-[#be123c]" />
          </div>
          <p className="text-[11px] font-bold text-[#881337] leading-tight">
            <span className="block text-rose-400 uppercase tracking-widest text-[8px] mb-0.5">Financial Impact</span>
            {outcome}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const MetricPill = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm">
    <Icon className="text-[#be123c]" size={20} />
    <div>
      <p className="text-[9px] uppercase tracking-widest text-rose-400 font-bold leading-none mb-1">{label}</p>
      <p className="text-[#881337] font-bold text-base leading-none">{value}</p>
    </div>
  </div>
);

const ModuleTwoPage = () => {
  return (
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-[#be123c]/20">
      <SEO 
        title="Module 2: Business & Enterprise" 
        description="Transition from farming to enterprise management. Focus on profit, marketing, and cooperatives."
        keywords="Dairy Business, Agribusiness Management, Rural Entrepreneurship"
      />
      
      {/* ================= 1. DYNAMIC HEADER ================= */}
      <header className="relative h-[60vh] min-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" 
            className="w-full h-full object-cover"
            alt="Financial Planning"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#881337] via-[#881337]/80 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-rose-200 text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
          >
            <Link to="/programs" className="hover:text-white transition-colors">VDC Program</Link>
            <ChevronRight size={14} />
            <span className="text-white">Module 02</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold text-white leading-[0.9] mb-8"
          >
            Business <br/>
            <span className="text-[#fb7185] italic font-light">& Enterprise</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <MetricPill icon={Briefcase} label="Core Focus" value="Profitability" />
            <MetricPill icon={BadgePercent} label="Skill Level" value="Advanced" />
          </motion.div>
        </div>
      </header>

      {/* ================= 2. INSIGHT SECTION ================= */}
      <section className="relative -mt-16 z-10 px-6 max-w-7xl mx-auto mb-28">
        <div className="bg-white rounded-[3.5rem] p-12 lg:p-16 shadow-2xl shadow-rose-900/10 border border-rose-50">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#881337] leading-tight mb-8">
                Empowering farmers to think like <span className="text-[#be123c] italic">Entrepreneurs</span>.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                The shift from subsistence farming to a commercial mindset is the key to rural prosperity. This module equips VDCs with the tools to analyze market trends, manage cooperative finances, and build sustainable income streams.
              </p>
              <div className="flex items-center gap-6">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-[10px] font-bold text-[#be123c]">
                            {i}
                        </div>
                    ))}
                 </div>
                 <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">4 Core Competencies</p>
              </div>
            </div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-[#be123c] rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500" />
               <img 
                 src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d" 
                 className="relative rounded-3xl w-full h-80 object-cover -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl"
                 alt="Enterprise management"
               />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. CURRICULUM GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <span className="text-[#be123c] font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Mastery Syllabus</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#881337]">Economic Transformation</h2>
        </div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          <BusinessTopicCard 
            code="2.1"
            icon={Calculator}
            title="Financial Engineering"
            description="Master the art of bookkeeping and cost analysis to ensure every drop of milk contributes to the bottom line."
            items={[
              "Unit cost of production",
              "Profit & Loss modeling",
              "Digital farm bookkeeping"
            ]}
            outcome="VDCs can secure bank financing for farmers through data."
          />

          <BusinessTopicCard 
            code="2.2"
            icon={DollarSign}
            title="Market Architecture"
            description="Developing strategic sales channels and understanding value-added processing to bypass middle-men."
            items={[
              "Pricing & Quality premiums",
              "Value-added product cycles",
              "Direct-to-consumer routes"
            ]}
            outcome="Increase net farmer margin by up to 25%."
          />

          <BusinessTopicCard 
            code="2.3"
            icon={Building2}
            title="Institutional Governance"
            description="Building robust cooperative structures that ensure long-term trust, transparency, and collective bargaining power."
            items={[
              "FPO & Cooperative law",
              "Conflict resolution",
              "Governance transparency"
            ]}
            outcome="Create resilient village-level dairy institutions."
          />

          <BusinessTopicCard 
            code="2.4"
            icon={Lightbulb}
            title="Entrepreneurial Vision"
            description="Identifying micro-enterprise opportunities within the dairy ecosystem to create independent wealth."
            items={[
              "Service-based income models",
              "Supply chain logistics",
              "Brand building for rural produce"
            ]}
            outcome="Transform VDCs into self-funded entrepreneurs."
          />
        </motion.div>

        {/* ================= 4. NAVIGATION ================= */}
        <div className="mt-32 border-t border-rose-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <Link to="/module-1" className="group flex items-center gap-4 text-gray-400 hover:text-[#be123c] transition-all">
              <div className="w-12 h-12 rounded-full border border-rose-100 flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                <ArrowRight className="rotate-180" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Previous Module</p>
                <p className="text-sm font-bold text-gray-600 group-hover:text-[#be123c]">Dairy Farming Basics</p>
              </div>
           </Link>

           <Link to="/module-3" className="group flex items-center gap-6 text-right">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1 text-rose-400">Next Step</p>
                <p className="text-xl font-bold text-[#881337]">Technology & Scale</p>
              </div>
              <div className="w-16 h-16 rounded-[1.5rem] bg-[#881337] text-white flex items-center justify-center group-hover:bg-[#be123c] group-hover:shadow-xl group-hover:shadow-rose-200 group-hover:-translate-y-1 transition-all duration-300">
                <ArrowRight size={28} />
              </div>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default ModuleTwoPage;