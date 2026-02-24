import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Globe, 
  Award, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  Target,
  Sprout,
  FlaskConical,
  Zap,
  Heart,
  Briefcase,
  Layers,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// --- Sub-Components ---
const TopicCard = ({ code, title, items, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    className="group bg-white rounded-[2rem] p-8 border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-[#fff1f2] rounded-xl text-[#be123c] group-hover:bg-[#be123c] group-hover:text-white transition-all">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-bold text-[#881337]">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
          <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-rose-300 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-[#fffcfc] font-sans selection:bg-[#be123c]/20">
      
      {/* 1. HERO SECTION */}
      <header className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Rural Dairy Farming"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#881337] via-[#881337]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1 rounded-full bg-rose-500/20 text-rose-200 text-xs font-bold tracking-[0.3em] uppercase mb-6 border border-rose-500/30">
              Madhya Pradesh Initiative
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Village Dairy <br/>
              <span className="text-rose-400 italic">Counsellors</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-rose-100/80 leading-relaxed mb-8">
              Empowering rural communities through structured capacity building, 
              scientific guidance, and market-driven transformation of the dairy sector.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4">
              <button className="px-8 py-4 bg-[#be123c] text-white rounded-full font-bold hover:bg-[#881337] transition-all shadow-lg shadow-rose-900/20">
                Enroll in Program
              </button>
              <button className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
                Download Brochure
              </button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* 2. RELEVANCE & CONTEXT */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#be123c] uppercase mb-4">The Relevance</h2>
            <h3 className="text-4xl font-bold text-[#881337] mb-6 leading-tight">Bridging the Gap in Madhya Pradesh's Dairy Sector</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Despite significant contributions to the economy, the dairy sector faces challenges like low milk yield and limited market info. VDCs act as a dedicated cadre of professionals providing grassroots support.</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                  <TrendingUp className="text-[#be123c] mb-2" />
                  <p className="text-sm font-bold text-[#881337]">Improved Productivity</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                  <ShieldCheck className="text-[#be123c] mb-2" />
                  <p className="text-sm font-bold text-[#881337]">Quality Assurance</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80" className="rounded-[3rem] shadow-2xl" alt="Community Engagement" />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-xl border border-rose-100 max-w-xs">
              <p className="text-[#be123c] font-bold text-3xl mb-1">5,000</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">VDCs to be trained across Panchayats</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL & NATIONAL BEST PRACTICES */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-rose-400 font-bold tracking-[0.3em] uppercase text-sm mb-4">Benchmarking Excellence</h2>
            <h3 className="text-4xl font-bold">International & National Perspectives</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Practice 1 */}
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Globe className="text-rose-400 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">International Extension</h4>
              <p className="text-sm text-stone-400 leading-relaxed">Inspired by the US Cooperative Extension, Australia's RIRDC, and NZ's DairyNZ to ensure sustainability and research-backed advisory.</p>
            </div>
            {/* Practice 2 */}
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Zap className="text-rose-400 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Digital Agriculture</h4>
              <p className="text-sm text-stone-400 leading-relaxed">Adapting Israel's precision dairy farming techniques using data analytics to optimize farm-level production.</p>
            </div>
            {/* Practice 3 */}
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Award className="text-rose-400 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">National Best Practices</h4>
              <p className="text-sm text-stone-400 leading-relaxed">Implementing Integrated Farming Systems (IFS), High-yielding breeds (Holstein Friesian), and Artificial Insemination (AI).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CURRICULUM GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-[#be123c] font-bold tracking-[0.3em] uppercase text-sm mb-4">Training Structure</h2>
            <h3 className="text-4xl font-bold text-[#881337]">Course Curriculum</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-sm mt-4 md:mt-0">A comprehensive 5-module program designed in association with IIT Patna.</p>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TopicCard 
            title="Introduction to Dairy" 
            icon={BookOpen}
            items={["Anatomy & Physiology", "Farm Management", "Record-keeping", "Layout & Infrastructure"]} 
          />
          <TopicCard 
            title="Animal Nutrition" 
            icon={Sprout}
            items={["Nutrient Requirements", "Ration Balancing", "Feed Formulation", "Storage & Preservation"]} 
          />
          <TopicCard 
            title="Reproduction" 
            icon={FlaskConical}
            items={["Breeding Methods", "Artificial Insemination", "Pregnancy Management", "Synchronization"]} 
          />
          <TopicCard 
            title="Health Management" 
            icon={ShieldCheck}
            items={["Disease Prevention", "Vaccination Schedules", "Deworming", "First Aid for Cattle"]} 
          />
          <TopicCard 
            title="Milk Quality" 
            icon={CheckCircle2}
            items={["Hygienic Handling", "Value Addition (Ghee/Paneer)", "Market Linkages", "Quality Standards"]} 
          />
          <div className="bg-[#be123c] rounded-[2rem] p-8 text-white flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-4">Target Group</h4>
            <ul className="space-y-3 text-rose-100 text-sm">
              <li className="flex gap-2"> <ChevronRight size={16}/> Min 10th Grade Pass</li>
              <li className="flex gap-2"> <ChevronRight size={16}/> Rural Background</li>
              <li className="flex gap-2"> <ChevronRight size={16}/> Local Language Fluency</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 5. WOMEN EMPOWERMENT SECTION */}
      <section className="py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Heart className="text-[#be123c] mx-auto mb-6" size={48} />
          <h3 className="text-4xl font-bold text-[#881337] mb-8">Role in Women Empowerment</h3>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#be123c]">Economic Independence</h4>
              <p className="text-sm text-gray-600">Improving productivity to ensure women have direct control over finances and decision-making.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#be123c]">Social Voice</h4>
              <p className="text-sm text-gray-600">Facilitating participation in SHGs and cooperatives to strengthen their voice in local affairs.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#be123c]">Leadership</h4>
              <p className="text-sm text-gray-600">Identifying and supporting women leaders to advocate for the interests of rural farmers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECT MANAGEMENT UNIT (ABSOLUTE GRAMYA) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-white border border-stone-200 rounded-[3rem] p-12 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Briefcase size={200} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-stone-900 mb-8">Absolute Gramya <span className="text-[#be123c]">PMU Role</span></h3>
            <div className="grid md:grid-cols-2 gap-12">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0 text-[#be123c] font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-stone-800">Planning & Coordination</h5>
                    <p className="text-sm text-gray-500">Managing budget, timelines, and multi-stakeholder engagement with Govt/NGOs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0 text-[#be123c] font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-stone-800">Support & Mentoring</h5>
                    <p className="text-sm text-gray-500">Pairing experienced VDCs with newcomers for knowledge sharing and business planning.</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0 text-[#be123c] font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-stone-800">M&E Framework</h5>
                    <p className="text-sm text-gray-500">Tracking milk production increases and farmer income growth through data analytics.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0 text-[#be123c] font-bold">4</div>
                  <div>
                    <h5 className="font-bold text-stone-800">Sustainability</h5>
                    <p className="text-sm text-gray-500">Exploring revenue streams like consultancy and training fees for long-term VDC viability.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#881337] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <h3 className="text-4xl font-bold mb-6 relative z-10">Ready to Transform Rural Dairy?</h3>
          <p className="text-rose-200 mb-10 max-w-2xl mx-auto relative z-10">Join a network of 5,000 professionals driving the sustainable development of Madhya Pradesh's dairy industry.</p>
          <button className="px-12 py-5 bg-white text-[#881337] rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-10">
            Apply as VDC Candidate
          </button>
        </div>
      </section>

    </div>
  );
};

export default ProgramPage;