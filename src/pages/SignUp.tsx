// src/pages/SignUp.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  name: z.string().min(2, 'Nome muito curto'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  marketing: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Dados:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Cadastro realizado! Verifique seu e-mail.');
  };

  return (
    <div className="min-h-screen bg-gradient-custom flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-card w-full max-w-md p-8 md:p-10">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
          Sign up
        </h1>
        <p className="text-center text-muted mb-8">
          Create an account or{' '}
          <a href="/login" className="text-primary font-semibold hover:underline">
            Sign in
          </a>
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-primary transition`}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Nome/Username */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Username
            </label>
            <input
              id="name"
              type="text"
              placeholder="franciscoafonso"
              className={`w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-primary transition`}
              {...register('name')}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Senha com toggle */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full px-4 py-3 pr-12 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-primary transition`}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-900"
                aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
              {...register('marketing')}
            />
            <span className="text-sm text-text-muted">
              I do not want to receive emails with advertising, news, suggestions or marketing promotions
            </span>
          </label>

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-primary-hover text-white-700 font-semibold uppercase tracking-wide py-3.5 rounded-pill shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-500/30"
          >
            {isSubmitting ? 'Creating...' : 'Sign up'}
          </button>
        </form>

        {/* Termos */}
        <p className="text-center text-sm text-text-muted mt-8">
          By signing up to create an account, you are accepting our<br />
          <a href="#" className="text-primary underline hover:no-underline">terms of service</a> and{' '}
          <a href="#" className="text-primary underline hover:no-underline">privacy policy</a>
        </p>
      </div>
    </div>
  );
}