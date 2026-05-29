"use client";

import { motion } from "framer-motion";
import { Code, Server, PenTool, Users } from "lucide-react";

export default function About() {
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
      <motion.h2 variants={itemVariants} className="text-3xl text-white font-bold inline-block mb-8 relative">
        About Me
        <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-brand rounded-full"></span>
      </motion.h2>
      
      <motion.div variants={itemVariants} className="space-y-4 text-gray-300 leading-relaxed font-light mb-10">
        <p>I am a tech student focusing on Computer Science, Data Science, and Artificial Intelligence. I love diving into complex problems, exploring cutting-edge tech, and participating in fast-paced hackathons.</p>
        <p>Always eager to learn, build, and connect with fellow developers and tech enthusiasts who are shaping the future of technology.</p>
      </motion.div>

      <motion.h3 variants={itemVariants} className="text-2xl text-white font-bold mb-6">What I'm Doing</motion.h3>
      
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service 1 */}
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(57,162,174,0.3)" }}
          className="bg-surface-light border border-surface-border rounded-2xl p-6 shadow-sm flex gap-4 items-start transition-colors hover:border-brand/50"
        >
          <Code className="text-brand text-3xl mt-1 flex-shrink-0" size={32} />
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">Web Development</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Building modern, high-performance, responsive sites.</p>
          </div>
        </motion.div>

        {/* Service 2 */}
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(57,162,174,0.3)" }}
          className="bg-surface-light border border-surface-border rounded-2xl p-6 shadow-sm flex gap-4 items-start transition-colors hover:border-brand/50"
        >
          <Server className="text-brand text-3xl mt-1 flex-shrink-0" size={32} />
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">Data Science & AI</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Pursuing advanced studies and building AI models like interview accelerators.</p>
          </div>
        </motion.div>

        {/* Service 3 */}
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(57,162,174,0.3)" }}
          className="bg-surface-light border border-surface-border rounded-2xl p-6 shadow-sm flex gap-4 items-start transition-colors hover:border-brand/50"
        >
          <PenTool className="text-brand text-3xl mt-1 flex-shrink-0" size={32} />
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">Creative Literature</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Published poet contributing original poetry to national collections.</p>
          </div>
        </motion.div>

        {/* Service 4 */}
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(57,162,174,0.3)" }}
          className="bg-surface-light border border-surface-border rounded-2xl p-6 shadow-sm flex gap-4 items-start transition-colors hover:border-brand/50"
        >
          <Users className="text-brand text-3xl mt-1 flex-shrink-0" size={32} />
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">Community Leadership</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Coordinating communities and organizing events with Street Cause, Studlyf, and Spandana Society.</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
