"use client";

import { Mail, Phone, Calendar, MapPin, User } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/3 xl:w-1/4 bg-surface rounded-3xl p-6 md:p-8 flex flex-col items-center border border-surface-border h-fit sticky top-8 shadow-2xl"
    >
      <motion.div 
        animate={{ boxShadow: ["0px 0px 0px rgba(57,162,174,0)", "0px 0px 15px rgba(57,162,174,0.4)", "0px 0px 0px rgba(57,162,174,0)"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 md:w-40 md:h-40 bg-surface-light rounded-3xl border-2 border-brand flex items-center justify-center mb-6 overflow-hidden"
      >
        <User size={64} className="text-gray-600" />
      </motion.div>

      <h1 className="text-white text-2xl font-bold text-center mb-2">Krishna Kashab Lalwani</h1>
      <div className="bg-brand/10 text-brand px-4 py-1.5 rounded-lg text-sm font-medium mb-6">
        Aspiring Web Developer
      </div>

      <hr className="w-full border-surface-border mb-6" />

      <div className="w-full space-y-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-surface-light rounded-xl flex items-center justify-center border border-surface-border text-brand flex-shrink-0">
            <Mail size={18} />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
            <a href="mailto:krishnakashab@gmail.com" className="text-sm text-gray-300 hover:text-brand transition-colors truncate block">krishnakashab@gmail.com</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-surface-light rounded-xl flex items-center justify-center border border-surface-border text-brand flex-shrink-0">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Phone</p>
            <a href="tel:+919391193175" className="text-sm text-gray-300 hover:text-brand transition-colors">+91-9391193175</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-surface-light rounded-xl flex items-center justify-center border border-surface-border text-brand flex-shrink-0">
            <Calendar size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Birthday</p>
            <p className="text-sm text-gray-300">20/07/2007</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-surface-light rounded-xl flex items-center justify-center border border-surface-border text-brand flex-shrink-0">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
            <p className="text-sm text-gray-300">Hyderabad, Telangana</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        <motion.a whileHover={{ y: -5 }} href="https://github.com/krishnakashablalwani" target="_blank" className="text-gray-400 hover:text-brand transition-colors">
          <FaGithub size={20} />
        </motion.a>
        <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/krishna-kashab-lalwani/" target="_blank" className="text-gray-400 hover:text-brand transition-colors">
          <FaLinkedin size={20} />
        </motion.a>
        <motion.a whileHover={{ y: -5 }} href="https://www.instagram.com/krishnakashablalwani/" target="_blank" className="text-gray-400 hover:text-brand transition-colors">
          <FaInstagram size={20} />
        </motion.a>
      </div>
    </motion.aside>
  );
}
