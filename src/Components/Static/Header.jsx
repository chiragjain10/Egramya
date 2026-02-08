import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Mail, Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-[#be123c] font-bold" : "text-gray-700 hover:text-[#be123c]"
    }`;

  return (
    <>
      {/* Top Bar - Women Empowerment Style */}
      <div className="bg-[#881337] text-white py-2 px-6 lg:px-16 text-xs font-medium tracking-wide border-b border-[#ffffff1a]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-[#fb7185]" />
              chairman@absolutegramya.com
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <Phone size={14} className="text-[#fb7185]" />
              +91 123 456 7890
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="uppercase text-[#fb7185] font-bold">Empowering Women</span>
            <span className="w-px h-3 bg-white/20"></span>
            <span>Building Leaders</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-100
        ${isScrolled ? "bg-white shadow-md py-2" : "bg-[#fff1f2] py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">

          {/* Logos Section */}
          <Link to="/" className="flex items-center gap-4 sm:gap-6">
            {/* IIT Patna / FIST Logo Placeholder */}
            <div className="flex flex-col items-center">
               <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center border border-rose-100 shadow-sm">
                  <span className="text-[10px] font-bold text-[#881337] text-center leading-tight">IIT<br/>Patna</span>
               </div>
               <span className="text-[8px] font-bold text-rose-900 mt-1 uppercase">FIST</span>
            </div>

            <div className="h-10 w-px bg-rose-200"></div>

            {/* GRAMYA Logo Placeholder */}
            <div className="flex flex-col items-center">
               <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center border border-rose-100 shadow-sm">
                  <span className="text-[10px] font-bold text-[#881337] text-center leading-tight">GRAMYA</span>
               </div>
               <span className="text-[8px] font-bold text-rose-900 mt-1 uppercase">Bhopal</span>
            </div>

            {/* Text Title (Desktop) */}
            <div className="hidden md:block ml-2">
              <h1 className="text-lg font-bold text-[#881337] leading-tight">Village Dairy Counsellors</h1>
              <p className="text-xs text-[#be123c] font-medium tracking-wide">Women Empowerment Initiative</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/structure" className={navClass}>Programs</NavLink>
            <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
            
            <Link
              to="/enroll"
              className="px-6 py-2.5 bg-[#be123c] text-white text-sm font-semibold rounded-full hover:bg-[#9f1239] transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-[#881337]">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#fff1f2] flex flex-col shadow-2xl"
          >
            <div className="p-6 flex justify-between items-center border-b border-rose-100">
              <span className="font-bold text-[#881337] text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white rounded-full text-[#881337]">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="space-y-4 flex flex-col text-lg font-medium text-gray-800">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">About Program</Link>
                <Link to="/structure" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">Programs</Link>
                <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#be123c]">Gallery</Link>
              </div>

              <div className="pt-6 border-t border-rose-100">
                <Link
                  to="/enroll"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 bg-[#be123c] text-white text-center font-bold rounded-full shadow-lg"
                >
                  Apply Now
                </Link>
              </div>
              
              <div className="pt-6 text-sm text-gray-600">
                <p className="font-bold text-[#881337] mb-2">Contact Us</p>
                <p>chairman@absolutegramya.com</p>
                <p>Bhopal, Madhya Pradesh</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
