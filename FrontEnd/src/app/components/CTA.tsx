
import React from 'react';
import { Button } from '../baseComponents/button';

const CTA = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Pronto para transformar sua gestão de eventos?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Junte-se a centenas de cerimonialistas que estão elevando o nível de seus serviços 
            com nossa plataforma intuitiva e completa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 text-base h-14 px-8" size="lg">
              Iniciar gratuitamente
            </Button>
            <Button className="bg-white text-primary hover:bg-white/90 text-base h-14 px-8" size="lg">
              Agendar demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
