"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Trophy } from "lucide-react";

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const skillVariants: Variants = {
    hidden: { width: 0 },
    show: (width: string) => ({
      width,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  const skills = [
    { name: "Creative Writing", level: "95%" },
    { name: "HTML & CSS", level: "90%" },
    { name: "Python", level: "85%" },
    { name: "Event Management", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "Digital Marketing", level: "75%" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      className="w-full"
    >
      <motion.h2 variants={itemVariants} className="text-3xl text-white font-bold inline-block mb-10 relative">
        Resume
        <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-brand rounded-full"></span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div variants={itemVariants}>
          {/* Education Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-surface-light border border-surface-border rounded-xl flex items-center justify-center shadow-md">
              <BookOpen className="text-brand" size={20} />
            </div>
            <h3 className="text-2xl text-white font-bold">Education</h3>
          </div>
          
          <div className="border-l border-surface-border ml-5 pl-8 space-y-8 relative">
            <motion.div variants={itemVariants} className="relative">
              <span className="absolute -left-[41px] top-1 w-3 h-3 bg-brand rounded-full shadow-[0_0_0_4px_#121212]"></span>
              <p className="text-brand text-sm font-semibold mb-1">2025 – Present</p>
              <h4 className="text-white text-lg font-semibold mb-1">B.E. in Computer Science</h4>
              <p className="text-gray-400 text-sm">MVSR Engineering College, Hyderabad</p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <span className="absolute -left-[41px] top-1 w-3 h-3 bg-brand rounded-full shadow-[0_0_0_4px_#121212]"></span>
              <p className="text-brand text-sm font-semibold mb-1">2025 – Present</p>
              <h4 className="text-white text-lg font-semibold mb-1">B.Sc. in Data Science & AI</h4>
              <p className="text-gray-400 text-sm">BITS Pilani Digital, Remote</p>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <div className="flex items-center gap-4 mt-12 mb-6">
            <div className="w-10 h-10 bg-surface-light border border-surface-border rounded-xl flex items-center justify-center shadow-md">
              <Trophy className="text-brand" size={20} />
            </div>
            <h3 className="text-2xl text-white font-bold">Achievements</h3>
          </div>

          <div className="border-l border-surface-border ml-5 pl-8 space-y-8 relative">
            <motion.div variants={itemVariants} className="relative">
              <span className="absolute -left-[41px] top-1 w-3 h-3 bg-brand rounded-full shadow-[0_0_0_4px_#121212]"></span>
              <p className="text-brand text-sm font-semibold mb-1">05/2026</p>
              <h4 className="text-white text-md font-semibold mb-1">Published Poet</h4>
              <p className="text-gray-400 text-sm">"All That Wasn't Said" Collection</p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <span className="absolute -left-[41px] top-1 w-3 h-3 bg-brand rounded-full shadow-[0_0_0_4px_#121212]"></span>
              <p className="text-brand text-sm font-semibold mb-1">04/2026</p>
              <h4 className="text-white text-md font-semibold mb-1">1st Place - Aerothronix Hackathon</h4>
              <p className="text-gray-400 text-sm">MVSR Engineering College</p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <span className="absolute -left-[41px] top-1 w-3 h-3 bg-brand rounded-full shadow-[0_0_0_4px_#121212]"></span>
              <p className="text-brand text-sm font-semibold mb-1">03/2026</p>
              <h4 className="text-white text-md font-semibold mb-1">2nd Place - Anthah Prerana 7.0</h4>
              <p className="text-gray-400 text-sm">International Business Plan Competition</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-surface-light border border-surface-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl text-white font-bold mb-6">My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-surface-border rounded-full h-2">
                    <motion.div 
                      custom={skill.level}
                      variants={skillVariants}
                      className="bg-brand h-2 rounded-full shadow-[0_0_8px_rgba(57,162,174,0.6)]"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
