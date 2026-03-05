import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Mail, Phone, Menu, X, ChevronDown, Award } from "lucide-react";

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
    `relative text-sm font-semibold transition-all duration-300 py-2 ${
      isActive 
        ? "text-[#be123c] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#be123c]" 
        : "text-gray-600 hover:text-[#be123c]"
    }`;

  return (
    <>
      {/* Top Bar - High Contrast Professional look */}
      <div className="bg-[#881337] text-white py-2 px-6 lg:px-16 text-[11px] font-medium tracking-wider border-b border-rose-900/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            {/* <a href="mailto:chairman@absolutegramya.com" className="flex items-center gap-2 hover:text-rose-200 transition-colors">
              <Mail size={14} className="text-rose-300" />
              <span className="hidden sm:inline">chairman@absolutegramya.com</span>
            </a> */}
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-rose-200 transition-colors">
              <Phone size={14} className="text-rose-300" />
              <span>+91 123 456 7890</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-5 italic text-rose-100">
            <span className="flex items-center gap-1"><Award size={12}/> Empowering Women and Youth</span>
            <span className="w-px h-3 bg-rose-700"></span>
            <span>Building Leaders</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
            : "bg-[#fff1f2]/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-100 to-rose-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="img/logo.png" 
                alt="Gramya Logo" 
                className="relative h-12 w-auto sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* <div className="h-10 w-px bg-rose-200 hidden sm:block"></div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold text-[#881337] leading-none tracking-tight">
                GRAMYA <span className="text-[#be123c] font-light text-sm block">VDC INITIATIVE</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-rose-700 font-bold mt-1">IIT Patna • FIST</p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            
            {/* Dropdown with better UX */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 group-hover:text-[#be123c] transition-colors py-2">
                Courses <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white shadow-2xl rounded-xl border border-rose-50 overflow-hidden min-w-[200px] p-2">
                  {['⁠Village Counsellor and Shakti Programme', '⁠Annapurna - Women in Agriculture', 'Entrepreneurship', '⁠Marketing Skills', '⁠IT and AI', '⁠Financial Enclosure'].map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/module-${idx + 1}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-rose-50 hover:text-[#be123c] rounded-lg transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/structure" className={navClass}>Programs</NavLink>
            <NavLink to="/gallery" className={navClass}>Gallery</NavLink>

            <Link
              to="/enroll"
              className="ml-4 px-7 py-3 bg-[#be123c] text-white text-sm font-bold rounded-full hover:bg-[#881337] transition-all shadow-[0_4px_14px_0_rgba(190,18,60,0.39)] hover:shadow-rose-900/20 transform hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="lg:hidden p-2 text-[#881337] hover:bg-rose-100 rounded-lg transition-colors"
          >
            <Menu size={28} />
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm z-[70] bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-rose-50 bg-[#fff1f2]/50">
                <img src="img/logo.png" alt="Logo" className="h-10 w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-rose-100 text-[#881337] rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                <nav className="flex flex-col gap-5 text-lg font-bold text-gray-800">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">Home</Link>
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">About Program</Link>
                  
                  <div className="space-y-3">
                    <button 
                      onClick={() => setIsModuleOpen(!isModuleOpen)}
                      className="flex items-center justify-between w-full hover:text-[#be123c]"
                    >
                      <span>Modules</span>
                      <ChevronDown className={`transition-transform ${isModuleOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isModuleOpen && (
                      <div className="pl-4 flex flex-col gap-3 text-base font-medium text-gray-500 border-l-2 border-rose-100">
                        <Link to="/module-1" onClick={() => setIsMobileMenuOpen(false)}>⁠Village Counsellor and Shakti Programme</Link>
                        <Link to="/module-2" onClick={() => setIsMobileMenuOpen(false)}>Annapurna - Women in Agriculture</Link>
                        <Link to="/module-3" onClick={() => setIsMobileMenuOpen(false)}>Entrepreneurship</Link>
                          <Link to="/module-4" onClick={() => setIsMobileMenuOpen(false)}>⁠Marketing Skills</Link>
                          <Link to="/module-5" onClick={() => setIsMobileMenuOpen(false)}>⁠IT and AI</Link>
                          <Link to="/module-6" onClick={() => setIsMobileMenuOpen(false)}>⁠Financial Enclosure</Link>
                        {/* <Link to="/module-3" onClick={() => setIsMobileMenuOpen(false)}>Module 3</Link> */}
                      </div>
                    )}
                  </div>

                  <Link to="/structure" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
                  <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                </nav>

                <div className="pt-6 border-t border-rose-100">
                  <Link
                    to="/enroll"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-4 bg-[#be123c] text-white text-center font-bold rounded-xl shadow-lg shadow-rose-200"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              <div className="p-8 bg-rose-50/50 text-sm text-gray-600">
                <p className="font-bold text-[#881337] mb-2 uppercase tracking-widest text-[10px]">Support</p>
                {/* <p className="flex items-center gap-2 mb-1"><Mail size={14}/> chairman@absolutegramya.com</p> */}
                <p className="flex items-center gap-2"><Phone size={14}/> +91 123 456 7890</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;