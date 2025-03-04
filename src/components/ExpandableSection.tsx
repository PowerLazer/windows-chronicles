
import { useState } from "react";
import { PlusIcon, MinusIcon, ExternalLinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  initialExpanded?: boolean;
  className?: string;
}

export default function ExpandableSection({ 
  title, 
  children, 
  initialExpanded = false,
  className = ""
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  return (
    <div className={`mb-6 xp-window overflow-hidden ${className}`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white"
      >
        <div className="flex items-center">
          <span className="font-bold">{title}</span>
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
            className="bg-gradient-to-b from-blue-50 to-white p-4 border-t border-blue-300"
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
    <a href={href} className="flex items-center text-blue-700 hover:text-blue-900 underline">
      <span className="mr-1">{text}</span>
      <ExternalLinkIcon size={12} />
    </a>
  );
}
