
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FilterOption = "all" | "microsoft" | "windows-released" | "windows-unreleased";

interface TimelineFilterProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

export function TimelineFilter({ activeFilter, onFilterChange }: TimelineFilterProps) {
  const filters: { value: FilterOption; label: string }[] = [
    { value: "all", label: "Все события" },
    { value: "microsoft", label: "История Microsoft" },
    { value: "windows-released", label: "Выпущенные Windows" },
    { value: "windows-unreleased", label: "Невыпущенные Windows" },
  ];

  return (
    <div className="sticky top-20 z-10 px-4 py-3 glass dark:glass-dark rounded-xl mb-10 flex items-center justify-center shadow-md">
      <div className="flex gap-2 overflow-x-auto max-w-full pb-1 snap-x scrollbar-hide">
        {filters.map((filter) => (
          <FilterButton
            key={filter.value}
            isActive={activeFilter === filter.value}
            onClick={() => onFilterChange(filter.value)}
            label={filter.label}
          />
        ))}
      </div>
    </div>
  );
}

interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function FilterButton({ isActive, onClick, label }: FilterButtonProps) {
  return (
    <div className="relative snap-start">
      <Button
        variant="ghost"
        onClick={onClick}
        className={cn(
          "rounded-lg font-medium whitespace-nowrap px-4 py-2 transition-colors duration-200",
          isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
        )}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="activeFilterIndicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Button>
    </div>
  );
}
