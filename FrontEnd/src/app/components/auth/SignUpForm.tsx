import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';// seu componente toast, adapte conforme necessário
import { useRouter } from 'next/router';
import { useToast } from '@/hooks/use-toast';

// 1. Schema Zod — birthDate como string, com validação customizada
const signupSchema = z.object({
  firstName: z.string().min(1, 'O primeiro nome é obrigatório'),
  lastName: z.string().optional(),
  password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres'),
  phone: z.string().min(10, 'Telefone inválido'),
  email: z.string().email('E-mail inválido'),
  birthDate: z
    .string()
    .refine((date) => {
      const d = new Date(date);
      if (Number.isNaN(d.getTime())) return false;
      const today = new Date();
      let age = today.getFullYear() - d.getFullYear();
      const monthDiff = today.getMonth() - d.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d.getDate())) age--;
      return age >= 18;
    }, 'O cliente deve ter pelo menos 18 anos'),
  adress: z.string().min(1, 'Endereço obrigatório'),
  cpf: z.string().min(11, 'CPF inválido'),
});

type SignupFormRaw = z.infer<typeof signupSchema>;

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
   const { toast } = useToast();

  // 2. React Hook Form configurado com o schema e o tipo
  const form = useForm<SignupFormRaw>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
      email: '',
      birthDate: '',
      adress: '',
      cpf: '',
    },
  });

  // 3. onSubmit: converte birthDate string para Date antes de enviar
  const onSubmit: SubmitHandler<SignupFormRaw> = async (data) => {
    setIsLoading(true);

    try {
      const birthDateDate = new Date(data.birthDate);

      await axios.post(
        'http://localhost:8080/client',
        {
          name: `${data.firstName} ${data.lastName ?? ''}`.trim(),
          email: data.email,
          password: data.password,
          CPF: data.cpf,
          birthDate: birthDateDate,
          adress: data.adress,
          number: data.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );

      toast({ title: 'Cadastro OK', description: 'Bem-vindo(a)!' });
      router.reload();
    } catch (err: any) {
      const msg =
        err?.errors?.[0]?.message || err.response?.data?.message || 'Erro desconhecido';
      toast({ title: 'Falha no cadastro', description: msg, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input
        {...form.register('firstName')}
        placeholder="Primeiro nome"
      />
      {form.formState.errors.firstName && <p>{form.formState.errors.firstName.message}</p>}

      <input
        {...form.register('lastName')}
        placeholder="Último nome (opcional)"
      />
      {form.formState.errors.lastName && <p>{form.formState.errors.lastName.message}</p>}

      <input
        type="password"
        {...form.register('password')}
        placeholder="Senha"
      />
      {form.formState.errors.password && <p>{form.formState.errors.password.message}</p>}

      <input
        {...form.register('phone')}
        placeholder="Telefone"
      />
      {form.formState.errors.phone && <p>{form.formState.errors.phone.message}</p>}

      <input
        {...form.register('email')}
        placeholder="Email"
      />
      {form.formState.errors.email && <p>{form.formState.errors.email.message}</p>}

      <input
        type="date"
        {...form.register('birthDate')}
        placeholder="Data de nascimento"
      />
      {form.formState.errors.birthDate && <p>{form.formState.errors.birthDate.message}</p>}

      <input
        {...form.register('adress')}
        placeholder="Endereço"
      />
      {form.formState.errors.adress && <p>{form.formState.errors.adress.message}</p>}

      <input
        {...form.register('cpf')}
        placeholder="CPF"
      />
      {form.formState.errors.cpf && <p>{form.formState.errors.cpf.message}</p>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Cadastrar'}
      </button>
    </form>
  );
}
