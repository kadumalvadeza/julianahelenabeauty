import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-rose py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-medium/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="space-y-2">
            <h2 className="font-playfair text-3xl font-bold bg-gradient-to-r from-rose-dark to-gold-medium bg-clip-text text-transparent">
              Julia Helena Beauty
            </h2>
            <p className="font-poppins text-sm text-muted-foreground">
              Realçando sua beleza natural
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com/juliahelena.beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <Instagram className="w-6 h-6 text-rose-dark" />
              </div>
            </a>
            <a
              href="https://wa.me/5521965000317"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-rose-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto rounded-full" />

          {/* Copyright */}
          <div className="space-y-2">
            <p className="font-poppins text-sm text-foreground/80 flex items-center justify-center gap-2">
              © 2025 Julia Helena Beauty • Todos os direitos reservados
            </p>
            <p className="font-poppins text-sm text-muted-foreground flex items-center justify-center gap-2">
              Site criado com{" "}
              <Heart className="w-4 h-4 text-rose-dark fill-rose-dark animate-pulse" />{" "}
              para realçar sua beleza natural
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
