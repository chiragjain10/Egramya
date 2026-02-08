import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";

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
      isActive ? "text-[#0056b3] font-bold" : "text-gray-700 hover:text-[#0056b3]"
    }`;

  return (
    <>
      {/* Top Bar - Corporate Style */}
      <div className="bg-[#1a365d] text-white py-2 px-6 lg:px-16 text-xs font-medium tracking-wide border-b border-[#ffffff1a]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-orange-400" />
              chairman@absolutegramya.com
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <Phone size={14} className="text-orange-400" />
              +91 123 456 7890
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="uppercase text-orange-400 font-bold">Enabling Global Careers</span>
            <span className="w-px h-3 bg-white/20"></span>
            <span>Skill India</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-100
        ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">

          {/* Logos Section */}
          <Link to="/" className="flex items-center gap-4 sm:gap-6">
            {/* IIT Patna / FIST Logo Placeholder */}
            <div className="flex flex-col items-center">
               <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                  <span className="text-[10px] font-bold text-blue-900 text-center leading-tight">IIT<br/>Patna</span>
               </div>
               <span className="text-[8px] font-bold text-gray-600 mt-1 uppercase">FIST</span>
            </div>

            <div className="h-10 w-px bg-gray-300"></div>

            {/* GRAMYA Logo Placeholder */}
            <div className="flex flex-col items-center">
               <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                  <span className="text-[10px] font-bold text-[#1a365d] text-center leading-tight">GRAMYA</span>
               </div>
               <span className="text-[8px] font-bold text-gray-600 mt-1 uppercase">Bhopal</span>
            </div>

            {/* Text Title (Desktop) */}
            <div className="hidden md:block ml-2">
              <h1 className="text-lg font-bold text-[#1a365d] leading-tight">Village Dairy Counsellors</h1>
              <p className="text-xs text-gray-500 font-medium tracking-wide">Training & Development Programme</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About Program</NavLink>
            <NavLink to="/structure" className={navClass}>Structure</NavLink>
            <NavLink to="/impact" className={navClass}>Impact</NavLink>
            
            <Link
              to="/enroll"
              className="px-6 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 transition shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-gray-700">
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
            className="fixed inset-0 z-[60] bg-white flex flex-col shadow-2xl"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <span className="font-bold text-blue-900 text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-full">
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="space-y-4 flex flex-col text-lg font-medium text-gray-800">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Program</Link>
                <Link to="/structure" onClick={() => setIsMobileMenuOpen(false)}>Structure</Link>
                <Link to="/impact" onClick={() => setIsMobileMenuOpen(false)}>Impact</Link>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <Link
                  to="/enroll"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 bg-blue-900 text-white text-center font-bold rounded-lg"
                >
                  Apply Now
                </Link>
              </div>
              
              <div className="pt-6 text-sm text-gray-500">
                <p className="font-bold text-gray-900 mb-2">Contact Us</p>
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
