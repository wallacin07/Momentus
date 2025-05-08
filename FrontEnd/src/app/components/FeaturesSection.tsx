
import React from 'react';
import { Separator } from '../baseComponents/separator';

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-beige-light py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="section-title">Recursos projetados para a excelência</h2>
          <p className="section-subtitle">
            Conheça as ferramentas que vão transformar a maneira como você gerencia seus eventos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 scroll-reveal">
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Painel intuitivo</h3>
                <p className="text-muted-foreground mb-4">
                  Dashboard personalizado com todas as informações essenciais à primeira vista. 
                  Visualize rapidamente eventos próximos, tarefas pendentes e comunicações recentes.
                </p>
                <Separator className="bg-primary/20" />
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Cronogramas detalhados</h3>
                <p className="text-muted-foreground mb-4">
                  Organize cada minuto com cronogramas customizáveis. Defina marcos importantes,
                  adicione lembretes e compartilhe atualizações em tempo real.
                </p>
                <Separator className="bg-primary/20" />
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Gerenciamento de fornecedores</h3>
                <p className="text-muted-foreground mb-4">
                  Mantenha todos os contatos organizados com avaliações, contratos 
                  e histórico de interações para facilitar futuras contratações.
                </p>
                <Separator className="bg-primary/20" />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 scroll-reveal">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
              alt="Dashboard da plataforma" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
