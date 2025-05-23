"use client"

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AppLayout } from '../components/home/Layout/AppLayout';
import SupplierList from '../components/supplier/SupplierList';
import SupplierForm from '../components/supplier/SupplierForm';
import SupplierHeader from '../components/supplier/SupplierHeader';
import SupplierAlert from '../components/supplier/SupplierAlert';

const Suppliers: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [clients, setClients] = useState<any[]>([]);
  const { toast } = useToast();

  const handleAddClient = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveClient = (formData: any) => {
    const newClient = {
      id: Date.now(),
      ...formData
    };
    
    setClients([...clients, newClient]);
    setShowForm(false);
    
    toast({
      title: "Cliente adicionado",
      description: `${formData.firstName} foi adicionado com sucesso.`,
    });
  };

  return (
   <AppLayout>

     <SupplierHeader />
     
     <div className="container mx-auto p-6">
       {showAlert && (
         <SupplierAlert 
           onClose={() => setShowAlert(false)} 
           onAddClient={handleAddClient} 
         />
       )}   
       <SupplierList onAddClick={handleAddClient} />     
       {showForm && (
         <SupplierForm 
           onClose={handleCloseForm} 
           onSave={handleSaveClient} 
         />
       )}
     </div>
   </AppLayout>
  );
};

export default Suppliers;