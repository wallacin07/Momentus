
import React, { useEffect, useRef } from 'react';
import { Button } from '../baseComponents/button';
import { Input } from '../baseComponents/input';
import { Textarea } from '../baseComponents/textarea';
import { Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log("Formulário enviado");
    // Reset do formulário ou feedback ao usuário
  };

  return (
    <section id="contact" className="bg-white py-24" ref={sectionRef}>
      <div className="container-section">
        <h2 className="section-title scroll-reveal">Entre em Contato</h2>
        <p className="section-subtitle scroll-reveal">
          Estamos prontos para transformar seu próximo evento em algo extraordinário
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="scroll-reveal">
            <h3 className="font-playfair text-2xl font-medium mb-6">Vamos conversar</h3>
            <p className="text-muted-foreground mb-8">
              Entre em contato para uma consultoria personalizada ou tire suas dúvidas sobre nossos serviços. 
              Teremos o maior prazer em atendê-lo e transformar suas ideias em realidade.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>contato@ceremonie.com.br</span>
              </div>
              <div className="flex items-center mt-8 space-x-4">
                <a href="#" className="p-2 rounded-full bg-beige hover:bg-beige-dark transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-beige hover:bg-beige-dark transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-beige hover:bg-beige-dark transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-beige hover:bg-beige-dark transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome completo
                  </label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telefone
                </label>
                <Input id="phone" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label htmlFor="event" className="block text-sm font-medium mb-1">
                  Tipo de evento
                </label>
                <select 
                  id="event" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="casamento">Casamento</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Como podemos ajudar?" rows={4} />
              </div>
              <Button type="submit" className="btn-primary w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
