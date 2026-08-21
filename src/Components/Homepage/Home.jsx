import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ArrowRight,
  Users,
  Award,
  MapPin,
  BookOpen,
  ChevronLeft,
  Megaphone,
  CheckCircle2,
  Calendar,
  FileText,
  Building2,
  ScrollText, 
  ShieldCheck, 
  GraduationCap, 
  Globe,
  Sparkles
} from "lucide-react";

import SEO from "../SEO";
import WhatsAppWidget from "../WhatsAppWidget";

// --- CountUp Helper Component ---
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

// --- Hero Slider Component ---
const HeroSlider = () => {
  const slides = [
    {
      img: "img/image/ (10).jpeg",
      title: "Skill. Innovate. Empower.",
      subtitle: "Advancing Skills, Entrepreneurship & Sustainable Livelihoods"
    },
    {
      img: "img/image/ (20).jpeg",
      title: "Skill Development Mission",
      subtitle: "Free Quality Training for Sustainable Livelihoods"
    },
    {
      img: "img/image/ (1).jpeg",
      title: "Leadership & Enterprise",
      subtitle: "Nurturing Tomorrow's Grassroots Village Leaders"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[520px] md:h-[620px] overflow-hidden bg-slate-950">

      {/* Background Image with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover opacity-55"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Vignette & Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-white space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-rose-200 text-xs font-semibold tracking-widest uppercase rounded-full shadow-lg">
            <Sparkles size={13} className="text-rose-300" />
            <span>National Skill Development Initiative</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed border-l-2 border-[#be123c] pl-4">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/enroll"
              className="px-7 py-3.5 bg-gradient-to-r from-[#881337] to-[#be123c] hover:from-[#71102e] hover:to-[#9f0f32] text-white font-semibold text-sm rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-rose-900/30 transform hover:-translate-y-0.5"
            >
              <span>Apply Now</span> 
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/about"
              className="px-7 py-3.5 bg-white/90 backdrop-blur-md hover:bg-white text-[#881337] font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              Read More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white p-3 rounded-2xl transition duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white p-3 rounded-2xl transition duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Indicator Dots */}
      <div className="absolute bottom-8 right-6 lg:right-16 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              current === idx ? "w-8 bg-[#be123c]" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Stats Strip Component ---
const StatsStrip = () => {
  const stats = [
    { label: "Women Trained", value: 15000 },
    { label: "Districts Covered", value: 24 },
    { label: "Villages Reached", value: 850 },
    { label: "Employment Generated", value: 12000 }
  ];

  return (
    <div className="bg-gradient-to-r from-[#881337] via-[#6f0f2c] to-[#881337] text-white py-12 border-t-2 border-rose-600/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/15 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center pl-4 first:pl-0 group">
              <span className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-1.5 group-hover:scale-105 transition-transform duration-300">
                <CountUp end={stat.value} />
              </span>
              <span className="text-xs uppercase tracking-widest text-rose-200/90 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- News Ticker Component ---
const NewsTicker = () => {
  return (
    <div className="bg-slate-50/90 border-b border-slate-200/70 py-3 overflow-hidden flex items-center shadow-sm relative z-20">
      <div className="bg-gradient-to-r from-[#881337] to-[#be123c] text-white px-4 py-1.5 text-xs font-semibold uppercase mx-4 md:ml-16 shrink-0 rounded-full shadow-sm flex items-center gap-2">
        <Megaphone size={13} /> 
        <span>Latest Updates</span>
      </div>
      <div className="whitespace-nowrap overflow-hidden flex-1 relative">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="inline-block text-xs sm:text-sm text-slate-800 font-medium"
        >
          <span className="mx-6">📢 <strong>11th Feb 2026:</strong> Launching Ceremony of Village Dairy Counsellors Program.</span>
          <span className="mx-2 text-slate-300">|</span>
          <span className="mx-6">🤝 <strong>Strategic Partnership:</strong> MoU Signed between FIST, IIT, PATNA and GRAMYA.</span>
          <span className="mx-2 text-slate-300">|</span>
          <span className="mx-6">🏛️ <strong>Hon’ble Chief Minister of MP</strong> likely to attend upcoming Workshop.</span>
          <span className="mx-2 text-slate-300">|</span>
          <span className="mx-6">🗓️ <strong>Tentative Workshop Dates:</strong> 23 Feb or 9 March 2026.</span>
        </motion.div>
      </div>
    </div>
  );
};

// --- Module Slider Component (1 Slide per row on Mobile, 2 Slides per row on Desktop) ---
const ModuleSlider = () => {
  const modules = [
    {
      num: "01",
      title: "Dairy Science & Husbandry",
      desc: "Comprehensive training on cattle breeds, nutrition management, clean milk production, hygiene standards, and disease prevention.",
      icon: Users,
      badge: "Core Technical Module"
    },
    {
      num: "02",
      title: "Rural Entrepreneurship & Business",
      desc: "Business planning, micro-dairy financial management, direct market linkages, self-help group governance, and credit accessibility.",
      icon: Award,
      badge: "Enterprise & Livelihood"
    },
    {
      num: "03",
      title: "Grassroots Leadership & Soft Skills",
      desc: "Community mobilization, public speaking, conflict resolution, team building, and decision-making for village dairy counsellors.",
      icon: Megaphone,
      badge: "Leadership & Governance"
    },
    {
      num: "04",
      title: "Digital Literacy & Smart Tech",
      desc: "Computer basics, mobile applications for dairy data tracking, IoT analyzer operation, and digital financial transactions.",
      icon: BookOpen,
      badge: "Agri-Tech & Digital Skills"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Maximum slide index: mobile shows 1 slide at a time (0..3), desktop shows 2 slides at a time (0..2)
  const maxIndex = isMobile ? modules.length - 1 : modules.length - 2;

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isMobile]);

  return (
    <div className="relative py-4 px-2">
      
      {/* Slider Viewport Container */}
      <div className="overflow-hidden rounded-3xl">
        <div 
          className="flex transition-transform duration-700 ease-out gap-6"
          style={{ 
            transform: isMobile 
              ? `translateX(calc(-${current * 100}% - ${current * 24}px))` 
              : `translateX(-${current * 50}%)`,
          }}
        >
          {modules.map((module, idx) => (
            <div 
              key={idx} 
              className="w-full md:w-[calc(50%-12px)] shrink-0 flex flex-col"
            >
              <div className="p-[1px] bg-gradient-to-b from-rose-200/90 via-rose-100/50 to-rose-200/80 rounded-[2rem] shadow-xl shadow-rose-950/[0.04] h-full flex flex-col">
                <div className="bg-white rounded-[1.95rem] p-7 sm:p-8 border border-white/80 h-full flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/60 rounded-bl-full pointer-events-none -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                  <div className="space-y-5 relative z-10">
                    
                    {/* Header: Icon & Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#881337] to-[#be123c] text-white flex items-center justify-center rounded-2xl shadow-lg shadow-rose-900/20 group-hover:scale-105 transition-transform">
                        <module.icon size={26} />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-rose-50/90 text-[#881337] text-[11px] font-extrabold rounded-full border border-rose-200/80">
                          {module.badge}
                        </span>
                        <span className="text-xl font-black text-rose-200/80 tracking-tighter font-mono">
                          {module.num}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#881337] mb-2.5 tracking-tight group-hover:text-[#be123c] transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {module.desc}
                      </p>
                    </div>

                  </div>

                  {/* Action CTA Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100 relative z-10 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">Modules 1 to 6 Syllabus</span>

                    <Link 
                      to="/structure" 
                      className="inline-flex items-center gap-2 text-[#be123c] hover:text-[#881337] text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all"
                    >
                      <span>Explore Curriculum</span> 
                      <ChevronRight size={15} />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper Controls: Prev/Next Arrows & Navigation Dots */}
      <div className="flex items-center justify-between mt-8 px-2">
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                current === idx ? 'w-8 bg-gradient-to-r from-[#881337] to-[#be123c]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-3 bg-white text-[#881337] hover:bg-[#881337] hover:text-white rounded-full border border-rose-200/80 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white text-[#881337] hover:bg-[#881337] hover:text-white rounded-full border border-rose-200/80 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

    </div>
  );
};

// --- Enroll Form Component ---
const EnrollForm = () => {
  return (
    <div className="p-[1px] bg-gradient-to-b from-rose-200/90 via-rose-100/50 to-rose-200/80 rounded-3xl shadow-xl shadow-rose-950/[0.04]">
      <div className="bg-white rounded-[1.45rem] p-8 border border-white/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-rose-50/70 rounded-bl-full pointer-events-none -mr-4 -mt-4" />
        
        <h3 className="text-xl sm:text-2xl font-semibold text-[#881337] mb-1 tracking-tight">
          Application Form
        </h3>
        <p className="text-xs text-slate-500 font-medium mb-6">Fill in your details to register for the upcoming cohort.</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 outline-none transition text-slate-900 font-medium text-sm placeholder:text-slate-400 placeholder:font-normal" 
                placeholder="Enter your name" 
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">Mobile Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 outline-none transition text-slate-900 font-medium text-sm placeholder:text-slate-400 placeholder:font-normal" 
                placeholder="+91 98765 43210" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 outline-none transition text-slate-900 font-medium text-sm placeholder:text-slate-400 placeholder:font-normal" 
              placeholder="email@example.com" 
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">Statement of Purpose</label>
            <textarea 
              className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 outline-none transition text-slate-900 font-medium text-sm placeholder:text-slate-400 placeholder:font-normal h-24" 
              placeholder="Why do you want to join this program?"
            ></textarea>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-[#881337] to-[#be123c] hover:from-[#71102e] hover:to-[#9f0f32] text-white font-semibold rounded-xl transition-all duration-300 text-sm shadow-md shadow-rose-900/20 transform hover:-translate-y-0.5">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Strategic Updates Component ---
const StrategicUpdates = () => {
  return (
    <section className="py-20 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Partner Ecosystem Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-14 pb-8 border-b border-slate-200/80">
          <div className="flex flex-col">
            <span className="text-[#be123c] font-semibold tracking-widest uppercase text-xs mb-2 flex items-center gap-2">
              <ShieldCheck size={16} /> 
              <span>Strategic Alliance 2026</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#881337] tracking-tight">
              Institutional Synergy
            </h2>
          </div>

          {/* Logo/Name Badges */}
          <div className="flex flex-wrap gap-3">
            {['FIST, IIT, PATNA', 'IHM Bhopal', 'SGSU Global', 'GRAMYA'].map((partner) => (
              <span key={partner} className="px-4 py-2 bg-white shadow-sm border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700">
                {partner}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: Content Body */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light mb-8">
                We are proud to announce the formation of a <strong>Quad-Institutional Consortium</strong>. This landmark collaboration between <strong>GRAMYA</strong>, <strong>FIST, IIT, PATNA</strong>, <strong>IHM</strong>, and <strong>Scope Global Skill University (SGSU)</strong> establishes a premier ecosystem for rural industrialization.
              </p>

              <div className="grid md:grid-cols-3 gap-5 mb-10">
                <div className="p-5 bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#be123c] mb-3"><GraduationCap size={22} /></div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">FIST, IIT, PATNA</h4>
                  <p className="text-xs text-slate-600 leading-snug">Technological R&D & Digital Dairy Infrastructure</p>
                </div>
                <div className="p-5 bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#be123c] mb-3"><Building2 size={22} /></div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">IHM & SGSU</h4>
                  <p className="text-xs text-slate-600 leading-snug">Quality Standards & Global Skill Certification</p>
                </div>
                <div className="p-5 bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#be123c] mb-3"><Globe size={22} /></div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">GRAMYA</h4>
                  <p className="text-xs text-slate-600 leading-snug">Last-mile Implementation & Village Leadership</p>
                </div>
              </div>

              {/* Executive Briefing Highlight */}
              <div className="bg-white p-7 border border-rose-100 rounded-2xl relative shadow-xl shadow-rose-950/[0.03] my-10">
                <div className="absolute -top-3.5 left-6 bg-[#881337] text-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                  Executive Briefing
                </div>
                <h4 className="font-semibold text-[#881337] mb-3 flex items-center gap-2 text-lg pt-1">
                  <ScrollText size={20} /> Engagement with CM's Secretariat
                </h4>
                <p className="text-slate-700 italic border-l-2 border-rose-300 pl-4 mb-4 text-sm leading-relaxed">
                  "On January 20th, 2026, the leadership delegation led by Dr. Ranjan Kumar and Dr. Bhaskar Mishra presented the multi-partner roadmap to Mr. Chandrashekhar Valimbe, Secretary to the Hon’ble Chief Minister."
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  The initiative aligns with the state's declaration of <strong>2026 as the 'Agriculture Year'</strong>. The Hon’ble Chief Minister has recognized this consortium as a vital engine for making Madhya Pradesh a national leader in high-tech, certified milk production.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                This partnership ensures that Village Dairy Counsellors are not only trained in traditional husbandry but are also certified under <strong>Global Skill Standards (SGSU)</strong> and <strong>Hospitality Quality Protocols (IHM)</strong>, backed by <strong>FIST, IIT, PATNA's</strong> technical excellence.
              </p>
            </div>
          </div>

          {/* Right: Sidebar Timeline & Official Resources */}
          <div className="lg:w-1/3 space-y-6">
            {/* Event Timeline */}
            <div className="p-[1px] bg-gradient-to-b from-[#881337] to-[#be123c] rounded-3xl shadow-xl">
              <div className="bg-[#881337] text-white p-7 rounded-[1.45rem] relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                  <Calendar size={180} />
                </div>
                
                <h3 className="text-lg font-semibold mb-6 border-b border-rose-400/30 pb-3 relative z-10 tracking-tight">
                  Key Consortium Dates
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    { day: '11', month: 'FEB', title: 'Alliance Launch', desc: 'Consortium Sign-off Ceremony' },
                    { day: '23', month: 'FEB', title: 'State Workshop', desc: 'CM Keynote (Tentative)' },
                    { day: '09', month: 'MAR', title: 'Technical Summit', desc: 'Curriculum Validation @ FIST, IIT, PATNA' }
                  ].map((event, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl text-center min-w-[3.2rem] border border-white/20 group-hover:bg-white/20 transition-all shrink-0">
                        <span className="block text-[10px] font-bold text-rose-200 uppercase">{event.month}</span>
                        <span className="block text-xl font-semibold">{event.day}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm leading-snug group-hover:text-rose-200 transition-colors">{event.title}</p>
                        <p className="text-xs text-rose-200/80 mt-0.5">{event.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Resources */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-lg shadow-rose-950/[0.02]">
              <h3 className="text-base font-semibold text-slate-900 mb-4 tracking-tight">Official Documents</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => {
                    const pdfs = ['img/Mou IIM.pdf', 'img/Mou IIT.pdf', 'img/Mou SGSU.pdf'];
                    pdfs.forEach((pdf, index) => {
                      setTimeout(() => {
                        const link = document.createElement('a');
                        link.href = pdf;
                        link.download = pdf.split('/').pop();
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }, index * 300);
                    });
                  }}
                  className="w-full flex items-center gap-3.5 p-3 rounded-xl hover:bg-rose-50/80 transition-all group text-left"
                >
                  <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-white group-hover:text-[#be123c] text-slate-500 shadow-sm transition-all shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">MoU & Certifications</p>
                    <p className="text-[10px] text-slate-400 font-medium">Verified @ Consortium</p>
                  </div>
                </button>

                <Link to="/structure" className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-rose-50/80 transition-all group">
                  <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-white group-hover:text-[#be123c] text-slate-500 shadow-sm transition-all shrink-0">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Training Framework</p>
                    <p className="text-[10px] text-slate-400 font-medium">Quality & Standards</p>
                  </div>
                </Link>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- MoU Gallery Component ---
const MouGallery = () => {
  const images = [
    "img/image/a (1).jpeg",
    "img/image/a (2).jpeg",
    "img/image/a (3).jpeg",
    "img/image/a (4).jpeg",
    "img/image/a (5).jpeg",
    "img/image/a (6).jpeg",
    "img/image/a (7).jpeg",
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[#881337] tracking-tight">MoU Signing & Strategic Meetings</h2>
          <div className="w-20 h-1 bg-[#be123c] mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto font-normal">Glimpses of the strategic partnership between GRAMYA and FIST, IIT, PATNA, strengthening the foundation for rural development.</p>
        </div>

        {/* Scrolling Gallery */}
        <div className="overflow-hidden relative group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...images, ...images].map((src, idx) => (
              <div key={idx} className="min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-md border-2 border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img src={src} alt="MoU Signing" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Home Component Main View ---
const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <SEO 
        title="Home | Village Dairy Counsellors Program" 
        description="Gramya in collaboration with FIST, IIT, PATNA empowers rural women through skill development, dairy farming, and entrepreneurship."
      />

      <HeroSlider />
      <NewsTicker />

      {/* Strategic Alliance Updates */}
      <StrategicUpdates />
      <MouGallery />

      <StatsStrip />

      {/* About & Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="w-14 h-1 bg-[#be123c] mb-6 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#881337] mb-6 leading-tight tracking-tight">
              Transforming Rural Livelihoods Through <br />
              <span className="text-slate-900 font-normal">Women Empowerment</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
              The Village Dairy Counsellors (VDC) program is a flagship initiative designed to uplift women in rural India. By providing comprehensive training in modern dairy practices, financial literacy, and leadership, we aim to create a cadre of skilled professionals who will lead the White Revolution 2.0.
            </p>
            <ul className="space-y-3.5 mb-8">
              {['Government & Institutional Certified Training', 'Employment & Micro-Enterprise Placement Assistance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-base">
                  <div className="bg-rose-50 p-1 rounded-full text-[#be123c] shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-block px-7 py-3.5 border border-[#881337] text-[#881337] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#881337] hover:text-white transition-all rounded-xl shadow-sm">
              Read More About Us
            </Link>
          </div>

          <div className="relative">
            <div className="absolute top-5 -left-5 w-full h-full border-2 border-rose-200 z-0 rounded-2xl pointer-events-none"></div>
            <img
              src="img/b2.jpeg"
              alt="Rural Women Empowerment"
              className="relative z-10 w-full h-[460px] object-cover shadow-xl rounded-2xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-5 shadow-2xl rounded-2xl z-20 max-w-xs border-l-4 border-[#be123c]">
              <p className="text-[#881337] font-semibold text-base leading-snug">"Empowering a woman means empowering an entire nation."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Modules Slider */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-10">
            <span className="text-[#be123c] font-semibold tracking-widest uppercase text-xs">Our Curriculum</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#881337] mt-2 tracking-tight">Structured Training Modules</h2>
            <div className="w-20 h-1 bg-[#be123c] mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base font-normal">Curriculum designed by experts from FIST, IIT, PATNA, IHM, SGSU, and Gramya.</p>
          </div>

          <ModuleSlider />
        </div>
      </section>

      {/* Join the Movement & Enroll Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-[#be123c] font-semibold tracking-widest uppercase text-xs">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#881337] mt-2 mb-4 tracking-tight">Join the Movement</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-base font-normal">
              Are you a woman from a rural background looking to change your life? Or do you know someone who deserves this opportunity? Apply now for our upcoming batch.
            </p>

            <div className="bg-rose-50/60 p-7 border border-rose-200/80 rounded-2xl mb-8 shadow-sm">
              <h4 className="font-semibold text-[#881337] mb-4 flex items-center gap-2 text-lg">
                <MapPin size={20} className="text-[#be123c]" /> 
                <span>Training Centers</span>
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-slate-700 font-medium text-sm">
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></span> Patna, Bihar</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></span> Bhopal, Madhya Pradesh</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></span> Varanasi, Uttar Pradesh</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></span> Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="bg-[#881337] text-white p-8 rounded-2xl text-center shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <h3 className="text-xl font-semibold mb-1 relative z-10">Helpline Support</h3>
              <p className="text-rose-200 text-xs mb-4 relative z-10">Monday - Saturday (10 AM - 6 PM)</p>
              <p className="text-3xl sm:text-4xl font-semibold relative z-10 text-white tracking-tight">+91 1800-123-4567</p>
            </div>
          </div>

          <EnrollForm />
        </div>
      </section>

    </div>
  );
};

export default Home;
