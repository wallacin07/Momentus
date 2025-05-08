
import React from 'react';
import { Button } from '../baseComponents/button';
import { Calendar } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Decoração elegante de casamento"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h2 className="text-white font-playfair text-xl md:text-2xl mb-3">Eternize seus momentos</h2>
            <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Transformando sonhos em experiências inesquecíveis
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Planejamento e organização de casamentos e eventos sociais com sofisticação, 
              atenção aos detalhes e um toque único que reflete sua personalidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base px-8 py-6">
                <Calendar className="mr-2 h-5 w-5" />
                Agende sua consultoria gratuita
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base px-8 py-6">
                Conheça nosso trabalho
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
