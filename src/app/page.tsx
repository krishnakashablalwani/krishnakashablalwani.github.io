"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, ExternalLink, Activity, Target, Cpu, Brain, Award, Mail, Smartphone, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'p-6' : 'p-0'}`}
      >
        <motion.div 
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out backdrop-blur-md bg-black/70 ${isScrolled ? 'max-w-4xl rounded-full px-8 py-4 border border-brand/20' : 'max-w-full px-8 md:px-12 py-6 border-b border-brand/10'}`}
        >
          <div className="flex items-center">
            <img src="/Photo.jpg" alt="Krishna Kashab" className="w-10 h-10 rounded-full border border-brand/50 object-cover shadow-[0_0_15px_rgba(57,162,174,0.3)]" />
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="text-white hover:text-brand transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-brand transition-colors">Project</a>
            <a href="#achievements" className="text-white hover:text-brand transition-colors">Achievements</a>
            <a href="#contact" className="text-white hover:text-brand transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden text-white hover:text-brand transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-space font-bold tracking-widest uppercase">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand transition-colors">About</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand transition-colors">Project</a>
              <a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand transition-colors">Achievements</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const FloatingCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`h-full relative rounded-2xl border border-brand/20 bg-black/40 backdrop-blur-lg p-8 md:p-10 transition-all duration-300 hover:border-brand/80 hover:shadow-[0_0_30px_rgba(57,162,174,0.15)] ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const [text, setText] = useState("");
  const fullText = "Aspiring Web Developer";
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(intervalId);
    }, 80);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full relative min-h-screen selection:bg-brand selection:text-white">
      <Navbar />
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[60] origin-left glow-box"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-32 pb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mt-12 md:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 relative flex justify-center items-center"
          >
            <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-brand/30 rounded-full blur-[70px] md:blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
            <img src="/Photo.jpg" alt="Krishna" className="w-32 h-32 md:w-40 md:h-40 relative z-10 object-cover rounded-full mx-auto border-2 border-brand/40 p-1 shadow-[0_0_30px_rgba(57,162,174,0.2)]" />
          </motion.div>

          <motion.h1 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-white"
          >
            Krishna Kashab <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white">Lalwani</span>
          </motion.h1>
          
          <div className="h-8 md:h-12 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl font-mono text-brand">
              {text}<span className="animate-pulse" style={{ animationDuration: '0.8s' }}>_</span>
            </p>
          </div>
          
          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            I am a tech student focusing on Computer Science, Data Science, and Artificial Intelligence. I love diving into complex problems, exploring cutting-edge tech, and participating in fast-paced hackathons.
          </p>

          <motion.a 
            href="#projects"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black border border-brand text-brand font-medium tracking-wide hover:shadow-[0_0_20px_rgba(57,162,174,0.4)] transition-all"
          >
            Explore My Work <ChevronDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>

      {/* Case Study / Project */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-brand tracking-widest uppercase mb-12 text-center"
        >
          Featured Project
        </motion.h2>

        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FloatingCard delay={0}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-brand/10 text-brand">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Forivo</h3>
                </div>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Persona-driven performance conditioning platform helping candidates master high-stakes interviews.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['AI Simulation', 'Real-time Analytics', 'Co-Founder'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono rounded-md border border-brand/30 text-brand">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-brand text-sm font-medium">February 2026</div>
              </FloatingCard>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <FloatingCard delay={0.2} className="group">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-brand shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">The Problem</h4>
                    <p className="text-white/70 leading-relaxed">
                      Job seekers and students frequently falter in high-stakes interviews due to a lack of realistic practice environments where they can correct unconscious nervous tremors and poor voice pitch.
                    </p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={0.4} className="group">
                <div className="flex items-start gap-4">
                  <Cpu className="w-6 h-6 text-brand shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">The Solution</h4>
                    <p className="text-white/70 leading-relaxed">
                      Co-founded and led the technical development of an advanced AI-powered career accelerator. We utilized specialized AI models to simulate realistic interviewers that mimic human facial expressions and analyze voice pitch and nervous tremors in real time.
                    </p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={0.6} className="group">
                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-brand shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">The Result</h4>
                    <p className="text-white/70 leading-relaxed">
                      The platform actively generates instant crisis-management scenarios tailored to each user's background, providing actionable feedback that conditions persona-driven performance.
                    </p>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-brand/10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-brand tracking-widest uppercase mb-12 text-center"
        >
          Awards & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <FloatingCard delay={0.1}>
            <Award className="w-8 h-8 text-brand mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">1st Place - Aerothronix Hackathon</h3>
            <p className="text-brand font-mono text-sm mb-3">MVSR Engineering College (04/2026)</p>
            <p className="text-white/70">Secured 1st place in the Aerothronix Hackathon event conducted as part of Samvarthan 2k26.</p>
          </FloatingCard>
          
          <FloatingCard delay={0.2}>
            <Award className="w-8 h-8 text-brand mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">2nd Place - Anthah Prerana 7.0</h3>
            <p className="text-brand font-mono text-sm mb-3">Bhavan's Vivekananda College (03/2026)</p>
            <p className="text-white/70">International Business Plan Competition organized by the Entrepreneur Development Cell.</p>
          </FloatingCard>

          <FloatingCard delay={0.3}>
            <Award className="w-8 h-8 text-brand mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">3rd Prize - STARTUPEDIA'26</h3>
            <p className="text-brand font-mono text-sm mb-3">Institute of Public Enterprise (02/2026)</p>
            <p className="text-white/70">12th Edition National Level Startup Summit organized by the Entrepreneurship Cell.</p>
          </FloatingCard>
          
          <FloatingCard delay={0.4}>
            <Award className="w-8 h-8 text-brand mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">2nd Place - Ideasprint</h3>
            <p className="text-brand font-mono text-sm mb-3">MVSR Engineering College (04/2026)</p>
            <p className="text-white/70">Secured 2nd place in the Ideasprint event conducted as a part of Samvarthan 2k26.</p>
          </FloatingCard>
        </div>
      </section>

      {/* About Section Grid */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-brand/10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-brand tracking-widest uppercase mb-12 text-center"
        >
          Background & Education
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <FloatingCard className="md:col-span-2" delay={0.1}>
            <h3 className="text-2xl font-bold text-white mb-6">Dual Academic Track</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-brand/50 pl-4">
                <h4 className="text-white font-medium text-lg">B.E. Computer Science and Engineering</h4>
                <p className="text-brand text-sm font-mono mb-2">MVSR Engineering College (2025 - Present)</p>
                <p className="text-white/70">Hyderabad, India</p>
              </div>
              <div className="border-l-2 border-brand/50 pl-4">
                <h4 className="text-white font-medium text-lg">B.S. Data Science & AI</h4>
                <p className="text-brand text-sm font-mono mb-2">BITS Pilani Digital (2025 - Present)</p>
                <p className="text-white/70">Remote</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard delay={0.3}>
            <h3 className="text-xl font-bold text-white mb-6">Skills</h3>
            <ul className="space-y-3">
              {['Python', 'Creative Writing', 'Digital Marketing', 'Event Management', 'Communication Skills'].map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {skill}
                </li>
              ))}
            </ul>
          </FloatingCard>

          <FloatingCard delay={0.4} className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Extracurricular & Leadership</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-white font-medium">Spandana Society</p>
                <p className="text-brand text-sm font-mono">Volunteer (2023–2025)</p>
              </div>
              <div>
                <p className="text-white font-medium">Studlyf</p>
                <p className="text-brand text-sm font-mono">Organizing Team (2026)</p>
              </div>
              <div>
                <p className="text-white font-medium">Street Cause</p>
                <p className="text-brand text-sm font-mono">Coordinator (2025)</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard delay={0.5}>
            <h3 className="text-xl font-bold text-white mb-6">Hobbies</h3>
            <ul className="space-y-3">
              {['Music', 'Literature', 'E-sports Gaming'].map((hobby) => (
                <li key={hobby} className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {hobby}
                </li>
              ))}
            </ul>
          </FloatingCard>

          <FloatingCard delay={0.6} className="md:col-span-3 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Beyond Development</h3>
            <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
              Technology is just one medium of expression. I am a published poet with original works featured in collections by Bookaholics and Paper Towns: <span className="text-brand">"Last Portrait V.2"</span> and <span className="text-brand">"All That Wasn't Said"</span>. I also hold an RSL Level 1 Award in Graded Examination in Music Performance from Rockschool London.
            </p>
          </FloatingCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-brand/10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-brand tracking-widest uppercase mb-6"
        >
          Get In Touch
        </motion.h2>
        
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Create Something Together</h3>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Always eager to learn, build, and connect with fellow developers. I'm currently looking for new opportunities, collaborations, and hackathons.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="mailto:krishnakashab@gmail.com" className="w-full md:w-auto p-6 rounded-2xl border border-brand/20 bg-black/40 backdrop-blur-lg flex items-center gap-4 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(57,162,174,0.2)] transition-all">
            <Mail className="w-6 h-6 text-brand" />
            <div className="text-left">
              <p className="text-sm text-white/50 font-mono mb-1">Email</p>
              <p className="text-white font-medium">krishnakashab@gmail.com</p>
            </div>
          </a>

          <a href="tel:+919391193175" className="w-full md:w-auto p-6 rounded-2xl border border-brand/20 bg-black/40 backdrop-blur-lg flex items-center gap-4 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(57,162,174,0.2)] transition-all">
            <Smartphone className="w-6 h-6 text-brand" />
            <div className="text-left">
              <p className="text-sm text-white/50 font-mono mb-1">Phone</p>
              <p className="text-white font-medium">+91 9391193175</p>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a href="https://github.com/krishnakashablalwani" target="_blank" rel="noopener noreferrer" className="p-4 md:px-6 rounded-2xl border border-brand/20 bg-black/40 backdrop-blur-lg flex items-center gap-3 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(57,162,174,0.2)] transition-all group">
            <FaGithub className="w-6 h-6 text-brand" />
            <span className="text-white font-medium hidden sm:block">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/krishna-kashab-lalwani" target="_blank" rel="noopener noreferrer" className="p-4 md:px-6 rounded-2xl border border-brand/20 bg-black/40 backdrop-blur-lg flex items-center gap-3 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(57,162,174,0.2)] transition-all group">
            <FaLinkedin className="w-6 h-6 text-brand" />
            <span className="text-white font-medium hidden sm:block">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/krishnakashablalwani/" target="_blank" rel="noopener noreferrer" className="p-4 md:px-6 rounded-2xl border border-brand/20 bg-black/40 backdrop-blur-lg flex items-center gap-3 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(57,162,174,0.2)] transition-all group">
            <FaInstagram className="w-6 h-6 text-brand" />
            <span className="text-white font-medium hidden sm:block">Instagram</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-brand/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/Photo.jpg" alt="Krishna" className="w-8 h-8 rounded-full border border-brand/50 object-cover grayscale hover:grayscale-0 transition-all" />
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Krishna Kashab Lalwani.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/krishnakashablalwani" className="text-white/50 hover:text-brand transition-colors"><FaGithub className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/krishna-kashab-lalwani" className="text-white/50 hover:text-brand transition-colors"><FaLinkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/krishnakashablalwani/" className="text-white/50 hover:text-brand transition-colors"><FaInstagram className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
