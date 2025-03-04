
import { useState, useEffect } from "react";
import { timelineData, TimelineItem as TimelineItemType } from "@/data/microsoftHistory";
import { TimelineItem } from "@/components/TimelineItem";
import { TimelineFilter } from "@/components/TimelineFilter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ExpandableSection";
import { motion } from "framer-motion";
import { ArrowUpIcon, ChevronRightIcon } from "lucide-react";
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

  // Windows XP design
  return (
    <div className="min-h-screen bg-blue-100 text-foreground">
      {/* XP-style top bar */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-1 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/5260188c-a4ec-4208-b35c-58d999189fbd.png" 
            alt="Windows XP Logo" 
            className="h-8 mr-2"
          />
          <span className="font-bold">Хроники Microsoft Windows</span>
        </div>
        <div className="flex gap-4 text-xs">
          <a href="#" className="hover:underline">Все продукты</a> |
          <a href="#" className="hover:underline">Поддержка</a> |
          <a href="#" className="hover:underline">Поиск</a> |
          <a href="#" className="hover:underline">microsoft.com</a>
        </div>
      </div>
      
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <section id="timeline" className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="bg-blue-700 text-white py-2 px-3 rounded-t-lg inline-block mb-0">
              <h2 className="text-2xl font-bold">ИНТЕРАКТИВНАЯ ХРОНОЛОГИЯ</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-md border-2 border-t-0 border-blue-700">
              <p className="text-xl text-blue-900">
                Исследуйте эволюцию от скромного начала до глобального доминирования, включая нереализованные проекты.
              </p>
            </div>
          </motion.div>
          
          <TimelineFilter 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
          
          <div className="mt-4 bg-white p-6 border-2 border-blue-700 rounded-b-lg shadow-lg">
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
        
        <section id="microsoft" className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="bg-blue-700 text-white py-2 px-3 rounded-t-lg inline-block mb-0">
              <h2 className="text-2xl font-bold">MICROSOFT</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-md border-2 border-t-0 border-blue-700">
              <p className="text-xl text-blue-900">
                От небольшого стартапа до одной из самых ценных компаний в мире.
              </p>
            </div>
          </motion.div>
          
          <ExpandableSection title="История Microsoft" initialExpanded={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Основана в 1975 году</h3>
                <p className="text-blue-900 mb-4">
                  Microsoft была основана Биллом Гейтсом и Полом Алленом 4 апреля 1975 года в Альбукерке, Нью-Мексико. Изначально компания была сосредоточена на разработке и продаже интерпретаторов BASIC для микрокомпьютера Altair 8800.
                </p>
                <p className="text-blue-900">
                  Название "Microsoft" является сочетанием слов "microcomputer" и "software". Видение Гейтса и Аллена заключалось в том, чтобы обеспечить "компьютер на каждом столе и в каждом доме", что казалось амбициозным в то время, но в конечном итоге стало реальностью.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Ключевые вехи</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon size={16} className="text-blue-700 mt-1 flex-shrink-0" />
                    <p><strong>1980:</strong> Партнерство с IBM для разработки операционной системы для IBM PC.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon size={16} className="text-blue-700 mt-1 flex-shrink-0" />
                    <p><strong>1985:</strong> Выпуск Windows 1.0, первого графического интерфейса Microsoft.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon size={16} className="text-blue-700 mt-1 flex-shrink-0" />
                    <p><strong>1995:</strong> Запуск Windows 95, ознаменовавший значительный прорыв в персональных вычислениях.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon size={16} className="text-blue-700 mt-1 flex-shrink-0" />
                    <p><strong>2001:</strong> Дебют Xbox, расширение Microsoft на игровой рынок.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon size={16} className="text-blue-700 mt-1 flex-shrink-0" />
                    <p><strong>2014:</strong> Сатья Наделла становится генеральным директором, возглавляя трансформацию Microsoft в сторону облачных вычислений.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Подробная история</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-blue-700">Ранние годы (1975-1985)</h4>
                  <p className="text-blue-900 mb-4">
                    После основания в 1975 году, Microsoft быстро выросла благодаря своему программному обеспечению для микрокомпьютеров. В 1980 году IBM обратилась к Microsoft с просьбой разработать операционную систему для своего нового персонального компьютера. Это привело к созданию MS-DOS, который стал стандартной ОС для IBM PC и совместимых компьютеров.
                  </p>
                  <p className="text-blue-900">
                    Ключевой момент наступил, когда Microsoft сохранила право лицензировать MS-DOS другим производителям, что позволило ей доминировать на рынке операционных систем для ПК.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-blue-700">Эра Windows и Microsoft Office (1985-2000)</h4>
                  <p className="text-blue-900 mb-4">
                    Запуск Windows 1.0 в 1985 году ознаменовал начало графических интерфейсов Microsoft. Хотя первые версии не имели большого успеха, Windows 3.0 (1990) стала прорывом, продав 10 миллионов копий. Windows 95, с его характерной кнопкой "Пуск", сделал компьютеры более доступными для обычных пользователей.
                  </p>
                  <p className="text-blue-900">
                    Параллельно Microsoft разработала Microsoft Office, который стал доминирующим пакетом офисных приложений, включая Word, Excel и PowerPoint.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2 text-blue-700">Интернет и конкуренция (1995-2010)</h4>
                <p className="text-blue-900 mb-4">
                  Изначально Microsoft недооценила значение Интернета, но быстро изменила курс, выпустив Internet Explorer. Это привело к "браузерным войнам" с Netscape и последующим антимонопольным искам. В 2001 году Microsoft выпустила Windows XP, который стал одной из самых успешных версий Windows, и вошла на рынок игровых консолей с Xbox.
                </p>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2 text-blue-700">Современная эра (2010-настоящее время)</h4>
                <p className="text-blue-900 mb-4">
                  После неудачного Windows 8, Microsoft выпустила более успешную Windows 10 в 2015 году. Под руководством Сатьи Наделлы, ставшего CEO в 2014 году, компания переориентировалась на облачные вычисления с Azure и подписочные модели с Office 365. Microsoft также приобрела несколько крупных компаний, включая LinkedIn, GitHub и Activision Blizzard.
                </p>
              </div>
            </div>
          </ExpandableSection>
        </section>
        
        <section id="windows" className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="bg-green-700 text-white py-2 px-3 rounded-t-lg inline-block mb-0">
              <h2 className="text-2xl font-bold">WINDOWS</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-md border-2 border-t-0 border-green-700">
              <p className="text-xl text-green-900">
                От простого графического интерфейса до самой используемой операционной системы в мире.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineData
              .filter(item => item.category === "windows-released")
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white border-2 border-blue-600 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2 px-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="font-medium">{item.year}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-blue-900 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRightIcon size={16} className="text-blue-700 mt-1 flex-shrink-0" />
                          <p className="text-sm text-blue-950">{detail}</p>
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
            className="text-center mb-8"
          >
            <div className="bg-orange-700 text-white py-2 px-3 rounded-t-lg inline-block mb-0">
              <h2 className="text-2xl font-bold">НЕВЫПУЩЕННЫЕ ВЕРСИИ</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-md border-2 border-t-0 border-orange-700">
              <p className="text-xl text-orange-900">
                Исследование увлекательного мира отмененных и невыпущенных версий Windows.
              </p>
            </div>
          </motion.div>
          
          <ExpandableSection title="Непройденный путь: Windows, которых никогда не было" initialExpanded={false}>
            <p className="text-blue-900 mb-6">
              За всю историю Microsoft было разработано множество версий Windows и проектов, которые так и не были выпущены для широкой публики. Эти отмененные проекты предлагают захватывающий взгляд на альтернативные пути, которыми Microsoft могла бы пойти в эволюции Windows.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {timelineData
                .filter(item => item.category === "windows-unreleased")
                .slice(0, 2)
                .map((item, index) => (
                  <div key={item.id} className="border-2 border-orange-500 rounded p-4 bg-orange-50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-orange-900">{item.title}</h4>
                      <span className="text-orange-700 font-medium">{item.year}</span>
                    </div>
                    <p className="text-orange-900 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                          <p className="text-sm text-orange-950">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-orange-800">Невыпущенные проекты Windows</h3>
              <p className="text-orange-900 mb-6">
                История Microsoft полна амбициозных проектов, которые так и не увидели свет. Они варьируются от незначительных обновлений, которые были отменены в пользу более крупных релизов, до революционных переосмыслений операционной системы. Некоторые из этих проектов оказали значительное влияние на будущие выпуски Windows, даже если сами по себе они никогда не были выпущены.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-orange-700">Причины отмены проектов</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                      <p><strong>Технические трудности:</strong> Некоторые проекты, такие как Longhorn (предшественник Vista), столкнулись с серьезными техническими проблемами, которые привели к "перезагрузке" разработки.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                      <p><strong>Изменение рыночных условий:</strong> Проекты, такие как Windows Neptune, были отменены из-за изменения стратегии компании в ответ на меняющиеся рыночные тенденции.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                      <p><strong>Консолидация проектов:</strong> Часто несколько параллельных проектов объединялись в один, как это произошло с Neptune и Odyssey, которые стали Windows XP.</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-orange-700">Влияние на будущие версии</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                      <p><strong>Инновационные функции:</strong> Многие функции из отмененных проектов, такие как WinFS из Longhorn, повлияли на будущие технологии Microsoft.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                      <p><strong>Уроки разработки:</strong> Проблемы с Longhorn привели к более дисциплинированному подходу к разработке программного обеспечения в Microsoft.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                      <p><strong>Сообщество энтузиастов:</strong> Утечки сборок отмененных ОС, таких как Longhorn, создали активное сообщество энтузиастов, изучающих и документирующих эти версии.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ExpandableSection>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="bg-white border-2 border-orange-600 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="bg-gradient-to-r from-orange-700 to-orange-500 text-white py-2 px-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="font-medium">{item.year}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-orange-900 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRightIcon size={16} className="text-orange-700 mt-1 flex-shrink-0" />
                          <p className="text-sm text-orange-950">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      </main>
      
      <div className="bg-blue-700 text-white text-center py-4 mt-8">
        <p className="text-sm">© 2001-{new Date().getFullYear()} Microsoft Corporation. Все права защищены.</p>
      </div>
      
      {/* Scroll to top button */}
      {showScrollToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full shadow-lg bg-gradient-to-b from-blue-600 to-blue-500 text-white border-2 border-blue-300 hover:from-blue-500 hover:to-blue-400"
            aria-label="Прокрутить наверх"
          >
            <ArrowUpIcon className="h-5 w-5 mx-auto" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
