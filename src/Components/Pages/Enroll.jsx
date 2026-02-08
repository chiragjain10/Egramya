import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import SEO from "../SEO";

const EnrollPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans pt-24 pb-20">
      <SEO 
        title="Enroll Now" 
        description="Apply for the Village Dairy Counsellors Program. Admissions are open for the upcoming batch. Start your journey towards becoming a rural leader."
        keywords="Enroll VDC Program, Dairy Course Admission, Rural Women Job Training, Apply Gramya"
      />
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          >
            Admissions Open
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6"
          >
            Apply for VDC Program
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Take the first step towards a professional career in dairy management. 
            Join the next cohort of Village Dairy Counsellors.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Application Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Candidate Registration</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Location (District/Village)</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="e.g. Bhopal, MP" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education Qualification</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-600">
                  <option>Select Qualification</option>
                  <option>10th Pass</option>
                  <option>12th Pass</option>
                  <option>Graduate</option>
                  <option>Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join?</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="Tell us briefly about your interest..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-[#1a365d] hover:bg-[#152c4e] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                Submit Application <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-[#1a365d] text-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-lg mb-4">Contact Admissions</h4>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-orange-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Call Us</p>
                    <p className="font-medium">+91 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-orange-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Email</p>
                    <p className="font-medium">admissions@absolutegramya.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-orange-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Visit Us</p>
                    <p className="font-medium">GRAMYA Campus, Bhopal, Madhya Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4">Eligibility Criteria</h4>
              <ul className="space-y-3">
                {[
                  "Minimum 10th Standard Pass",
                  "Age: 18 - 35 Years",
                  "Interest in Dairy Sector",
                  "Basic reading/writing skills"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
