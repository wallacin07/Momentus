
import React from 'react';
import { CalendarCheck, Users, Share, Shield } from 'lucide-react';
import { Card, CardContent } from '../baseComponents/card';

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Visualização Centralizada',
    description: 'Tenha todos os seus eventos em um único painel interativo, organizados por datas, categorias e status.'
  },
  {
    icon: Users,
    title: 'Gestão Completa',
    description: 'Administre cronogramas, fornecedores e clientes com facilidade. Automatize lembretes e acompanhamentos.'
  },
  {
    icon: Share,
    title: 'Compartilhamento Facilitado',
    description: 'Compartilhe informações relevantes com sua equipe e clientes, mantendo todos alinhados e informados.'
  },
  {
    icon: Shield,
    title: 'Redução de Erros',
    description: 'Diminua falhas e aumente sua produtividade com processos otimizados e alertas inteligentes.'
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="section-title">Benefícios exclusivos para cerimonialistas</h2>
          <p className="section-subtitle">
            Nossa plataforma foi desenvolvida pensando em suas necessidades específicas, 
            proporcionando ferramentas que realmente fazem a diferença no seu dia a dia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="scroll-reveal border border-muted bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-beige p-4 rounded-full mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
