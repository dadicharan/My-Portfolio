import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { HeroParticles } from './components/canvas/HeroParticles';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  ChevronRight,
  Download,
  Terminal,
  Layers,
  Briefcase,
  GraduationCap,
  Send
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, EffectCube } from 'swiper/modules';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const RESUME_DATA = {
  name: "Charan Dadi",
  title: "AI/ML & Full-Stack Developer",
  summary: "AI/ML and Full-Stack Developer with hands-on experience in developing computer vision, visual search, and LLM-based applications. Skilled in building end-to-end systems for data analysis, model creation, model deployment, and backend integration.",
  contact: {
    email: "dadicharan102@gmail.com",
    phone: "+91 6309116432",
    location: "Gajuwaka, Visakhapatnam",
    linkedin: "https://www.linkedin.com/in/dadicharan",
    github: "https://www.github.com/dadicharan"
  },
  skills: {
    languages: ["HTML", "CSS", "JavaScript", "Python", "Java"],
    frameworks: ["React", "Spring Boot", "Bootstrap", "Tailwind CSS"],
    ai_ml: ["Machine Learning", "Deep Learning", "LLMs (DeepSeek R1)", "Computer Vision", "Predictive Modeling"],
    tools: ["GitHub", "Jira", "MySQL", "REST APIs", "Cloud Platforms"]
  },
  experience: [
    {
      company: "Ameya Intelligent Machines Labs",
      role: "AI/ML and Full-Stack Developer",
      period: "Apr 2025 - Dec 2025",
      points: [
        "Gained hands-on experience in Visual Search, Retrieval, and Object Detection for Satellite Imagery analysis.",
        "Contributed to the development and deployment of intelligent AI systems that improved image classification.",
        "Worked in an agile environment to enhance automation, data processing, and AI model scalability."
      ]
    },
    {
      company: "Government Research Organization",
      role: "AI & Data Science",
      period: "Jan 2025 - Mar 2025",
      points: [
        "Implemented and deployed AI models using LLMs (DeepSeek R1) for intelligent log analysis.",
        "Trained and integrated models on Hugging Face to enhance cybersecurity insights.",
        "Collaborated in a research-based environment to design scalable, data-driven solutions."
      ]
    },
    {
      company: "1STOP.AI",
      role: "Machine Learning Intern",
      period: "May 2024 - Jul 2024",
      points: [
        "Built a diabetes prediction system achieving 87% classification accuracy.",
        "Developed a bike-sharing demand forecasting model reaching 90% accuracy.",
        "Deployed a time-series order forecasting pipeline reducing prediction errors by 8%."
      ]
    }
  ],
  projects: [
    {
      title: "Intelligent Cyberattack Prevention in Healthcare SDN",
      description: "Developed an SDN-based control mechanism using ML to detect anomalies in healthcare network traffic, achieving 92% accuracy with DeepSeek R1.",
      tech: ["Python", "SDN", "DeepSeek R1", "ML"]
    },
    {
      title: "Real-time Chat Application",
      description: "Built a secure, real-time communication platform with integrated authentication and encryption mechanisms.",
      tech: ["J2EE", "Web 2.0", "Encryption"]
    }
  ],
  education: {
    institution: "Raghu Institute of Technology",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "2021 - 2025",
    location: "Visakhapatnam"
  }
};

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = React.useRef<any>(null);

  return (
    <div className="h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <nav className="hidden md:flex w-24 flex-col items-center justify-center border-r border-white/10 glass z-50">
        <div className="flex flex-col gap-8">
          {[
            { icon: Globe, label: "Home" },
            { icon: Briefcase, label: "Work" },
            { icon: Terminal, label: "Skills" },
            { icon: Layers, label: "Projects" },
            { icon: Mail, label: "Contact" }
          ].map((item, idx) => (
            <button
              key={item.label}
              onClick={() => {
                swiperRef.current?.slideTo(idx);
              }}
              className={cn(
                "group relative p-3 rounded-xl transition-all duration-300",
                activeSlide === idx ? "bg-emerald-500 text-black" : "text-zinc-500 hover:text-emerald-400"
              )}
            >
              <item.icon size={24} />
              <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative h-screen w-full overflow-hidden min-w-0 min-h-0">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          direction="horizontal"
          slidesPerView={1}
          mousewheel={true}
          pagination={{ clickable: true }}
          effect="cube"
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[Pagination, Mousewheel, EffectCube]}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className="h-full w-full"
        >
          {/* Slide 1: Hero */}
          <SwiperSlide>
            <section className="h-full w-full flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/20 blur-[120px] rounded-full" />
              </div>
              
              <div className="absolute inset-0 z-0 opacity-60">
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                  <HeroParticles count={1000} />
                </Canvas>
              </div>

              <div className="max-w-4xl w-full z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="font-mono text-emerald-400 mb-4 block tracking-widest uppercase text-sm">Available for Hire</span>
                  <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
                    I'm <span className="text-gradient">{RESUME_DATA.name}</span>
                  </h1>
                  <h2 className="text-2xl md:text-4xl text-zinc-400 font-light mb-8">
                    {RESUME_DATA.title}
                  </h2>
                  <p className="text-zinc-500 text-lg max-w-2xl mb-12 leading-relaxed">
                    {RESUME_DATA.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all flex items-center gap-2 group">
                      Get in Touch
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-4 px-4">
                      <a href={RESUME_DATA.contact.github} target="_blank" className="p-3 text-zinc-400 hover:text-white transition-colors">
                        <Github size={24} />
                      </a>
                      <a href={RESUME_DATA.contact.linkedin} target="_blank" className="p-3 text-zinc-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em]">Swipe</span>
                <div className="w-12 h-px bg-gradient-to-r from-emerald-500 to-transparent" />
              </motion.div>
            </section>
          </SwiperSlide>

          {/* Slide 2: Experience */}
          <SwiperSlide>
            <section className="h-full w-full flex items-center justify-center p-8 md:p-20 bg-zinc-900/30">
              <div className="max-w-5xl w-full">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-1 bg-white/10" />
                  <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-zinc-500">Experience</h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="grid gap-8">
                  {RESUME_DATA.experience.map((exp, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass p-6 md:p-8 rounded-2xl group hover:border-emerald-500/50 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-emerald-400">{exp.role}</h3>
                          <p className="text-zinc-300 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-zinc-400 text-sm flex gap-3">
                            <span className="text-emerald-500 mt-1.5">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 3: Skills */}
          <SwiperSlide>
            <section className="h-full w-full flex items-center justify-center p-8 md:p-20">
              <div className="max-w-5xl w-full">
                <h2 className="text-4xl font-display font-bold mb-16 text-center">Technical <span className="text-emerald-500">Stack</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Languages", icon: Code2, items: RESUME_DATA.skills.languages },
                    { title: "AI & ML", icon: Cpu, items: RESUME_DATA.skills.ai_ml },
                    { title: "Frameworks", icon: Globe, items: RESUME_DATA.skills.frameworks },
                    { title: "Infrastructure", icon: Database, items: RESUME_DATA.skills.tools }
                  ].map((category, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass p-8 rounded-3xl flex flex-col items-center text-center hover:bg-emerald-500/5 transition-colors group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                        <category.icon size={32} />
                      </div>
                      <h3 className="text-lg font-bold mb-4 text-zinc-200">{category.title}</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {category.items.map((item, iIdx) => (
                          <span key={iIdx} className="text-xs font-mono text-zinc-500 border border-white/5 px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 4: Projects */}
          <SwiperSlide>
            <section className="h-full w-full flex items-center justify-center p-8 md:p-20 bg-zinc-900/30">
              <div className="max-w-5xl w-full">
                <h2 className="text-4xl font-display font-bold mb-16">Featured <span className="text-emerald-500">Projects</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {RESUME_DATA.projects.map((project, idx) => (
                    <motion.div 
                      key={idx}
                      className="group relative overflow-hidden rounded-3xl glass aspect-video flex flex-col justify-end p-8"
                      whileHover={{ y: -10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                      <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="text-emerald-400" />
                      </div>
                      
                      <div className="relative z-20">
                        <div className="flex gap-2 mb-4">
                          {project.tech.map(t => (
                            <span key={t} className="text-[10px] font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                        <p className="text-zinc-400 text-sm line-clamp-2">{project.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <GraduationCap size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{RESUME_DATA.education.institution}</h4>
                      <p className="text-zinc-400">{RESUME_DATA.education.degree}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-emerald-500">{RESUME_DATA.education.period}</span>
                    <p className="text-zinc-500 text-sm">{RESUME_DATA.education.location}</p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 5: Contact */}
          <SwiperSlide>
            <section className="h-full w-full flex items-center justify-center p-8 md:p-20">
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-5xl font-display font-bold mb-8">Let's <span className="text-emerald-500">Connect</span></h2>
                  <p className="text-zinc-400 mb-12 text-lg">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-lg font-medium">{RESUME_DATA.contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-lg font-medium">{RESUME_DATA.contact.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                        <p className="text-lg font-medium">{RESUME_DATA.contact.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass p-10 rounded-[40px]">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                      <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Tell me about your project..." />
                    </div>
                    <button className="w-full py-4 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
              
              <footer className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 text-[10px] uppercase tracking-[0.4em]">
                &copy; 2026 Charan Dadi • Built with React & Tailwind
              </footer>
            </section>
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}
