"use client";
import { motion, Variants, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Instagram, Mail, Terminal, ChevronDown, Code2, Database, Palette, Coffee, FileCode, Flame, Atom, Smartphone, Globe, PaintBucket, HardDrive, GitBranch, Sparkles, Target, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const skills = [
  { name: "Java", icon: Coffee, color: "#f89820" },
  { name: "JavaScript", icon: FileCode, color: "#f7df1e" },
  { name: "Python", icon: Flame, color: "#3776ab" },
  { name: "React", icon: Atom, color: "#61dafb" },
  { name: "React Native", icon: Smartphone, color: "#61dafb" },
  { name: "Flask", icon: Flame, color: "#000000" },
  { name: "HTML5", icon: Globe, color: "#e34f26" },
  { name: "CSS3", icon: PaintBucket, color: "#1572b6" },
  { name: "SQL", icon: HardDrive, color: "#336791" },
  { name: "Git", icon: GitBranch, color: "#f05032" },
  { name: "Framer Motion", icon: Sparkles, color: "#ff0080" },
  { name: "UI/UX Design", icon: Target, color: "#ff6b6b" },
];

const featuredProjects = [
  {
    title: "Hotel Management System",
    description: "Architecture design, backend development and database management. Implemented reservation modules, billing and client control.",
    tech: ["Java", "PostgreSQL"],
    icon: Database,
  },
  {
    title: "Kahoot Clone",
    description: "Interactive system with real-time question delivery. Handled backend, session management, and real-time sync between users.",
    tech: ["Flask", "WebSockets", "Real Time"],
    icon: Code2,
  },
  {
    title: "E-Commerce Web",
    description: "Led the interface design and user experience, achieving intuitive and visually attractive navigation. Implemented high-fidelity prototypes.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    icon: Palette,
  },
];

const badges = [
  { text: "Top 10% at USAT", icon: GraduationCap },
  { text: "Mobile Developer", icon: Smartphone },
  { text: "English B1", icon: Globe },
  { text: "Chiclayo, Peru", icon: MapPin },
];

export default function Hero() {
  const marcoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.5], [1, 0.9]);
  
  const smoothScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate3D = useTransform(smoothScrollY, [0, 1], [0, 360]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (marcoRef.current) {
        const rect = marcoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        const magneticRadius = 80;
        
        if (distance < magneticRadius) {
          const strength = 1 - distance / magneticRadius;
          setMagneticOffset({
            x: distanceX * strength * 0.3,
            y: distanceY * strength * 0.3,
          });
        } else {
          setMagneticOffset({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const text = 'System.out.println("Hello World!");';
  const letters = text.split("");

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const emojiInitial: Variants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // 3D card tilt effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement) => {
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardMouseLeave = (cardRef: HTMLDivElement) => {
    cardRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto scroll-smooth">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
        
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Light mode: colored blobs */}
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950" />
          
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/60 dark:bg-gray-800/40 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100/60 dark:bg-gray-800/40 rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100/40 dark:bg-gray-800/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="z-10 max-w-3xl px-4 text-center"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            <motion.h1 variants={itemVariants} initial="hidden" animate="visible">
              <span className="text-gray-900 dark:text-gray-100 text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi!
                <motion.strong
                  variants={emojiInitial}
                  style={{ display: "inline-block", padding: "0.5rem" }}
                >
                  👋
                </motion.strong>
                I'm
                <motion.div
                  ref={marcoRef}
                  style={{ display: "inline-block", padding: "0.5rem", marginLeft: "0.5rem", position: "relative", cursor: "pointer" }}
                  whileHover="hover"
                  initial="rest"
                  animate={{
                    x: magneticOffset.x,
                    y: magneticOffset.y,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  variants={{
                    rest: {
                      scale: 1,
                      color: "inherit",
                      borderRadius: "32px",
                      padding: "0.5rem 1rem",
                    },
                    hover: {
                      scale: 1.05,
                      borderRadius: "32px",
                      transition: { duration: 0.3 },
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      padding: "0.5rem 1rem",
                    }
                  }}
                >
                  Marco
                  <motion.img
                    src="/perfil.png"
                    alt="Marco's Photo"
                    variants={{
                      rest: { opacity: 0, rotate: 0, scale: 1 },
                      hover: {
                        opacity: 1,
                        rotate: [0, 10],
                        scale: 1.05,
                        transition: {
                          opacity: { duration: 0.3 },
                          rotate: { duration: 0.3, ease: "easeInOut" },
                          scale: { duration: 0.3 }
                        }
                      },
                    }}
                    style={{
                      position: "absolute",
                      bottom: "20%",
                      left: "115%",
                      transform: "translateX(-50%)",
                      width: "150px",
                      pointerEvents: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </motion.div>
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-4 mb-6 inline-block px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-gray-900 dark:text-gray-100"
              whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.3, type: "tween" } }}
            >
              <motion.span
                className="text-current text-sm font-mono flex items-center gap-3"
                initial="hidden"
                animate="visible"
              >
                <Terminal size={14} />
                <motion.span variants={containerVariants} className="flex">
                  {letters.map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.span>
            </motion.div>

            <motion.div>
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Systems Engineering student with high academic performance. I stand out for my ability to lead teams, communicate clearly, and transform complex requirements into intuitive interfaces and functional systems.
              </motion.p>
            </motion.div>

            {/* Social Buttons */}
            <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-8">
              {[
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white transition-all duration-150"
                  whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link href="/projects">
                <motion.button
                  className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 shadow-lg shadow-gray-900/20 dark:shadow-white/20"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Projects
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* About Section with 3D parallax */}
      <div ref={aboutRef} className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-24 px-4 relative overflow-hidden">
        {/* 3D floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-gray-300 dark:border-gray-700 rounded-2xl"
          style={{ rotateZ: rotate3D }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-12 h-12 border-2 border-gray-300 dark:border-gray-700"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 100, rotateX: 45 }}
          animate={aboutInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <motion.span 
            className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {"// About Me"}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Passionate about creating{" "}
            <span className="text-blue-600 dark:text-blue-400">digital experiences</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={aboutInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            I'm currently pursuing my degree in <strong className="text-gray-900 dark:text-gray-100">Systems Engineering</strong> at Universidad Católica Santo Toribio de Mogrovejo (USAT), ranking in the <strong className="text-gray-900 dark:text-gray-100">top 10%</strong> of my class. I specialize in <strong className="text-gray-900 dark:text-gray-100">Mobile App Development</strong> with React Native. I love continuous learning and creating digital products that optimize processes and deliver real value.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <motion.span
                key={badge.text}
                className="px-5 py-3 bg-white dark:bg-gray-800 rounded-2xl text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 flex items-center gap-2 shadow-sm"
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                animate={aboutInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.1 } }}
              >
                <badge.icon size={16} />
                {badge.text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Section with 3D cards */}
      <div ref={skillsRef} className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center py-24 px-4 relative overflow-hidden">
        {/* Background decorations */}
        <motion.div
          className="absolute top-10 right-1/4 w-32 h-32 border border-gray-200 dark:border-gray-800 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 block">
              {"// Tech Stack"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">
              Skills & Technologies
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="group relative p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  animate={skillsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.15 }
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                  {/* Colored accent on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
                    style={{ backgroundColor: skill.color }}
                  />
                  
                  <motion.div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-150"
                    style={{ 
                      backgroundColor: `${skill.color}20`,
                      color: skill.color 
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <IconComponent size={24} />
                  </motion.div>
                  <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Section with colorful cards */}
      <div ref={projectsRef} className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-24 px-4 relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 block">
              {"// Featured Work"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Academic projects that showcase my skills and passion for development
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 50, rotateX: 15 }}
                  animate={projectsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    y: -15,
                    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.15 }
                  }}
                  onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                  style={{ 
                    transformStyle: "preserve-3d",
                    transition: "transform 0.08s ease-out"
                  }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-all duration-150"
                    whileHover={{ rotate: 5, scale: 1.1, transition: { duration: 0.15 } }}
                  >
                    <IconComponent className="w-7 h-7" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Link href="/projects">
              <motion.button
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-2xl font-medium text-base hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



