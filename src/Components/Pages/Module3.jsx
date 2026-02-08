import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Users, MessageSquare, MapPin, GraduationCap, Heart, Globe, Target, Compass } from "lucide-react";
import SEO from "../SEO";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

const TopicCard = ({ code, title, description, items, outcome, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm hover:shadow-[0_20px_50px_rgba(14,167,113,0.1)] transition-all duration-500 flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-[#0ea771]/10 rounded-2xl text-[#0ea771] group-hover:bg-[#0ea771] group-hover:text-white transition-colors duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <span className="text-stone-300 font-serif text-4xl opacity-40 font-bold">{code}</span>
    </div>

    <h3 className="font-serif text-2xl text-stone-900 mb-3">{title}</h3>
    <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

    <div className="space-y-3 mb-8">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-2 text-stone-700 text-sm">
          <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#0ea771] opacity-60 shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>

    <div className="pt-6 border-t border-stone-100 mt-auto">
      <div className="flex items-start gap-2">
        <Target size={16} className="text-[#0ea771] mt-0.5 shrink-0" />
        <p className="text-xs font-medium text-stone-900">
          <span className="text-stone-400 uppercase tracking-wider text-[10px] block mb-1">Target Outcome</span>
          {outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

const StatPill = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100">
    <div className="text-[#0ea771]">
      <Icon size={20} />
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">{label}</div>
      <div className="text-stone-900 font-serif font-medium">{value}</div>
    </div>
  </div>
);

const ModuleThreePage = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans selection:bg-[#0ea771]/20">
      
      {/* ================= 1. BREADCRUMB HEADER ================= */}
      <header className="relative h-[45vh] min-h-[400px] overflow-hidden mt-25">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" 
            className="w-full h-full object-cover"
            alt="Community Engagement"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-[#F9F8F6]" />
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-white/80 text-xs font-medium tracking-widest uppercase mb-6"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={12} />
            <a href="/programs" className="hover:text-white transition-colors">Programs</a>
            <ChevronRight size={12} />
            <span className="text-white/60">VDC</span>
            <ChevronRight size={12} />
            <span className="text-white border-b border-[#0ea771]">Module 03</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl lg:text-7xl text-white leading-tight"
          >
            Community & <span className="italic text-[#0ea771]">Field Practice</span>
          </motion.h1>
        </div>
      </header>

      {/* ================= 2. ARCHITECTURAL HERO ================= */}
      <section className="relative -mt-10 z-10 px-6 max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-stone-200/50 border border-stone-100"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea771]/10 text-[#0ea771] text-xs font-bold tracking-wider uppercase mb-6">
                Community Module
              </div>
              <h2 className="text-xl text-stone-600 leading-relaxed font-light mb-8">
                Empowering Village Dairy Counsellors as <strong className="text-stone-900 font-medium">educators and change agents</strong> through deep community engagement and real-world internship practice.
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <StatPill icon={Compass} label="Focus" value="Leadership & Extension" />
                <StatPill icon={GraduationCap} label="Outcome" value="Field-Ready Professional" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 h-full min-h-[300px] relative rounded-3xl overflow-hidden shadow-lg group"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Field Work" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur rounded-xl p-4 border border-white/50">
                <p className="text-[#0ea771] text-xs font-bold uppercase tracking-widest mb-1">Impact Goal</p>
                <p className="text-stone-900 font-serif text-lg leading-none">Village-Level Leadership</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 3. CURRICULUM GRID ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="text-[#0ea771] font-bold tracking-widest text-xs uppercase mb-2 block">Syllabus</span>
            <h2 className="font-serif text-4xl text-stone-900">Module Deep-Dive</h2>
          </div>
        </div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* 3.1 Rural Development */}
          <TopicCard 
            code="3.1"
            icon={Globe}
            title="Rural Social Mobilization"
            description="Livelihood-based development principles focused on inclusive growth and social sustainability."
            items={[
              "Principles of rural development",
              "Gender & Youth participation",
              "Community trust-building"
            ]}
            outcome="VDC becomes a credible community mobilizer."
          />

          {/* 3.2 Extension Methods */}
          <TopicCard 
            code="3.2"
            icon={MessageSquare}
            title="Communication Extension"
            description="Farmer-friendly teaching methods, participatory learning, and effective counseling strategies."
            items={[
              "Adult learning principles",
              "Training demonstration techniques",
              "Local language visual tools"
            ]}
            outcome="Effective knowledge transfer to local farmers."
          />

          {/* 3.3 Field Internship */}
          <TopicCard 
            code="3.3"
            icon={MapPin}
            title="Village Attachment"
            description="Hands-on exposure through field advisory visits, cooperative interactions, and real-time problem solving."
            items={[
              "Village-level dairy diagnostics",
              "Farmer interaction assignments",
              "Live problem-solving cases"
            ]}
            outcome="Real-world confidence and field readiness."
          />
        </motion.div>

        {/* Graduation / Completion CTA */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="mt-16 bg-stone-900 rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea771]/20 blur-[100px]" />
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6 relative z-10">
            Ready to become a <span className="italic text-[#0ea771]">Change Agent?</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-10 relative z-10">
            Completion of all three modules grants the Village Dairy Counsellor Certification, 
            equipping you with the technical, business, and social skills to lead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-[#0ea771] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0c8a5d] transition-all flex items-center justify-center gap-2">
              Apply Now <ArrowRight size={18} />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Download Full Brochure
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ModuleThreePage;
