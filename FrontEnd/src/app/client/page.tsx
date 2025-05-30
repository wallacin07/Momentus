"use client"
import React, { useEffect, useState } from 'react';
import ClientHeader from '../components/client/ClientHeader';
import ClientAlert from '../components/client/ClientAlert';

import ClientForm from '../components/client/ClientForm';
import ClientDetails from '../components/client/ClientDetails';
import ClientEditForm from '../components/client/ClientEditForm';
import { useToast } from '@/hooks/use-toast';
import ClientList from '../components/client/ClientList';
import { AppLayout } from '../components/home/Layout/AppLayout';
import ClientSearch from '../components/client/ClientSearch';
import ClientListHeader from '../components/client/ClientListHeader';
import axios from 'axios';

export interface Client {
  id: number;
  name: string;
  number: string;
  email: string;
  adress: string;
  CPF: string;
  birthDate: string

}

const Clients: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const { toast } = useToast();

  const handleAddClient = () => {
    setShowForm(true);
  };

  useEffect(() => {
  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:8080/client",{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
      setClients(response.data);
    } catch (error) {
      console.error("Erro ao buscar os clientes:", error);
    }
  };

  fetchClients();
    
    
  }, [])

    useEffect(() => {
    
  }, [clients])

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveClient = (formData: any) => {
  

    setShowForm(false);
    toast({
      title: "cliente adicionado",
      description: `${formData.firstName} foi adicionado com sucesso.`,
    });
  };

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
    setShowDetails(true);
  };

  const handleEditClick = (client: Client) => {
    setShowEdit(true);
  };

  const handleSaveEdit = (editedClient: Client) => {
    const updatedClients = clients.map(client => 
      client.id === editedClient.id ? editedClient : client
    );
    
    setClients(updatedClients);
    setSelectedClient(editedClient);
    
    toast({
      title: "cliente atualizado",
      description: `${editedClient.name} foi atualizado com sucesso.`,
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