"use client"
import React, { useEffect, useState } from 'react';

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
import axios from 'axios';

const Suppliers: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [suppliers, setSuppliers] = useState<SupplierData[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierData | null>(null);
  const { toast } = useToast();



  useEffect(() => {
  const fetchSuppliers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/supplier",{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
      setSuppliers(response.data);
    } catch (error) {
      console.error("Erro ao buscar os clientes:", error);
    }
  };

  fetchSuppliers();
    
    
  }, [])

    useEffect(() => {
    console.log(suppliers)
  }, [suppliers])

  const handleAddSupplier = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveSupplier = (formData: any) => {
    const categories = [];
  

    // setSuppliers([]);
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
      description: `${editedSupplier.name} foi atualizado com sucesso.`,
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