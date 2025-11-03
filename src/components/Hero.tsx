import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-makeup.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521965000317?text=Olá! Gostaria de agendar um horário com a Julia Helena.", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Julia Helena Beauty - Maquiagem Profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-dark/80 via-primary/70 to-gold-medium/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold-light/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-rose-medium/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
            <Sparkles className="w-4 h-4 text-gold-light" />
            <span className="font-poppins text-sm font-medium text-white">
              Atendimento 24h • Domicílio ou Estúdio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight">
            Realce sua beleza com um{" "}
            <span className="bg-gradient-to-r from-gold-light via-white to-gold-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              toque profissional
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-poppins text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Promoções imperdíveis de maquiagem e penteado.
            <br />
            Transforme momentos especiais em lembranças inesquecíveis.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-primary hover:bg-white/95 font-poppins font-semibold text-lg px-12 py-7 rounded-full shadow-glow hover:scale-105 transition-all duration-300 group"
            >
              Agendar agora pelo WhatsApp
              <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center justify-center gap-8 text-white/90 font-poppins text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-light rounded-full animate-pulse" />
              <span>Mais de 500 clientes satisfeitas</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-light rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span>Produtos de alta qualidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
