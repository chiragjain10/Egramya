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
  ScrollText
} from "lucide-react";

import SEO from "../SEO";
import WhatsAppWidget from "../WhatsAppWidget";

// --- Components ---

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

  return <span>{count}+</span>;
};

const HeroSlider = () => {
  const slides = [
    {
      img: "img/image/ (10).jpeg",
      title: "Empowering Rural Women",
      subtitle: "Building Self-Reliant Communities through Dairy Farming"
    },
    {
      img: "img/image/ (20).jpeg",
      title: "Skill Development Mission",
      subtitle: "Free Training for Sustainable Livelihoods"
    },
    {
      img: "img/image/ (1).jpeg",
      title: "Leadership & Enterprise",
      subtitle: "Creating Tomorrow's Village Leaders"
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
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gray-900">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-block px-3 py-1 bg-[#be123c] text-xs font-bold uppercase tracking-wider mb-4 border-l-4 border-white">
            National Skill Development Initiative
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            {slides[current].title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 border-l-2 border-[#be123c] pl-4">
            {slides[current].subtitle}
          </p>

          <div className="flex gap-4">
            <Link
              to="/enroll"
              className="px-6 py-3 bg-[#be123c] hover:bg-[#9f1239] text-white font-semibold transition flex items-center gap-2 shadow-lg"
            >
              Apply Now <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 bg-white text-[#881337] font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Read More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 right-6 lg:right-16 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all ${current === idx
              ? "w-8 bg-[#be123c]"
              : "w-4 bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const StatsStrip = () => {
  const stats = [
    { label: "Women Trained", value: 15000 },
    { label: "Districts Covered", value: 24 },
    { label: "Villages Reached", value: 850 },
    { label: "Employment Generated", value: 12000 }
  ];

  return (
    <div className="bg-[#881337] text-white py-12 border-t-4 border-[#be123c] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center pl-4 first:pl-0 group cursor-default">
              <span className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={stat.value} />
              </span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-rose-200 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsTicker = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3 overflow-hidden flex items-center shadow-sm relative z-20">
      <div className="bg-[#be123c] text-white px-6 py-1.5 text-xs font-bold uppercase mx-4 md:ml-16 shrink-0 rounded-sm shadow-md flex items-center gap-2">
        <Megaphone size={14} /> Latest Updates
      </div>
      <div className="whitespace-nowrap overflow-hidden flex-1 relative">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="inline-block text-sm text-[#881337] font-medium"
        >
          <span className="mx-6">📢 <strong>11th Feb 2026:</strong> Launching Ceremony of Village Dairy Counsellors Program.</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="mx-6">🤝 <strong>Strategic Partnership:</strong> MoU Signed between FIST, IIT Patna and GRAMYA.</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="mx-6">🏛️ <strong>Hon’ble Chief Minister of MP</strong> likely to attend upcoming Workshop.</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="mx-6">🗓️ <strong>Tentative Workshop Dates:</strong> 23 Feb or 9 March 2026.</span>
        </motion.div>
      </div>
    </div>
  );
};

const ModuleSlider = () => {
  const modules = [
    {
      title: "Dairy Science",
      desc: "Comprehensive training on cattle breeds, nutrition management, hygiene standards, and milk production enhancement techniques.",
      icon: Users,
      color: "bg-[#881337]"
    },
    {
      title: "Entrepreneurship",
      desc: "Business planning, financial management, market linkages, self-help group formation, and credit accessibility.",
      icon: Award,
      color: "bg-[#be123c]"
    },
    {
      title: "Leadership Skills",
      desc: "Community mobilization, communication skills, conflict resolution, and decision-making for rural development.",
      icon: Megaphone,
      color: "bg-[#fb7185]"
    },
    {
      title: "Digital Literacy",
      desc: "Basic computer skills, using mobile applications for dairy management, and digital financial transactions.",
      icon: BookOpen,
      color: "bg-[#9f1239]"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % modules.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [modules.length]);

  return (
    <div className="relative overflow-hidden py-10 px-2">
      <div className="flex gap-6 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {modules.map((module, idx) => (
          <div key={idx} className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0">
            <div className="bg-white p-8 border border-gray-200 hover:border-[#be123c] transition-all duration-300 shadow-sm hover:shadow-xl group h-full rounded-xl relative top-0 hover:-top-2">
              <div className={`w-16 h-16 ${module.color} text-white flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                <module.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#be123c] transition-colors">{module.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">{module.desc}</p>
              <Link to="/structure" className="inline-flex items-center gap-2 text-[#be123c] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all">
                View Curriculum <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {modules.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-[#be123c]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

const EnrollForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl border-t-4 border-[#be123c] p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -z-0"></div>
      <h3 className="text-2xl font-bold text-[#881337] mb-2 border-b border-gray-100 pb-4 relative z-10 font-serif">
        Application Form
      </h3>
      <p className="text-sm text-gray-500 mb-6 relative z-10">Fill in your details to register for the upcoming batch.</p>

      <form className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
            <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-sm focus:border-[#be123c] focus:ring-1 focus:ring-[#be123c] outline-none transition" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number</label>
            <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-sm focus:border-[#be123c] focus:ring-1 focus:ring-[#be123c] outline-none transition" placeholder="+91" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
          <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-sm focus:border-[#be123c] focus:ring-1 focus:ring-[#be123c] outline-none transition" placeholder="email@example.com" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Statement of Purpose</label>
          <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-sm focus:border-[#be123c] focus:ring-1 focus:ring-[#be123c] outline-none transition h-24" placeholder="Why do you want to join this program?"></textarea>
        </div>

        <button className="w-full bg-[#be123c] text-white font-bold py-4 rounded-sm hover:bg-[#9f1239] transition uppercase tracking-wide text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Submit Application
        </button>
      </form>
    </div>
  );
};

const StrategicUpdates = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row gap-16">

          {/* Left: Official Letter / Announcement Content */}
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 bg-[#be123c]"></span>
              <span className="text-[#be123c] font-bold tracking-widest uppercase text-xs">Official Communication</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#881337] mb-8 font-serif leading-tight">
              Strategic Partnership with IIT Patna & <br /> Government Recognition
            </h2>

            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6 text-justify">
              <p>
                We are pleased to announce a landmark collaboration between <strong>GRAMYA, Bhopal</strong> and <strong>FIST, IIT Patna</strong>. This MoU aims to strengthen village-level dairy ecosystems through structured capacity building, leadership development, and institutional linkages.
              </p>

              <div className="bg-[#fff1f2] p-8 border-l-4 border-[#be123c] rounded-r-lg my-8 shadow-sm">
                <h4 className="font-bold text-[#881337] mb-3 flex items-center gap-2">
                  <ScrollText size={20} /> Key Development: Meeting with CM's Secretariat
                </h4>
                <p className="text-sm italic text-gray-700 mb-4">
                  "On 20th January 2026, a delegation from GRAMYA led by Dr. Ranjan Kumar and Dr. Bhaskar Mishra met with Mr. Chandrashekhar Valimbe, Secretary to the Hon’ble Chief Minister of Madhya Pradesh."
                </p>
                <p className="text-sm text-gray-700">
                  During the meeting, the objectives and long-term vision of the Village Dairy Counsellors Training Programme were presented. Mr. Valimbe conveyed that the <strong>Hon’ble Chief Minister</strong> has shown keen interest in this initiative, particularly as <strong>2026 has been declared the 'Agriculture Year'</strong> in the state.
                </p>
              </div>

              <p>
                The vision is to position Madhya Pradesh as a leader in milk production in India. We are honored to share that the Hon’ble Chief Minister has consented to attend the upcoming workshop as the Chief Guest.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
                <h5 className="font-bold text-gray-800 mb-2">Invitation to Launch Ceremony</h5>
                <p className="text-sm text-gray-600 mb-4">
                  "We are pleased to invite you to grace the Launching Ceremony of the Village Dairy Counsellors Training and Development Programme... Your institution’s association lends immense credibility, technical depth and national stature to this national level initiative."
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-gray-600">Ref: MoU/GRAMYA/IIT-P/2026</span>
                  <span className="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-gray-600">Date: Feb 08, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Links / Sidebar */}
          <div className="md:w-1/3 space-y-8">
            <div className="bg-[#881337] text-white p-8 rounded-sm shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Calendar size={100} />
              </div>
              <h3 className="text-xl font-bold mb-6 border-b border-rose-400 pb-4 font-serif relative z-10">Important Dates</h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4 items-start">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded text-center min-w-[3.5rem] border border-white/20">
                    <span className="block text-xs font-bold text-rose-200">FEB</span>
                    <span className="block text-2xl font-bold">11</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">Program Launch Ceremony</p>
                    <p className="text-xs text-rose-200 mt-1">Village Dairy Counsellors Program</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded text-center min-w-[3.5rem] border border-white/20">
                    <span className="block text-xs font-bold text-rose-200">FEB</span>
                    <span className="block text-2xl font-bold">23</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">State Level Workshop</p>
                    <p className="text-xs text-rose-200 mt-1">Tentative Date 1 (CM Attending)</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded text-center min-w-[3.5rem] border border-white/20">
                    <span className="block text-xs font-bold text-rose-200">MAR</span>
                    <span className="block text-2xl font-bold">09</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">State Level Workshop</p>
                    <p className="text-xs text-rose-200 mt-1">Tentative Date 2</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">Downloads & Resources</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#be123c] font-medium group transition-colors">
                    <div className="p-2 bg-gray-100 rounded group-hover:bg-rose-50 group-hover:text-[#be123c] transition-colors">
                      <FileText size={18} />
                    </div>
                    Program Brochure (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#be123c] font-medium group transition-colors">
                    <div className="p-2 bg-gray-100 rounded group-hover:bg-rose-50 group-hover:text-[#be123c] transition-colors">
                      <FileText size={18} />
                    </div>
                    MoU Details (Official)
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#be123c] font-medium group transition-colors">
                    <div className="p-2 bg-gray-100 rounded group-hover:bg-rose-50 group-hover:text-[#be123c] transition-colors">
                      <Building2 size={18} />
                    </div>
                    Training Centers List
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const MouGallery = () => {
  // Placeholder images for MoU signing
  const images = [
    "img/image/ (1).jpeg", 
    "img/image/ (2).jpeg", 
    "img/image/ (3).jpeg", 
    "img/image/ (4).jpeg", 
    "img/image/ (5).jpeg", 
    "img/image/ (6).jpeg", 
    "img/image/ (7).jpeg" , 
    "img/image/ (8).jpeg",
      "img/image/ (9).jpeg",
        "img/image/ (10).jpeg",
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#881337] uppercase tracking-wide">MoU Signing & Strategic Meetings</h2>
          <div className="w-24 h-1 bg-[#be123c] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Glimpses of the strategic partnership between GRAMYA and FIST, IIT Patna, strengthening the foundation for rural development.</p>
        </div>

        {/* Scrolling Gallery */}
        <div className="overflow-hidden relative group">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
            {[...images, ...images].map((src, idx) => (
              <div key={idx} className="min-w-[350px] h-[240px] rounded-xl overflow-hidden shadow-lg border-4 border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img src={src} alt="MoU Signing" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      <HeroSlider />
      <NewsTicker />

      {/* Strategic Updates Section (New Content) */}
      <StrategicUpdates />

      <StatsStrip />

      {/* About / Introduction */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-1 bg-[#be123c] mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#881337] mb-6 leading-tight font-serif">
              Transforming Rural Livelihoods Through <br />
              <span className="text-black">Women Empowerment</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              The Village Dairy Counsellors (VDC) program is a flagship initiative designed to uplift women in rural India. By providing comprehensive training in modern dairy practices, financial literacy, and leadership, we aim to create a cadre of skilled professionals who will lead the White Revolution 2.0.
            </p>
            <ul className="space-y-4 mb-10">
              {['Government Certified Training', '100% Free of Cost', 'Placement Assistance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-lg">
                  <div className="bg-rose-50 p-1 rounded-full text-[#be123c]">
                    <CheckCircle2 size={20} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-block px-8 py-4 border-2 border-[#881337] text-[#881337] font-bold uppercase tracking-wider text-sm hover:bg-[#881337] hover:text-white transition rounded-sm">
              Read More About Us
            </Link>
          </div>
          <div className="relative">
            <div className="absolute top-6 -left-6 w-full h-full border-2 border-[#be123c] z-0 rounded-lg"></div>
            <img
              src="img/b2.jpeg"
              alt="About"
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg z-20 max-w-xs border-l-4 border-[#be123c]">
              <p className="text-[#881337] font-bold font-serif text-lg">"Empowering a woman means empowering a nation."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section (Slider) */}
      <section className="py-20 bg-gray-50 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#be123c] font-bold tracking-widest uppercase text-sm">Our Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#881337] mt-2 font-serif">Training Modules</h2>
            <div className="w-24 h-1 bg-[#be123c] mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">Structured curriculum designed by industry experts to ensure holistic development.</p>
          </div>

          <ModuleSlider />

        </div>
      </section>

      {/* Enroll Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#be123c] font-bold tracking-widest uppercase text-sm">Join Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#881337] mt-2 mb-6 font-serif">Join the Movement</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Are you a woman from a rural background looking to change your life? Or do you know someone who deserves this opportunity? Apply now for our upcoming batch.
            </p>

            <div className="bg-[#fff1f2] p-8 border border-rose-200 rounded-lg mb-8 shadow-sm">
              <h4 className="font-bold text-[#881337] mb-4 flex items-center gap-2 text-xl">
                <MapPin size={24} /> Training Centers
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-gray-700 font-medium">
                <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></div> Patna, Bihar</p>
                <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></div> Bhopal, Madhya Pradesh</p>
                <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></div> Varanasi, Uttar Pradesh</p>
                <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#be123c] rounded-full"></div> Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="bg-[#881337] text-white p-10 rounded-lg text-center shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Helpline Support</h3>
              <p className="text-rose-200 mb-6 relative z-10">Monday - Saturday (10 AM - 6 PM)</p>
              <p className="text-4xl font-bold relative z-10 group-hover:scale-105 transition-transform">+91 1800-123-4567</p>
            </div>
          </div>

          <EnrollForm />
        </div>
      </section>

      {/* Partners / MoU Gallery Section */}
      <MouGallery />

    </div>
  );
};

export default Home;
