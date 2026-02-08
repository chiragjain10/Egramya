import React from "react";
import { motion } from "framer-motion";

const phases = [
  {
    weeks: "Weeks 1–4",
    title: "Foundation & Dairy Science",
    desc: "This phase focuses on the core principles of livestock health, clean milk production, and animal nutrition.",
    icon: "01",
  },
  {
    weeks: "Weeks 5–8",
    title: "Business & Enterprise",
    desc: "Learning outcomes include mastering supply chain logistics, financial record-keeping, and business models.",
    icon: "02",
  },
  {
    weeks: "Weeks 9–12",
    title: "Field Practice & Certification",
    desc: "Final dedicated phase for supervised field internship, community outreach, and professional assessments.",
    icon: "03",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProgramStructure = () => {
  return (
    <section className="relative py-32 bg-[#F9F8F6] overflow-hidden">

      {/* Soft Ambient Accent */}
      <div className="absolute top-[-15%] right-[-10%] w-[420px] h-[420px] bg-[#0ea771]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-md border border-[#0ea771]/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0ea771]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-600 font-semibold">
              Program Overview
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight">
            Program{" "}
            <span className="italic text-[#0ea771] font-light">
              Structure
            </span>
          </h2>

          <p className="mt-6 text-stone-500 text-lg font-light leading-relaxed">
            A carefully designed 12-week journey that builds knowledge,
            confidence, and real-world capability step by step.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative h-full"
            >
              <div className="h-full flex flex-col bg-white/60 backdrop-blur-xl border border-white/70 rounded-[28px] p-10 shadow-[0_25px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_70px_rgba(14,167,113,0.18)]">

                {/* Phase Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
                    {phase.weeks}
                  </span>
                  <span className="font-serif text-3xl text-[#0ea771]/30">
                    {phase.icon}
                  </span>
                </div>

                {/* Content */}
                <h4 className="font-serif text-2xl text-stone-900 mb-4">
                  {phase.title}
                </h4>

                <p className="text-stone-500 font-light leading-relaxed">
                  {phase.desc}
                </p>
                <div className="relative z-10 mt-8 h-[1px] w-10 bg-[#0ea771]/40 group-hover:w-full transition-all duration-700" />
                {/* Subtle Divider */}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;
