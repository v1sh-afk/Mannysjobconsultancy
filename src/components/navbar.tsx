import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Target Roles", href: "#roles" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    setIsOpen(false); // Close mobile menu first
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100); // Small delay to ensure menu is closed before scrolling
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A237E] shadow-lg border-b border-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavigation(e, "#home")} className="text-xl font-extrabold text-white font-montserrat">
              Manny's Job Consultancy
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className="relative text-blue-100 hover:text-white transition-colors duration-200 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg px-6 py-2 rounded-full text-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 border-2 border-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-100 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gradient-to-b from-blue-900/90 to-blue-600/90 backdrop-blur-md border-t border-blue-800"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700/40 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg px-6 py-2 rounded-full text-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 border-2 border-white"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 