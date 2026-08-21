import React, { useState } from "react";
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
  Sparkles,
  Globe2,
  Check
} from "lucide-react";
import SEO from "../SEO";

const EnrollPage = () => {
  // Language mode: 'en' | 'hi' | 'bilingual'
  const [lang, setLang] = useState('bilingual');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    district: "",
    qualification: "",
    statement: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getLabel = (enText, hiText) => {
    if (lang === 'en') return enText;
    if (lang === 'hi') return hiText;
    return `${enText} / ${hiText}`;
  };

  return (
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-[#be123c]/20">
      <SEO 
        title="Enroll Now | VDC Program - FIST, IIT, PATNA Collaboration" 
        description="Apply for the Village Dairy Counsellors Program by FIST, IIT, PATNA & GRAMYA. Join the next cohort of rural leaders and dairy entrepreneurs."
        keywords="Enroll VDC Program, Dairy Course Admission, Rural Entrepreneurship Training, FIST IIT PATNA"
      />
      
      {/* ================= 1. THEMATIC HEADER ================= */}
      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-rose-50/50 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#fff1f2] border border-rose-100 text-[#be123c] rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles size={14} /> Admissions Phase 2026 • FIST, IIT, PATNA & GRAMYA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-[#881337] leading-tight mb-6"
          >
            {getLabel("Start Your Journey", "अपनी यात्रा शुरू करें")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {getLabel(
              "Join a network of over 500+ Village Dairy Counsellors transforming rural economies. Secure your seat in our upcoming cohort.",
              "ग्रामीण अर्थव्यवस्था को बदलने वाले 500+ से अधिक ग्राम डेयरी परामर्शदाताओं के नेटवर्क में शामिल हों।"
            )}
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
            className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl shadow-rose-900/5 p-8 lg:p-14 border border-rose-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#fff1f2] rounded-bl-full -mr-20 -mt-20 opacity-50" />
            
            <div className="relative z-10">
              {/* Header & Language Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-rose-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#881337] rounded-xl text-white">
                    <UserPlus size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#881337]">
                      {getLabel("Candidate Registration", "अभ्यर्थी पंजीकरण")}
                    </h3>
                    <p className="text-sm text-rose-400 font-medium">
                      {getLabel("Please provide accurate details", "कृपया सही विवरण भरें")}
                    </p>
                  </div>
                </div>

                {/* Bilingual Language Selector */}
                <div className="flex items-center gap-1 bg-rose-50/80 p-1.5 rounded-2xl border border-rose-100 shrink-0">
                  <div className="flex items-center gap-1.5 px-2 text-xs font-bold text-rose-800">
                    <Globe2 size={14} />
                  </div>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      lang === 'en' ? 'bg-[#881337] text-white shadow-sm' : 'text-gray-600 hover:text-[#881337]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('hi')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      lang === 'hi' ? 'bg-[#881337] text-white shadow-sm' : 'text-gray-600 hover:text-[#881337]'
                    }`}
                  >
                    हिंदी
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('bilingual')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      lang === 'bilingual' ? 'bg-[#881337] text-white shadow-sm' : 'text-gray-600 hover:text-[#881337]'
                    }`}
                  >
                    Bilingual / द्विभाषिक
                  </button>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check size={40} />
                  </div>
                  <h4 className="text-3xl font-bold text-[#881337]">
                    {getLabel("Application Submitted Successfully!", "आवेदन सफलतापूर्वक जमा कर दिया गया है!")}
                  </h4>
                  <p className="text-gray-600 max-w-lg mx-auto">
                    {getLabel(
                      "Thank you for registering. Our admissions team and FIST, IIT, PATNA program coordinators will review your application and contact you shortly.",
                      "पंजीकरण करने के लिए धन्यवाद। हमारी प्रवेश टीम और FIST, IIT, PATNA कार्यक्रम समन्वयक जल्द ही आपसे संपर्क करेंगे।"
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-[#881337] text-white font-bold rounded-xl hover:bg-[#be123c] transition-all"
                  >
                    {getLabel("Submit Another Response", "एक और आवेदन प्रस्तुत करें")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest font-black text-gray-500 ml-1">
                        {getLabel("Full Name", "पूरा नाम")}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-800 placeholder:text-gray-400 font-medium" 
                        placeholder={getLabel("e.g. Anita Sharma", "उदाहरण: अनिता शर्मा")} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest font-black text-gray-500 ml-1">
                        {getLabel("Mobile Number", "मोबाइल नंबर")}
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-800 placeholder:text-gray-400 font-medium" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-black text-gray-500 ml-1">
                      {getLabel("Email Address", "ईमेल पता")}
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-800 placeholder:text-gray-400 font-medium" 
                      placeholder="candidate@example.com" 
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest font-black text-gray-500 ml-1">
                        {getLabel("District & Village / State", "जिला और गाँव / राज्य")}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({...formData, district: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-800 placeholder:text-gray-400 font-medium" 
                        placeholder={getLabel("e.g. Sehore, Madhya Pradesh", "उदा: सीहोर, मध्य प्रदेश")} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest font-black text-gray-500 ml-1">
                        {getLabel("Highest Educational Qualification", "उच्चतम शैक्षणिक योग्यता")}
                      </label>
                      <select 
                        required
                        value={formData.qualification}
                        onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-800 font-medium appearance-none"
                      >
                        <option value="">{getLabel("-- Select Education / शिक्षा चुनें --", "-- शिक्षा चुनें --")}</option>
                        <option value="10th">{getLabel("10th Standard / 10वीं उत्तीर्ण", "10वीं उत्तीर्ण")}</option>
                        <option value="12th">{getLabel("12th Standard / 12वीं उत्तीर्ण", "12वीं उत्तीर्ण")}</option>
                        <option value="Graduate">{getLabel("Graduate / स्नातक", "स्नातक")}</option>
                        <option value="PostGraduate">{getLabel("Post Graduate / स्नातकोत्तर", "स्नातकोत्तर")}</option>
                        <option value="Diploma">{getLabel("Diploma / Agri Certification", "डिप्लोमा / कृषि प्रमाणन")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-black text-gray-500 ml-1">
                      {getLabel("Professional Statement & Interest", "व्यावसायिक कथन और रुचि")}
                    </label>
                    <textarea 
                      rows="4" 
                      value={formData.statement}
                      onChange={(e) => setFormData({...formData, statement: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-rose-50/30 border border-rose-100 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-50 transition-all outline-none text-gray-800 placeholder:text-gray-400 font-medium" 
                      placeholder={getLabel("Describe why you want to become a Village Dairy Counsellor...", "बताएं कि आप ग्राम डेयरी परामर्शदाता क्यों बनना चाहते हैं...")}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="group w-full py-5 bg-[#881337] hover:bg-[#be123c] text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-rose-200"
                  >
                    {getLabel("Submit Application", "आवेदन जमा करें")} 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
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
              <h4 className="font-bold text-xl mb-6">Admissions & Secretariat</h4>
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
                    <p className="font-medium text-sm">admissions@absolutegramya.com</p>
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
                <h4 className="font-bold text-[#881337]">Eligibility Criteria</h4>
              </div>
              <ul className="space-y-4">
                {[
                  getLabel("Minimum 10th or 12th Standard", "न्यूनतम 10वीं या 12वीं कक्षा pass"),
                  getLabel("Age bracket: 18 - 35 Years", "आयु सीमा: 18 - 35 वर्ष"),
                  getLabel("Aspirant for rural leadership", "ग्रामीण नेतृत्व की आकांक्षा"),
                  getLabel("Basic vernacular literacy", "मूल व्यावहारिक साक्षरता")
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
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
              <p className="text-gray-600 text-xs mt-2 italic font-medium">Jointly Certified by FIST, IIT, PATNA & GRAMYA</p>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default EnrollPage;