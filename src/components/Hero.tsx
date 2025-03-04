
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 to-blue-800/50 opacity-60 pointer-events-none"></div>
      
      {/* Floating windows logos (decorative) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[20%] left-[15%] w-32 h-32 bg-[url('/lovable-uploads/b9ecd9d5-f3b1-4ed0-a105-1f445496e27a.png')] bg-contain bg-no-repeat bg-center"
          style={{ filter: "grayscale(1)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[40%] right-[20%] w-24 h-24 bg-[url('/lovable-uploads/b9ecd9d5-f3b1-4ed0-a105-1f445496e27a.png')] bg-contain bg-no-repeat bg-center"
          style={{ filter: "grayscale(1)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-[25%] left-[30%] w-20 h-20 bg-[url('/lovable-uploads/b9ecd9d5-f3b1-4ed0-a105-1f445496e27a.png')] bg-contain bg-no-repeat bg-center"
          style={{ filter: "grayscale(1)" }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <div className="inline-block mb-4">
            <div className="text-xs font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full">
              ЦИФРОВОЕ ПУТЕШЕСТВИЕ ВО ВРЕМЕНИ
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          Хроники <span className="text-primary">Windows</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10"
        >
          Изучите эволюцию Microsoft и Windows через интерактивную хронологию — от революции до инноваций, включая невыпущенные главы.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button 
            onClick={scrollToTimeline}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg border border-blue-500/50"
          >
            <span>Исследовать хронологию</span>
            <span>
              <ChevronDown size={18} />
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center items-start p-1"
        >
          <motion.div 
            animate={{ height: [5, 10, 5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-foreground/40 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
