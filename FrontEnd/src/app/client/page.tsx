"use client"
import React, { useState } from 'react';
import ClientHeader from '../components/client/ClientHeader';
import ClientAlert from '../components/client/ClientAlert';

import ClientForm from '../components/client/ClientForm';
import ClientDetails from '../components/client/ClientDetails';
import ClientEditForm from '../components/client/ClientEditForm';
import { useToast } from '@/hooks/use-toast';
import { ClientData } from '../components/client/ClientItem';
import ClientList from '../components/client/ClientList';
import { AppLayout } from '../components/home/Layout/AppLayout';
import ClientSearch from '../components/client/ClientSearch';
import ClientListHeader from '../components/client/ClientListHeader';

const Clients: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [clients, setClients] = useState<ClientData[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientData | null>(null);
  const { toast } = useToast();

  const handleAddClient = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveClient = (formData: any) => {
    const categories = [];
    
    if (formData.category === 'food') {
      categories.push({ name: 'Alimentação', icon: '🍽️' });
    } else if (formData.category === 'drinks') {
      categories.push({ name: 'Bebidas', icon: '🍸' });
    } else if (formData.category === 'decoration') {
      categories.push({ name: 'Decoração', icon: '🎭' });
    }
    
    const newClient = {
      id: Date.now(),
      firstName: formData.firstName,
      lastName: formData.lastName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      location: formData.location || '',
      categories: categories
    };
    
    setClients([...clients, newClient]);
    setShowForm(false);
    
    toast({
      title: "Fornecedor adicionado",
      description: `${formData.firstName} foi adicionado com sucesso.`,
    });
  };

  const handleClientClick = (client: ClientData) => {
    setSelectedClient(client);
    setShowDetails(true);
  };

  const handleEditClick = (client: ClientData) => {
    setShowEdit(true);
  };

  const handleSaveEdit = (editedClient: ClientData) => {
    const updatedClients = clients.map(client => 
      client.id === editedClient.id ? editedClient : client
    );
    
    setClients(updatedClients);
    setSelectedClient(editedClient);
    
    toast({
      title: "Fornecedor atualizado",
      description: `${editedClient.firstName} foi atualizado com sucesso.`,
    });
  };

  return (
    <AppLayout>

    <div className="min-h-screen bg-white">
      <ClientHeader />
      
      <div className="container mx-auto p-6">
        {showAlert && (
          <ClientAlert 
            onClose={() => setShowAlert(false)} 
            onAddClient={handleAddClient} 
          />
        )}
        <ClientSearch clientCount={clients.length}/>
        <ClientListHeader onAddClick={handleAddClient}/>
        <ClientList 
          clients={clients}
          onClientClick={handleClientClick} />
        
        {showForm && (
          <ClientForm 
            onClose={handleCloseForm} 
            onSave={handleSaveClient} 
          />
        )}
        
        <ClientDetails 
          isOpen={showDetails} 
          onClose={() => setShowDetails(false)} 
          client={selectedClient}
          onEdit={handleEditClick} 
        />
        
        <ClientEditForm 
          isOpen={showEdit} 
          onClose={() => setShowEdit(false)} 
          client={selectedClient} 
          onSave={handleSaveEdit} 
        />
      </div>
    </div>

    </AppLayout>
  );
};

export default Clients;