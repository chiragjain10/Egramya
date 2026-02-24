import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0a09] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Accent Blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#be123c]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* Column 1: Brand Identity (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block">
              <img
                src="img/logo.png"
                alt="Gramya Logo"
                className="h-16 w-auto brightness-0 invert"
              />
              <div className="mt-4">

              </div>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm font-light">
              A flagship collaborative initiative between <span className="text-white border-b border-stone-700">GRAMYA</span> and <span className="text-white border-b border-stone-700">FIST, IIT Patna</span>. Dedicated to empowering rural women through scientific dairy management and leadership.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group relative p-3 bg-stone-900/50 border border-stone-800 rounded-full hover:border-[#be123c] transition-all duration-300"
                >
                  <Icon size={18} className="text-stone-400 group-hover:text-[#be123c] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#be123c] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'About us', path: '/about' },
                { label: 'Programs', path: '/structure' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Enroll Now', path: '/enroll' },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="group flex items-center text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all text-[#be123c]"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#be123c] mb-8">Inquiries</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#be123c]/10 flex items-center justify-center rounded-lg border border-[#be123c]/20">
                    <MapPin size={18} className="text-[#be123c]" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-tighter mb-1">Location</p>
                    <p className="text-sm text-stone-200">Absolute Gramya Private Limited,<br />Bhopal, Madhya Pradesh</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#be123c]/10 flex items-center justify-center rounded-lg border border-[#be123c]/20">
                    <Mail size={18} className="text-[#be123c]" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-tighter mb-1">Direct Contact</p>
                    <p className="text-sm text-stone-200 font-medium">Dr. Pankaj Shukla</p>
                    <a href="mailto:chairman@absolutegramya.com" className="text-xs text-[#be123c] hover:underline">chairman@absolutegramya.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Badge */}
            <div className="p-4 bg-gradient-to-br from-stone-900 to-black border border-stone-800 rounded-xl">
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mb-3">Institutional Partners</p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white tracking-tight">FIST, IIT PATNA</span>
                <div className="h-3 w-[1px] bg-stone-700" />
                <span className="text-xs font-bold text-white tracking-tight">GRAMYA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-stone-500 font-light tracking-wide">
            &copy; 2026 Village Dairy Counsellors Programme. <span className="hidden md:inline">|</span> Designed for Rural Excellence.
          </p>
          <div className="flex gap-8 text-[11px] uppercase tracking-widest">
            <a href="#" className="text-stone-500 hover:text-[#be123c] transition-colors">Privacy</a>
            <a href="#" className="text-stone-500 hover:text-[#be123c] transition-colors">Terms</a>
            <a href="#" className="text-stone-500 hover:text-[#be123c] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;