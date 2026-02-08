import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        <span className="text-[#0056b3] font-bold tracking-[0.2em] text-[10px] uppercase mb-1">Timeline</span>
        <span className="font-serif text-2xl text-stone-900">{weekRange}</span>
      </div>
      <div className={`hidden lg:block w-px h-24 bg-gradient-to-b from-stone-200 to-transparent mt-4`} />
    </div>

    {/* Right: Content Card */}
    <div className="lg:col-span-9">
      <div className="group bg-white rounded-[2.5rem] p-8 lg:p-12 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 relative overflow-hidden">
        {/* Decorative Background Icon */}
        <Icon className="absolute -right-8 -top-8 text-stone-50 opacity-[0.03] group-hover:scale-110 transition-transform duration-700" size={320} />
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="p-3 bg-stone-50 rounded-2xl text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white transition-colors duration-300">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{type}</span>
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl text-stone-900 mb-6">{title}</h2>
          <p className="text-stone-500 leading-relaxed max-w-2xl mb-10">{description}</p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#0056b3] mt-1 shrink-0" />
                <span className="text-sm text-stone-700 font-medium leading-tight">{skill}</span>
              </div>
            ))}
          </div>

          <Link 
            to={href} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 group/link hover:text-[#0056b3] transition-colors"
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
    <div className="min-h-screen bg-[#F9F8F6] font-sans">
      
      {/* ================= 1. COMPACT BREADCRUMB HEADER ================= */}
      <header className="relative h-[45vh] min-h-[400px] overflow-hidden mt-25">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
            className="w-full h-full object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-[#F9F8F6]" />
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-white/80 text-xs font-medium tracking-widest uppercase mb-6"
            >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={12} />
                <Link to="/structure" className="hover:text-white transition-colors">Programs</Link>
                <ChevronRight size={12} />
                <span className="text-white/60">VDC</span>
                <ChevronRight size={12} />
                <span className="text-white border-b border-[#0056b3]">Program Structure</span>
            </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl lg:text-7xl text-white leading-tight mb-6"
          >
            The Learning <span className="italic text-[#0056b3]">Architecture</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-lg leading-relaxed max-w-2xl"
          >
            A structured journey from technical mastery to leadership, designed to create self-sustaining village entrepreneurs.
          </motion.p>
        </div>
      </header>

      {/* ================= 2. QUICK STATS BAR ================= */}
      <section className="relative -mt-10 z-10 max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 bg-white rounded-[2rem] border border-stone-100 shadow-xl shadow-stone-200/40">
          {[
            { icon: Calendar, label: "Total Duration", value: "12 Weeks" },
            { icon: Clock, label: "Weekly Commitment", value: "6 Days" },
            { icon: Map, label: "Daily Intensity", value: "4–5 Hours" },
            { icon: CheckCircle2, label: "Certification", value: "VDC Professional" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 px-4 text-center border-r last:border-0 border-stone-50">
              <stat.icon size={20} className="text-[#0056b3] mb-3" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-1">{stat.label}</span>
              <span className="text-stone-900 font-serif font-medium">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. THE TIMELINE ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-40 relative">
        {/* Central Vertical Line for Desktop */}
        <div className="absolute left-[calc(12.5%+1.5rem)] top-0 bottom-40 w-px bg-stone-200 hidden lg:block" />

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {/* Module 1 */}
          <ModuleSummaryCard 
            weekRange="Weeks 01–04"
            type="Technical Foundation"
            title="Module 1: Dairy Farming Basics"
            description="Establishing the scientific and technical bedrock. Participants master the fundamentals of animal biology, health, and clean production systems."
            skills={[
              "Animal Breed Management",
              "Nutritional Formulation",
              "Preventive Health Care"
            ]}
            icon={Stethoscope}
            href="/module-1"
          />

          {/* Module 2 */}
          <ModuleSummaryCard 
            weekRange="Weeks 05–08"
            type="Strategic Management"
            title="Module 2: Dairy Business & Enterprise"
            description="Shifting focus to the economy of the farm. We transform farmers into business managers capable of analyzing margins and identifying markets."
            skills={[
              "Financial Bookkeeping",
              "Value Addition Tactics",
              "Market Analysis"
            ]}
            icon={TrendingUp}
            href="/module-2"
          />

          {/* Module 3 */}
          <ModuleSummaryCard 
            weekRange="Weeks 09–12"
            type="Field Internship"
            title="Module 3: Leadership & Practice"
            description="The final integration. Participants spend time in the field, managing real-world scenarios and acting as mentors within their communities."
            skills={[
              "Social Mobilization",
              "Extension Communications",
              "Hands-on Diagnostics"
            ]}
            icon={Users2}
            href="/module-3"
          />
        </motion.div>

        {/* The Capstone Achievement */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#0056b3] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#0056b3]/30">
              <ArrowDown size={24} />
            </div>
            <h3 className="font-serif text-3xl text-stone-900 mb-6">Certification & Placement</h3>
            <p className="text-stone-500 leading-relaxed mb-10">
              Upon successful completion of all three modules, candidates undergo a final evaluation to receive their professional Village Dairy Counsellor certification.
            </p>
            <button className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold hover:bg-stone-800 transition-all flex items-center gap-3">
              Download Full Curriculum PDF <Calendar size={18} />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProgramStructurePage;
