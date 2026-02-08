import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const benefits = [
  {
    title: "Professional Career Path",
    text: "Transition from traditional farming to a specialized role as a certified technical advisor within the dairy value chain.",
    icon: "💼",
  },
  {
    title: "Diverse Income Streams",
    text: "Establish a self-sustaining livelihood through service-based consulting, quality testing, and managing dairy input centers.",
    icon: "📈",
  },
  {
    title: "Direct Community Impact",
    text: "Empower local farmers by reducing cattle mortality rates and improving the economic output of small-scale milk producers.",
    icon: "🤝",
  },
  {
    title: "Official Recognition",
    text: "Gain formal status as a qualified expert, backed by government-approved training and industry-standard certification.",
    icon: "🏅",
  },
  {
    title: "Entrepreneurial Growth",
    text: "Build long-term professional stability by developing your own village-level dairy enterprise or cooperative network.",
    icon: "🏗️",
  },
  {
    title: "Technical Mastery",
    text: "Master high-demand skills in animal nutrition, clean milk production, and digital dairy management systems.",
    icon: "🔬",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChoose = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section className="relative py-25 bg-[#F9F8F6] overflow-hidden">
      
      {/* Animated Ambient Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-40 right-[-10%] w-[520px] h-[520px] bg-[#0ea771]/6 rounded-full blur-[140px]"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-[-30%] left-[-10%] w-[480px] h-[480px] bg-[#0ea771]/6 rounded-full blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-md border border-[#0ea771]/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0ea771] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-600 font-semibold">
              Program Benefits
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight">
            Why Become a{" "}
            <span className="italic text-[#0ea771] font-light">
              Village Dairy Counsellor?
            </span>
          </h2>

          <p className="mt-6 text-stone-500 text-lg font-light leading-relaxed">
            The transformation of rural dairy farming depends on skilled
            leadership at the village level. As a Dairy Counsellor, you bridge
            the gap between modern science and traditional farming.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-fr items-stretch"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="relative group perspective-[1200px] h-full"
            >
              {/* Card */}
              <div
                className="relative h-full flex flex-col bg-white/65 backdrop-blur-xl border border-white/70 
                rounded-[32px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-700"
              >
                {/* Glow Layer */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#0ea771]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#0ea771]/15 text-2xl shadow-inner">
                  {item.icon}
                </div>

                {/* Content */}
                <h4 className="relative z-10 font-serif text-xl text-stone-900 mb-4">
                  {item.title}
                </h4>

                <p className="relative z-10 text-stone-500 font-light leading-relaxed">
                  {item.text}
                </p>

                {/* Bottom Decorative Line */}
                <div className="relative z-10 mt-8 h-[1px] w-10 bg-[#0ea771]/40 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;


