import { FC } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  LayoutDashboard, 
  Users, 
  FileText, 
  ShoppingBag, 
  Clock, 
  Handshake, 
  Warehouse,
  FileStack,
  UserCheck,
  UserRoundPlus
} from 'lucide-react';
import { Badge } from '../../../baseComponents/badge';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  badge?: number;
  isActive?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  to, 
  badge, 
  isActive = false 
}) => {
  return (
    <Link
      href={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
        isActive 
          ? 'bg-primary/10 text-primary' 
          : 'hover:bg-muted'
      }`}
    >
      {icon}
      <span className="flex-1">{label}</span>
      {badge && (
        <Badge variant="outline" className="bg-muted text-xs">
          {badge}
        </Badge>
      )}
    </Link>
  );
};

export const Sidebar: FC = () => {
  return (
    <aside className="w-60 border-r h-screen pt-2 flex flex-col sticky top-0">
      <div className="flex items-center gap-2 px-6 py-3 mb-3">
        <Link  className="flex items-center gap-2" href='/home'>
          <div className="font-semibold text-lg flex items-center">
            <span className="text-primary">Momentus</span>
          </div>
        </Link>
      </div>
      
      <div className="px-2 space-y-1">
        <SidebarItem 
          icon={<LayoutDashboard size={20} />} 
          label="Início" 
          to="/" 
          isActive={true}
        />
        <SidebarItem 
          icon={<Clock size={20} />} 
          label="Eventos" 
          to="/event" 
          badge={27}
        />

      </div>
      
      <div className="px-4 py-2 mt-2">
        <div className="text-xs font-medium text-muted-foreground mb-2">
          CLIENTES RECENTES
        </div>
        <div className="space-y-1">
          <Link href='/client/1'  className="flex items-center gap-2 py-1 text-sm hover:text-primary transition-colors">
            <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs overflow-hidden">
              👰
            </div>
            <span>Guilherme e Vanessa</span>
          </Link>
          <Link  className="flex items-center gap-2 py-1 text-sm hover:text-primary transition-colors" href='client/1'>
            <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs overflow-hidden">
              🎓
            </div>
            <span>Formatura Adriano</span>
          </Link>
        </div>
      </div>
      
      <div className="px-2 mt-4 space-y-1">
        <SidebarItem 
          icon={<Calendar size={20} />} 
          label="Calendário" 
          to="/calendario" 
          badge={3}
        />
        <SidebarItem 
          icon={<FileText size={20} />} 
          label="Orçamentos" 
          to="/orcamentos"
        />
        <SidebarItem 
          icon={<UserRoundPlus size={20} />} 
          label="Clientes" 
          to="/client"
        />
        <SidebarItem 
          icon={<FileStack size={20} />} 
          label="Contratos" 
          to="/contratos"
        />
        <SidebarItem 
          icon={<Clock size={20} />} 
          label="Pagamentos" 
          to="/pagamentos"
        />
        <SidebarItem 
          icon={<Warehouse size={20} />} 
          label="Documentos" 
          to="/documentos"
        />
        <SidebarItem 
          icon={<UserCheck size={20} />} 
          label="Fornecedores" 
          to="/supplier"
        />
      </div>

      <div className="mt-auto px-4 py-4 border-t">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <span className="text-xs">ST</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Voz Cerimonial</span>
            <span className="text-sm font-medium">Sotério Tavares</span>
          </div>
        </div>
      </div>
    </aside>
  );
};