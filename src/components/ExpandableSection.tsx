
import { useState } from "react";
import { PlusIcon, MinusIcon, ExternalLinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  initialExpanded?: boolean;
  className?: string;
  variant?: "blue" | "green" | "orange" | "red";
}

export default function ExpandableSection({ 
  title, 
  children, 
  initialExpanded = false,
  className = "",
  variant = "blue"
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  
  const gradientMap = {
    blue: "bg-gradient-to-r from-blue-700 to-blue-500",
    green: "bg-gradient-to-r from-green-700 to-green-500",
    orange: "bg-gradient-to-r from-orange-700 to-orange-500",
    red: "bg-gradient-to-r from-red-700 to-red-500"
  };
  
  const borderMap = {
    blue: "border-blue-700",
    green: "border-green-700",
    orange: "border-orange-700",
    red: "border-red-700"
  };
  
  const bgMap = {
    blue: "from-blue-50",
    green: "from-green-50",
    orange: "from-orange-50",
    red: "from-red-50"
  };
  
  const borderColor = borderMap[variant];
  const gradient = gradientMap[variant];
  const bgGradient = bgMap[variant];

  return (
    <div className={`mb-6 xp-window overflow-hidden border-2 ${borderColor} rounded shadow-lg ${className}`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between p-3 ${gradient} text-white`}
      >
        <div className="flex items-center">
          <span className="font-bold text-white drop-shadow-sm">{title}</span>
        </div>
        <div>
          {isExpanded ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-b ${bgGradient} to-white p-4 border-t ${borderColor}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ExpandableLink({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900 underline">
      <span className="mr-1">{text}</span>
      <ExternalLinkIcon size={12} />
    </a>
  );
}

export function AdBanner({ 
  title, 
  description, 
  imageUrl, 
  linkUrl,
  variant = "blue"
}: { 
  title: string; 
  description: string; 
  imageUrl: string; 
  linkUrl: string;
  variant?: "blue" | "green" | "orange" | "red";
}) {
  const bgMap = {
    blue: "bg-blue-100 border-blue-300",
    green: "bg-green-100 border-green-300",
    orange: "bg-orange-100 border-orange-300",
    red: "bg-red-100 border-red-300"
  };
  
  const titleMap = {
    blue: "text-blue-800",
    green: "text-green-800",
    orange: "text-orange-800",
    red: "text-red-800"
  };
  
  const bgColor = bgMap[variant];
  const titleColor = titleMap[variant];

  return (
    <a 
      href={linkUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`block rounded overflow-hidden shadow-md border ${bgColor} hover:shadow-lg transition-shadow duration-300`}
    >
      <div className="flex items-center p-2">
        <img src={imageUrl} alt={title} className="w-16 h-16 object-contain mr-3" />
        <div className="flex-1">
          <h4 className={`font-bold ${titleColor}`}>{title}</h4>
          <p className="text-xs text-gray-700">{description}</p>
        </div>
      </div>
    </a>
  );
}
