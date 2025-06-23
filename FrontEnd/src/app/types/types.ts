
export interface Client {
  id: number;
  name: string;
  number: string;
  email: string;
  adress: string;
  CPF: string;
  birthDate: string;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  status: string;
  client: { id: number; name: string };
  date: string;
}

export interface ClientEventData {
  id: number;
  name: string;
}
