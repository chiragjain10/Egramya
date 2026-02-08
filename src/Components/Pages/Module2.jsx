import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Calculator, TrendingUp, Building2, Lightbulb, Briefcase, PieChart, Target, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

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

// --- Sub-Components (Reused for Consistency) ---

const TopicCard = ({ code, title, description, items, outcome, icon: Icon }) => (
    <motion.div 
        variants={fadeInUp}
        className="group relative bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm hover:shadow-[0_20px_50px_rgba(14,167,113,0.1)] transition-all duration-500 flex flex-col h-full"
    >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-[#0ea771]/10 rounded-2xl text-[#0ea771] group-hover:bg-[#0ea771] group-hover:text-white transition-colors duration-300">
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <span className="text-stone-300 font-serif text-4xl opacity-40 font-bold">{code}</span>
        </div>

        {/* Content */}
        <h3 className="font-serif text-2xl text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

        {/* List */}
        <div className="space-y-3 mb-8">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-stone-700 text-sm">
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#0ea771] opacity-60 shrink-0" />
                    <span>{item}</span>
                </div>
            ))}
        </div>

        {/* Footer / Outcome */}
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

const ModuleTwoPage = () => {
    return (
        <div className="min-h-screen bg-[#F9F8F6] font-sans selection:bg-[#0ea771]/20">
            
            {/* ================= 1. COMPACT BREADCRUMB HEADER ================= */}
            <header className="relative h-[45vh] min-h-[400px] overflow-hidden mt-25">
                <div className="absolute inset-0">
                    {/* Image: Business context / Writing / Calculation */}
                    <img 
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" 
                        className="w-full h-full object-cover"
                        alt="Business Management"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-[#F9F8F6]" />
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
                        <span className="text-white border-b border-[#0ea771]">Module 02</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-5xl lg:text-7xl text-white leading-tight"
                    >
                        Business & <span className="italic text-[#0ea771]">Enterprise</span>
                    </motion.h1>
                </div>
            </header>

            {/* ================= 2. ARCHITECTURAL HERO (Context) ================= */}
            <section className="relative -mt-10 z-10 px-6 max-w-6xl mx-auto mb-20">
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Main Content Card */}
                    <motion.div 
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                        className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea771]/10 text-[#0ea771] text-xs font-bold tracking-wider uppercase mb-6">
                                Enterprise Module
                            </div>
                            <h2 className="text-xl text-stone-600 leading-relaxed font-light mb-8">
                                Transforms dairy farming from a subsistence activity into a <strong className="text-stone-900 font-medium">profitable enterprise</strong>, preparing VDCs to become financially self-sustainable service providers.
                            </h2>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                <StatPill icon={Briefcase} label="Focus" value="Finance & Enterprise" />
                                <StatPill icon={TrendingUp} label="Outcome" value="Sustainable Income" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-5 h-full min-h-[300px] relative rounded-3xl overflow-hidden shadow-lg group"
                    >
                        {/* Image: Milk Collection Center or Cooperative Meeting */}
                        <img 
                            src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt="Dairy Business" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/95 backdrop-blur rounded-xl p-4 border border-white/50">
                                <p className="text-[#0ea771] text-xs font-bold uppercase tracking-widest mb-1">Critical Skill</p>
                                <p className="text-stone-900 font-serif text-lg leading-none">Profit & Loss Analysis</p>
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
                        <h2 className="font-serif text-4xl text-stone-900">Key Topics</h2>
                    </div>
                </div>

                <motion.div 
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {/* 2.1 Financial Management */}
                    <TopicCard 
                        code="2.1"
                        icon={Calculator}
                        title="Financial Management"
                        description="Trains participants to calculate cost of milk production, analyze profit and loss, and maintain transparent farm records."
                        items={[
                            "Cost of milk production analysis",
                            "Income vs expenditure assessment",
                            "Farm-level bookkeeping systems"
                        ]}
                        outcome="VDC helps farmers track profitability and access finance."
                    />

                    {/* 2.2 Marketing & Sales */}
                    <TopicCard 
                        code="2.2"
                        icon={DollarSign}
                        title="Marketing & Sales"
                        description="Focuses on pricing mechanisms, marketing channels, and value-added dairy products to improve farmer income."
                        items={[
                            "Cooperative vs private channels",
                            "Milk pricing & quality payments",
                            "Value-added products (curd, ghee)"
                        ]}
                        outcome="Better price realization for dairy farmers."
                    />

                    {/* 2.3 Cooperative Management */}
                    <TopicCard 
                        code="2.3"
                        icon={Building2}
                        title="Cooperative Management"
                        description="Builds understanding of cooperative governance, transparency, and the VDC’s role as a village-level facilitator."
                        items={[
                            "Structure of cooperatives and FPOs",
                            "Role of VDC in facilitation",
                            "Transparency, trust & collective action"
                        ]}
                        outcome="Stronger village-level dairy institutions."
                    />

                    {/* 2.4 Entrepreneurship */}
                    <TopicCard 
                        code="2.4"
                        icon={Lightbulb}
                        title="Entrepreneurship"
                        description="Encourages entrepreneurial thinking and equips VDCs to create independent income streams through services."
                        items={[
                            "Entrepreneurial mindset development",
                            "Micro-enterprise opportunities",
                            "Milk quality standards & traceability"
                        ]}
                        outcome="Self-income generation through advisory & services."
                    />
                </motion.div>

                {/* Next Step / Navigation */}
                <div className="mt-16 flex justify-end">
                    <Link to="/module-3" className="group flex items-center gap-3 text-stone-400 hover:text-[#0ea771] transition-colors">
                        <span className="text-sm font-medium tracking-widest uppercase">Next: Module 03</span>
                        <div className="p-3 rounded-full border border-stone-200 group-hover:border-[#0ea771] group-hover:bg-[#0ea771] group-hover:text-white transition-all">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ModuleTwoPage;
