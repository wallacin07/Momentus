
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../baseComponents/button';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');
  
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

  const projects = [
    {
      title: "Casamento na Praia",
      category: "casamentos",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Aniversário Temático",
      category: "aniversarios",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Conferência Empresarial",
      category: "corporativo",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Casamento Clássico",
      category: "casamentos",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Formatura",
      category: "cerimonial",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Evento Beneficente",
      category: "corporativo",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="bg-beige py-24" ref={sectionRef}>
      <div className="container-section">
        <h2 className="section-title scroll-reveal">Nosso Portfólio</h2>
        <p className="section-subtitle scroll-reveal">
          Confira alguns dos nossos trabalhos mais recentes e deixe-se inspirar
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={() => setFilter('all')}
            className="min-w-24"
          >
            Todos
          </Button>
          <Button 
            variant={filter === 'casamentos' ? 'default' : 'outline'} 
            onClick={() => setFilter('casamentos')}
            className="min-w-24"
          >
            Casamentos
          </Button>
          <Button 
            variant={filter === 'aniversarios' ? 'default' : 'outline'} 
            onClick={() => setFilter('aniversarios')}
            className="min-w-24"
          >
            Aniversários
          </Button>
          <Button 
            variant={filter === 'corporativo' ? 'default' : 'outline'} 
            onClick={() => setFilter('corporativo')}
            className="min-w-24"
          >
            Corporativo
          </Button>
          <Button 
            variant={filter === 'cerimonial' ? 'default' : 'outline'} 
            onClick={() => setFilter('cerimonial')}
            className="min-w-24"
          >
            Cerimonial
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-md scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-white font-playfair font-medium text-xl mb-2">{project.title}</h3>
                  <p className="text-white text-sm capitalize">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
