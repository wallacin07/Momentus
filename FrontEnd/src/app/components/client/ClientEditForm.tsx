import React from 'react';
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { X, Upload } from 'lucide-react';
import { ClientData } from './ClientItem';
import { Input } from '../../baseComponents/input';
import { Button } from '../../baseComponents/button';
import { Label } from '../../baseComponents/label';
import { Badge } from '../../baseComponents/badge';
import { Pencil } from 'lucide-react';

interface ClientEditFormProps {
  isOpen: boolean;
  onClose: () => void;
  client: ClientData | null;
  onSave: (client: ClientData) => void;
}

const ClientEditForm: React.FC<ClientEditFormProps> = ({ isOpen, onClose, client, onSave }) => {
  const [formData, setFormData] = React.useState<ClientData | null>(client);

  React.useEffect(() => {
    setFormData(client);
  }, [client]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData) {
      onSave(formData);
      onClose();
    }
  };

  if (!formData) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md p-0 z-50">
        <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <X className="w-5 h-5 cursor-pointer" onClick={onClose} />
            <h2 className="text-xl font-medium">Informações do negócio</h2>
          </div>
        </SheetHeader>

        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
              <Upload className="w-6 h-6 text-gray-400" />
            </div>
            <div className="absolute mt-12 ml-12">
              <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full bg-gray-200">
                <Pencil className="h-3 w-3" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="businessName">Nome do negócio</Label>
              <Input 
                id="businessName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone</Label>
              <div className="flex gap-2 mt-1">
                <div className="w-24 border rounded-md px-3 py-2 bg-gray-50 text-sm">BR +55</div>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone || ''} 
                  onChange={handleChange}
                  className="flex-1"
                  placeholder="(41) 98877-8886"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                name="email" 
                type="email"
                value={formData.email || ''} 
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug do negócio</Label>
              <Input 
                id="slug" 
                name="slug" 
                value={formData.lastName || ''} 
                onChange={handleChange}
                className="mt-1"
                placeholder="seu-negocio"
              />
              <p className="text-xs text-gray-500 mt-1">
                Para enviar seu link. Por exemplo: https://pro.wedy.com/share/wedy-biz
              </p>
            </div>

            <div>
              <Label>Categorias de serviço</Label>
              <div className="flex mt-2 gap-2 border rounded-md p-3 justify-between">
                <div className="flex gap-2">
                  <Badge className="bg-black text-white">🍽️ Alimentação</Badge>
                  <Badge className="bg-black text-white">🍸 Bebidas</Badge>
                  <Badge className="bg-black text-white">🎭 Decoração</Badge>
                </div>
                <Button size="icon" variant="ghost" className="h-6 w-6">
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="instagram" className="flex justify-between">
                <span>Instagram</span>
                <span className="text-gray-400 text-xs">Opcional</span>
              </Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">@</span>
                </div>
                <Input 
                  id="instagram" 
                  name="instagram" 
                  className="pl-8"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="document" className="flex justify-between">
                <span>Número do documento</span>
                <span className="text-gray-400 text-xs">Opcional</span>
              </Label>
              <Input 
                id="document" 
                name="document" 
                className="mt-1"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md flex items-center gap-2">
              <span className="text-gray-600 text-sm">Procurando pelas</span>
              <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
                configurações da carteira?
              </Button>
            </div>
          </div>

          <Button 
            className="w-full bg-black hover:bg-gray-800 text-white"
            onClick={handleSubmit}
          >
            Salvar alterações
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ClientEditForm;