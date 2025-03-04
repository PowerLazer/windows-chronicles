
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
    <div className="sticky top-20 z-10 px-4 py-3 bg-blue-100 rounded-t-xl mb-0 flex items-center justify-center shadow-md border-b-2 border-b-blue-500 xp-window">
      <div className="xp-window-title w-full rounded-t-lg">
        <span>Фильтрация хронологии</span>
      </div>
      <div className="flex gap-2 overflow-x-auto max-w-full p-4 snap-x scrollbar-hide bg-blue-50 w-full">
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
      <button
        onClick={onClick}
        className={cn(
          "rounded px-4 py-1 whitespace-nowrap transition-colors duration-200 font-medium text-sm",
          isActive 
            ? "bg-gradient-to-b from-blue-600 to-blue-500 text-white border border-blue-700" 
            : "bg-gradient-to-b from-blue-50 to-blue-200 border border-blue-400 text-blue-900 hover:from-blue-100 hover:to-blue-300"
        )}
      >
        {label}
      </button>
    </div>
  );
}
