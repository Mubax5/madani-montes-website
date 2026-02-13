import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "pink" | "blue" | "purple" | "green";
  link: string;
}

export function ProgramCard({ title, description, icon, color, link }: ProgramCardProps) {
  const colorMap = {
    pink: "bg-[hsl(340,100%,94%)] hover:shadow-pink-200",
    blue: "bg-[hsl(200,100%,94%)] hover:shadow-blue-200",
    purple: "bg-[hsl(260,100%,94%)] hover:shadow-purple-200",
    green: "bg-[hsl(150,80%,94%)] hover:shadow-green-200",
  };

  const iconBgMap = {
    pink: "bg-pink-200 text-pink-700",
    blue: "bg-blue-200 text-blue-700",
    purple: "bg-purple-200 text-purple-700",
    green: "bg-green-200 text-green-700",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-xl ${colorMap[color]} h-full flex flex-col`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${iconBgMap[color]}`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{description}</p>
      
      <Link href={link} className="inline-flex items-center font-bold text-gray-700 hover:text-primary transition-colors group">
        Selengkapnya 
        <span className="ml-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
}
