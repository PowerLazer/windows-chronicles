
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TimelineItem as TimelineItemType } from "@/data/microsoftHistory";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const categoryColor = {
    "microsoft": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "windows-released": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "windows-unreleased": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  }[item.category];
  
  const categoryText = {
    "microsoft": "Microsoft",
    "windows-released": "Released",
    "windows-unreleased": "Unreleased",
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
        <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary border border-primary/20 shadow-lg text-white font-bold">
          <span className="text-xl">{item.year}</span>
        </div>
        
        {/* Content Card */}
        <div className={cn(
          "flex-grow glass dark:glass-dark rounded-2xl shadow-lg overflow-hidden",
          "transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px]",
          "border border-white/10 dark:border-white/5"
        )}>
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Badge variant="outline" className={cn("rounded-full px-3 py-1", categoryColor)}>
                {categoryText}
              </Badge>
              <h3 className="text-2xl font-bold">{item.title}</h3>
            </div>
            <p className="text-muted-foreground mb-4">{item.description}</p>
            <div className="space-y-2">
              {item.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-sm text-foreground/80">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
