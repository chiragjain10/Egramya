import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  Map, 
  CheckCircle2, 
  ArrowDown, 
  Stethoscope, 
  TrendingUp, 
  Users2,
  ExternalLink
} from "lucide-react";

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
    transition: { staggerChildren: 0.15 }
  }
};

// --- Sub-Components ---

const ModuleSummaryCard = ({ weekRange, type, title, description, skills, icon: Icon, href }) => (
  <motion.div 
    variants={fadeInUp}
    className="relative grid lg:grid-cols-12 gap-8 lg:gap-16 items-start"
  >
    {/* Left: Timeline Marker */}
    <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end gap-4 lg:pt-2">
      <div className="flex flex-col items-center lg:items-end">
        <span className="text-[#be123c] font-bold tracking-[0.2em] text-[10px] uppercase mb-1">Timeline</span>
        <span className="font-serif text-2xl text-[#881337]">{weekRange}</span>
      </div>
      <div className={`hidden lg:block w-px h-24 bg-gradient-to-b from-rose-200 to-transparent mt-4`} />
    </div>

    {/* Right: Content Card */}
    <div className="lg:col-span-9">
      <div className="group bg-white rounded-[2.5rem] p-8 lg:p-12 border border-rose-100 shadow-sm hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-500 relative overflow-hidden">
        {/* Decorative Background Icon */}
        <Icon className="absolute -right-8 -top-8 text-rose-50 opacity-[0.03] group-hover:scale-110 transition-transform duration-700" size={320} />
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="p-3 bg-rose-50 rounded-2xl text-[#be123c] group-hover:bg-[#be123c] group-hover:text-white transition-colors duration-300">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">{type}</span>
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl text-[#881337] mb-6">{title}</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mb-10">{description}</p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#be123c] mt-1 shrink-0" />
                <span className="text-sm text-gray-700 font-medium leading-tight">{skill}</span>
              </div>
            ))}
          </div>

          <Link 
            to={href} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#881337] group/link hover:text-[#be123c] transition-colors"
          >
            Explore Module Details <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProgramStructurePage = () => {
  return (
    <div className="min-h-screen bg-[#fff1f2] font-sans selection:bg-[#be123c]/20">
      <SEO 
        title="Program Structure" 
        description="Explore the 3-month comprehensive curriculum of the Village Dairy Counsellors program, covering Dairy Science, Entrepreneurship, and Leadership."
        keywords="VDC Curriculum, Dairy Training Syllabus, Rural Entrepreneurship Course, Women Leadership Training"
      />
      
      {/* ================= 1. COMPACT BREADCRUMB HEADER ================= */}
      <header className="relative h-[45vh] min-h-[400px] overflow-hidden mt-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#881337]/80 via-[#881337]/60 to-[#fff1f2]" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-white/80 text-xs font-medium tracking-widest uppercase mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Our Programs</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
          >
            Comprehensive Training <br/>
            <span className="text-rose-200 text-2xl md:text-3xl font-sans font-light block mt-2">For Sustainable Development</span>
          </motion.h1>

        </div>
      </header>

      {/* ================= 2. PROGRAM OVERVIEW ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {/* Module 1 */}
          <ModuleSummaryCard 
            weekRange="Weeks 1-2"
            type="Foundation"
            title="Scientific Dairy Farming"
            description="Master the fundamentals of cattle care, breeding, and milk production hygiene. This module provides the technical backbone for a successful dairy enterprise."
            skills={["Cattle Breeds", "Feed Management", "Disease Control"]}
            icon={Stethoscope}
            href="/module-1"
          />

          {/* Module 2 */}
          <ModuleSummaryCard 
            weekRange="Weeks 3-4"
            type="Growth"
            title="Rural Entrepreneurship"
            description="Learn how to turn dairy farming into a profitable business. We cover financial literacy, market linkages, and business planning."
            skills={["Financial Literacy", "Market Analysis", "Business Planning"]}
            icon={TrendingUp}
            href="/module-2"
          />

          {/* Module 3 */}
          <ModuleSummaryCard 
            weekRange="Weeks 5-6"
            type="Leadership"
            title="Community Leadership"
            description="Empowering women to become leaders in their villages. Focus on self-help group formation, conflict resolution, and community mobilization."
            skills={["Public Speaking", "Team Building", "Social Impact"]}
            icon={Users2}
            href="/module-3"
          />
        </motion.div>
      </section>

    </div>
  );
};

export default ProgramStructurePage;
