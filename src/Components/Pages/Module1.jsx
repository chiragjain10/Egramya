import React from "react";
import { motion } from "framer-motion";
import {
  Globe, TrendingUp, ShieldCheck, BookOpen, Sprout, FlaskConical, Heart, 
  Briefcase, CheckCircle2, Users, Target, Layers, MapPin, Zap, Award, 
  BarChart3, Microscope, GraduationCap, ChevronRight
} from "lucide-react";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

/* ---------------- Components ---------------- */

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-rose-200/30 bg-rose-500/10 text-rose-200 text-xs font-bold tracking-[0.2em] uppercase mb-8">
    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-2 animate-pulse" />
    {children}
  </span>
);

const PremiumCard = ({ icon: Icon, title, desc, delay = 0 }) => (
  <motion.div
    variants={fadeUp}
    className="group relative bg-white/80 backdrop-blur-xl border border-rose-100/50 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={80} />
    </div>
    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#881337] transition-colors duration-500">
      <Icon className="text-[#be123c] group-hover:text-white transition-colors duration-500" size={28} />
    </div>
    <h4 className="text-xl font-bold text-[#4a0f1e] mb-3 leading-tight">{title}</h4>
    <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
  </motion.div>
);

const ProgramPage = () => {
  return (
    <div className="bg-[#fffdfc] text-stone-900 font-sans selection:bg-rose-100 selection:text-rose-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center px-6 bg-[#4a0f1e] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-stone-900/40 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto w-full pt-20">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge>State Initiative | Madhya Pradesh</Badge>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              Revolutionizing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-100 to-white italic font-serif">
                Rural Prosperity
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-2xl text-rose-100/80 text-lg md:text-xl leading-relaxed mb-12 font-light">
              The <span className="text-white font-medium underline decoration-rose-400/50 underline-offset-4">Village Dairy Counsellors Program</span> is a professional grassroots cadre designed to modernize animal husbandry through scientific intervention and market intelligence.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-5">
              <button className="group px-10 py-5 bg-white text-[#881337] rounded-2xl font-bold hover:bg-rose-50 transition-all flex items-center gap-3 shadow-xl shadow-black/20">
                Apply as VDC <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/5 transition-all backdrop-blur-md">
                Download Technical DPR
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VISION ================= */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#4a0f1e] mb-6">The Strategic Mandate</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Madhya Pradesh stands at a pivotal junction in the dairy sector. While livestock population is high, the gap between potential and actual yield remains significant. Our mandate is to bridge this through <strong>professional human capital.</strong>
              </p>
              <div className="space-y-6">
                {[
                  { icon: Target, t: "The Vision", d: "Standardizing scientific dairy practices at the household level." },
                  { icon: Layers, t: "The Mission", d: "Deploying 5,000+ certified VDCs to touch 1 million farm families." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-2xl bg-rose-50/50 border border-rose-100/50">
                    <item.icon className="text-[#be123c] shrink-0" size={28} />
                    <div>
                      <h4 className="font-bold text-[#881337]">{item.t}</h4>
                      <p className="text-sm text-stone-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumCard icon={TrendingUp} title="Yield Optimization" desc="Moving from traditional grazing to TMR (Total Mixed Ration) and precision feeding." />
              <PremiumCard icon={FlaskConical} title="Genomic Progress" desc="Promoting sorted semen and AI (Artificial Insemination) for high-pedigree breeds." />
              <PremiumCard icon={ShieldCheck} title="Biosecurity" desc="Implementing herd health monitoring to prevent outbreaks like Lumpy Skin Disease." />
              <PremiumCard icon={Users} title="Market Leverage" desc="Direct linkage to processors, eliminating exploitative middlemen margins." />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE 7-PILLAR ECOSYSTEM ================= */}
      <section className="py-32 bg-[#4a0f1e] text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge>Implementation Framework</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">The 7-Pillar Orientation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
              { i: GraduationCap, t: "Training & Capacity", d: "NSDC aligned modules with immersive field-based learning." },
              { i: MapPin, t: "Deployment", d: "Gram Panchayat level placement for 24/7 farmer accessibility." },
              { i: Microscope, t: "Digital Advisory", d: "AI-driven diagnostics for cattle health and soil testing." },
              { i: Briefcase, t: "Revenue Model", d: "Self-sustaining through service fees and incentive linkages." },
              { i: Sprout, t: "Sustainability", d: "Ethical animal husbandry and methane reduction practices." },
              { i: Award, t: "Quality Assurance", d: "Milk testing at source to ensure premium price realization." },
              { i: Zap, t: "Inclusion", d: "Prioritizing women-led dairy groups and SHG federations." },
              { i: Globe, t: "Scalability", d: "Modular design ready for pan-India replication." }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <p.i className="text-rose-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-lg font-bold mb-3">{p.t}</h4>
                <p className="text-sm text-rose-100/60 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT METRICS ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] border border-rose-100 shadow-2xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="grid md:grid-cols-4 gap-12 text-center relative z-10">
              {[
                ["25%", "Production Surge", "Per-capita yield increase"],
                ["30%", "Income Growth", "Net profit per livestock"],
                ["5,000", "Certified VDCs", "Professional rural jobs"],
                ["1.2M", "Farmer Reach", "Targeted household impact"]
              ].map(([val, lab, sub], i) => (
                <div key={i}>
                  <p className="text-5xl font-black text-[#881337] mb-2">{val}</p>
                  <p className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-3">{lab}</p>
                  <p className="text-stone-400 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNERSHIP / PMU ================= */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4a0f1e] mb-8">
              Absolute Gramya <br />
              <span className="text-rose-600 text-2xl">The Project Management Unit (PMU)</span>
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed text-lg">
              As the lead PMU, Absolute Gramya orchestrates the end-to-end lifecycle of the VDC program. We harmonize government policy with ground-level execution, ensuring every Rupee spent creates measurable social and economic alpha.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Strategic Curriculum Development with IIT Patna",
                "Last-mile digital data collection & analysis",
                "Phygital mentoring for 5,000+ counsellors",
                "Multi-stakeholder governance & CSR reporting"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                  <CheckCircle2 className="text-rose-600" size={20} />
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#4a0f1e] p-12 rounded-[3rem] text-white shadow-2xl">
            <Microscope className="text-rose-400 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 text-rose-100">Technical Collaboration</h3>
            <p className="text-rose-200/70 mb-8 leading-relaxed">
              Our training modules are developed in collaboration with elite academic institutions like **IIT Patna**, ensuring that VDCs are equipped with the latest in IoT and data-driven farming.
            </p>
            <div className="h-[2px] bg-rose-500/30 w-full mb-8" />
            <button className="w-full py-4 border border-rose-400/50 rounded-2xl font-bold hover:bg-rose-400/10 transition-all">
              View Curriculum Framework
            </button>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-40 bg-gradient-to-br from-[#4a0f1e] to-[#2c0912] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">
            The Future of Dairy is <br />
            <span className="text-rose-400">Professional.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-rose-100/60 text-lg mb-12">
            Join the mission to transform Madhya Pradesh into the dairy capital of India through innovation, science, and grassroots leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-14 py-6 bg-white text-[#881337] rounded-[2rem] font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all shadow-xl shadow-black/40">
              Partner With Us
            </button>
            <button className="px-14 py-6 border border-white/20 rounded-[2rem] font-bold text-xl hover:bg-white/10 transition-all">
              VDC Login
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 border-t border-rose-100 text-center text-stone-400 text-sm">
        <p>© 2024 Absolute Gramya PMU. All rights reserved. | In association with MP Dairy Development Board.</p>
      </footer>

    </div>
  );
};

export default ProgramPage;