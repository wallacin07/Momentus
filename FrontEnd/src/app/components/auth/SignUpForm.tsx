import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader, Eye, EyeOff } from 'lucide-react';
import axios from 'axios'

import { useRouter } from 'next/navigation';


// 1) Schema Zod: espera um string ISO-date, transforma em Date e aplica validações
const signupSchema = z
  .object({
    name: z.string().min(3, { message: 'O nome precisa ter pelo menos 3 caracteres' }),
    CNPJ: z.string().min(14, { message: 'Insira o CNPJ correto' }),
    email: z.string().email({ message: 'E-mail inválido' }),
    birthDate: z
      .preprocess(
        (val) =>
          typeof val === 'string' && val.length > 0
            ? new Date(val)
            : new Date(), // se vier vazio, usa agora
        z.date()
      ),
    adress: z.string(),
    password: z.string().min(6, { message: 'A senha precisa ter pelo menos 6 caracteres' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

// Tipo de saída do Zod (já com birthDate: Date)
type SignupData = z.infer<typeof signupSchema>;

// Tipo “raw” do formulário (tudo string/boolean)
type SignupFormRaw = Omit<SignupData, 'birthDate'> & { birthDate: string };

interface SignupFormProps {
  onToggle: () => void;
}

export default function SignupForm({ onToggle }: SignupFormProps) {

  const Router = useRouter()
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // 2) useForm usa o raw type, com birthDate: string
  const form = useForm<SignupFormRaw>({
    defaultValues: {
      name: '',
      CNPJ: '',
      email: '',
      // já puxa a data de hoje em YYYY-MM-DD
      birthDate: new Date().toISOString().substring(0, 10),
      adress: '',
      password: '',
      confirmPassword: '',
    },
  });

  // Handler: converte raw → zod→ typed, depois faz o submit
  const onSubmit: SubmitHandler<SignupFormRaw> = async (raw) => {
    setIsLoading(true);
    try {
      // 3) aqui a mágica do Zod: transforma birthDate string→Date, valida tudo
      const data = signupSchema.parse(raw) as SignupData;

      await axios
      .post('http://localhost:8080/ceremonialist', data)
      .then((response) => {
        // response: objeto completo retornado pelo Axios
        console.log('Status HTTP:', response.status);        // e.g. 201
        console.log('Headers:', response.headers);
        console.log('Body da resposta:', response.data);  

        Router.refresh()
           // o que o seu back enviou
      })
      .catch((error) => {
        if (error.response) {
          // Servidor respondeu com código de erro (4xx, 5xx)
          console.error('Erro no servidor:', error.response.status, error.response.data);
        } else if (error.request) {
          // Pedido foi enviado mas não houve resposta
          console.error('Nenhuma resposta recebida:', error.request);
        } else {
          // Algum outro erro aconteceu montando o pedido
          console.error('Erro ao montar requisição:', error.message);
        }
      });
    

      // simula API
      await new Promise((r) => setTimeout(r, 1500));
      console.log('Signup:', data);
      toast({ title: 'Cadastro OK', description: 'Bem-vindo(a)!' });
    } catch (err: any) {
      // mostra primeira mensagem de erro, se for do Zod
      const msg = err?.errors?.[0]?.message ?? 'Erro desconhecido';
      toast({ title: 'Falha no cadastro', description: msg, variant: 'destructive' });
    } finally {
      setIsLoading(false);
      Router.refresh()
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-playfair font-semibold">Crie sua conta</h1>
        <p className="text-sm text-muted-foreground">Preencha para começar</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/** Nome, CNPJ, E-mail igual ao seu antes… **/}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="CNPJ"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNPJ</FormLabel>
                <FormControl>
                  <Input placeholder="00.000.000/0000-00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />



          {/** Date input puro, com valor inicial hoje **/}
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de Nascimento</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    // value e onChange já vêm no formato string YYYY-MM-DD
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="adress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Rua dos sonhos 133, Parana - Brasil" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          

          {/** Senha / Confirm **/}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                      placeholder="••••••"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-2.5"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />


          
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar senha</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showConfirm ? 'text' : 'password'}
                      {...field}
                      placeholder="••••••"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3 top-2.5"
                    tabIndex={-1}
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" /> Criando conta…
              </>
            ) : (
              'Criar conta'
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Já tem conta?{' '}
            <button type="button" onClick={onToggle} className="text-primary">
              Faça login
            </button>
          </p>
        </form>
      </Form>
    </div>
  );
}
