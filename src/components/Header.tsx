
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { LucideMenu, LucideX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-3 glass dark:glass-dark shadow-md" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Windows Chronicles
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-1"
        >
          <a href="#timeline" className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors">Timeline</a>
          <a href="#microsoft" className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors">Microsoft</a>
          <a href="#windows" className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors">Windows</a>
          <a href="#unreleased" className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors">Unreleased</a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <LucideX /> : <LucideMenu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass dark:glass-dark"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#timeline" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Timeline
              </a>
              <a 
                href="#microsoft" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Microsoft
              </a>
              <a 
                href="#windows" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Windows
              </a>
              <a 
                href="#unreleased" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Unreleased
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
