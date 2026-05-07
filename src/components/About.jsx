import { motion } from 'framer-motion';
import { Award, CheckCircle, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Learning & Building', value: '2+ Years', icon: <Award className="text-primary-500" /> },
    { label: 'Projects Completed', value: '15+', icon: <CheckCircle className="text-accent-rose" /> },
    { label: 'Client Focus', value: '100%', icon: <Users className="text-accent-sky" /> },
    { label: 'Fast & Responsive', value: 'Design', icon: <Zap className="text-accent-purple" /> },
  ];

  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
              I am a web developer focused on creating clean, responsive, and modern websites. 
              I enjoy turning ideas into beautiful digital experiences using modern web technologies.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-12">
              My approach combines technical precision with artistic flair, ensuring that every pixel serves a purpose 
              and every interaction feels natural. Whether it's a startup landing page or a complex web application, 
              I bring commitment and excellence to every project.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 glass-card border-slate-100"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-200/50">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-rose/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
