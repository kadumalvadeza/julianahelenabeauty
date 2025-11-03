import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Promoções", href: "#promotions" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5521965000317?text=Olá! Gostaria de agendar um horário.", "_blank");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-pearl/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative">
              <h1 className="font-playfair text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-dark to-gold-medium bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                Julia Helena
              </h1>
              <p className="font-poppins text-xs tracking-widest text-muted-foreground uppercase">
                Beauty
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-poppins text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              onClick={handleWhatsApp}
              className="bg-gradient-hero text-white font-poppins font-medium px-6 py-2.5 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Agende no WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-pearl/98 backdrop-blur-md shadow-elegant animate-fade-in">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-poppins text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-hero text-white font-poppins font-medium py-3 rounded-full shadow-soft hover:shadow-glow transition-all duration-300"
              >
                Agende no WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
