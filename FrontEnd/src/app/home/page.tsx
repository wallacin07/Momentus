import { AppLayout } from "../components/home/Layout/AppLayout";
import { EventsCarousel } from "../components/home/Events/EventCarousel";
import { TasksRow } from "../components/home/Tasks/TasksRow";
import { VideoTutorialsRow } from "../components/home/Video/VideoTutorialRows";
import { EventType, EventStatus } from "../components/home/Events/EventCard";
import { TaskType } from "../components/home/Tasks/TaskCard";

// Mock data para os eventos
const upcomingEvents = [
  {
    id: '1',
    title: 'Casamento',
    client: 'Guilherme e Vanessa',
    date: '29/05/24',
    type: 'casamento' as EventType,
    status: 'contrato' as EventStatus,
    imageUrl: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    title: 'Formatura',
    client: 'José Mendes',
    date: '12/08/24',
    type: 'formatura' as EventType,
    status: 'concluido' as EventStatus,
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
 
];

// Mock data para as tarefas
const pendingTasks = [
  {
    id: '1',
    title: 'Pagamento atrasado',
    description: 'Já enviamos um lembrete de pagamento ao Whatsapp de Henrique',
    type: 'payment' as TaskType,
    buttonText: 'Ver pagamento'
  }
];

// Mock data para os vídeos tutoriais

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <EventsCarousel title="Próximos eventos" events={upcomingEvents} />
        
        <div className="relative my-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-1">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black text-white p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        </div>
        
        <TasksRow title="Mantenha tudo em dia" tasks={pendingTasks} />
        

      </div>
    </AppLayout>
  );
};

export default Index;