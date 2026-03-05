import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { ChevronRight, GraduationCap, Heart, Users } from "lucide-react";

// --- Sub-Components ---
const StatBox = ({ label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay, duration: 0.6 }}
    className="flex flex-col p-6 bg-white border border-rose-100 shadow-sm rounded-2xl"
  >
    <span className="text-[10px] uppercase tracking-widest text-[#be123c] font-bold mb-1">{label}</span>
    <span className="text-3xl font-bold text-[#881337]">{value}</span>
  </motion.div>
);

const AboutProgram = () => {
  return (
    <div className="min-h-screen bg-[#fff1f2] font-sans selection:bg-[#be123c]/20">
      <SEO
        title="About Us"
        description="Learn about Gramya's mission to empower rural women through the Village Dairy Counsellors program."
        keywords="About Gramya, Women Empowerment, Rural Leadership"
      />

      {/* ================= 1. HERO HEADER ================= */}
      <header className="relative h-[60vh] min-h-[500px] overflow-hidden bg-[#fff1f2]">

        {/* IMAGE */}
        <div className="absolute inset-0">
          <img
            src="img/image/ (1).jpeg"
            alt="Rural empowerment"
            className="w-full h-full object-cover object-center"
          />

          {/* LIGHT OVERLAY FOR VISIBILITY */}
          <div className="absolute inset-0 bg-white/60" />

          {/* SOFT BOTTOM GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#fff1f2] via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-24">

          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#881337] mb-6"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#be123c]">About Initiative</span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-[#881337] leading-tight max-w-4xl"
          >
            Empowering Rural Women and Youth
            <span className="block mt-3 text-xl md:text-2xl font-medium text-[#be123c]">
              Through Skill & Leadership
            </span>
          </motion.h1>

          {/* SUBTEXT (Optional but recommended) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-2xl text-gray-700 text-lg leading-relaxed"
          >
            Creating inclusive pathways for sustainable livelihoods by nurturing skills,
            confidence, and leadership at the grassroots level.
          </motion.p>

        </div>
      </header>

      {/* ================= 2. MISSION & VISION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#be123c] font-bold tracking-wider uppercase text-sm">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#881337] mt-3 mb-8 leading-tight">
              Creating sustainable livelihoods for women and youth in rural India.
            </h2>
            <div className="w-20 h-1.5 bg-[#fb7185] rounded-full mb-8"></div>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We believe that when you empower women and youth, you strengthen entire communities. Our programs provide free, high-quality training in agriculture, entrepreneurship, digital skills, and leadership to help rural individuals build sustainable livelihoods.
            </p>

            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              Through initiatives like <strong className="text-[#881337]">Village Counsellor & Shakti Programme</strong>,
              <strong className="text-[#881337]"> Annapurna – Women in Agriculture</strong>,
              <strong className="text-[#881337]"> Entrepreneurship</strong>,
              <strong className="text-[#881337]"> Marketing Skills</strong>,
              <strong className="text-[#881337]"> IT & AI</strong>, and
              <strong className="text-[#881337]"> Financial Inclusion</strong>,
              we equip participants with practical knowledge, leadership abilities, and financial literacy to create opportunities and drive growth in their communities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <StatBox label="Women Trained" value="5,000+" delay={0.1} />
              <StatBox label="Villages Covered" value="120+" delay={0.2} />
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="img/image/ (10).jpeg"
                alt="Community work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#881337]/80 to-transparent flex flex-col justify-end p-10">
                <p className="text-white font-medium italic text-xl">"Building a future where every woman leads."</p>
              </div>
            </motion.div>
            {/* Aesthetic background element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#fb7185]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* ================= 3. CORE VALUES ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#be123c] font-bold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#881337] mt-3 mb-6">Why We Do What We Do</h2>
            <div className="w-24 h-1 bg-[#fb7185] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Inclusivity", desc: "Ensuring no woman is left behind, regardless of her socio-economic background." },
              { icon: GraduationCap, title: "Excellence", desc: "Providing world-class training standards adapted for local rural contexts." },
              { icon: Users, title: "Community", desc: "Fostering strong support networks and peer-to-peer learning among women groups." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-[#fff1f2] rounded-3xl border border-rose-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-[#be123c] group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#881337] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProgram;
