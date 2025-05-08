
import React from 'react';
import { Button } from '../baseComponents/button';

const steps = [
  {
    number: '01',
    title: 'Cadastre-se na plataforma',
    description: 'Crie sua conta em menos de 2 minutos e configure seu perfil profissional.'
  },
  {
    number: '02',
    title: 'Adicione seus eventos',
    description: 'Importe seus eventos existentes ou crie novos projetos com nossos templates exclusivos.'
  },
  {
    number: '03',
    title: 'Personalize sua gestão',
    description: 'Adapte cronogramas, adicione fornecedores e clientes, e defina suas preferências.'
  },
  {
    number: '04',
    title: 'Gerencie com excelência',
    description: 'Acompanhe cada detalhe, compartilhe informações e impressione seus clientes.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-beige py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="section-title">Como funciona</h2>
          <p className="section-subtitle">
            Começar é simples e você pode estar operacional em poucos minutos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="scroll-reveal">
              <div className="relative">
                <div className="bg-white rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-playfair font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#8A898C"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center scroll-reveal">
          <Button className="btn-primary text-base h-14 px-8" size="lg">
            Experimente agora mesmo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
