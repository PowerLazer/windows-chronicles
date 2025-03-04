
import { useState, useEffect } from "react";
import { timelineData, TimelineItem as TimelineItemType } from "@/data/microsoftHistory";
import { TimelineItem } from "@/components/TimelineItem";
import { TimelineFilter } from "@/components/TimelineFilter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type FilterOption = "all" | "microsoft" | "windows-released" | "windows-unreleased";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [filteredItems, setFilteredItems] = useState<TimelineItemType[]>(timelineData);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Apply filtering
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(timelineData);
    } else {
      setFilteredItems(timelineData.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sort timeline data by year
  const sortedFilteredItems = [...filteredItems].sort((a, b) => a.year - b.year);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section id="timeline" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-xs font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full inline-block mb-4">
              INTERACTIVE TIMELINE
            </div>
            <h2 className="text-4xl font-bold mb-4">The Microsoft & Windows Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the evolution from humble beginnings to global dominance, including the paths not taken.
            </p>
          </motion.div>
          
          <TimelineFilter 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
          
          <div className="mt-16">
            {sortedFilteredItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
            
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No items match the current filter.</p>
              </div>
            )}
          </div>
        </section>
        
        <section id="microsoft" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs font-semibold py-1 px-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full inline-block mb-4">
              MICROSOFT
            </div>
            <h2 className="text-4xl font-bold mb-4">The Birth of a Tech Giant</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small startup to one of the world's most valuable companies.
            </p>
          </motion.div>
          
          <div className="glass dark:glass-dark rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Founded in 1975</h3>
                  <p className="text-muted-foreground mb-4">
                    Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, in Albuquerque, New Mexico. The company was initially focused on developing and selling BASIC interpreters for the Altair 8800 microcomputer.
                  </p>
                  <p className="text-muted-foreground">
                    The name "Microsoft" is a portmanteau of "microcomputer" and "software." Gates and Allen's vision was "a computer on every desk and in every home," which seemed ambitious at the time but eventually became reality.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Milestones</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>1980:</strong> Partnership with IBM to develop an operating system for the IBM PC.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>1985:</strong> Release of Windows 1.0, Microsoft's first graphical user interface.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>1995:</strong> Windows 95 launch, marking a significant breakthrough in personal computing.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>2001:</strong> Xbox debut, expanding Microsoft into the gaming market.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>2014:</strong> Satya Nadella becomes CEO, leading Microsoft's transformation toward cloud computing.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="windows" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs font-semibold py-1 px-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full inline-block mb-4">
              WINDOWS
            </div>
            <h2 className="text-4xl font-bold mb-4">Evolution of Windows</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a simple graphical interface to the world's most used operating system.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {timelineData
              .filter(item => item.category === "windows-released")
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="glass dark:glass-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <p className="text-sm text-foreground/80">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
        
        <section id="unreleased">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs font-semibold py-1 px-3 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 rounded-full inline-block mb-4">
              UNRELEASED
            </div>
            <h2 className="text-4xl font-bold mb-4">The Windows That Never Were</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the fascinating world of canceled and unreleased Windows versions.
            </p>
          </motion.div>
          
          <div className="glass dark:glass-dark rounded-2xl overflow-hidden shadow-xl mb-6">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">The Road Not Taken</h3>
              <p className="text-muted-foreground mb-6">
                Throughout Microsoft's history, many Windows versions and projects were developed but never released to the public. These canceled projects offer a fascinating glimpse into alternate paths Microsoft could have taken in the evolution of Windows.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {timelineData
                  .filter(item => item.category === "windows-unreleased")
                  .slice(0, 2)
                  .map((item, index) => (
                    <div key={item.id} className="border border-border/40 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <span className="text-orange-500 font-medium">{item.year}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.details.slice(0, 2).map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <p className="text-sm text-foreground/80">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timelineData
              .filter(item => item.category === "windows-unreleased")
              .slice(2)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="glass dark:glass-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-orange-500 font-medium">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <p className="text-sm text-foreground/80">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full shadow-lg w-12 h-12 bg-primary hover:bg-primary/90"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
