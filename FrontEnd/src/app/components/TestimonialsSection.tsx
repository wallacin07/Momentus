
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Carolina e Pedro",
      event: "Casamento",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      testimonial: "A Ceremonie transformou nosso casamento em um sonho realizado. Cada detalhe foi cuidadosamente planejado e executado com perfeição. Sem dúvida, a melhor decisão que tomamos para nosso grande dia.",
      rating: 5,
    },
    {
      name: "Empresa XYZ",
      event: "Evento Corporativo",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      testimonial: "Profissionalismo impecável! A equipe da Ceremonie cuidou de cada aspecto do nosso evento corporativo anual, superando todas as expectativas e impressionando nossos clientes e parceiros.",
      rating: 5,
    },
    {
      name: "Marina Silva",
      event: "Aniversário de 50 anos",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      testimonial: "Minha festa de 50 anos foi simplesmente perfeita! A atenção aos detalhes e a capacidade de transformar minhas ideias em realidade me deixou sem palavras. Recomendo fortemente!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24" ref={sectionRef}>
      <div className="container-section">
        <h2 className="section-title scroll-reveal">O que dizem nossos clientes</h2>
        <p className="section-subtitle scroll-reveal">
          A satisfação de quem confiou em nosso trabalho para tornar seu evento especial
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-beige-light p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
