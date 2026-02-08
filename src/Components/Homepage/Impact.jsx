import React from "react";
import { motion } from "framer-motion";

const impacts = [
  {
    title: "Farmer Outreach",
    text: "Capacity to provide technical guidance to 100+ dairy households within a village cluster.",
    iconSrc: "https://cdn.lordicon.com/dxjqvkzv.json", // Growth/Target
    delay: 0.1
  },
  {
    title: "Milk Quality",
    text: "Significant reduction in contamination and enhancement of Fat/SNF content via clean protocols.",
    iconSrc: "https://cdn.lordicon.com/vhyenefs.json", // Liquid/Milk
    delay: 0.2
  },
  {
    title: "Income Generation",
    text: "Empowering families to increase monthly revenue by optimizing feed costs and productivity.",
    iconSrc: "https://cdn.lordicon.com/lpcmunon.json", // Coins/Money
    delay: 0.3
  },
  {
    title: "Professional Role",
    text: "Appointment as a trusted Counsellor, linking farmers directly to major dairy cooperatives.",
    iconSrc: "https://cdn.lordicon.com/kdduutcr.json", // Badge/Award
    delay: 0.4
  },
  {
    title: "Rural Development",
    text: "Creating self-sustaining enterprises that reduce migration and foster local youth employment.",
    iconSrc: "https://cdn.lordicon.com/gmzxduhd.json", // Home/Community
    delay: 0.5
  },
  {
    title: "Animal Welfare",
    text: "Measurable decrease in cattle morbidity through preventive healthcare and scientific management.",
    iconSrc: "https://cdn.lordicon.com/unukghxb.json", // Shield/Protection
    delay: 0.6
  }
];

const ImpactAfterCompletion = () => {
  return (
    <section className="relative py-32 bg-[#FDFDFC] overflow-hidden">
      {/* Background Accents to match previous theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea771]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Header - Matching Curriculum Style */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-stone-200 rounded-full mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea771] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea771]"></span>
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-bold">
              Program Outcomes
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl lg:text-6xl text-stone-900 leading-tight"
          >
            Impact After{" "}
            <span className="italic text-[#0ea771] font-light underline decoration-[#0ea771]/20 underline-offset-8">
              Completion
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-stone-500 text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Graduates serve as pivotal change agents in the rural economy, 
            creating a measurable ripple effect across the dairy value chain.
          </motion.p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: item.delay }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-white border border-stone-100 rounded-[32px] p-8 lg:p-10 transition-all duration-500 group-hover:border-[#0ea771]/20 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
                
                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 mb-8 rounded-2xl bg-stone-50 flex items-center justify-center transition-colors duration-500 group-hover:bg-[#0ea771]/10">
                  <lord-icon
                    src={item.iconSrc}
                    trigger="hover"
                    stroke="light"
                    colors="primary:#1c1917,secondary:#0ea771"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>

                {/* Content */}
                <h4 className="font-serif text-2xl text-stone-900 mb-4 group-hover:text-[#0ea771] transition-colors duration-300">
                  {item.title}
                </h4>
                
                <p className="text-stone-500 font-light leading-relaxed text-[15px]">
                  {item.text}
                </p>

                {/* Bottom Graphic - Subtle Progress Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#0ea771] transition-all duration-700 group-hover:w-1/3 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAfterCompletion;