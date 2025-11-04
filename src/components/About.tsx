import { Heart, Award, Clock, MapPin, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Paixão pela Beleza",
      description: "Trabalho com amor e dedicação em cada detalhe",
    },
    {
      icon: Award,
      title: "Produtos Premium",
      description: "Uso apenas produtos de alta qualidade",
    },
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Disponível a qualquer hora do dia",
    },
    {
      icon: MapPin,
      title: "Domicílio ou Estúdio",
      description: "Atendo onde for mais conveniente para você",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-rose opacity-30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-gold opacity-20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Decorative Animation Side */}
<div className="relative animate-fade-in min-h-[600px] flex items-center justify-">
  {/* Depoimentos de Clientes */}
<div className="relative animate-fade-in min-h-[600px] flex flex-col justify-center gap-10">
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-elegant max-w-md mx-auto border border-rose-light">
    <p className="font-poppins text-gray-700 italic mb-4">
      “A maquiagem ficou simplesmente perfeita! Durou a festa toda e me senti maravilhosa. Atendimento impecável!”
    </p>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-rose-dark">— Mariana Alves</p>
        <div className="flex text-gold-medium">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-elegant max-w-md mx-auto border border-rose-light">
    <p className="font-poppins text-gray-700 italic mb-4">
      “A Julia é incrível! Fiz o combo maquiagem + penteado e foi o melhor investimento. Super recomendo!”
    </p>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-rose-dark">— Camila Ribeiro</p>
        <div className="flex text-gold-medium">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

            {/* Main decorative circle */}
            <div className="relative w-[400px] h-[400px]">
              {/* Center glowing circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-rose opacity-40 blur-2xl animate-pulse" />
              
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-rose-light/30 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-hero shadow-glow" />
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-gold shadow-glow" />
              </div>
              
              {/* Middle rotating ring */}
              <div className="absolute inset-8 rounded-full border-4 border-gold-light/30 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-rose-medium" />
              </div>
              
              {/* Inner circle with gradient */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-rose-light via-pearl to-gold-light/50 shadow-elegant flex items-center justify-center">
                <div className="text-center space-y-2 animate-float">
                  <Sparkles className="w-16 h-16 text-rose-dark mx-auto" />
                  <p className="font-playfair text-5xl font-bold bg-gradient-to-r from-rose-dark to-gold-medium bg-clip-text text-transparent">
                    500+
                  </p>
                  <p className="font-poppins text-sm text-muted-foreground font-medium">
                    Clientes Satisfeitas
                  </p>
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-rose-medium animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-20 right-16 w-2 h-2 rounded-full bg-gold-medium animate-float opacity-60" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-20 left-20 w-4 h-4 rounded-full bg-rose-light animate-float opacity-60" style={{ animationDelay: "1.5s" }} />
              <div className="absolute bottom-16 right-12 w-3 h-3 rounded-full bg-gold-light animate-float opacity-60" style={{ animationDelay: "2s" }} />
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-rose-light/40 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-gold-light/40 rounded-br-3xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {/* Section Title */}
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-dark to-gold-medium bg-clip-text text-transparent">
                Sobre Julia Helena
              </h2>
              <div className="w-24 h-1 bg-gradient-gold rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="font-poppins text-lg text-foreground/90 leading-relaxed">
                Sou a{" "}
                <span className="font-semibold text-primary">Julia Helena</span>,
                maquiadora e especialista em penteados. Meu propósito é transformar
                momentos especiais em{" "}
                <span className="font-semibold text-primary">
                  lembranças inesquecíveis
                </span>
                , realçando o que há de mais bonito em cada mulher.
              </p>

              <p className="font-poppins text-lg text-foreground/90 leading-relaxed">
                Trabalho com amor, técnica e produtos de alta qualidade, no
                conforto do seu lar ou no meu estúdio. Cada cliente é única, e
                meu compromisso é fazer você se sentir{" "}
                <span className="font-semibold text-primary">
                  radiante e confiante
                </span>{" "}
                em seu dia especial.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-rose-dark" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Instagram Link */}
            <div className="pt-4">
              <a
                href="https://instagram.com/juliahelena.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-poppins text-primary hover:text-primary/80 transition-colors duration-300 group"
              >
                <span className="font-medium">Veja meu trabalho no Instagram</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
