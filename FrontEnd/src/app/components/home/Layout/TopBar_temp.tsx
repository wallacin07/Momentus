import { FC } from 'react';
import { Bell, Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../baseComponents/button';
import { Badge } from '../../../baseComponents/badge';

export const TopBar: FC = () => {
  return (
    <header className="h-16 border-b bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 h-full">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
          <div className="text-xl font-medium hidden md:block">Início</div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs bg-primary text-white">
              2
            </Badge>
          </Button>
          <Button variant="outline" className="hidden md:flex gap-2 items-center">
            <Menu size={16} />
            <span>Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
