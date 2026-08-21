import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  UserCheck, 
  Globe2, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Briefcase, 
  BookOpen, 
  ShieldCheck,
  Check,
  ChevronDown,
  Building,
  Mail,
  Phone,
  Link2,
  FileText,
  User,
  GraduationCap
} from "lucide-react";
import SEO from "../SEO";

const KnowledgePartner = () => {
  const [partnerType, setPartnerType] = useState('organisation'); // 'organisation' | 'expert'
  const [lang, setLang] = useState('bilingual');
  const [submitted, setSubmitted] = useState(false);

  const [orgData, setOrgData] = useState({
    orgName: "",
    orgType: "",
    repName: "",
    designation: "",
    email: "",
    mobile: "",
    expertise: "",
    website: "",
    proposal: ""
  });

  const [expertData, setExpertData] = useState({
    fullName: "",
    field: "",
    affiliation: "",
    experience: "",
    email: "",
    mobile: "",
    linkedin: "",
    contribution: "",
    bio: ""
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
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-[#be123c]/20 text-slate-800">
      <SEO 
        title="Knowledge Partner Network | FIST, IIT, PATNA & GRAMYA" 
        description="Join as a Knowledge Partner. Collaborate with FIST, IIT, PATNA and Gramya to empower rural dairy entrepreneurs and foster innovation."
        keywords="Knowledge Partner, Agri-Tech Collaboration, FIST IIT PATNA, Rural Development Partner, Expert Network"
      />

      {/* ================= COMPACT HERO HEADER ================= */}
      <header className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-rose-100/60 via-[#fffafa]/80 to-[#fffafa]">
        {/* Soft Decorative Ambient Circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-br from-rose-200/30 via-rose-100/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-rose-200/80 text-[#881337] rounded-full text-[11px] font-black tracking-widest uppercase mb-5 shadow-sm"
          >
            <Sparkles size={13} className="text-[#be123c]" />
            <span>FIST, IIT, PATNA & GRAMYA Consortium</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#881337] tracking-tight leading-snug mb-4"
          >
            {getLabel("Knowledge Partner Application", "नॉलेज पार्टनर आवेदन फॉर्म")}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {getLabel(
              "Collaborate with FIST, IIT, PATNA, IHM, SGSU, and GRAMYA to advance grassroots dairy innovation, curriculum excellence, and rural entrepreneurship.",
              "FIST, IIT, PATNA, IHM, SGSU और GRAMYA के साथ मिलकर ग्रामीण डेयरी नवाचार, उच्च गुणवत्ता वाले पाठ्यक्रम और उद्यमिता का विस्तार करें।"
            )}
          </motion.p>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-6 pb-28">
        
        {/* TOP CONTROL BAR: PARTNER TYPE TOGGLE & LANGUAGE SELECTOR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-rose-200/70 shadow-lg shadow-rose-950/[0.03] mb-10">
          
          {/* Segmented Mode Switcher */}
          <div className="flex bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/60 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => { setPartnerType('organisation'); setSubmitted(false); }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 ${
                partnerType === 'organisation' 
                  ? 'bg-[#881337] text-white shadow-md shadow-rose-900/20 scale-[1.02]' 
                  : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              <Building2 size={16} />
              <span>{getLabel("As Organisation", "संस्था के रूप में")}</span>
            </button>

            <button
              type="button"
              onClick={() => { setPartnerType('expert'); setSubmitted(false); }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 ${
                partnerType === 'expert' 
                  ? 'bg-[#881337] text-white shadow-md shadow-rose-900/20 scale-[1.02]' 
                  : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              <UserCheck size={16} />
              <span>{getLabel("As Individual Expert", "व्यक्तिगत विशेषज्ञ")}</span>
            </button>
          </div>

          {/* High Contrast Language Switcher */}
          <div className="flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/60 w-full sm:w-auto justify-center">
            <Globe2 size={14} className="text-[#881337] ml-2 shrink-0" />
            <span className="text-[11px] font-bold text-slate-500 mr-1 hidden lg:inline">Language:</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all ${
                lang === 'en' ? 'bg-[#881337] text-white shadow-sm' : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang('hi')}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all ${
                lang === 'hi' ? 'bg-[#881337] text-white shadow-sm' : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              हिंदी
            </button>
            <button
              type="button"
              onClick={() => setLang('bilingual')}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all ${
                lang === 'bilingual' ? 'bg-[#881337] text-white shadow-sm' : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              Bilingual
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* ================= PREMIUM FORM CONTAINER ================= */}
          <motion.div 
            key={partnerType}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-8 p-[1px] bg-gradient-to-b from-rose-200/90 via-rose-100/50 to-rose-200/80 rounded-[2rem] shadow-xl shadow-rose-950/[0.04]"
          >
            <div className="bg-white rounded-[1.95rem] p-6 sm:p-10 border border-white/80 relative overflow-hidden">
              
              {/* Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-rose-100/60 to-transparent rounded-bl-full pointer-events-none -mr-10 -mt-10" />

              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check size={38} strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#881337]">
                    {getLabel("Application Submitted Successfully!", "आवेदन सफलतापूर्वक जमा कर दिया गया!")}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    {getLabel(
                      `Thank you for registering your interest as a Knowledge Partner (${partnerType === 'organisation' ? 'Organisation' : 'Individual Expert'}). The consortium committee will review your profile and reach out shortly.`,
                      `नॉलेज पार्टनर के रूप में आवेदन करने के लिए धन्यवाद। कंसोर्टियम समिति आपके प्रस्ताव की समीक्षा करेगी और शीघ्र ही संपर्क करेगी।`
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-7 py-3 bg-[#881337] hover:bg-[#be123c] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-rose-900/20"
                  >
                    {getLabel("Submit Another Application", "एक और आवेदन जमा करें")}
                  </button>
                </div>
              ) : partnerType === 'organisation' ? (
                
                /* ================= ORGANISATION FORM ================= */
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  
                  {/* Form Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-rose-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#881337] rounded-xl text-white shadow-md shadow-rose-900/20">
                        <Building2 size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#881337] tracking-tight">
                          {getLabel("Organisation Partner Details", "संस्थागत पार्टनर विवरण")}
                        </h3>
                        <p className="text-xs text-rose-500 font-bold tracking-wide uppercase mt-0.5">
                          {getLabel("Universities, NGOs, Corporates & Startups", "विश्वविद्यालय, एनजीओ, कॉर्पोरेट एवं स्टार्टअप्स")}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-extrabold px-3 py-1 bg-rose-50 text-[#881337] rounded-full border border-rose-200/80">
                      Step 1 of 1
                    </span>
                  </div>

                  {/* SECTION 1: ENTITY INFORMATION */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#881337] text-white text-[10px] font-extrabold flex items-center justify-center">1</span>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                        {getLabel("Entity Information", "संस्था का प्राथमिक विवरण")}
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Organisation Name *", "संस्था का नाम *")}
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            required
                            value={orgData.orgName}
                            onChange={(e) => setOrgData({...orgData, orgName: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                            placeholder={getLabel("e.g. National Dairy Foundation", "उदा: नेशनल डेयरी फाउंडेशन")}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Organisation Type *", "संस्था का प्रकार *")}
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={orgData.orgType}
                            onChange={(e) => setOrgData({...orgData, orgType: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm appearance-none pr-10"
                          >
                            <option value="">{getLabel("-- Select Entity Category --", "-- वर्ग चुनें --")}</option>
                            <option value="Academic">{getLabel("Academic / University / R&D Institute", "शैक्षणिक / विश्वविद्यालय / अनुसंधान केंद्र")}</option>
                            <option value="NGO">{getLabel("NGO / Non-Profit / Foundation", "एनजीओ / गैर-लाभकारी / फाउंडेशन")}</option>
                            <option value="Corporate">{getLabel("Corporate / CSR Division", "कॉर्पोरेट / सीएसआर प्रभाग")}</option>
                            <option value="Startup">{getLabel("Agri-Tech / Dairy Tech Startup", "एग्री-टेक / डेयरी टेक स्टार्टअप")}</option>
                            <option value="PSU">{getLabel("Government Body / PSU / Cooperative", "सरकारी संस्था / पीएसयू / सहकारी समिति")}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: REPRESENTATIVE CONTACT */}
                  <div className="space-y-5 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#881337] text-white text-[10px] font-extrabold flex items-center justify-center">2</span>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                        {getLabel("Key Representative Contact", "मुख्य प्रतिनिधि संपर्क")}
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Representative Name *", "प्रतिनिधि का नाम *")}
                        </label>
                        <input 
                          type="text" 
                          required
                          value={orgData.repName}
                          onChange={(e) => setOrgData({...orgData, repName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder={getLabel("e.g. Dr. Ramesh Gupta", "उदा: डॉ. रमेश गुप्ता")}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Designation / Role *", "पद / भूमिका *")}
                        </label>
                        <input 
                          type="text" 
                          required
                          value={orgData.designation}
                          onChange={(e) => setOrgData({...orgData, designation: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder={getLabel("e.g. Director / Head of CSR", "उदा: निदेशक / सीएसआर प्रमुख")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1 flex items-center justify-between">
                          <span>{getLabel("Official Email Address *", "आधिकारिक ईमेल *")}</span>
                        </label>
                        <input 
                          type="email" 
                          required
                          value={orgData.email}
                          onChange={(e) => setOrgData({...orgData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="official@organisation.org"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Mobile / Phone Number *", "मोबाइल / फोन नंबर *")}
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={orgData.mobile}
                          onChange={(e) => setOrgData({...orgData, mobile: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: COLLABORATION & PROPOSAL */}
                  <div className="space-y-5 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#881337] text-white text-[10px] font-extrabold flex items-center justify-center">3</span>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                        {getLabel("Collaboration Scope & Proposal", "सहयोग का दायरा एवं प्रस्ताव")}
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Primary Area of Collaboration *", "प्राथमिक सहयोग क्षेत्र *")}
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={orgData.expertise}
                            onChange={(e) => setOrgData({...orgData, expertise: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm appearance-none pr-10"
                          >
                            <option value="">{getLabel("-- Select Focus Domain --", "-- विषय चुनें --")}</option>
                            <option value="DairyTech">{getLabel("Dairy Technology & Automation", "डेयरी तकनीक व स्वचालन")}</option>
                            <option value="IoT">{getLabel("IoT, AI & Smart Cattle Sensors", "आईओटी, एआई और स्मार्ट पशु सेंसर")}</option>
                            <option value="Veterinary">{getLabel("Veterinary Health & Clinical Support", "पशु स्वास्थ्य व नैदानिक सहायता")}</option>
                            <option value="Skills">{getLabel("Curriculum & Pedagogical Support", "पाठ्यक्रम एवं शैक्षणिक सहयोग")}</option>
                            <option value="Financial">{getLabel("Financial Literacy & SHG Credit", "वित्तीय साक्षरता एवं एसएचजी क्रेडिट")}</option>
                            <option value="SupplyChain">{getLabel("Cold Chain & Milk Logistics", "कोल्ड चेन और दूध रसद")}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Website / Digital Portfolio", "वेबसाइट / डिजिटल पोर्टफोलियो")}
                        </label>
                        <input 
                          type="url" 
                          value={orgData.website}
                          onChange={(e) => setOrgData({...orgData, website: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="https://www.organisation.org"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-800 ml-1">
                        {getLabel("Brief Proposal / Partnership Vision *", "संक्षिप्त प्रस्ताव / साझेदारी का दृष्टिकोण *")}
                      </label>
                      <textarea 
                        rows="4" 
                        required
                        value={orgData.proposal}
                        onChange={(e) => setOrgData({...orgData, proposal: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                        placeholder={getLabel("Describe how your organisation plans to collaborate with FIST, IIT, PATNA & GRAMYA...", "बताएं कि आपकी संस्था FIST, IIT, PATNA एवं GRAMYA के साथ कैसे सहयोग करने की योजना बना रही है...")}
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-gradient-to-r from-[#881337] to-[#be123c] hover:from-[#71102e] hover:to-[#9f0f32] text-white font-extrabold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_8px_25px_-5px_rgba(190,18,60,0.35)] transform hover:-translate-y-0.5"
                    >
                      <Send size={16} />
                      <span>{getLabel("Submit Organisation Application", "संस्थागत आवेदन जमा करें")}</span>
                    </button>
                  </div>
                </form>

              ) : (

                /* ================= INDIVIDUAL EXPERT FORM ================= */
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  
                  {/* Form Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-rose-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#881337] rounded-xl text-white shadow-md shadow-rose-900/20">
                        <UserCheck size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#881337] tracking-tight">
                          {getLabel("Individual Expert Profile", "व्यक्तिगत विशेषज्ञ प्रोफाइल")}
                        </h3>
                        <p className="text-xs text-rose-500 font-bold tracking-wide uppercase mt-0.5">
                          {getLabel("Faculty, Researchers, Agri-Veterinary Officers & Mentors", "संकाय, शोधकर्ता, पशु चिकित्सा अधिकारी एवं मेंटर्स")}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-extrabold px-3 py-1 bg-rose-50 text-[#881337] rounded-full border border-rose-200/80">
                      Step 1 of 1
                    </span>
                  </div>

                  {/* SECTION 1: PERSONAL & PROFESSIONAL CREDENTIALS */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#881337] text-white text-[10px] font-extrabold flex items-center justify-center">1</span>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                        {getLabel("Personal Credentials", "व्यक्तिगत एवं व्यावसायिक परिचय")}
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Full Name (with Honorific) *", "पूरा नाम (उपाधि सहित) *")}
                        </label>
                        <input 
                          type="text" 
                          required
                          value={expertData.fullName}
                          onChange={(e) => setExpertData({...expertData, fullName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder={getLabel("e.g. Dr. Sunita Kulkarni", "उदा: डॉ. सुनिता कुलकर्णी")}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Core Domain of Expertise *", "मुख्य विशेषज्ञता का क्षेत्र *")}
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={expertData.field}
                            onChange={(e) => setExpertData({...expertData, field: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm appearance-none pr-10"
                          >
                            <option value="">{getLabel("-- Select Domain --", "-- विषय चुनें --")}</option>
                            <option value="DairyScience">{getLabel("Dairy Science & Processing Tech", "डेयरी विज्ञान और प्रसंस्करण")}</option>
                            <option value="IoT-AI">{getLabel("IoT Sensors & AI in Livestock", "पशुपालन में आईओटी एवं एआई")}</option>
                            <option value="Veterinary">{getLabel("Veterinary Science & Nutrition", "पशु चिकित्सा विज्ञान एवं पोषण")}</option>
                            <option value="RuralMicroFin">{getLabel("Rural Leadership & Agri-Finance", "ग्रामीण नेतृत्व एवं कृषि वित्त")}</option>
                            <option value="Policy">{getLabel("Public Policy & Governance", "लोक नीति और शासन")}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Current Affiliation / Institution *", "वर्तमान संस्थान / संस्था *")}
                        </label>
                        <input 
                          type="text" 
                          required
                          value={expertData.affiliation}
                          onChange={(e) => setExpertData({...expertData, affiliation: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder={getLabel("e.g. Professor, NDRI / Consultant", "उदा: प्रोफेसर, एनडीआरआई / सलाहकार")}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Years of Experience *", "कार्य अनुभव (वर्षों में) *")}
                        </label>
                        <input 
                          type="number" 
                          required
                          min="1"
                          max="50"
                          value={expertData.experience}
                          onChange={(e) => setExpertData({...expertData, experience: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="e.g. 12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: CONTACT & LINKS */}
                  <div className="space-y-5 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#881337] text-white text-[10px] font-extrabold flex items-center justify-center">2</span>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                        {getLabel("Contact Information & Portfolio", "संपर्क एवं प्रोफाइल लिंक")}
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Email Address *", "ईमेल पता *")}
                        </label>
                        <input 
                          type="email" 
                          required
                          value={expertData.email}
                          onChange={(e) => setExpertData({...expertData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="expert@domain.com"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Mobile Number *", "मोबाइल नंबर *")}
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={expertData.mobile}
                          onChange={(e) => setExpertData({...expertData, mobile: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("LinkedIn Profile / CV Link", "लिंक्डइन / सीवी लिंक")}
                        </label>
                        <input 
                          type="url" 
                          value={expertData.linkedin}
                          onChange={(e) => setExpertData({...expertData, linkedin: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="https://linkedin.com/in/profile"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">
                          {getLabel("Preferred Contribution Mode *", "योगदान का तरीका *")}
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={expertData.contribution}
                            onChange={(e) => setExpertData({...expertData, contribution: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm appearance-none pr-10"
                          >
                            <option value="">{getLabel("-- Select Mode --", "-- माध्यम चुनें --")}</option>
                            <option value="GuestFaculty">{getLabel("Guest Lectures & Masterclasses", "अतिथि व्याख्यान एवं मास्टरक्लास")}</option>
                            <option value="Curriculum">{getLabel("Curriculum Review & Standards", "पाठ्यक्रम समीक्षा व मानक")}</option>
                            <option value="Mentorship">{getLabel("Mentoring Trainees & VDCs", "प्रशिक्षुओं को मेंटरशिप")}</option>
                            <option value="Research">{getLabel("Joint Research & Whitepapers", "संयुक्त अनुसंधान एवं श्वेतपत्र")}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-800 ml-1">
                        {getLabel("Brief Background Statement *", "संक्षिप्त विवरण *")}
                      </label>
                      <textarea 
                        rows="4" 
                        required
                        value={expertData.bio}
                        onChange={(e) => setExpertData({...expertData, bio: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-normal"
                        placeholder={getLabel("Summarize your expertise and how you wish to mentor rural VDC candidates...", "अपनी विशेषज्ञता और VDC अभ्यर्थियों को प्रशिक्षित करने का संक्षिप्त विवरण दें...")}
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-gradient-to-r from-[#881337] to-[#be123c] hover:from-[#71102e] hover:to-[#9f0f32] text-white font-extrabold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_8px_25px_-5px_rgba(190,18,60,0.35)] transform hover:-translate-y-0.5"
                    >
                      <Send size={16} />
                      <span>{getLabel("Submit Expert Application", "विशेषज्ञ आवेदन जमा करें")}</span>
                    </button>
                  </div>
                </form>

              )}

            </div>
          </motion.div>

          {/* ================= SIDEBAR INFO CARDS ================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Institutional Consortium Card */}
            <div className="p-[1px] bg-gradient-to-b from-[#881337] to-[#be123c] rounded-[1.75rem] shadow-xl shadow-rose-950/10">
              <div className="bg-[#881337] text-white p-7 rounded-[1.7rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center gap-2.5 mb-4">
                  <Award className="text-rose-300 shrink-0" size={24} />
                  <h4 className="font-extrabold text-base tracking-tight">Quad Consortium</h4>
                </div>

                <p className="text-rose-100/90 text-xs leading-relaxed mb-5 font-normal">
                  All Knowledge Partners collaborate under the joint ecosystem established by leading institutions:
                </p>

                <div className="space-y-2.5 border-t border-rose-800/80 pt-4 text-xs font-semibold">
                  {[
                    "FIST, IIT, PATNA",
                    "IHM Bhopal (Quality Protocols)",
                    "Scope Global Skill University (SGSU)",
                    "GRAMYA (PMU Lead)"
                  ].map((partner, i) => (
                    <div key={i} className="flex items-center gap-2 text-rose-100">
                      <CheckCircle2 size={14} className="text-rose-300 shrink-0" />
                      <span>{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white p-7 rounded-[1.75rem] border border-rose-200/70 shadow-lg shadow-rose-950/[0.02]">
              <h4 className="font-extrabold text-[#881337] text-base mb-5 flex items-center gap-2">
                <Briefcase size={18} className="text-[#be123c]" />
                <span>Partner Advantages</span>
              </h4>
              
              <ul className="space-y-4">
                {[
                  { title: "National Impact", desc: "Influence certification frameworks across rural India." },
                  { title: "Ground Data Access", desc: "Collaborate on research studies across 120+ villages." },
                  { title: "Consortium Panel", desc: "Advisory representation in strategic committees." },
                  { title: "Co-Branding", desc: "Visibility across portal modules and certificates." }
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-[#be123c] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800 text-xs">{b.title}</p>
                      <p className="text-[11px] text-slate-500 leading-snug">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Desk */}
            <div className="bg-rose-50/70 p-5 rounded-[1.5rem] border border-dashed border-rose-200/90 text-center">
              <BookOpen className="mx-auto mb-2 text-[#be123c]" size={24} />
              <p className="text-[11px] font-black text-[#881337] uppercase tracking-wider">Partnerships Secretariat</p>
              <p className="text-xs text-slate-600 font-medium mt-0.5">partner@absolutegramya.com</p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default KnowledgePartner;
