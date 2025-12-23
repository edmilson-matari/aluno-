// src/pages/SignIn.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import clsx from 'clsx';
import googleLogo from "../img/logos/google-icon-logo-svgrepo-com.svg";
import appleLogo from "../img/logos/apple-logo-svgrepo-com.svg";

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    login('Usuário'); // Nome genérico ou viria do backend
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden flex items-center justify-center">
      {/* Imagem de fundo (desktop: esquerda, mobile: backdrop) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Paisagem inspiradora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent lg:from-gray-950/70 lg:via-transparent" />
      </div>

      {/* Container principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12 lg:py-0">
          {/* Esquerda: Logo + Texto inspirador */}
          <div className="text-center lg:text-left space-y-8 lg:space-y-12">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-extrabold text-2xl sm:text-3xl">A+</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                Aluno<span className="text-purple-400">+</span>
              </h1>
            </div>

            <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Bem-vindo<br />
                de volta
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Continue desenvolvendo projetos reais com mentoria da Afriknew.
              </p>
            </div>
          </div>

          {/* Direita: Card do formulário de Login - Compacto */}
          <div className="w-full lg:w-auto max-w-md mx-auto lg:mx-0">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              {/* Back to website */}
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Voltar ao site
              </button>

              {/* Título */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Entrar na conta
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Não tem conta?{' '}
                <button
                  onClick={() => navigate('/signup')}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition underline"
                >
                  Criar conta
                </button>
              </p>

              {/* Formulário de Login */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email"
                    className={clsx(
                      "w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/30 transition",
                      errors.email && "border-red-500/70 focus:border-red-500"
                    )}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="relative">
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Palavra-passe"
                    className={clsx(
                      "w-full px-4 pr-12 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/30 transition",
                      errors.password && "border-red-500/70 focus:border-red-500"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                </div>

                {/* Lembrar-me + Esqueceu senha */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-300">
                    <input
                      type="checkbox"
                      {...register('remember')}
                      className="w-4 h-4 bg-white/10 border border-gray-600 rounded text-purple-600 focus:ring-purple-600"
                    />
                    <span>Lembrar-me</span>
                  </label>
                  <a href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 font-medium transition">
                    Esqueceu a palavra-passe?
                  </a>
                </div>

                {/* Botão Entrar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 sm:py-4 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Entrando...
                    </>
                  ) : (
                    'Entrar'
                  )}
                </button>
              </form>

              {/* Login social */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-center text-gray-400 text-xs mb-4">Ou entre com</p>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-gray-600 rounded-xl hover:bg-white/10 transition text-sm">
                    <img src={googleLogo} alt="Google" className="w-5 h-5" />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-gray-600 rounded-xl hover:bg-white/10 transition text-sm">
                    <img src={appleLogo} alt="Apple" className="w-5 h-5" />
                    Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}