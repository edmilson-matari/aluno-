
import { Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b border-gray-200 shadow-sm lg:left-72 lg:w-[calc(100%-288px)] transition-all duration-300">
      <div className="flex items-center justify-between h-full px-6 lg:px-8">
        {/* Título da página */}
        <h1 className="text-2xl font-semibold text-gray-900">Home</h1>

        {/* Ações da direita */}
        <div className="flex items-center space-x-4">
          {/* Botão New Project */}
          <button
            className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">New Project</span>
          </button>

          {/* Avatar do usuário */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-100 hover:ring-blue-300 transition-all duration-200"
            aria-label="Perfil do usuário"
          >
            <img
              src="https://via.placeholder.com/40" // Substitua pela URL real do avatar ou use componente de avatar
              alt="Avatar do usuário"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;