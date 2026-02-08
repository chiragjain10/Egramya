import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Users, ArrowRight, ChevronRight, Bell, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhoShouldJoin from './Join';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Government style hero slides based on the letter content
  const slides = [
    {
      title: "Village Dairy Counsellors Training Programme",
      subtitle: "A Collaborative Initiative between FIST, IIT Patna and GRAMYA, Bhopal",
      desc: "Strengthening village-level dairy ecosystems through structured capacity building and leadership development.",
      color: "bg-[#0056b3]"
    },
    {
      title: "Agriculture Year 2026 - Madhya Pradesh",
      subtitle: "Vision: Positioning Madhya Pradesh as a Leader in Milk Production",
      desc: "Hon'ble Chief Minister has shown keen interest in this transformative programme.",
      color: "bg-stone-800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Breaking News Ticker - Common in Gov sites */}
      <div className="bg-orange-600 text-white overflow-hidden py-2 relative flex items-center">
        <div className="bg-orange-700 px-4 py-1 font-bold text-xs uppercase tracking-wider z-10 absolute left-0 h-full flex items-center shadow-md">
          Latest Updates
        </div>
        <div className="whitespace-nowrap animate-marquee flex items-center gap-8 pl-36 md:pl-40 text-sm font-medium">
          <span className="flex items-center gap-2">
            <Bell size={14} className="animate-pulse" /> 
            Launch Ceremony of Village Dairy Counsellors Training Programme proposed on 11th February 2026.
          </span>
          <span className="flex items-center gap-2">
            <Bell size={14} className="animate-pulse" />
            Meeting held with Secretary to Hon'ble CM, MP on 20th Jan 2026 regarding programme vision.
          </span>
          <span className="flex items-center gap-2">
            <Bell size={14} className="animate-pulse" />
            Hon'ble Chief Minister consented to attend workshop as Chief Guest (Tentative: 23 Feb or 9 March 2026).
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden bg-gray-900 text-white">
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 ${slides[activeSlide].color} flex items-center`}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full">
              <div className="max-w-3xl">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded text-xs font-bold tracking-widest uppercase mb-4"
                >
                  Government Initiative
                </motion.div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                >
                  {slides[activeSlide].title}
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-blue-100 font-medium mb-6"
                >
                  {slides[activeSlide].subtitle}
                </motion.p>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base md:text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed"
                >
                  {slides[activeSlide].desc}
                </motion.p>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/about" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded shadow-lg transition flex items-center gap-2">
                    Read More <ArrowRight size={18} />
                  </Link>
                  <Link to="/enroll" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded backdrop-blur-sm border border-white/30 transition">
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeSlide === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: About & Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About Section */}
            <section className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#0056b3]">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-orange-500" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">About The Programme</h2>
              </div>
              <div className="prose text-gray-600 leading-relaxed text-justify">
                <p className="mb-4">
                  The <strong>Village Dairy Counsellors Training and Development Programme</strong> is a flagship initiative under the MoU signed with <strong>FIST, IIT Patna</strong>. It is aimed at strengthening village-level dairy ecosystems through structured capacity building, leadership development, and institutional linkage.
                </p>
                <p className="mb-4">
                  This programme is envisaged as a collaborative initiative between <strong>GRAMYA</strong> and <strong>FIST, IIT Patna</strong>, offering joint certification for the programme participants. The association with an institution of national stature like IIT Patna lends immense credibility and technical depth to this national-level initiative.
                </p>
                <div className="bg-[#0056b3]/5 p-4 rounded border-l-4 border-[#0056b3] my-6">
                  <h4 className="font-bold text-[#0056b3] mb-2">Key Highlights</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-[#0056b3]">
                    <li>3 Months Certificate Course Module.</li>
                    <li>Joint Certification by GRAMYA and FIST, IIT Patna.</li>
                    <li>Focus on Capacity Building & Leadership Development.</li>
                    <li>Aligned with "Agriculture Year 2026" vision of Madhya Pradesh.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recent Developments Section (Timeline Style) */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-orange-500" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Recent Developments</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#0056b3]/10 text-[#0056b3] rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      Jan 20
                    </div>
                    <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-bold text-gray-800">Meeting with CM Secretariat</h3>
                    <p className="text-sm text-gray-500 mb-2">20 January 2026</p>
                    <p className="text-gray-600">
                      A delegation from GRAMYA (Advisor Dr. Ranjan Kumar & Executive Director Dr. Bhaskar Mishra) met with Mr. Chandrashekhar Valimbe, Secretary to Hon'ble CM of MP. The objectives and long-term vision were presented.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      Feb 11
                    </div>
                    <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-bold text-gray-800">Proposed Launch Ceremony</h3>
                    <p className="text-sm text-gray-500 mb-2">11 February 2026</p>
                    <p className="text-gray-600">
                      The official Launching Ceremony of the Village Dairy Counsellors Training Programme is proposed to be held on this date.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      TBD
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Workshop with Hon'ble CM</h3>
                    <p className="text-sm text-gray-500 mb-2">Tentative: 23 Feb or 9 March 2026</p>
                    <p className="text-gray-600">
                      Hon'ble Chief Minister of Madhya Pradesh has consented to attend the workshop as Chief Guest. Final date pending confirmation from CM Secretariat.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar / Quick Links / Official Info */}
          <div className="space-y-8">
            
            {/* Minister/Official Card Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                <Users size={32} className="text-gray-400" />
              </div>
              <h3 className="font-bold text-gray-800">Dr. Pankaj Shukla</h3>
              <p className="text-xs text-orange-500 font-bold uppercase tracking-wide mb-2">Chairman & MD</p>
              <p className="text-sm text-gray-500 italic">"Positioning Madhya Pradesh as a leader in milk production in India."</p>
            </div>

            {/* Quick Links */}
            <div className="bg-[#0056b3] text-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4 border-b border-[#004494] pb-2">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/structure" className="flex items-center gap-2 hover:text-orange-400 transition">
                    <ChevronRight size={14} /> Training Modules
                  </Link>
                </li>
                <li>
                  <Link to="/enroll" className="flex items-center gap-2 hover:text-orange-400 transition">
                    <ChevronRight size={14} /> Application Process
                  </Link>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition">
                    <ChevronRight size={14} /> Partner Institutions
                  </a>
                </li>
                <li>
                  <Link to="/enroll" className="flex items-center gap-2 hover:text-orange-400 transition">
                    <ChevronRight size={14} /> Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Downloads / Documents */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Documents</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition cursor-pointer">
                  <FileText className="text-red-500 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Course Module Draft</p>
                    <p className="text-xs text-gray-400">PDF - 2.4 MB</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition cursor-pointer">
                  <FileText className="text-red-500 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-700">MoU Details</p>
                    <p className="text-xs text-gray-400">PDF - 1.1 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhoShouldJoin />

      {/* Partners Strip */}
      <div className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <h3 className="text-gray-500 uppercase tracking-widest font-bold text-sm mb-8">Our Official Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Partner 1: IIT Patna */}
             <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                  <span className="font-bold text-[#0056b3] text-xs">IIT Patna</span>
                </div>
                <span className="font-bold text-gray-700 text-sm">FIST, IIT Patna</span>
             </div>

             {/* Partner 2: GRAMYA */}
             <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                  <span className="font-bold text-[#0056b3] text-xs">GRAMYA</span>
                </div>
                <span className="font-bold text-gray-700 text-sm">GRAMYA, Bhopal</span>
             </div>

             {/* Partner 3: MP Gov (Symbolic) */}
             <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                  <span className="font-bold text-orange-600 text-xs">MP GOV</span>
                </div>
                <span className="font-bold text-gray-700 text-sm">Govt. of MP</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
