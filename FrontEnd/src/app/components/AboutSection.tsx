
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
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

  return (
    <section id="about" className="bg-white py-24" ref={sectionRef}>
      <div className="container-section">
        <h2 className="section-title scroll-reveal">Sobre Nós</h2>
        <p className="section-subtitle scroll-reveal">
          Há mais de uma década transformando sonhos em momentos inesquecíveis
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="scroll-reveal">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-black opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Cerimonialista em ação"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-black opacity-20" />
            </div>
          </div>
          
          <div className="scroll-reveal">
            <h3 className="font-playfair text-2xl sm:text-3xl font-medium mb-6">Excelência e dedicação em cada detalhe</h3>
            <p className="text-muted-foreground mb-6">
              A Ceremonie nasceu da paixão por criar experiências memoráveis e da crença de que cada evento merece ser único e personalizado. Nossa equipe de cerimonialistas e consultores especializados traz anos de experiência no mercado de eventos sociais e corporativos.
            </p>
            <p className="text-muted-foreground mb-6">
              Trabalhamos incansavelmente nos bastidores para que você possa viver cada momento com a tranquilidade de saber que tudo está sendo cuidado com excelência e dedicação.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <p className="font-playfair text-4xl font-bold text-primary">250+</p>
                <p className="mt-2 text-muted-foreground">Casamentos realizados</p>
              </div>
              <div>
                <p className="font-playfair text-4xl font-bold text-primary">12</p>
                <p className="mt-2 text-muted-foreground">Anos de experiência</p>
              </div>
              <div>
                <p className="font-playfair text-4xl font-bold text-primary">98%</p>
                <p className="mt-2 text-muted-foreground">Clientes satisfeitos</p>
              </div>
              <div>
                <p className="font-playfair text-4xl font-bold text-primary">45+</p>
                <p className="mt-2 text-muted-foreground">Parceiros premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
