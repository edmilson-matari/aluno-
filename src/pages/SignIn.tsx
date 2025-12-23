// src/pages/SignIn.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Logo from '../components/Logo';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Login dados:', data);
    // Simulação de chamada à API
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Login realizado com sucesso! Bem-vindo de volta.');
    // Aqui você redireciona para o dashboard: router.push('/dashboard')
  };

  return (
    <div className="min-h-screen bg-gradient-custom flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-card w-full max-w-md p-8 md:p-10">
        {/* Título */}
        <div>

        <Logo/>
        </div>
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
          Sign in
        </h1>
        
        <p className="text-center text-muted mb-8">
          Welcome back! Please login to your account
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
              } rounded-md focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition`}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
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
                } rounded-md focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition`}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Lembrar-me + Esqueceu senha */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
                {...register('remember')}
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-sm text-primary font-medium hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-400 hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed
                       text-white font-semibold uppercase tracking-wider py-4 rounded-pill
                       shadow-lg hover:shadow-2xl transition-all duration-300
                       transform hover:-translate-y-1 active:translate-y-0
                       focus:outline-none focus:ring-4 focus:ring-primary/40
                       flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        {/* Link para Sign Up */}
        <p className="text-center text-sm text-text-muted mt-8">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}