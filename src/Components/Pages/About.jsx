import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, GraduationCap, Heart, TrendingUp, Users } from "lucide-react";

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

const StatBox = ({ label, value, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.6 }}
        className="flex flex-col p-5 bg-white border border-rose-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl"
    >
        <span className="text-[10px] uppercase tracking-widest text-rose-400 font-semibold mb-1">{label}</span>
        <span className="font-serif text-2xl text-[#881337]">{value}</span>
    </motion.div>
);

const AboutProgram = () => {
    return (
        <div className="min-h-screen bg-[#fff1f2] font-sans selection:bg-[#be123c]/20">
            <SEO 
                title="About Us" 
                description="Learn about Gramya's mission to empower rural women through the Village Dairy Counsellors program. We focus on skill development, leadership, and community impact."
                keywords="About Gramya, Women Empowerment Mission, Rural Leadership, Dairy Development, NGO India"
            />
            
            {/* ================= 1. COMPACT BREADCRUMB HEADER ================= */}
            <header className="relative h-[45vh] min-h-[400px] overflow-hidden mt-0">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" 
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
                        <span className="text-white">About Initiative</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
                    >
                        Empowering Rural Women <br/>
                        <span className="text-rose-200 text-2xl md:text-3xl font-sans font-light block mt-2">Through Skill & Leadership</span>
                    </motion.h1>

                </div>
            </header>

            {/* ================= 2. MISSION & VISION ================= */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.span variants={fadeInUp} className="text-[#be123c] font-bold tracking-widest text-xs uppercase mb-4 block">Our Mission</motion.span>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-[#881337] mb-8 leading-tight">
                            Creating sustainable livelihoods for women in rural India.
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 mb-6 leading-relaxed">
                            We believe that when you empower a woman, you empower a nation. Our program focuses on providing free, high-quality training in dairy farming, leadership, and entrepreneurship to women in villages.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-gray-600 mb-8 leading-relaxed">
                            By equipping them with technical skills and financial literacy, we aim to transform them into "Village Dairy Counsellors" who can lead their communities towards prosperity.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-4">
                            <StatBox label="Women Trained" value="5,000+" delay={0.4} />
                            <StatBox label="Villages Covered" value="120+" delay={0.5} />
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-30" />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" 
                                alt="Mission" 
                                className="w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#881337] to-transparent p-8">
                                <p className="text-white font-serif italic text-lg">"Building a future where every woman leads."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= 3. CORE VALUES ================= */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#be123c] font-bold tracking-widest text-xs uppercase">Our Values</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#881337] mt-3">Why We Do What We Do</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: "Inclusivity", desc: "Ensuring no woman is left behind, regardless of background." },
                            { icon: GraduationCap, title: "Excellence", desc: "Providing world-class training standards adapted for rural contexts." },
                            { icon: Users, title: "Community", desc: "Fostering strong support networks among women groups." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8 bg-[#fff1f2] rounded-2xl border border-rose-100 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#be123c]">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#881337] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutProgram;
