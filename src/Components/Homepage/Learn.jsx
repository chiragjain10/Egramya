import React from "react";
import { motion } from "framer-motion";

/* ---------- SVG ICONS (OPTION 1) ---------- */

const DairyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-12 h-12 text-[#0ea771] icon-float"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10h16v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
    <circle cx="8" cy="12" r="1" />
    <circle cx="16" cy="12" r="1" />
    <path d="M6 10V7M18 10V7" />
  </svg>
);

const BusinessIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-12 h-12 text-[#0ea771] icon-float"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="M7 15l4-4 3 3 5-6" />
    <path d="M14 8h5v5" />
  </svg>
);

const CommunityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-12 h-12 text-[#0ea771] icon-float"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
    <path d="M14 20c0-2 2-3 4-3s4 1 4 3" />
  </svg>
);

/* ---------- DATA ---------- */

const categories = [
  {
    title: "Technical Dairy Skills",
    icon: <DairyIcon />,
    skills: [
      "Advanced animal nutrition & feed management",
      "Cattle breed identification & health monitoring",
      "Clean milk production & sanitation standards",
      "Preventive care & basic first-aid protocols",
      "Data-driven herd management techniques",
    ],
  },
  {
    title: "Business & Enterprise",
    icon: <BusinessIcon />,
    skills: [
      "Supply chain & cold-chain management",
      "Milk quality testing & transparent pricing",
      "Financial planning & cooperative management",
      "Dairy entrepreneurship & credit linkage",
      "Digital record-keeping & inventory systems",
    ],
  },
  {
    title: "Community & Advisory",
    icon: <CommunityIcon />,
    skills: [
      "Farmer outreach & relationship building",
      "Technical counseling & field demonstrations",
      "Leading village-level extension programs",
      "Conflict resolution & community leadership",
      "Facilitating sustainable farming knowledge",
    ],
  },
];

/* ---------- ANIMATION ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  },
};

const WhatYouWillLearn = () => {
  return (
    <section className="relative py-32 bg-[#FDFDFC] overflow-hidden">

      {/* Background */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0ea771]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-stone-200 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea771] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea771]"></span>
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-bold">
              Curriculum Overview
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900">
            What You Will{" "}
            <span className="italic text-[#0ea771] font-light">Learn</span>
          </h2>

          <p className="mt-8 text-stone-500 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Master a diverse set of professional skills designed to transform you
            into a high-impact Village Dairy Counsellor.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full flex flex-col bg-white border border-stone-200/80 rounded-[40px] p-10 
                transition-all duration-700 group-hover:border-[#0ea771]/30 
                group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">

                <span className="absolute top-10 right-10 text-5xl font-serif text-stone-100 group-hover:text-[#0ea771]/10">
                  0{index + 1}
                </span>

                {/* ICON (REPLACED, DESIGN UNCHANGED) */}
                <div className="mb-10">
                  <div className="w-20 h-20 flex items-center justify-center rounded-[24px] bg-stone-50 group-hover:bg-[#0ea771]/10 transition-colors">
                    {cat.icon}
                  </div>
                </div>

                <h4 className="font-serif text-2xl text-stone-900 mb-8">
                  {cat.title}
                </h4>

                <ul className="space-y-5 flex-grow">
                  {cat.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-stone-600 group-hover:text-stone-900 transition font-light"
                    >
                      <div className="mt-1.5 w-[6px] h-[6px] rounded-full bg-stone-300 group-hover:bg-[#0ea771]" />
                      <span className="text-[15px]">{skill}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-stone-100 opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase tracking-widest text-[#0ea771] font-bold">
                    Expertise Module
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
