import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Crown, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Maquiagem",
      oldPrice: "R$ 199,90",
      newPrice: "R$ 159,90",
      discount: "20% OFF",
      description: "Maquiagem profissional para qualquer ocasião",
    },
    {
      icon: Heart,
      title: "Penteado",
      oldPrice: "R$ 199,90",
      newPrice: "R$ 159,90",
      discount: "20% OFF",
      description: "Penteados elegantes e sofisticados",
    },
    {
     
  icon: Sparkles,
  title: "Maquiagem + Penteado",
  oldPrice: "R$ 399,80",
  newPrice: "R$ 209,90",
  discount: "47% OFF",
  description: "Combo completo para você brilhar",
  featured: true,
  label: "✨ DESTAQUE",
  subLabel: "🔥 MAIS PEDIDO"

    },
    {
      icon: Star,
      title: "Maquiagem + Baby Liss",
      oldPrice: "R$ 299,90",
      newPrice: "R$ 189,90",
      discount: "37% OFF",
      description: "Maquiagem + babyliss para cabelos perfeitos",
    },
    {
      icon: Crown,
      title: "Dia da Noiva",
      oldPrice: "R$ 1.699,90",
      newPrice: "R$ 899,90",
      discount: "47% OFF",
      description: "Pacote completo: limpeza de pele, design de sobrancelhas, maquiagem e penteado com prévia, maquiagem e penteado da mãe da noiva, assessoria de 4h e colocação de vestido",
      premium: true,
    },
    {
      icon: Crown,
      title: "Dia da Debutante",
      oldPrice: "R$ 849,00",
      newPrice: "R$ 549,00",
      discount: "35% OFF",
      description: "Maquiagem + penteado da debutante e mãe, assessoria de 3h e colocação de vestidos",
      premium: true,
    },
  ];

  const handleSchedule = (service: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Aguarda a rolagem completar e então preenche o formulário
      setTimeout(() => {
        const serviceSelect = document.querySelector('[id="service"]') as HTMLElement;
        if (serviceSelect) {
          serviceSelect.click();
          setTimeout(() => {
            const option = Array.from(document.querySelectorAll('[role="option"]')).find(
              el => el.textContent?.includes(service)
            ) as HTMLElement;
            if (option) option.click();
          }, 100);
        }
      }, 800);
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-pearl relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-rose-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-gold-light/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <Badge className="bg-gradient-hero text-white font-poppins px-6 py-2 text-sm">
            Promoções Limitadas
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-dark to-gold-medium bg-clip-text text-transparent">
            Serviços & Promoções
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Preços especiais para você realizar seu sonho com qualidade e profissionalismo
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white border-2 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-scale-in ${
                  service.premium
                    ? "border-gold-medium lg:col-span-1"
                    : service.featured
                    ? "border-rose-medium md:col-span-2 lg:col-span-1"
                    : "border-border"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badges superiores centralizados */}
<div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
  <Badge className="bg-gradient-hero text-white font-poppins font-semibold px-3 py-1 shadow-soft">
    {service.discount}
  </Badge>

  {service.label && (
    <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-poppins font-semibold px-3 py-1 shadow-soft animate-pulse">
      {service.label}
    </Badge>
  )}

  {service.subLabel && (
    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-poppins font-semibold px-3 py-1 shadow-soft animate-bounce">
      {service.subLabel}
    </Badge>
  )}
</div>


                {/* Premium Badge */}
                {service.premium && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-gold text-white font-poppins font-semibold px-3 py-1 shadow-soft">
                      Premium
                    </Badge>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-rose flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-rose-dark" />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-sm text-muted-foreground leading-relaxed min-h-[60px]">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <p className="font-poppins text-sm text-muted-foreground line-through">
                      {service.oldPrice}
                    </p>
                    <p className="font-playfair text-4xl font-bold bg-gradient-to-r from-rose-dark to-gold-medium bg-clip-text text-transparent">
                      {service.newPrice}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleSchedule(service.title)}
                    className="w-full bg-gradient-hero text-white font-poppins font-medium py-6 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    Agendar
                  </Button>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <p className="font-poppins text-sm text-muted-foreground mb-4">
            Não encontrou o que procura? Entre em contato!
          </p>
          <Button
            onClick={() => window.open("https://wa.me/5521965000317?text=Olá! Gostaria de mais informações sobre os serviços.", "_blank")}
            variant="outline"
            className="font-poppins font-medium px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-gradient-hero hover:text-white hover:border-transparent transition-all duration-300"
          >
            Falar com a Julia Helena
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
