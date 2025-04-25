import Image from 'next/image'
import sla from "../../../public/sla.png"
import { LoginForm } from './formLogin';
import { Checkbox } from '@/components/ui/checkbox';

export default function Authentification() {
  return (
    <div className="w-screen h-screen overflow-hidden flex pt-24 pb-24 pl-96 pr-96">
      <div className="w-1/2 h-full p-12 flex  items-center flex-col bg-zinc-100 rounded-l-lg">
      <div className='w-full h-full flex  items-center flex-col mt-16'>
        <p className='font-bold text-4xl mb-5 text-center'>Bem vindo de Volta</p>
        <p className='text-gray-500 text-lg mb-8'>Faça login para acessar toda sua agenda e eventos</p>
        <LoginForm/>

      </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center rounded-r-lg">
        <Image src={sla} alt={''} className='h-full w-full rounded-r-lg'></Image>
      </div>
    </div>
  );
}
