
import React from 'react';
import { Button } from '../baseComponents/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Toda a organização dos seus eventos, <span className="italic">em um só lugar</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Simplifique sua rotina, economize tempo e impressione seus clientes com uma gestão impecável de cada detalhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base h-14 px-8" size="lg">
                Experimente gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-primary border-2 text-base h-14 px-8" size="lg">
                Agende uma demonstração
              </Button>
            </div>
          </div>
          <div className="hidden md:block scroll-reveal">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-primary"></div>
              <img 
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
                alt="Gestão de eventos" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-2 border-r-2 border-primary"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#benefits" className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <span className="mb-2">Saiba mais</span>
          <div className="w-6 h-6 border-b-2 border-r-2 border-primary transform rotate-45 animate-bounce"></div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
