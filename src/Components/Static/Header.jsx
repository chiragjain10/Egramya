import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Mail, Phone, Menu, X, ChevronDown, Award, Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `relative text-xs sm:text-sm font-semibold transition-all duration-300 py-2 tracking-tight ${
      isActive 
        ? "text-[#be123c] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#881337] after:to-[#be123c] after:rounded-full" 
        : "text-slate-700 hover:text-[#be123c]"
    }`;

  return (
    <>
      {/* Top Bar - High Contrast Premium Professional Look */}
      <div className="bg-gradient-to-r from-[#881337] via-[#6e0f2c] to-[#881337] text-white py-2 px-6 lg:px-16 text-[11px] font-medium tracking-wide border-b border-rose-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-rose-100 hover:text-white transition-colors">
              <Phone size={13} className="text-rose-300" />
              <span className="font-medium">+91 123 456 7890</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-5 text-rose-100/90 font-normal">
            <span className="flex items-center gap-1.5">
              <Award size={13} className="text-rose-300" />
              <span>Empowering Women & Rural Youth</span>
            </span>
            <span className="w-px h-3 bg-rose-700/60"></span>
            <span>Building Village Leaders</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_25px_-5px_rgba(136,19,55,0.08)] py-3 border-b border-rose-100/60" 
            : "bg-[#fff1f2]/80 backdrop-blur-md py-4 border-b border-rose-100/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-200/50 to-rose-300/30 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <img 
                src="img/logo.png" 
                alt="Gramya Logo" 
                className="relative h-11 w-auto sm:h-13 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            
            {/* Courses Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#be123c] transition-colors py-2 tracking-tight">
                <span>Courses</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-slate-500 group-hover:text-[#be123c]" />
              </button>
              
              <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-rose-100/80 overflow-hidden min-w-[240px] p-2">
                  {['Village Counsellor & Shakti Programme', 'Annapurna - Women in Agriculture', 'Entrepreneurship', 'Marketing Skills', 'IT and AI', 'Financial Inclusion'].map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/module-${idx + 1}`}
                      className="block px-3.5 py-2.5 text-xs text-slate-700 hover:bg-rose-50/80 hover:text-[#881337] rounded-xl transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/structure" className={navClass}>Programs</NavLink>
            <NavLink to="/courses" className={navClass}>Online Courses</NavLink>
            <NavLink to="/knowledge-partner" className={navClass}>Knowledge Partner</NavLink>
            <NavLink to="/gallery" className={navClass}>Gallery</NavLink>

            <Link
              to="/enroll"
              className="ml-3 px-6 py-2.5 bg-gradient-to-r from-[#881337] to-[#be123c] hover:from-[#71102e] hover:to-[#9f0f32] text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-[0_4px_16px_0_rgba(190,18,60,0.3)] transform hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="lg:hidden p-2 text-[#881337] hover:bg-rose-100/60 rounded-xl transition-colors"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[82%] max-w-sm z-[70] bg-white shadow-2xl flex flex-col border-l border-rose-100"
            >
              <div className="p-5 flex justify-between items-center border-b border-rose-100 bg-[#fff1f2]/60">
                <img src="img/logo.png" alt="Logo" className="h-9 w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-rose-100 text-[#881337] rounded-full">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <nav className="flex flex-col gap-4 text-base font-semibold text-slate-800">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">Home</Link>
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">About Program</Link>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => setIsModuleOpen(!isModuleOpen)}
                      className="flex items-center justify-between w-full hover:text-[#be123c] py-1"
                    >
                      <span>Modules</span>
                      <ChevronDown className={`transition-transform size={18} ${isModuleOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isModuleOpen && (
                      <div className="pl-4 flex flex-col gap-2.5 text-sm font-medium text-slate-600 border-l-2 border-rose-100">
                        <Link to="/module-1" onClick={() => setIsMobileMenuOpen(false)}>Village Counsellor & Shakti Programme</Link>
                        <Link to="/module-2" onClick={() => setIsMobileMenuOpen(false)}>Annapurna - Women in Agriculture</Link>
                        <Link to="/module-3" onClick={() => setIsMobileMenuOpen(false)}>Entrepreneurship</Link>
                        <Link to="/module-4" onClick={() => setIsMobileMenuOpen(false)}>Marketing Skills</Link>
                        <Link to="/module-5" onClick={() => setIsMobileMenuOpen(false)}>IT and AI</Link>
                        <Link to="/module-6" onClick={() => setIsMobileMenuOpen(false)}>Financial Inclusion</Link>
                      </div>
                    )}
                  </div>

                  <Link to="/structure" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
                  <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Online Courses</Link>
                  <Link to="/knowledge-partner" onClick={() => setIsMobileMenuOpen(false)}>Knowledge Partner</Link>
                  <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                </nav>

                <div className="pt-6 border-t border-rose-100">
                  <Link
                    to="/enroll"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3.5 bg-gradient-to-r from-[#881337] to-[#be123c] text-white text-center font-semibold rounded-xl shadow-md shadow-rose-900/20 text-sm"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-rose-50/50 text-xs text-slate-600 border-t border-rose-100">
                <p className="font-bold text-[#881337] mb-2 uppercase tracking-widest text-[10px]">Helpline Support</p>
                <p className="flex items-center gap-2"><Phone size={14} className="text-[#be123c]" /> +91 123 456 7890</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;