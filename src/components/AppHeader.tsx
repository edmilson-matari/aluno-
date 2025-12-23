// src/components/AppHeader.tsx
import { BarChart3, LogOut, Shield } from 'lucide-react'; // ← Adicionado Shield
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export default function AppHeader() {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();

  // Simulação: em produção, isso viria do backend/user role
  const isAdmin = true; // Mude para false ou use contexto real: const { isAdmin } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/signin', { replace: true });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left: Avatar + Saudação */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl shadow-2xl ring-4 ring-white/10">
                {userName.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full ring-4 ring-black/50"></div>
            </div>

            <div className="animate-fadeIn">
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">
                Olá, <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">{userName.split(' ')[0]}!</span>
              </h1>
              <p className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
                Continue construindo seu futuro com determinação 🚀
              </p>
            </div>
          </div>

          {/* Right: Ações */}
          <div className="flex items-center gap-3">
            {/* Botão de Estatísticas */}
            <button
              className="p-3 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
              aria-label="Ver estatísticas"
            >
              <BarChart3 
                className={clsx(
                  "text-indigo-300",
                  "w-2 h-2 sm:w-4 sm:h-4"
                )} 
              />
            </button>

            {/* Botão Admin - só aparece se for admin */}
            {isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="p-3 sm:p-4 rounded-2xl bg-indigo-600/30 hover:bg-indigo-600/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/40"
                aria-label="Painel Administrativo"
              >
                <Shield 
                  className={clsx(
                    "text-indigo-300",
                    "w-2 h-2 sm:w-4 sm:h-4"
                  )} 
                />
              </button>
            )}

            {/* Botão de Logout */}
            <button
              onClick={handleLogout}
              className="p-3 sm:p-4 rounded-2xl bg-red-600/20 hover:bg-red-600/40 backdrop-blur-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-500/30"
              aria-label="Sair da conta"
            >
              <LogOut 
                className={clsx(
                  "text-red-400",
                  "w-2 h-2 sm:w-4 sm:h-4"
                )} 
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}