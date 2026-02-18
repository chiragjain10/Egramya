import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  UserPlus, 
  GraduationCap, 
  FileCheck,
  Sparkles
} from "lucide-react";
import SEO from "../SEO";

const EnrollPage = () => {
  return (
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-[#be123c]/20">
      <SEO 
        title="Enroll Now | VDC Program" 
        description="Apply for the Village Dairy Counsellors Program. Join the next cohort of rural leaders and dairy entrepreneurs."
        keywords="Enroll VDC Program, Dairy Course Admission, Rural Entrepreneurship Training"
      />
      
      {/* ================= 1. THEMATIC HEADER ================= */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-rose-50/50 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#fff1f2] border border-rose-100 text-[#be123c] rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles size={14} /> Admissions Phase 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-[#881337] leading-tight mb-6"
          >
            Start Your <span className="text-[#fb7185] italic font-light">Journey</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Join a network of over 500+ Village Dairy Counsellors transforming 
            rural economies. Secure your seat in our upcoming professional cohort.
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= 2. ENROLLMENT FORM ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl shadow-rose-900/5 p-10 lg:p-14 border border-rose-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#fff1f2] rounded-bl-full -mr-20 -mt-20 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-[#881337] rounded-xl text-white">
                  <UserPlus size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#881337]">Candidate Registration</h3>
                  <p className="text-sm text-rose-400 font-medium">Please provide accurate professional details</p>
                </div>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-700 placeholder:text-gray-300" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1">Mobile Number</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-700 placeholder:text-gray-300" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-700 placeholder:text-gray-300" placeholder="name@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1">District/Village</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-700 placeholder:text-gray-300" placeholder="Bhopal, MP" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1">Highest Qualification</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-500 appearance-none">
                      <option>Select Education</option>
                      <option>12th Pass</option>
                      <option>Graduate</option>
                      <option>Post Graduate</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1">Professional Statement</label>
                  <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-700 placeholder:text-gray-300" placeholder="Describe your interest in the dairy sector..."></textarea>
                </div>

                <button type="button" className="group w-full py-5 bg-[#881337] hover:bg-[#be123c] text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-rose-200">
                  Submit Application 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* ================= 3. SIDEBAR INFO ================= */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#881337] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full" />
              <h4 className="font-bold text-xl mb-6">Admissions Office</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-rose-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-rose-300 font-bold mb-1">Call Support</p>
                    <p className="font-medium text-sm">+91 123 456 7890</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-rose-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-rose-300 font-bold mb-1">Email Queries</p>
                    <p className="font-medium text-sm">admissions@gramya.org</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-rose-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-rose-300 font-bold mb-1">Main Campus</p>
                    <p className="font-medium text-sm leading-snug">Bhopal, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Eligibility Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-[2rem] border border-rose-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="text-[#be123c]" size={22} />
                <h4 className="font-bold text-[#881337]">Eligibility</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Minimum 10th or 12th Standard",
                  "Age bracket: 18 - 35 Years",
                  "Aspirant for rural leadership",
                  "Basic vernacular literacy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <CheckCircle2 size={16} className="text-[#fb7185] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Program Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-rose-50/50 border border-dashed border-rose-200 p-8 rounded-[2rem] text-center"
            >
              <GraduationCap className="mx-auto mb-4 text-[#be123c]" size={32} />
              <p className="text-[#881337] font-bold text-sm">VDC Certification Program</p>
              <p className="text-gray-500 text-xs mt-2 italic">Recognized by Absolute Gramya</p>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default EnrollPage;