"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Award, MapPin, Mail, Phone, Globe, Sparkles, Users, Lightbulb, Target, MessageSquare } from "lucide-react";
import { useRef } from "react";

const education = [
  {
    title: "Systems Engineering",
    institution: "Universidad Católica Santo Toribio de Mogrovejo (USAT)",
    period: "2023 - 2028",
    description: "Currently pursuing degree. Top 10% of the class.",
    status: "In Progress",
    color: "#6366f1",
  },
  {
    title: "Mobile App Development Specialization",
    institution: "Instituto IDAT",
    period: "2025",
    description: "React Native project-based specialization.",
    status: "In Progress",
    color: "#10b981",
  },
  {
    title: "High School",
    institution: "Colegio Peruano Español - Chiclayo",
    period: "2018 - 2021",
    description: "Top third of the graduating class.",
    status: "Completed",
    color: "#f59e0b",
  },
];

const technicalSkills = [
  { name: "Java", level: 85, color: "#f59e0b" },
  { name: "JavaScript", level: 80, color: "#eab308" },
  { name: "Python", level: 75, color: "#3b82f6" },
  { name: "React / React Native", level: 80, color: "#06b6d4" },
  { name: "Flask", level: 70, color: "#10b981" },
  { name: "HTML5 / CSS3", level: 90, color: "#f97316" },
  { name: "SQL (MySQL, PostgreSQL)", level: 75, color: "#6366f1" },
  { name: "Git / GitHub", level: 85, color: "#8b5cf6" },
  { name: "UI/UX Design", level: 80, color: "#ec4899" },
  { name: "Framer Motion", level: 75, color: "#a855f7" },
];

const softSkills = [
  { text: "Natural leadership & clear communication", icon: Users },
  { text: "Organization & responsibility", icon: Target },
  { text: "Collaboration & teamwork", icon: MessageSquare },
  { text: "Creativity in design & problem solving", icon: Lightbulb },
  { text: "Critical thinking & autonomous learning", icon: Sparkles },
];

const languages = [
  { name: "Spanish", level: "Native", flag: "🇵🇪" },
  { name: "English", level: "B1", flag: "🇺🇸" },
];

export default function CurriculumPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true });
  const educationInView = useInView(educationRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const softSkillsInView = useInView(softSkillsRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

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
        <div className="max-w-5xl mx-auto">
          
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
              {"// Resume"}
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              Curriculum Vitae
            </motion.h1>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Systems Engineering student passionate about creating digital products that optimize processes and deliver real value.
            </motion.p>
          </motion.div>

          {/* Education Section */}
          <motion.section 
            ref={educationRef}
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <motion.div 
                className="p-3 bg-indigo-500 rounded-2xl text-white shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                style={{ boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.5)" }}
              >
                <GraduationCap className="w-7 h-7" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Education
              </h2>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-10 border-l-2"
                  style={{ borderColor: item.color }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={educationInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                >
                  <div 
                    className="absolute -left-[11px] top-0 w-5 h-5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <motion.div 
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
                    whileHover={{ x: 5, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <span 
                        className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-3 font-mono">
                      {item.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills Section */}
          <motion.section 
            ref={skillsRef}
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <motion.div 
                className="p-3 bg-emerald-500 rounded-2xl text-white shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                style={{ boxShadow: "0 10px 30px -10px rgba(16, 185, 129, 0.5)" }}
              >
                <Briefcase className="w-7 h-7" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Technical Skills
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -3, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-900 dark:text-gray-100 font-semibold">{skill.name}</span>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Soft Skills & Languages */}
          <motion.section 
            ref={softSkillsRef}
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={softSkillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-10">
              {/* Soft Skills */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <motion.div 
                    className="p-3 bg-amber-500 rounded-2xl text-white shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    style={{ boxShadow: "0 10px 30px -10px rgba(245, 158, 11, 0.5)" }}
                  >
                    <Award className="w-7 h-7" />
                  </motion.div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Soft Skills
                  </h2>
                </div>
                <ul className="space-y-4">
                  {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.li
                        key={skill.text}
                        className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={softSkillsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.12, type: "spring", stiffness: 100 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <motion.div 
                    className="p-3 bg-violet-500 rounded-2xl text-white shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    style={{ boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.5)" }}
                  >
                    <Globe className="w-7 h-7" />
                  </motion.div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Languages
                  </h2>
                </div>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      className="flex items-center justify-between p-5 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
                      initial={{ opacity: 0, x: 30 }}
                      animate={softSkillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.12, type: "spring", stiffness: 100 }}
                      whileHover={{ x: -5 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{lang.flag}</span>
                        <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg">{lang.name}</span>
                      </div>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {lang.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            ref={contactRef}
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
                Let&apos;s Connect
              </h2>
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <motion.a 
                  href="mailto:marcochaconchavez09@gmail.com" 
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-gray-200 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  <span className="text-sm font-medium">marcochaconchavez09@gmail.com</span>
                </motion.a>
                <motion.span 
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl text-gray-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Phone size={20} />
                  <span className="text-sm font-medium">(+51) 954584523</span>
                </motion.span>
                <motion.span 
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl text-gray-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <MapPin size={20} />
                  <span className="text-sm font-medium">Chiclayo, Peru</span>
                </motion.span>
              </div>
            </motion.div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}