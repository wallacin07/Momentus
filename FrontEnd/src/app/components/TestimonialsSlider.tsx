
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../baseComponents/carousel';
import { Card, CardContent } from '../baseComponents/card';

const testimonials = [
  {
    name: 'Amanda Oliveira',
    role: 'Cerimonialista de Casamentos',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'Essa plataforma transformou completamente minha organização. Consigo gerenciar vários eventos simultaneamente sem me perder em detalhes. O compartilhamento de informações com noivos e fornecedores se tornou muito mais eficiente.'
  },
  {
    name: 'Ricardo Santos',
    role: 'Organizador de Eventos Corporativos',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'A praticidade dessa ferramenta é incrível. Economizo horas por semana em trabalhos administrativos e posso me concentrar no que realmente importa: criar experiências memoráveis para meus clientes.'
  },
  {
    name: 'Mariana Costa',
    role: 'Cerimonialista e Consultora',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Desde que comecei a usar esta plataforma, a satisfação dos meus clientes aumentou significativamente. Eles adoram ter acesso ao cronograma e informações relevantes do evento de forma tão organizada.'
  },
  {
    name: 'Felipe Mendes',
    role: 'Produtor de Eventos',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    content: 'Imprescindível para quem trabalha com múltiplos eventos. A interface intuitiva e as funcionalidades de gestão de fornecedores me ajudam a manter tudo sob controle mesmo nos momentos mais atarefados.'
  }
];

const TestimonialsSlider = () => {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="section-title">O que dizem nossos usuários</h2>
          <p className="section-subtitle">
            Cerimonialistas e organizadores de eventos que transformaram sua forma de trabalhar
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-8 scroll-reveal">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="py-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border border-muted bg-white shadow-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <svg className="h-6 w-6 text-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                          </svg>
                          <p className="text-foreground italic mb-4">{testimonial.content}</p>
                        </div>
                        <div className="mt-auto flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-playfair font-medium">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2 left-0 translate-y-0" />
              <CarouselNext className="relative ml-2 right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
