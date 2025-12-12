"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Users, 
  Lightbulb, 
  Target, 
  MessageSquare, 
  Sparkles, 
  Download, 
  Calendar, 
  Building2,
  Code2,
  Cpu,
  Award,
  Database,
  Palette,
  Terminal,
  Layers
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const education = [
  {
    title: "Systems Engineering",
    institution: "Universidad Católica Santo Toribio de Mogrovejo (USAT)",
    period: "2023 - 2028",
    description: "Pursuing degree with outstanding academic performance, ranking in the top 10% of my class.",
    status: "In Progress",
    icon: GraduationCap,
  },
  {
    title: "Mobile App Development Specialization",
    institution: "Instituto IDAT",
    period: "2025",
    description: "Intensive specialization in React Native with project-based methodology.",
    status: "In Progress",
    icon: Cpu,
  },
  {
    title: "High School Education",
    institution: "Colegio Peruano Español - Chiclayo",
    period: "2018 - 2021",
    description: "Graduated in the top third with emphasis on sciences.",
    status: "Completed",
    icon: Award,
  },
];

const technicalSkills = [
  { name: "Java", level: 85, icon: Code2 },
  { name: "JavaScript", level: 80, icon: Terminal },
  { name: "Python", level: 75, icon: Code2 },
  { name: "React / React Native", level: 80, icon: Layers },
  { name: "Flask", level: 70, icon: Database },
  { name: "HTML5 / CSS3", level: 90, icon: Palette },
  { name: "SQL", level: 75, icon: Database },
  { name: "Git / GitHub", level: 85, icon: Terminal },
  { name: "UI/UX Design", level: 80, icon: Palette },
  { name: "Framer Motion", level: 75, icon: Sparkles },
];

const softSkills = [
  { text: "Natural Leadership", icon: Users, description: "Ability to guide teams toward common goals" },
  { text: "Clear Communication", icon: MessageSquare, description: "Effective expression of technical ideas and concepts" },
  { text: "Organization", icon: Target, description: "Efficient time and resource management" },
  { text: "Creative Problem Solving", icon: Lightbulb, description: "Innovative solutions to complex problems" },
  { text: "Self-Learning", icon: Sparkles, description: "Quick adaptation to new technologies" },
];

const languages = [
  { name: "Spanish", level: "Native", percentage: 100 },
  { name: "English", level: "B1 Intermediate", percentage: 60 },
];

export default function CurriculumPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const heroInView = useInView(heroRef, { once: true });
  const educationInView = useInView(educationRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const bentoInView = useInView(bentoRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Disable parallax transforms on mobile for better UX
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, isMobile ? 0 : -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, isMobile ? 1 : 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fbfbfd] dark:bg-[#000000]">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Hero Section - Apple Style Full Screen */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, scale: heroScale }}
      >
        {/* Subtle Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gray-200/30 dark:bg-gray-800/20 blur-[80px] md:blur-[100px]"
            animate={{ 
              x: [0, 30, 0], 
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-gray-300/30 dark:bg-gray-700/20 blur-[80px] md:blur-[100px]"
            animate={{ 
              x: [0, -25, 0], 
              y: [0, 25, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
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
              Curriculum Vitae
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Marco Chacón
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Systems Engineering Student
          </motion.p>

          {/* Quick Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: MapPin, text: "Chiclayo, Perú" },
              { icon: Mail, text: "marcochaconchavez09@gmail.com" },
              { icon: Phone, text: "+51 954584523" },
            ].map((item, i) => (
              <motion.span 
                key={i} 
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon size={16} className="text-gray-400" />
                {item.text}
              </motion.span>
            ))}
          </motion.div>

          {/* Download Button */}
          <motion.button
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            Download CV
          </motion.button>
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

      {/* Education Section - Sticky Cards */}
      <section ref={educationRef} className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-4 block">
              Academic Background
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and professional training
            </p>
          </motion.div>

          {/* Timeline Cards */}
          <div className="space-y-8">
            {education.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 60 }}
                  animate={educationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                >
                  <motion.div 
                    className="relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background on Hover */}
                    <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="w-16 h-16 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <IconComponent size={28} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                            item.status === "In Progress" 
                              ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" 
                              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-2">
                            <Building2 size={16} />
                            {item.institution}
                          </span>
                          <span className="flex items-center gap-2 font-mono text-sm">
                            <Calendar size={16} />
                            {item.period}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Skills - Bento Grid */}
      <section ref={skillsRef} className="relative py-32 px-6 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-4 block">
              Tech Stack
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I master
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {technicalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isLarge = index === 0 || index === 5;
              
              return (
                <motion.div
                  key={skill.name}
                  className={`group relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800/50 overflow-hidden ${
                    isLarge ? "md:col-span-2 md:row-span-1" : ""
                  }`}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={skillsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.5, type: "spring" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Progress Background */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gray-900/5 dark:bg-white/5"
                    initial={{ height: 0 }}
                    animate={skillsInView ? { height: `${skill.level}%` } : {}}
                    transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gray-900 dark:bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soft Skills & Languages - Apple Bento */}
      <section ref={bentoRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={bentoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-4 block">
              Beyond the Code
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Soft Skills
            </h2>
          </motion.div>

          {/* Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Soft Skills Cards */}
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.text}
                  className="group relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  animate={bentoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 dark:bg-gray-700/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 mb-6"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <IconComponent size={28} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {skill.text}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Languages Card - Larger */}
            <motion.div
              className="lg:col-span-2 relative bg-gray-900 dark:bg-white rounded-3xl p-10 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={bentoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_30%_50%,black_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur flex items-center justify-center">
                    <Globe size={28} className="text-white dark:text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-gray-900">Languages</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {languages.map((lang, index) => (
                    <motion.div 
                      key={lang.name}
                      className="bg-white/10 dark:bg-gray-900/10 backdrop-blur rounded-2xl p-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={bentoInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white dark:text-gray-900 font-bold text-lg">{lang.name}</span>
                        <span className="text-white/70 dark:text-gray-600 text-sm">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-white/20 dark:bg-gray-900/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white dark:bg-gray-900 rounded-full"
                          initial={{ width: 0 }}
                          animate={bentoInView ? { width: `${lang.percentage}%` } : {}}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 rounded-3xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={bentoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gray-600 dark:bg-gray-400 flex items-center justify-center mb-6">
                  <motion.div 
                    className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white dark:text-gray-900 mb-3">
                  Availability
                </h3>
                <p className="text-gray-400 dark:text-gray-600 mb-6">
                  Available for internships, freelance projects, and part-time opportunities. Open to remote work.
                </p>
                
                <div className="flex gap-2">
                  {["Internships", "Freelance", "Remote"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 dark:bg-gray-900/10 text-white dark:text-gray-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-50 dark:to-white rounded-[3rem] p-12 md:p-20 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-1/4 w-64 h-64 bg-gray-600/20 dark:bg-gray-400/10 rounded-full blur-[80px]"
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-500/20 dark:bg-gray-500/10 rounded-full blur-[80px]"
                animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-gray-900 mb-6">
                Let's Work Together?
              </h2>
              <p className="text-lg text-gray-400 dark:text-gray-600 mb-10 max-w-xl mx-auto">
                I'm always interested in hearing about new opportunities and collaborations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="mailto:marcochaconchavez09@gmail.com" 
                  className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full font-semibold text-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={20} />
                  Send Email
                </motion.a>
                <motion.a 
                  href="tel:+51954584523" 
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 dark:bg-gray-900/10 text-white dark:text-gray-900 rounded-full font-semibold text-lg border border-white/20 dark:border-gray-900/20 backdrop-blur"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={20} />
                  Call Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}