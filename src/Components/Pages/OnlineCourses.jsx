import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Clock, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Globe2, 
  Send, 
  ShieldAlert, 
  MailCheck, 
  FileText, 
  X,
  BookOpen,
  ArrowRight,
  ChevronDown,
  Check,
  Building2,
  Lock,
  UserCheck
} from "lucide-react";
import SEO from "../SEO";

const courseList = [
  {
    id: "vdc-master",
    title: "Master Certification in Village Dairy Management",
    titleHi: "ग्राम डेयरी प्रबंधन में मास्टर प्रमाणन पाठ्यक्रम",
    certifier: "FIST, IIT, PATNA & GRAMYA",
    duration: "12 Weeks (Blended / Phygital)",
    level: "Advanced Certification",
    description: "Comprehensive training on scientific cattle management, clean milk production, veterinary first response, and cooperative leadership.",
    descriptionHi: "वैज्ञानिक पशु प्रबंधन, स्वच्छ दूध उत्पादन, पशु चिकित्सा प्राथमिक उपचार और सहकारी नेतृत्व पर व्यापक प्रशिक्षण।",
    modules: [
      "Scientific Cattle Nutrition & Health",
      "Milk Quality Testing & Cold Chain Management",
      "Digital Record Keeping & Dairy Software",
      "Financial Management & Micro-Credit"
    ],
    status: "Intimated & Approved for Launch",
    intimatedDate: "15 Feb 2026",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80"
  },
  {
    id: "smart-iot",
    title: "Smart Dairy IoT & Agri-Tech Specialist",
    titleHi: "स्मार्ट डेयरी आईओटी एवं कृषि-तकनीक विशेषज्ञ",
    certifier: "FIST, IIT, PATNA Technical R&D",
    duration: "6 Weeks (100% Online Live & Self-Paced)",
    level: "Technical Specialist",
    description: "Learn to deploy IoT sensors, automated fat/SNF testing kits, solar milk chillers, and telemetry analytics in rural dairy centers.",
    descriptionHi: "आईओटी सेंसर, स्वचालित वसा/एसएनएफ परीक्षण किट, सौर दूध चिलर और टेलीमेटरी एनालिटिक्स का उपयोग करना सीखें।",
    modules: [
      "IoT Sensors in Cattle Health Monitoring",
      "Automated Testing & Milk Analyzer Calibration",
      "Solar & Micro-grid Cold Chain Systems",
      "Cloud Data Dashboards for Dairy Cooperatives"
    ],
    status: "Intimated & Approved for Launch",
    intimatedDate: "18 Feb 2026",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80"
  },
  {
    id: "women-leader",
    title: "Rural Women Leadership & Agri-Entrepreneurship",
    titleHi: "ग्रामीण महिला नेतृत्व एवं कृषि-उद्यमिता प्रमाणन",
    certifier: "SGSU Global & GRAMYA",
    duration: "8 Weeks (Online Masterclasses + Workshops)",
    level: "Leadership Certificate",
    description: "Empowering women SHG members to establish micro-dairies, lead village collection hubs, and manage direct-to-consumer milk supply chains.",
    descriptionHi: "महिला स्वयं सहायता समूह की सदस्यों को सूक्ष्म-डेयरी स्थापित करने और गांव के दूध संग्रह केंद्रों का नेतृत्व करने के लिए सशक्त बनाना।",
    modules: [
      "SHG Formation & Collective Bargaining",
      "Branding & Marketing Local Dairy Products",
      "Government Subsidies & NABARD Schemes",
      "Soft Skills, Public Speaking & Governance"
    ],
    status: "Intimated & Approved for Launch",
    intimatedDate: "20 Feb 2026",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80"
  },
  {
    id: "quality-ihm",
    title: "Dairy Quality Control & Hospitality Standards",
    titleHi: "डेयरी गुणवत्ता नियंत्रण एवं आतिथ्य मानक प्रमाणन",
    certifier: "IHM Bhopal & FIST, IIT, PATNA",
    duration: "4 Weeks (Online Live + Lab Simulation)",
    level: "Quality Assurance",
    description: "Rigorous standards for food safety, FSSAI hygiene compliance, processing protocols, and value-added dairy product crafting.",
    descriptionHi: "खाद्य सुरक्षा, एफएसएसएआई स्वच्छता अनुपालन, प्रसंस्करण प्रोटोकॉल और मूल्यवर्धित डेयरी उत्पाद निर्माण के लिए कड़े मानक।",
    modules: [
      "FSSAI Compliance & Milk Adulteration Detection",
      "Hygiene & Sanitation in Collection Hubs",
      "Value-Added Products: Paneer, Ghee, Dahi Production",
      "Packaging & Shelf-Life Extension"
    ],
    status: "Intimated & Approved for Launch",
    intimatedDate: "21 Feb 2026",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80"
  }
];

const associateRepresentatives = [
  { name: "Dean R&D / Director", org: "FIST, IIT, PATNA", email: "fist@iitp.ac.in", status: "Intimated & Confirmed" },
  { name: "Principal & Quality Lead", org: "Institute of Hotel Management (IHM Bhopal)", email: "principal@ihmbhopal.ac.in", status: "Intimated & Confirmed" },
  { name: "Registrar / Skill Dean", org: "Scope Global Skill University (SGSU)", email: "registrar@sgsu.ac.in", status: "Intimated & Confirmed" },
  { name: "Chairman & Director", org: "Absolute Gramya Pvt Ltd (GRAMYA)", email: "chairman@absolutegramya.com", status: "Intimated & Confirmed" }
];

const OnlineCourses = () => {
  const [lang, setLang] = useState('bilingual');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showIntimationModal, setShowIntimationModal] = useState(false);
  const [intimationSent, setIntimationSent] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const [enrollForm, setEnrollForm] = useState({
    name: "",
    mobile: "",
    email: "",
    occupation: ""
  });

  const getLabel = (enText, hiText) => {
    if (lang === 'en') return enText;
    if (lang === 'hi') return hiText;
    return `${enText} / ${hiText}`;
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-[#be123c]/20 text-slate-800">
      <SEO 
        title="Online Courses & Certifications | FIST, IIT, PATNA & Consortium" 
        description="Explore upcoming online courses and certifications launched by FIST, IIT, PATNA, IHM, SGSU and GRAMYA."
        keywords="Online Dairy Courses, Certification FIST IIT PATNA, Agri IoT Course, Dairy Quality Certificate"
      />

      {/* ================= COMPACT HERO HEADER ================= */}
      <header className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-rose-100/60 via-[#fffafa]/80 to-[#fffafa]">
        {/* Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-br from-rose-200/30 via-rose-100/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-rose-200/80 text-[#881337] rounded-full text-[11px] font-black tracking-widest uppercase mb-5 shadow-sm"
          >
            <GraduationCap size={14} className="text-[#be123c]" />
            <span>Joint Certifications • FIST, IIT, PATNA & Consortium</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#881337] tracking-tight leading-snug mb-4"
          >
            {getLabel("Online Courses & Certifications", "ऑनलाइन पाठ्यक्रम एवं प्रमाणन")}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {getLabel(
              "Empowering rural leaders, dairy professionals, and youth with cutting-edge online certifications validated by leading academic and industry consortium partners.",
              "कंसोर्टियम साझेदारों द्वारा सत्यापित अत्याधुनिक ऑनलाइन प्रमाणपत्रों के माध्यम से ग्रामीण नेताओं और युवाओं को सशक्त बनाना।"
            )}
          </motion.p>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-6 pb-28">

        {/* ================= ASSOCIATE INTIMATION COMPLIANCE BANNER ================= */}
        <div className="p-[1px] bg-gradient-to-r from-[#881337] via-[#be123c] to-[#881337] rounded-[2rem] shadow-xl shadow-rose-950/10 mb-12">
          <div className="bg-gradient-to-r from-[#881337] to-[#6b0f2b] text-white p-7 sm:p-9 rounded-[1.95rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-wider text-amber-300">
                  <ShieldAlert size={13} />
                  <span>Pre-Hosting Associate Clearance Policy</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Mandatory Institutional Associate Intimation Protocol
                </h3>

                <p className="text-rose-100/90 text-xs sm:text-sm leading-relaxed font-normal">
                  <strong>Consortium Mandate:</strong> Prior to hosting any live online course or public certification, all institutional associates (<strong>FIST, IIT, PATNA</strong>, <strong>IHM Bhopal</strong>, <strong>SGSU Global</strong>, and <strong>GRAMYA</strong>) receive prior formal intimation, syllabus validation, and compliance sign-off.
                </p>
              </div>

              <button
                onClick={() => setShowIntimationModal(true)}
                className="px-5 py-3.5 bg-white text-[#881337] hover:bg-rose-50 font-extrabold rounded-xl transition-all duration-300 shrink-0 text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MailCheck size={16} className="text-[#be123c]" />
                <span>View Intimation Status & Workflow</span>
              </button>
            </div>
          </div>
        </div>

        {/* CONTROLS HEADER (Language Toggle) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#881337] tracking-tight">
              {getLabel("Featured Course Catalog", "प्रमुख पाठ्यक्रम कैटलॉग")}
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">
              {getLabel("Select a course to view modules or register interest", "पाठ्यक्रम देखने या पंजीकरण करने के लिए चयन करें")}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/60 justify-center">
            <Globe2 size={14} className="text-[#881337] ml-2 shrink-0" />
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all ${
                lang === 'en' ? 'bg-[#881337] text-white shadow-sm' : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all ${
                lang === 'hi' ? 'bg-[#881337] text-white shadow-sm' : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              HI
            </button>
            <button
              onClick={() => setLang('bilingual')}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all ${
                lang === 'bilingual' ? 'bg-[#881337] text-white shadow-sm' : 'text-slate-600 hover:text-[#881337]'
              }`}
            >
              Bilingual
            </button>
          </div>
        </div>

        {/* ================= COURSES GRID ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {courseList.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-[1px] bg-gradient-to-b from-rose-200/90 via-rose-100/40 to-rose-200/80 rounded-[2rem] shadow-xl shadow-rose-950/[0.03] flex"
            >
              <div className="bg-white rounded-[1.95rem] p-7 border border-white/80 flex flex-col justify-between w-full relative overflow-hidden">
                
                {/* Top Certifier & Status Badges */}
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <span className="px-3.5 py-1 bg-rose-50/90 text-[#881337] border border-rose-200/70 rounded-full text-xs font-extrabold flex items-center gap-1.5">
                      <Award size={13} className="text-[#be123c]" />
                      <span>{course.certifier}</span>
                    </span>
                    
                    <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold border ${course.badgeColor} flex items-center gap-1`}>
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      <span>{course.status}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#881337] leading-snug tracking-tight mb-2">
                      {lang === 'hi' ? course.titleHi : course.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {lang === 'hi' ? course.descriptionHi : course.description}
                    </p>
                  </div>

                  {/* Course Details Pills */}
                  <div className="flex flex-wrap items-center gap-3 py-2.5 border-y border-slate-100 text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#be123c]" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="w-1 h-1 bg-rose-300 rounded-full" />
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-[#be123c]" />
                      <span>{course.level}</span>
                    </span>
                  </div>

                  {/* Syllabus Modules */}
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest font-black text-rose-500">
                      {getLabel("Syllabus & Core Modules", "पाठ्यक्रम एवं प्रमुख मॉड्यूल")}
                    </p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {course.modules.map((mod, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
                          <CheckCircle2 size={13} className="text-[#be123c] shrink-0" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Associates Intimated: <strong className="text-slate-800 font-bold">{course.intimatedDate}</strong>
                  </span>

                  <button
                    onClick={() => { setSelectedCourse(course); setEnrollSuccess(false); }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-[#881337] to-[#be123c] hover:from-[#71102e] hover:to-[#9f0f32] text-white font-extrabold rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-md shadow-rose-900/20"
                  >
                    <span>{getLabel("Enroll / Register", "नामांकन करें")}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </main>

      {/* ================= ENROLLMENT REGISTRATION MODAL ================= */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-rose-100 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={16} />
              </button>

              {enrollSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#881337]">
                    {getLabel("Registration Confirmed!", "पंजीकरण की पुष्टि हुई!")}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    {getLabel(
                      `You have successfully registered for ${selectedCourse.title}. Course access and schedule details will be sent to your email.`,
                      `आपने ${selectedCourse.titleHi} में सफलतापूर्वक पंजीकरण कर लिया है। विवरण आपके ईमेल पर भेजे जाएंगे।`
                    )}
                  </p>
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="px-6 py-2.5 bg-[#881337] text-white font-bold rounded-xl text-xs mt-2"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-500">Course Candidate Registration</span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#881337] leading-snug mt-0.5">
                      {lang === 'hi' ? selectedCourse.titleHi : selectedCourse.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold mt-1">Certified by: {selectedCourse.certifier}</p>
                  </div>

                  <form onSubmit={handleEnrollSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-800 ml-1">{getLabel("Full Name *", "पूरा नाम *")}</label>
                      <input 
                        type="text" 
                        required
                        value={enrollForm.name}
                        onChange={(e) => setEnrollForm({...enrollForm, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm outline-none focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all placeholder:text-slate-400 placeholder:font-normal" 
                        placeholder="e.g. Ramesh Singh"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">{getLabel("Mobile Number *", "मोबाइल नंबर *")}</label>
                        <input 
                          type="tel" 
                          required
                          value={enrollForm.mobile}
                          onChange={(e) => setEnrollForm({...enrollForm, mobile: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm outline-none focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all placeholder:text-slate-400 placeholder:font-normal" 
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-800 ml-1">{getLabel("Email Address *", "ईमेल *")}</label>
                        <input 
                          type="email" 
                          required
                          value={enrollForm.email}
                          onChange={(e) => setEnrollForm({...enrollForm, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm outline-none focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10 transition-all placeholder:text-slate-400 placeholder:font-normal" 
                          placeholder="name@domain.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-800 ml-1">{getLabel("Current Role / Occupation *", "वर्तमान भूमिका *")}</label>
                      <div className="relative">
                        <select 
                          required
                          value={enrollForm.occupation}
                          onChange={(e) => setEnrollForm({...enrollForm, occupation: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm outline-none appearance-none pr-10 focus:bg-white focus:border-[#be123c] focus:ring-4 focus:ring-rose-500/10"
                        >
                          <option value="">{getLabel("-- Select Candidate Category --", "-- वर्ग चुनें --")}</option>
                          <option value="VDC Candidate">Village Dairy Counsellor Candidate</option>
                          <option value="Dairy Farmer">Dairy Farmer / Cooperative Member</option>
                          <option value="Student">Student / Researcher</option>
                          <option value="Agri Entrepreneur">Agri / Rural Entrepreneur</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200/80 p-3 rounded-xl text-xs text-emerald-800 font-bold flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>Pre-Hosting Compliance verified with FIST, IIT, PATNA & Associates</span>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-[#881337] to-[#be123c] hover:from-[#71102e] hover:to-[#9f0f32] text-white font-extrabold rounded-xl transition-all text-sm shadow-md shadow-rose-900/20"
                    >
                      {getLabel("Confirm Registration", "पंजीकरण की पुष्टि करें")}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= ASSOCIATE INTIMATION WORKFLOW MODAL ================= */}
      <AnimatePresence>
        {showIntimationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIntimationModal(false)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-rose-100 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setShowIntimationModal(false)}
                className="absolute top-5 right-5 p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={16} />
              </button>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#881337] text-white rounded-xl shadow-md">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#881337] tracking-tight">
                      Associate Pre-Hosting Clearance Record
                    </h3>
                    <p className="text-xs text-rose-500 font-bold uppercase">
                      Consortium Institutional Mandate
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-rose-50/70 p-4 rounded-xl border border-rose-200/80 font-medium">
                  As required by consortium policies, all course catalogs, hosting dates, and curriculum specs are formally dispatched to all 4 institutional associate representatives prior to public enrollment.
                </p>

                {/* Associate Representatives Table */}
                <div className="space-y-2.5">
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#881337]">
                    Associate Institutional Delegates Intimation Status
                  </p>

                  <div className="space-y-2">
                    {associateRepresentatives.map((assoc, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs gap-2">
                        <div>
                          <p className="font-bold text-slate-800">{assoc.name}</p>
                          <p className="text-slate-500 font-medium">{assoc.org} • <span className="text-rose-700">{assoc.email}</span></p>
                        </div>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold rounded-full text-[10px] shrink-0 self-start sm:self-auto">
                          {assoc.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 italic">
                    Status: All 4 institutional associates intimated for 2026.
                  </span>

                  <button
                    onClick={() => setIntimationSent(true)}
                    className="w-full sm:w-auto px-4 py-2 bg-[#881337] hover:bg-[#be123c] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send size={13} />
                    <span>{intimationSent ? "Intimation Dispatched ✅" : "Re-send Formal Notice"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default OnlineCourses;
