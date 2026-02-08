import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LineChart, TrendingUp, Briefcase, HeartHandshake, ArrowRight } from 'lucide-react';
import {
    ChevronRight,
    ArrowUpRight,
    ShieldCheck,
    Users,
    PieChart,
    BarChart3
} from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};
const data = [
        {
            icon: LineChart,
            title: "Dairy Productivity",
            desc: "Scientific management practices to improve milk yield.",
            color: "text-blue-600",
            bg: "bg-blue-50",
            items: ["Improved milk yield", "Reduced mortality", "Optimized feeding"]
        },
        {
            icon: TrendingUp,
            title: "Financial Stability",
            desc: "Contributing to enhanced rural incomes by reducing costs.",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            items: ["Lower input costs", "Better price realization", "Easy finance access"]
        },
        {
            icon: Briefcase,
            title: "Rural Employment",
            desc: "Creating a new cadre of skilled professionals.",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            items: ["Certified Counsellors", "Advisory income", "Reduced migration"]
        },
        {
            icon: HeartHandshake,
            title: "Institutional Power",
            desc: "Strengthening cooperatives through transparent leadership.",
            color: "text-rose-600",
            bg: "bg-rose-50",
            items: ["Resilient FPOs", "Collective action", "Women leadership"]
        }
    ];

const stagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

// --- Sub-Components ---

const ImpactMetric = ({ label, value }) => (
    <div className="min-w-[260px] bg-white/80 backdrop-blur-md border border-white rounded-[2rem] px-8 py-8 shadow-sm">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0056b3] font-bold mb-3">
            {label}
        </p>
        <p className="font-serif text-3xl text-stone-900 leading-none">
            {value}
        </p>
    </div>
);

const ImpactSection = ({ title, subtitle, items, icon: Icon, index }) => (
    <motion.div
        variants={fadeInUp}
        className="group relative grid lg:grid-cols-12 gap-8 lg:gap-16 items-start py-16 border-t border-stone-200"
    >
        {/* Left: Section Label */}
        <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-stone-900 text-white rounded-2xl group-hover:bg-[#0056b3] transition-colors duration-500">
                    <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-stone-300 font-serif text-4xl opacity-50 font-bold">0{index}</span>
            </div>
            <h2 className="font-serif text-3xl text-stone-900 mb-4 leading-tight">{title}</h2>
            <p className="text-stone-500 text-sm leading-relaxed">{subtitle}</p>
        </div>

        {/* Right: Cards */}
        <div className="lg:col-span-8 grid md:grid-cols-3 gap-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="bg-white border border-stone-100 p-6 rounded-3xl hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 flex flex-col justify-between group/card"
                >
                    <p className="text-stone-700 text-sm font-medium mb-8 leading-snug">{item}</p>
                    <div className="flex justify-end">
                        <ArrowUpRight size={16} className="text-[#0056b3] opacity-0 group-hover/card:opacity-100 transition-all transform group-hover/card:translate-x-1" />
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const ImpactPage = () => {
    return (
        <div className="min-h-screen bg-[#F9F8F6] font-sans selection:bg-[#0056b3]/20">

            {/* ================= 1. COMPACT BREADCRUMB HEADER ================= */}
            <header className="relative h-[45vh] min-h-[400px] overflow-hidden mt-25">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" 
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
                        <span className="text-white border-b border-[#0056b3]">Impact</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-5xl lg:text-7xl text-white leading-tight mb-6"
                    >
                        Impact That <span className="italic text-[#0056b3]">Sustains Villages</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/90 text-lg leading-relaxed max-w-2xl mb-8"
                    >
                        The VDC Program delivers measurable improvements in livestock productivity,
                        farmer income, and community-led dairy development.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-6"
                    >
                        <ImpactMetric label="Program Cycle" value="3 Months" />
                        <ImpactMetric label="Household Impact" value="100–150" />
                        <ImpactMetric label="Core Focus" value="Livelihoods" />
                    </motion.div>
                </div>
            </header>

            {/* ================= 2. CORE IMPACT AREAS ================= */}
           <section className="relative -mt-10 z-10 py-24 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Header Section - Sticky on Desktop */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Our Impact</h4>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Transformative change at the village level.
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We don't just advise; we build systems that empower farmers, streamline finances, and foster community leadership.
                            </p>
                            <button className="flex items-center gap-2 text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                                Read the Full Report <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Cards Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-6">{item.desc}</p>
                                
                                <div className="space-y-3 pt-6 border-t border-gray-100">
                                    {item.items.map((subItem, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className={`w-1.5 h-1.5 rounded-full ${item.bg.replace('bg-', 'bg-') === 'bg-gray-50' ? 'bg-gray-400' : item.color.replace('text-', 'bg-')}`}></span>
                                            <span className="text-sm font-medium text-gray-700">{subItem}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

            {/* ================= 3. VISIONARY SUMMARY ================= */}
            <section className="max-w-6xl mx-auto px-6 pb-40">
                <div className="bg-stone-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center">
                    {/* Decorative Grid Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', size: '40px 40px' }} />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="text-[#0056b3] font-bold tracking-[0.4em] text-[10px] uppercase mb-8 block">Long-Term Vision</span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8 leading-tight">
                            Each Village Dairy Counsellor is a catalyst for
                            <span className="italic text-[#0056b3]"> systemic change.</span>
                        </h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-12">
                            Beyond metrics, our program builds resilience. Each graduate becomes a key stakeholder
                            in dairy-led rural development, fostering growth for 150 households while
                            securing their own professional future.
                        </p>
                        <div className="h-px w-24 bg-[#0056b3] mx-auto mb-12" />
                        <button className="text-white text-xs font-bold uppercase tracking-widest border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all">
                            Download Impact Report
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImpactPage;
