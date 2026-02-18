import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { 
  ChevronRight, 
  CheckCircle2, 
  Stethoscope, 
  TrendingUp, 
  Users2 
} from "lucide-react";
import SEO from "../SEO"; // Ensure this path is correct in your project

// --- Sub-Components ---
const ModuleSummaryCard = ({ weekRange, type, title, description, skills, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
    className="group bg-white rounded-[2rem] p-8 lg:p-10 border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
  >
    {/* Decorative Background Icon */}
    <Icon className="absolute -right-8 -top-8 text-rose-50 opacity-[0.2] group-hover:scale-110 transition-transform duration-700" size={200} />
    
    <div className="relative z-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-[#fff1f2] rounded-2xl text-[#be123c] group-hover:bg-[#be123c] group-hover:text-white transition-colors duration-300">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <div>
            <span className="text-[#be123c] font-bold tracking-widest text-[10px] uppercase block">{type}</span>
            <span className="text-[#881337] font-bold text-lg">{weekRange}</span>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#881337] mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
        {description}
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-[#fff1f2]/50 p-3 rounded-xl border border-rose-50">
            <CheckCircle2 size={16} className="text-[#be123c] shrink-0" />
            <span className="text-sm text-gray-700 font-semibold">{skill}</span>
          </div>
        ))}
      </div>

      <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#be123c] hover:gap-4 transition-all">
        View Full Syllabus <ChevronRight size={16} />
      </button>
    </div>
  </motion.div>
);

const ProgramStructurePage = () => {
  return (
    <div className="min-h-screen bg-[#fff1f2] font-sans selection:bg-[#be123c]/20">
      <SEO 
        title="Program Structure" 
        description="Explore the 3-month comprehensive curriculum of the Village Dairy Counsellors program."
        keywords="VDC Curriculum, Dairy Training, Women Leadership Training"
      />
      
      {/* ================= 1. HERO HEADER ================= */}
      <header className="relative h-[50vh] min-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Training program"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#881337]/80 via-[#881337]/50 to-[#fff1f2]" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white/90 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-rose-200">Our Programs</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Learning Journey <br/>
            <span className="text-[#fb7185] block mt-2 text-2xl md:text-3xl font-light">A 3-Month Transformational Path</span>
          </motion.h1>
        </div>
      </header>

      {/* ================= 2. PROGRAM TIMELINE ================= */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#be123c] font-bold tracking-wider uppercase text-sm">Course Structure</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#881337] mt-3 mb-6">Curriculum Modules</h2>
          <div className="w-24 h-1 bg-[#fb7185] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-10">
          <ModuleSummaryCard 
            weekRange="Weeks 1-2"
            type="Foundation"
            title="Scientific Dairy Farming"
            description="Master the fundamentals of cattle care, breeding, and milk production hygiene. This module provides the technical backbone for a successful dairy enterprise."
            skills={["Cattle Breeds", "Feed Management", "Disease Control"]}
            icon={Stethoscope}
            delay={0.1}
          />

          <ModuleSummaryCard 
            weekRange="Weeks 3-4"
            type="Growth"
            title="Rural Entrepreneurship"
            description="Learn how to turn dairy farming into a profitable business. We cover financial literacy, market linkages, and digital payment systems."
            skills={["Financial Literacy", "Market Analysis", "Business Planning"]}
            icon={TrendingUp}
            delay={0.2}
          />

          <ModuleSummaryCard 
            weekRange="Weeks 5-6"
            type="Leadership"
            title="Community Leadership"
            description="Empowering women to become leaders in their villages. Focus on self-help group formation, public speaking, and community mobilization."
            skills={["Public Speaking", "Team Building", "Social Impact"]}
            icon={Users2}
            delay={0.3}
          />
        </div>

        {/* ================= 3. CALL TO ACTION ================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 bg-[#881337] rounded-[3rem] text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to start your journey?</h3>
            <p className="text-rose-100 mb-8 max-w-xl mx-auto">Join hundreds of women who have transformed their lives through our Village Dairy Counsellor program.</p>
            <Link 
              to="/apply" 
              className="inline-block bg-[#fb7185] hover:bg-white hover:text-[#881337] text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
            >
              Apply for Enrollment
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProgramStructurePage;