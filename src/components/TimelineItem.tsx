
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TimelineItem as TimelineItemType } from "@/data/microsoftHistory";
import { ChevronRightIcon } from "lucide-react";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  
  const categoryConfig = {
    "microsoft": {
      color: "bg-blue-100 text-blue-800 border-blue-400",
      gradient: "from-blue-700 to-blue-500",
      text: "Microsoft"
    },
    "windows-released": {
      color: "bg-green-100 text-green-800 border-green-400",
      gradient: "from-green-700 to-green-500",
      text: "Выпущена"
    },
    "windows-unreleased": {
      color: "bg-orange-100 text-orange-800 border-orange-400",
      gradient: "from-orange-700 to-orange-500",
      text: "Не выпущена"
    },
  }[item.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12 md:mb-16"
    >
      <div className={cn(
        "flex flex-col md:items-center gap-4",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}>
        {/* Year Circle */}
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 border-2 border-blue-300 shadow-md text-white font-bold">
          <span className="text-xl">{item.year}</span>
        </div>
        
        {/* Content Card */}
        <div className={cn(
          "flex-grow bg-white rounded-lg shadow-md overflow-hidden",
          "transition-all duration-300 ease-in-out hover:shadow-lg",
          "border-2 border-blue-500"
        )}>
          <div className={`bg-gradient-to-r ${categoryConfig.gradient} text-white p-3`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-sm px-2 py-0.5 text-xs font-medium border ${categoryConfig.color}`}>
                {categoryConfig.text}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-blue-900 mb-4">{item.description}</p>
            <div className="space-y-2">
              {item.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <ChevronRightIcon size={16} className="text-blue-700 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-950">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
