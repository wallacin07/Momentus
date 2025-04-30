import Image from 'next/image'
import sla from "../../../public/sla.png"
import google from "../../../public/google.png"
import { LoginForm } from './formLogin';
import { Button } from '@/components/ui/button';

export default function Authentification() {
  return (
    <div className="w-screen h-screen overflow-hidden flex pt-24 pb-24 pl-96 pr-96 shadow-xl/30 ">
      <div className="w-1/2 h-full p-12 flex  items-center flex-col bg-zinc-100 rounded-l-lg shadow-xl/30 ">
      <div className='w-full h-full flex  items-center flex-col mt-16'>
        <p className='font-bold text-4xl mb-5 text-center'>Bem vindo de Volta</p>
        <p className='text-gray-600 text-lg mb-8'>Faça login para acessar toda sua agenda e eventos</p>
        <LoginForm/>
        <Button variant="outline" className='mt-6 mb-6 pl-26 pr-26'>
          <Image src={google} className="h-5 w-5" alt={''}></Image> 
          <p>Sign In with Google</p>
          </Button>

          <p className='font-semibold'>Você não tem conta ainda? <a href="" className='text-blue-600 underline'>Aperte aqui para criar</a></p>
      </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center rounded-r-lg shadow-xl/30">
        <Image src={sla} alt={''} className='h-full w-full rounded-r-lg'></Image>
      </div>
    </div>
  );
}
