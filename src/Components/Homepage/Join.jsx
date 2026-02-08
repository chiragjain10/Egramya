import React from "react";
import { motion } from "framer-motion";

const personas = [
  {
    tag: "Career Starters",
    title: "Rural Youth",
    iconSrc: "https://cdn.lordicon.com/hbwlzvqb.json", // Growth/Plant
    desc: "Seeking professional career opportunities and sustainable livelihoods within their own local communities.",
    delay: 0.1
  },
  {
    tag: "Growth Mindset",
    title: "Dairy Farmers",
    iconSrc: "https://cdn.lordicon.com/pbrgwaas.json", // Animal/Cow
    desc: "Practicing farmers looking to modernize operations, improve milk quality, and increase farm profitability.",
    delay: 0.2
  },
  {
    tag: "Field Experts",
    title: "Livestock Assistants",
    iconSrc: "https://cdn.lordicon.com/usownftb.json", // Medical/Stethoscope
    desc: "Paravets and assistants aiming to specialize in professional dairy advisory and extension services.",
    delay: 0.3
  },
  {
    tag: "Community Leaders",
    title: "SHG Members",
    iconSrc: "https://cdn.lordicon.com/uukerxxv.json", // People/Handshake
    desc: "Self-help group members working toward women's empowerment and village economic independence.",
    delay: 0.4
  },
  {
    tag: "Strategy Partners",
    title: "Agri Professionals",
    iconSrc: "https://cdn.lordicon.com/mrdiiasv.json", // Briefcase/Settings
    desc: "Rural development professionals interested in ground-level field implementation and measurable impact.",
    delay: 0.5
  },
  {
    tag: "New Ventures",
    title: "Entrepreneurs",
    iconSrc: "https://cdn.lordicon.com/fpipqvgu.json", // Building/Idea
    desc: "Individuals looking to start village-level dairy cooperatives or milk collection centers.",
    delay: 0.6
  }
];

const WhoShouldJoin = () => {
  return (
    <section className="relative py-32 bg-[#FDFDFC] overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0056b3]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-stone-200 rounded-full mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#0056b3]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-bold">
              Audience & Eligibility
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl lg:text-6xl text-stone-900 leading-tight">
            Designed for{" "}
            <span className="italic text-[#0056b3] font-light">
              Tomorrow's
            </span>{" "}
            Leaders
          </h2>

          <p className="mt-8 text-stone-500 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            The Village Dairy Counsellor Program is open to diverse rural stakeholders 
            dedicated to transforming the backbone of the rural economy.
          </p>
        </div>

        {/* Persona Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {personas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group relative"
            >
              <div className="h-full bg-white/40 backdrop-blur-sm border border-stone-100 p-8 rounded-[32px] transition-all duration-500 hover:bg-white hover:border-[#0056b3]/20 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)]">
                
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center group-hover:bg-[#0056b3]/10 transition-colors duration-500">
                    <lord-icon
                      src={item.iconSrc}
                      trigger="hover"
                      colors="primary:#121331,secondary:#0056b3"
                      style={{ width: "32px", height: "32px" }}
                    />
                  </div>
                  <span className="px-3 py-1 bg-white border border-stone-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-[#0056b3] group-hover:border-[#0056b3]/20 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-stone-900 mb-4 group-hover:text-[#0056b3] transition-colors">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm mb-6">{item.desc}</p>
                
                <div className="flex items-center gap-2 text-[#0056b3] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner - Reimagined as a Premium Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-stone-900 rounded-[40px] p-10 lg:p-16 text-white"
        >
          {/* Subtle Banner Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0056b3]/20 to-transparent" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl lg:text-4xl mb-6">
                No Advanced Degree Required
              </h3>
              <p className="text-stone-400 text-lg font-light leading-relaxed">
                We value passion and field experience over academic certificates. 
                Our curriculum focuses on <span className="text-white font-normal underline decoration-[#0056b3] underline-offset-4">practical, field-first learning</span> to prepare you for the real world.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap px-10 py-5 bg-[#0056b3] text-white rounded-full font-bold tracking-wider hover:bg-[#004494] transition-all shadow-xl shadow-[#0056b3]/20"
            >
              START YOUR JOURNEY →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;