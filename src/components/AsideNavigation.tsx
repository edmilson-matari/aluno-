
import { useState } from 'react';
import {
  Home,
  FolderOpen,
  CheckSquare,
  Calendar,
  Users,
  Bell,
  Search,
  ChevronLeft,
  LayoutDashboard, // Usado como fallback para Kanban
} from 'lucide-react';

// Se preferir instalar @heroicons/react v2 outline:
// npm install @heroicons/react
// E descomente as linhas abaixo substituindo os de lucide:
// import {
//   HomeIcon,
//   DocumentIcon,
//   CheckCircleIcon,
//   CalendarIcon,
//   UserGroupIcon,
//   BellIcon,
//   MagnifyingGlassIcon,
//   ChevronLeftIcon,
// } from '@heroicons/react/24/outline';

const AsideNavigation = () => {
  const [expandido, setExpandido] = useState(true);
  const [menuAtivo, setMenuAtivo] = useState('home');

  const itensMenu = [
    { id: 'home', label: 'Home', icone: Home, notificacoes: 0 },
    { id: 'projects', label: 'Projetos', icone: FolderOpen, notificacoes: 0 },
    { id: 'my-tasks', label: 'Minhas Tarefas', icone: CheckSquare, notificacoes: 3 },
    { 
      id: 'kanban', 
      label: 'Kanban desks', 
      icone: LayoutDashboard, // Lucide tem um bom ícone de dashboard/kanban
      notificacoes: 0 
    },
    { id: 'calendar', label: 'Calendário', icone: Calendar, notificacoes: 0 },
    { id: 'contacts', label: 'Contatos', icone: Users, notificacoes: 0 },
    { id: 'notifications', label: 'Notificações', icone: Bell, notificacoes: 12 },
    { id: 'search', label: 'Pesquisar', icone: Search, notificacoes: 0 },
  ];

  const projetosRecentes = [
    { id: 1, nome: 'Figma Design System', cor: 'purple', status: 'Progress' },
    { id: 2, nome: 'Keep React', cor: 'blue', status: 'Planning' },
  ];

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 shadow-lg
        transition-all duration-300 ease-in-out
        ${expandido ? 'w-72' : 'w-20'}
        lg:relative lg:translate-x-0
      `}
    >
      {/* Header com logo */}
      <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md">
            <span className="text-xl font-bold text-white">T</span>
          </div>
          {expandido && (
            <span className="text-xl font-semibold text-gray-900">Taskora</span>
          )}
        </div>

        {/* Botão de recolher (apenas desktop) */}
        <button
          onClick={() => setExpandido(!expandido)}
          className="hidden p-2 rounded-lg lg:block hover:bg-gray-100 text-gray-500 transition-colors"
          aria-label={expandido ? 'Recolher menu' : 'Expandir menu'}
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform ${!expandido ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Navegação principal */}
      <nav className="px-4 py-4 space-y-1">
        {itensMenu.map((item) => {
          const Icone = item.icone;
          const ativo = menuAtivo === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setMenuAtivo(item.id)}
              className={`
                w-full flex items-center px-4 py-3 rounded-2xl transition-all duration-200 group
                ${ativo
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }
                ${!expandido && 'justify-center'}
              `}
            >
              <Icone
                className={`w-6 h-6 flex-shrink-0 ${
                  ativo ? 'text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />

              {expandido && (
                <span className="ml-4 font-medium">{item.label}</span>
              )}

              {item.notificacoes > 0 && expandido && (
                <span className="ml-auto px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                  {item.notificacoes > 99 ? '99+' : item.notificacoes}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Seção de projetos recentes - só aparece quando expandido */}
      {expandido && (
        <section className="px-6 mt-8 border-t border-gray-100 pt-6">
          <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
            Latest Projects
          </h3>

          <div className="space-y-3">
            {projetosRecentes.map((projeto) => (
              <button
                key={projeto.id}
                className="flex items-center w-full px-4 py-3 space-x-3 text-left rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-purple-300 transition-all duration-200"
              >
                <div
                  className={`w-2 h-2 rounded-full bg-${projeto.cor}-500 shadow-md`}
                  style={{
                    boxShadow: `0 0 10px ${
                      projeto.cor === 'purple' ? '#a855f7' : '#3b82f6'
                    }`,
                  }}
                />
                <span className="flex-1 text-sm font-medium text-gray-900">
                  {projeto.nome}
                </span>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    projeto.status === 'Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {projeto.status.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
};

export default AsideNavigation;