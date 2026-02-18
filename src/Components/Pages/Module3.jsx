import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight, 
  Globe, 
  MessageSquare, 
  MapPin, 
  Users, 
  Target, 
  TrendingUp,
  Compass,
  GraduationCap,
  Award
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

      <div className="space-y-4 mb-10">
        <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 font-black">Field Objectives</div>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-[#fb7185]" />
            {item}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-rose-50">
        <div className="flex items-center gap-3 bg-[#fff1f2] p-4 rounded-xl">
          <div className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Target size={14} className="text-[#be123c]" />
          </div>
          <p className="text-[11px] font-bold text-[#881337] leading-tight">
            <span className="block text-rose-400 uppercase tracking-widest text-[8px] mb-0.5">Target Outcome</span>
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

const ModuleThreePage = () => {
  return (
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-[#be123c]/20">
      <SEO 
        title="Module 3: Community & Field Practice" 
        description="Transition into a change agent. Master rural mobilization and complete your field internship."
        keywords="Rural Development, Dairy Extension, Field Practice, VDC Certification"
      />
      
      {/* ================= 1. DYNAMIC HEADER ================= */}
      <header className="relative h-[60vh] min-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" 
            className="w-full h-full object-cover"
            alt="Community Engagement"
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
            <span className="text-white">Module 03</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold text-white leading-[0.9] mb-8"
          >
            Community <br/>
            <span className="text-[#fb7185] italic font-light">& Field Practice</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <MetricPill icon={Compass} label="Core Focus" value="Mobilization" />
            <MetricPill icon={GraduationCap} label="Phase" value="Final Internship" />
          </motion.div>
        </div>
      </header>

      {/* ================= 2. INSIGHT SECTION ================= */}
      <section className="relative -mt-16 z-10 px-6 max-w-7xl mx-auto mb-28">
        <div className="bg-white rounded-[3.5rem] p-12 lg:p-16 shadow-2xl shadow-rose-900/10 border border-rose-50">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#881337] leading-tight mb-8">
                Empowering leaders to become <span className="text-[#be123c] italic">Change Agents</span>.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                True impact happens on the ground. This module transitions the VDC from a student to a professional practitioner, mastering the art of rural communication and leading community-driven development through direct field engagement.
              </p>
              <div className="flex items-center gap-6">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-[10px] font-bold text-[#be123c]">
                            {i}
                        </div>
                    ))}
                 </div>
                 <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">3 Advanced Pillars</p>
              </div>
            </div>
            
            <div className="relative group">
                <div className="absolute inset-0 bg-[#be123c] rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" 
                  className="relative rounded-3xl w-full h-80 object-cover -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl"
                  alt="Field Work Practice"
                />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. CURRICULUM GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <span className="text-[#be123c] font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Professional Syllabus</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#881337]">Leadership In Action</h2>
        </div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <BusinessTopicCard 
            code="3.1"
            icon={Globe}
            title="Social Mobilization"
            description="Developing the framework for inclusive growth and building trust within rural dairy clusters."
            items={[
              "Rural development principles",
              "Youth & Gender inclusion",
              "Community trust-building"
            ]}
            outcome="VDC becomes a credible community influencer."
          />

          <BusinessTopicCard 
            code="3.2"
            icon={MessageSquare}
            title="Communication Extension"
            description="Mastering adult learning principles and visual tools to ensure effective knowledge transfer."
            items={[
              "Participatory learning methods",
              "Visual training demonstrations",
              "Effective advisory counseling"
            ]}
            outcome="Successful skill transfer to local farmers."
          />

          <BusinessTopicCard 
            code="3.3"
            icon={MapPin}
            title="Village Attachment"
            description="Intensive field internship involving real-time diagnostics and cooperative advisory services."
            items={[
              "Dairy cluster diagnostics",
              "Farmer interaction assignments",
              "Live problem-solving cases"
            ]}
            outcome="Complete field-readiness and certification."
          />
        </motion.div>

        {/* ================= 4. GRADUATION CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-[#881337] rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <Award className="mx-auto mb-6 text-rose-300" size={48} />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Attain Professional Certification</h2>
          <p className="text-rose-100 max-w-2xl mx-auto mb-10 text-lg">
            Completion of all three modules leads to the Village Dairy Counsellor (VDC) designation, empowering you to lead the next agricultural revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-[#fb7185] hover:bg-white hover:text-[#881337] text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl">
                Apply for Graduation
             </button>
             <button className="border border-rose-300 hover:bg-rose-300/10 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300">
                Download Curriculum
             </button>
          </div>
        </motion.div>

        {/* ================= 5. NAVIGATION ================= */}
        <div className="mt-32 border-t border-rose-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <Link to="/module-2" className="group flex items-center gap-4 text-gray-400 hover:text-[#be123c] transition-all">
              <div className="w-12 h-12 rounded-full border border-rose-100 flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                <ArrowRight className="rotate-180" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Previous Module</p>
                <p className="text-sm font-bold text-gray-600 group-hover:text-[#be123c]">Business & Enterprise</p>
              </div>
           </Link>

           <Link to="/programs" className="group flex items-center gap-6 text-right">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1 text-rose-400">Back to</p>
                <p className="text-xl font-bold text-[#881337]">All Programs</p>
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

export default ModuleThreePage;