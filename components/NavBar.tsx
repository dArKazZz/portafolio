"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Home01Icon, FolderLibraryIcon, FileValidationIcon } from "hugeicons-react";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MotionLink = motion(Link);

export function NavBar() {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Check system preference on mount
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(darkModeMediaQuery.matches);
        
        // Update class on html element
        if (darkModeMediaQuery.matches) {
            document.documentElement.classList.add('dark');
        }
        
        // Listen for changes
        const handler = (e: MediaQueryListEvent) => {
            setIsDark(e.matches);
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };
        
        darkModeMediaQuery.addEventListener('change', handler);
        return () => darkModeMediaQuery.removeEventListener('change', handler);
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex items-center justify-center">
            <motion.nav
                className="text-base font-medium shadow-lg border border-gray-200 dark:border-gray-700"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "24px",
                    backdropFilter: "blur(20px) saturate(180%)",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    height: "fit-content",
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <style jsx global>{`
                    .dark nav, nav.dark-nav {
                        background-color: rgba(17, 24, 39, 0.8) !important;
                        border-color: rgb(55, 65, 81) !important;
                    }
                `}</style>
                <MotionLink
                    href="/"
                    onHoverStart={() => setHoveredButton("home")}
                    onHoverEnd={() => setHoveredButton(null)}
                    whileHover={{
                        backgroundColor: isDark ? "#ffffff" : "#000000",
                        color: isDark ? "#000000" : "#ffffff",
                        transition: { duration: 0.2 }
                    }}
                    className="flex items-center overflow-hidden"
                    style={{
                        padding: "0.5rem",
                        borderRadius: "16px",
                        height: "34px",
                        backgroundColor: pathname === "/" ? (isDark ? "#ffffff" : "#000000") : "transparent",
                        color: pathname === "/" ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#f3f4f6" : "#111827")
                    }}
                >
                    <Home01Icon size={18} color="currentColor" />
                    <AnimatePresence>
                        {(hoveredButton === "home" || pathname === "/") && (
                            <motion.span
                                initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                animate={{ opacity: 1, width: "auto", marginLeft: "0.5rem" }}
                                exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Home
                            </motion.span>
                        )}
                    </AnimatePresence>
                </MotionLink>

                <MotionLink
                    href="/projects"
                    onHoverStart={() => setHoveredButton("projects")}
                    onHoverEnd={() => setHoveredButton(null)}
                    whileHover={{
                        backgroundColor: isDark ? "#ffffff" : "#000000",
                        color: isDark ? "#000000" : "#ffffff",
                        transition: { duration: 0.2 }
                    }}
                    className="flex items-center overflow-hidden"
                    style={{ 
                        padding: "0.5rem", 
                        borderRadius: "16px", 
                        height: "34px",
                        backgroundColor: pathname === "/projects" ? (isDark ? "#ffffff" : "#000000") : "transparent",
                        color: pathname === "/projects" ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#f3f4f6" : "#111827")
                    }}
                >
                    <FolderLibraryIcon size={18} color="currentColor" />
                    <AnimatePresence>
                        {(hoveredButton === "projects" || pathname === "/projects") && (
                            <motion.span
                                initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                animate={{ opacity: 1, width: "auto", marginLeft: "0.5rem" }}
                                exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Projects
                            </motion.span>
                        )}
                    </AnimatePresence>
                </MotionLink>

                <MotionLink
                    href="/curriculum"
                    onHoverStart={() => setHoveredButton("curriculum")}
                    onHoverEnd={() => setHoveredButton(null)}
                    whileHover={{
                        backgroundColor: isDark ? "#ffffff" : "#000000",
                        color: isDark ? "#000000" : "#ffffff",
                        transition: { duration: 0.2 }
                    }}
                    className="flex items-center overflow-hidden"
                    style={{ 
                        padding: "0.5rem", 
                        borderRadius: "16px", 
                        height: "34px",
                        backgroundColor: pathname === "/curriculum" ? (isDark ? "#ffffff" : "#000000") : "transparent",
                        color: pathname === "/curriculum" ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#f3f4f6" : "#111827")
                    }}
                >
                    <FileValidationIcon size={18} color="currentColor" />
                    <AnimatePresence>
                        {(hoveredButton === "curriculum" || pathname === "/curriculum") && (
                            <motion.span
                                initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                animate={{ opacity: 1, width: "auto", marginLeft: "0.5rem" }}
                                exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ whiteSpace: "nowrap" }}
                            >
                                CV
                            </motion.span>
                        )}
                    </AnimatePresence>
                </MotionLink>

                {/* Dark Mode Toggle */}
                <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1" />
                
                <motion.button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center text-gray-900 dark:text-white"
                    style={{
                        padding: "0.5rem",
                        borderRadius: "16px",
                        height: "34px",
                        width: "34px",
                    }}
                    whileHover={{
                        backgroundColor: isDark ? "#ffffff" : "#000000",
                        color: isDark ? "#000000" : "#ffffff",
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {isDark ? (
                            <motion.div
                                key="sun"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-yellow-400"
                            >
                                <Sun size={18} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Moon size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </motion.nav>
        </div>
    );
}