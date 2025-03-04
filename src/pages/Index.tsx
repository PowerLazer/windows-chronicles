
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
              ИНТЕРАКТИВНАЯ ХРОНОЛОГИЯ
            </div>
            <h2 className="text-4xl font-bold mb-4">Путь Microsoft и Windows</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Исследуйте эволюцию от скромного начала до глобального доминирования, включая нереализованные проекты.
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
                <p className="text-xl text-muted-foreground">Нет элементов, соответствующих текущему фильтру.</p>
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
            <h2 className="text-4xl font-bold mb-4">Рождение технологического гиганта</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От небольшого стартапа до одной из самых ценных компаний в мире.
            </p>
          </motion.div>
          
          <div className="glass dark:glass-dark rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Основана в 1975 году</h3>
                  <p className="text-muted-foreground mb-4">
                    Microsoft была основана Биллом Гейтсом и Полом Алленом 4 апреля 1975 года в Альбукерке, Нью-Мексико. Изначально компания была сосредоточена на разработке и продаже интерпретаторов BASIC для микрокомпьютера Altair 8800.
                  </p>
                  <p className="text-muted-foreground">
                    Название "Microsoft" является сочетанием слов "microcomputer" и "software". Видение Гейтса и Аллена заключалось в том, чтобы обеспечить "компьютер на каждом столе и в каждом доме", что казалось амбициозным в то время, но в конечном итоге стало реальностью.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ключевые вехи</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>1980:</strong> Партнерство с IBM для разработки операционной системы для IBM PC.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>1985:</strong> Выпуск Windows 1.0, первого графического интерфейса Microsoft.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>1995:</strong> Запуск Windows 95, ознаменовавший значительный прорыв в персональных вычислениях.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>2001:</strong> Дебют Xbox, расширение Microsoft на игровой рынок.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p><strong>2014:</strong> Сатья Наделла становится генеральным директором, возглавляя трансформацию Microsoft в сторону облачных вычислений.</p>
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
            <h2 className="text-4xl font-bold mb-4">Эволюция Windows</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От простого графического интерфейса до самой используемой операционной системы в мире.
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
              НЕВЫПУЩЕННЫЕ
            </div>
            <h2 className="text-4xl font-bold mb-4">Windows, которых не было</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Исследование увлекательного мира отмененных и невыпущенных версий Windows.
            </p>
          </motion.div>
          
          <div className="glass dark:glass-dark rounded-2xl overflow-hidden shadow-xl mb-6">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Непройденный путь</h3>
              <p className="text-muted-foreground mb-6">
                За всю историю Microsoft было разработано множество версий Windows и проектов, которые так и не были выпущены для широкой публики. Эти отмененные проекты предлагают захватывающий взгляд на альтернативные пути, которыми Microsoft могла бы пойти в эволюции Windows.
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
