import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-makeup.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTU1MTg5Njc3Njg3MDYx?story_media_id=3415377340345869279&igsh=MTFzdHEwNnlsbzRpdw==", "_blank");
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

          <div className="pt-4">
  <Button
  onClick={handleWhatsApp}
  size="lg"
  className="relative bg-white text-primary hover:bg-white/95 font-poppins font-semibold text-base px-10 py-5 rounded-full shadow-glow transition-all duration-300 group overflow-hidden animate-zoomMove"
>
  <span className="relative z-10 flex items-center justify-center">
    VEJA FEEDBACKS DE CLIENTES REAIS
    <Sparkles className="ml-2 w-5 h-5 transition-transform duration-300" />
  </span>
</Button>
</div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center justify-center gap-8 text-white/90 font-poppins text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-light rounded-full animate-pulse" />
              <span>   ㅤQuer saber se vale a pena? Veja você mesma o que dizem 👆</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-light rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />

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
