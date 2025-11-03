import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.service || !formData.date || !formData.time || !formData.location) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    const message = `Olá! Gostaria de agendar o serviço *${formData.service}* no dia *${formData.date}* às *${formData.time}*. Local: *${formData.location}*. Meu nome é ${formData.name}.`;
    window.open(`https://wa.me/5521965000317?text=${encodeURIComponent(message)}`, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    
    setFormData({ name: "", service: "", date: "", time: "", location: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: "(21) 96500-0317",
      link: "https://wa.me/5521965000317",
    },
    {
      icon: MapPin,
      title: "Endereço do Estúdio",
      content: "Estrada do Outeiro Santo, 907",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "24 horas - Domicílio ou Estúdio",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@juliahelena.beauty",
      link: "https://instagram.com/juliahelena.beauty",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-pearl relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-rose-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gold-light/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-dark to-gold-medium bg-clip-text text-transparent">
            Agende seu Horário
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Preencha o formulário abaixo e confirme pelo WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <Card className="p-8 bg-white shadow-elegant border-2 border-border animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-poppins font-medium text-foreground">
                  Seu Nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-poppins h-12 rounded-xl border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="font-poppins font-medium text-foreground">
                  Serviço Desejado
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="font-poppins h-12 rounded-xl border-2 focus:border-primary">
                    <SelectValue placeholder="Escolha o serviço" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Maquiagem">Maquiagem - R$ 159,90</SelectItem>
                    <SelectItem value="Penteado">Penteado - R$ 159,90</SelectItem>
                    <SelectItem value="Maquiagem + Penteado">
                      Maquiagem + Penteado - R$ 209,90
                    </SelectItem>
                    <SelectItem value="Maquiagem + Baby Liss">
                      Maquiagem + Baby Liss - R$ 189,90
                    </SelectItem>
                    <SelectItem value="Dia da Noiva">
                      Dia da Noiva - R$ 899,90
                    </SelectItem>
                    <SelectItem value="Dia da Debutante">
                      Dia da Debutante - R$ 549,00
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="font-poppins font-medium text-foreground">
                  Data
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="font-poppins h-12 rounded-xl border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="font-poppins font-medium text-foreground">
                  Hora
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="font-poppins h-12 rounded-xl border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="font-poppins font-medium text-foreground">
                  Local de Atendimento
                </Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => setFormData({ ...formData, location: value })}
                >
                  <SelectTrigger className="font-poppins h-12 rounded-xl border-2 focus:border-primary">
                    <SelectValue placeholder="Escolha o local" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Domicílio">Domicílio (meu endereço)</SelectItem>
                    <SelectItem value="Estúdio">Estúdio da Julia Helena</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-hero text-white font-poppins font-semibold text-lg py-7 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Confirmar pelo WhatsApp
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-white shadow-soft border-2 border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-rose-dark" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-poppins text-primary hover:text-primary/80 transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="font-poppins text-muted-foreground">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
