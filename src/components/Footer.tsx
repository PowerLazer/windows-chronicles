
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Windows Chronicles</h3>
            <p className="text-muted-foreground">
              A comprehensive timeline of Microsoft's history, Windows operating systems, and unreleased projects.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-foreground transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#microsoft" className="text-muted-foreground hover:text-foreground transition-colors">
                  Microsoft History
                </a>
              </li>
              <li>
                <a href="#windows" className="text-muted-foreground hover:text-foreground transition-colors">
                  Windows Versions
                </a>
              </li>
              <li>
                <a href="#unreleased" className="text-muted-foreground hover:text-foreground transition-colors">
                  Unreleased Projects
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground">
              This interactive timeline was created to document the fascinating history of Microsoft and Windows, including both released and unreleased versions.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Windows Chronicles. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
