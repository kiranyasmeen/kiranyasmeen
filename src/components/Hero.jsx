import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, MousePointer2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Link } from 'react-scroll';

const Hero = () => {
  const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'GitHub'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-animated">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="shape w-[500px] h-[500px] bg-primary-200 top-[-10%] left-[-10%]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="shape w-[600px] h-[600px] bg-accent-rose bottom-[-10%] right-[-10%]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="shape w-[400px] h-[400px] bg-accent-sky top-[20%] right-[10%]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass border border-white/50 mb-10 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent-rose animate-pulse"></span>
            <span className="text-sm font-bold text-slate-600 tracking-wide uppercase">Open for collaborations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 text-slate-900 tracking-tight"
          >
            Building <span className="text-gradient">Clean, Modern</span> <br className="hidden md:block" /> & Responsive Websites
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-500 mb-14 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            I’m <span className="text-slate-900 font-extrabold border-b-4 border-primary-300">Kiran Yasmeen</span>, a passionate web developer creating beautiful, user-friendly, and responsive websites for businesses, startups, and personal brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            <Link to="contact" smooth={true} duration={800} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-3 group text-lg"
              >
                <span>Hire Me</span>
                <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
              </motion.button>
            </Link>
            <Link to="projects" smooth={true} duration={800} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg"
              >
                View Projects
              </motion.button>
            </Link>
            <motion.a 
              href="https://github.com/kiranyasmeen" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 glass-card text-slate-600 hover:text-primary-600 flex items-center justify-center shadow-lg"
            >
              <GithubIcon size={28} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech) => (
              <motion.span 
                key={tech} 
                whileHover={{ y: -5, color: '#8b5cf6' }}
                className="px-6 py-3 rounded-2xl glass border border-white/40 text-sm font-bold text-slate-500 shadow-sm cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 pointer-events-none"
      >
        <MousePointer2 size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
