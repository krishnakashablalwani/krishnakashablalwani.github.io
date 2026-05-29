"use client";

import { motion } from "framer-motion";
import { Bot, Eye, Calendar } from "lucide-react";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      className="w-full"
    >
      <motion.h2 variants={itemVariants} className="text-3xl text-white font-bold inline-block mb-10 relative">
        Portfolio
        <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-brand rounded-full"></span>
      </motion.h2>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(57,162,174,0.3)" }}
          className="bg-surface-light border border-surface-border rounded-2xl overflow-hidden group hover:border-brand/50 transition-colors cursor-pointer"
        >
          <div className="h-48 bg-surface-border flex items-center justify-center relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Bot className="text-gray-600" size={64} />
            </motion.div>
            <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-black/50 p-3 rounded-full">
                <Eye className="text-white" size={32} />
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-brand text-xs font-semibold tracking-wider mb-2 uppercase">AI / Web Application</p>
            <h3 className="text-xl text-white font-bold mb-3">Forivo</h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-4">
              Co-founded and led technical development of an advanced AI-powered career accelerator. Utilizes specialized AI models to simulate realistic interviewers, analyzing facial expressions, voice pitch, and generating instant crisis-management scenarios.
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Calendar size={14} /> Feb 2026
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
