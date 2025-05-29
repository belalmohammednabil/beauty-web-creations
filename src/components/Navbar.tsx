
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "الرئيسية", href: "#home" },
    { label: "عن البرنامج", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "البرامج", href: "#programs" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
      scrolled ? "bg-white/95 shadow-sm border-blue-100" : "bg-transparent border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 group animate-fade-in">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">ت</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">TracKWise.360</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group story-link"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-105 transition-transform duration-300 animate-fade-in animation-delay-500">
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 animate-fade-in">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
                style={{animationDelay: `${index * 100}ms`}}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              ابدأ الآن
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
