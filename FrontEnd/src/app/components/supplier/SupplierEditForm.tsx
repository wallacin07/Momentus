import React from 'react';
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { X, Upload } from 'lucide-react';
import { Input } from '../../baseComponents/input';
import { Button } from '../../baseComponents/button';
import { Label } from '../../baseComponents/label';
import { Badge } from '../../baseComponents/badge';
import { Pencil } from 'lucide-react';
import { SupplierData } from './SupplierItem';
import axios from 'axios';

interface SupplierEditFormProps {
  isOpen: boolean;
  onClose: () => void;
  supplier: SupplierData | null;
  onSave: (supplier: SupplierData) => void;
}

const SupplierEditForm: React.FC<SupplierEditFormProps> = ({ isOpen, onClose, supplier, onSave }) => {
  const [formData, setFormData] = React.useState<SupplierData | null>(supplier);

  React.useEffect(() => {
    setFormData(supplier);
  }, [supplier]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (formData) {
         const response = await axios.post(`http://localhost:8080/supplier/update`, {
      "id": supplier?.id,
      "name": formData.name,
      "email": formData.email,
      "number": formData.number,
      "adress":formData.adress,
      "description": formData.description,
      "CNPJ": formData.CNPJ,
    }, 
  {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }})
    console.log(response.data)
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
              <Label htmlFor="businessName">Nome do fornecedor</Label>
              <Input 
                id="businessName" 
                name="firstName" 
                value={formData.name} 
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
                  value={formData.number || ''} 
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
              <Label htmlFor="CNPJ">CNPJ </Label>
              <Input 
                id="CNPJ" 
                name="CNPJ" 
                type="text"
                value={formData.CNPJ || ''} 
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="adress">Endereço </Label>
              <Input 
                id="adress" 
                name="adress" 
                type="text"
                value={formData.adress || ''} 
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            {/* <div>
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
            </div> */}


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

export default SupplierEditForm;