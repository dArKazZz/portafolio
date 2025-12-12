"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Github, ExternalLink, Database, Code2, Palette, Layers, Sparkles, Zap, Monitor, Smartphone } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "Hotel Management System",
    subtitle: "Backend & Database",
    description: "Complete hotel management solution with architecture design, backend development, and database administration. Implementation of booking modules, billing system, and customer management.",
    longDescription: "Comprehensive system that optimizes the hotel's internal workflow, from room management to customer checkout.",
    tech: ["Java", "PostgreSQL", "Backend", "Database Design"],
    icon: Database,
    category: "Backend",
    links: { github: "#", demo: "#" },
    featured: true,
    stats: [
      { label: "Modules", value: "8+" },
      { label: "DB Tables", value: "15" },
      { label: "Endpoints", value: "40+" },
    ]
  },
  {
    title: "Kahoot Clone",
    subtitle: "Full Stack Real-Time",
    description: "Real-time interactive quiz system with live question delivery. Development of complete backend infrastructure, session management, and real-time synchronization.",
    longDescription: "Web application that allows creating and participating in interactive quizzes with multiple simultaneous users.",
    tech: ["Flask", "Python", "WebSockets", "Real Time"],
    icon: Zap,
    category: "Full Stack",
    links: { github: "#", demo: "#" },
    featured: true,
    stats: [
      { label: "Users", value: "100+" },
      { label: "Latency", value: "<50ms" },
      { label: "Concurrent", value: "Real-time" },
    ]
  },
  {
    title: "E-Commerce Web",
    subtitle: "UI/UX & Frontend",
    description: "Interface and user experience design for e-commerce platform, achieving intuitive and visually attractive navigation.",
    longDescription: "Implementation of high-fidelity prototypes and complete frontend structure with focus on conversion.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    icon: Palette,
    category: "Frontend",
    links: { github: "#", demo: "#" },
    featured: false,
    stats: [
      { label: "Pages", value: "12" },
      { label: "Components", value: "50+" },
      { label: "Responsive", value: "100%" },
    ]
  },
];

const categories = [
  { name: "All", icon: Layers },
  { name: "Backend", icon: Database },
  { name: "Full Stack", icon: Code2 },
  { name: "Frontend", icon: Monitor },
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Disable parallax transforms on mobile for better UX
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, isMobile ? 0 : -150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 1 : 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fbfbfd] dark:bg-[#000000]">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Hero Section - Apple Style */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, scale: heroScale }}
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gray-200/40 dark:bg-gray-800/20 blur-[80px] md:blur-[120px]"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-gray-300/40 dark:bg-gray-700/20 blur-[80px] md:blur-[120px]"
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 30, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Portfolio
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            A collection of academic projects showcasing my skills in backend development, real-time systems, and interface design.
          </motion.p>

          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {categories.map((cat, i) => {
              const IconComponent = cat.icon;
              return (
                <motion.button
                  key={cat.name}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    i === 0 
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" 
                      : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent size={18} />
                  {cat.name}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity: heroOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Projects - Bento Grid */}
      <section ref={gridRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-gray-900 dark:bg-white rounded-[3rem] p-12 md:p-20 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_2px,transparent_2px)] dark:bg-[radial-gradient(circle_at_30%_50%,black_2px,transparent_2px)] bg-[size:30px_30px]" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-white/10 dark:bg-gray-900/10 rounded-2xl backdrop-blur"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 dark:bg-gray-900/10 rounded-full backdrop-blur"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div 
                className="w-20 h-20 mx-auto rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur flex items-center justify-center mb-8"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Sparkles size={40} className="text-white dark:text-gray-900" />
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-gray-900 mb-6">
                Have a project in mind?
              </h2>
              <p className="text-lg text-white/70 dark:text-gray-600 mb-10 max-w-xl mx-auto">
                I'm always looking for new challenges and opportunities to create innovative solutions.
              </p>
              
              <motion.a 
                href="mailto:marcochaconchavez09@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Smartphone size={20} />
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = project.icon;
  const isLarge = project.featured;

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${isLarge ? "lg:col-span-1" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
    >
      <motion.div 
        className={`relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-gray-200/50 dark:border-gray-800/50 h-full`}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="relative h-48 md:h-56 bg-gray-900 dark:bg-gray-100 p-8 overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,white_25%,transparent_25%,transparent_75%,white_75%,white),linear-gradient(45deg,white_25%,transparent_25%,transparent_75%,white_75%,white)] dark:bg-[linear-gradient(45deg,black_25%,transparent_25%,transparent_75%,black_75%,black),linear-gradient(45deg,black_25%,transparent_25%,transparent_75%,black_75%,black)] bg-[size:20px_20px] bg-[position:0_0,10px_10px]" />
          </div>
          
          {/* Floating Icon */}
          <motion.div 
            className="absolute top-6 right-6 w-16 h-16 bg-white/10 dark:bg-gray-900/10 backdrop-blur rounded-2xl flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.1 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <IconComponent size={32} className="text-white dark:text-gray-900" />
          </motion.div>

          {/* Category Badge */}
          <div className="absolute bottom-6 left-8">
            <span className="px-4 py-2 bg-white/10 dark:bg-gray-900/10 backdrop-blur rounded-full text-white dark:text-gray-900 text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {project.subtitle}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-lg font-bold text-gray-900 dark:text-white block">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200 font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={18} />
              Code
            </motion.a>
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={18} />
              Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}