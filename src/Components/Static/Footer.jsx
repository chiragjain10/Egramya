import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8 border-t-4 border-[#0056b3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Organization Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold leading-tight">Village Dairy Counsellors</h3>
              <p className="text-sm text-stone-400 mt-1">Training & Development Programme</p>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              A collaborative initiative between GRAMYA and FIST, IIT Patna to strengthen village-level dairy ecosystems through structured capacity building.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-stone-800 rounded hover:bg-[#0056b3] transition"><Facebook size={16} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded hover:bg-[#0056b3] transition"><Twitter size={16} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded hover:bg-[#0056b3] transition"><Linkedin size={16} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded hover:bg-[#0056b3] transition"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-stone-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/" className="hover:text-[#0056b3] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#0056b3] transition">About the Program</Link></li>
              <li><Link to="/structure" className="hover:text-[#0056b3] transition">Course Structure</Link></li>
              <li><Link to="/impact" className="hover:text-[#0056b3] transition">Impact & Outcomes</Link></li>
              <li><Link to="/enroll" className="hover:text-[#0056b3] transition">Apply Online</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 border-b border-stone-800 pb-2 inline-block">Contact Information</h4>
            <div className="space-y-4 text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#0056b3] shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-bold text-white">Absolute Gramya Private Limited</p>
                  <p>Bhopal, Madhya Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="text-[#0056b3] shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-bold text-white">Dr. Pankaj Shukla</p>
                  <p className="text-xs text-stone-500">Chairman & Managing Director</p>
                  <a href="mailto:chairman@absolutegramya.com" className="hover:text-white transition">chairman@absolutegramya.com</a>
                </div>
              </div>

              <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-800 mt-4">
                <p className="text-xs text-stone-500 mb-1 uppercase tracking-wider font-bold">Key Partners</p>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-white">FIST, IIT Patna</span>
                  <span className="w-1 h-1 bg-[#0056b3] rounded-full"></span>
                  <span className="font-bold text-white">GRAMYA</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; 2026 Village Dairy Counsellors Programme. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
