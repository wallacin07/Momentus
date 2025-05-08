
import React, { useEffect, useRef } from 'react';
import { Cake, Users, Briefcase, Gift } from 'lucide-react';
import { Button } from '../baseComponents/button';

const ServicesSection = () => {
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

  const services = [
    {
      title: "Casamentos",
      description: "Do planejamento à execução, cuidamos de cada detalhe para tornar seu casamento uma experiência inesquecível, elegante e sem preocupações.",
      icon: Cake,
    },
    {
      title: "Aniversários",
      description: "Celebramos momentos especiais com criatividade e sofisticação, tornando sua festa de aniversário única e memorável para todos os convidados.",
      icon: Gift,
    },
    {
      title: "Eventos Corporativos",
      description: "Planejamento estratégico e execução impecável para eventos empresariais que fortalecem sua marca e impressionam clientes e colaboradores.",
      icon: Briefcase,
    },
    {
      title: "Cerimoniais Personalizados",
      description: "Criamos cerimonias exclusivas que refletem sua personalidade, valores e história, com protocolos adaptados às suas necessidades.",
      icon: Users,
    },
  ];

  return (
    <section id="services" className="bg-beige-light py-24" ref={sectionRef}>
      <div className="container-section">
        <h2 className="section-title scroll-reveal">Nossos Serviços</h2>
        <p className="section-subtitle scroll-reveal">
          Soluções completas para tornar seu evento inesquecível, com atendimento exclusivo e personalizado
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-beige rounded-full mb-6">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center scroll-reveal">
          <Button className="btn-primary">
            Solicitar orçamento personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
