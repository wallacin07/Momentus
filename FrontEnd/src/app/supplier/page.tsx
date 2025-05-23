"use client"
import React, { useState } from 'react';

import { useToast } from '@/hooks/use-toast';

import { AppLayout } from '../components/home/Layout/AppLayout';
import { SupplierData } from '../components/supplier/SupplierItem';
import SupplierListHeader from '../components/supplier/SupplierListHeader';
import SupplierList from '../components/supplier/SupplierList';
import SupplierDetails from '../components/supplier/SupplierDetails';
import SupplierEditForm from '../components/supplier/SupplierEditForm';
import SupplierForm from '../components/supplier/SupplierForm';
import SupplierSearch from '../components/supplier/SupplierSearch';
import SupplierHeader from '../components/supplier/SupplierHeader';
import SupplierAlert from '../components/supplier/SupplierAlert';

const Suppliers: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [suppliers, setSuppliers] = useState<SupplierData[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierData | null>(null);
  const { toast } = useToast();

  const handleAddSupplier = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveSupplier = (formData: any) => {
    const categories = [];
    
    if (formData.category === 'food') {
      categories.push({ name: 'Alimentação', icon: '🍽️' });
    } else if (formData.category === 'drinks') {
      categories.push({ name: 'Bebidas', icon: '🍸' });
    } else if (formData.category === 'decoration') {
      categories.push({ name: 'Decoração', icon: '🎭' });
    }
    
    const newSupplier = {
      id: Date.now(),
      Name: formData.Name,
      cnpj: formData.cnpj || '',
      email: formData.email || '',
      phone: formData.phone || '',
      categories: categories
    };
    
    setSuppliers([...suppliers, newSupplier]);
    setShowForm(false);
    
    toast({
      title: "Fornecedor adicionado",
      description: `${formData.firstName} foi adicionado com sucesso.`,
    });
  };

  const handleClientClick = (supplier: SupplierData) => {
    setSelectedSupplier(supplier);
    setShowDetails(true);
  };

  const handleEditClick = (supplier: SupplierData) => {
    setShowEdit(true);
  };

  const handleSaveEdit = (editedSupplier: SupplierData) => {
    const updatedSuppliers = suppliers.map(supplier => 
      supplier.id === supplier.id ? editedSupplier : supplier
    );
    
    setSuppliers(updatedSuppliers);
    setSelectedSupplier(editedSupplier);
    
    toast({
      title: "fornecedor atualizado",
      description: `${editedSupplier.Name} foi atualizado com sucesso.`,
    });
  };

  return (
    <AppLayout>

    <div className="min-h-screen bg-white">
      <SupplierHeader />
      
      <div className="container mx-auto p-6">
        {showAlert && (
          <SupplierAlert 
            onClose={() => setShowAlert(false)} 
            onAddClient={handleAddSupplier} 
          />
        )}
        <SupplierSearch supplierCount={suppliers.length}/>
        <SupplierListHeader onAddClick={handleAddSupplier}/>
        <SupplierList 
          suppliers={suppliers}
          onSupplierClick={handleClientClick} />
        
        {showForm && (
          <SupplierForm 
            onClose={handleCloseForm} 
            onSave={handleAddSupplier} 
          />
        )}
        
        <SupplierDetails 
          isOpen={showDetails} 
          onClose={() => setShowDetails(false)} 
          supplier={selectedSupplier}
          onEdit={handleEditClick} 
        />
        
        <SupplierEditForm 
          isOpen={showEdit} 
          onClose={() => setShowEdit(false)} 
          supplier={selectedSupplier} 
          onSave={handleSaveEdit} 
        />
      </div>
    </div>

    </AppLayout>
  );
};

export default Suppliers;