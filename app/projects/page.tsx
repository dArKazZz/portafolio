"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Database, Code2, Palette } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Hotel Management System",
    description: "Complete hotel management solution featuring architecture design, backend development, and database management. Implemented reservation modules, billing system, and client control, optimizing the internal user flow.",
    tech: ["Java", "PostgreSQL", "Backend", "Database Design"],
    icon: Database,
    category: "Backend",
    links: { github: "#", demo: "#" },
  },
  {
    title: "Kahoot Clone",
    description: "Real-time interactive quiz system with live question delivery. Developed the complete backend infrastructure, session management, and real-time synchronization between multiple users using WebSockets.",
    tech: ["Flask", "Python", "WebSockets", "Real Time"],
    icon: Code2,
    category: "Full Stack",
    links: { github: "#", demo: "#" },
  },
  {
    title: "E-Commerce Web",
    description: "Led the interface design and user experience for an e-commerce platform, achieving intuitive and visually attractive navigation. Implemented high-fidelity prototypes and complete frontend structure.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    icon: Palette,
    category: "Frontend",
    links: { github: "#", demo: "#" },
  },
];

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-gray-950">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950" />
        
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 dark:bg-gray-800/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100/50 dark:bg-gray-800/30 rounded-full blur-3xl"
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
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-28 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header with parallax */}
          <motion.div 
            ref={headerRef}
            className="text-center mb-20"
            style={{ y: headerY, opacity: headerOpacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {"// My Work"}
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              Projects
            </motion.h1>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              A collection of academic projects that showcase my skills in backend development, real-time systems, and user interface design.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  const IconComponent = project.icon;

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleCardMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 border-2 border-gray-100 dark:border-gray-800 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 80, rotateX: 10 }}
      animate={cardInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 80 }}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
      style={{ 
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out"
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
        {/* Icon */}
        <div className="flex-shrink-0">
          <motion.div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-all duration-300"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent className="w-10 h-10" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {project.title}
            </h2>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-xl text-sm font-medium border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 text-sm font-semibold"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              View Code
            </motion.a>
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-sm font-semibold"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}