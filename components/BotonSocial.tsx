import { motion } from "framer-motion";

export
function BotonSocial({ icon, href, label, angle }: { icon: any, href: string, label: string, angle:number }) {
  return (
    <motion.a
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", rotate: angle , transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-xl bg-yellow-400 text-gray-50 transition-colors hover:text-black hover:border-slate-600"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}