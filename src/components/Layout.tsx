// src/components/layout/Layout.tsx
// Layout completo do Taskora - Versão FINAL 100% funcional
// Sidebar fixo com scroll interno, header sincronizado, main com padding dinâmico
// Tema idêntico à landing page (purple/blue gradient, slate tones, sombras modernas)

import React, { useState } from "react";
import {
  Menu,
  Home,
  FolderOpen,
  Plus,
  ChevronLeft,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

// Dados mock
interface ProjetoRecente {
  id: number;
  nome: string;
  cor: "purple" | "blue";
  status: "Progress" | "Planning";
}

const projetosRecentes: ProjetoRecente[] = [
  { id: 1, nome: "Figma Design System", cor: "purple", status: "Progress" },
  { id: 2, nome: "Keep React", cor: "blue", status: "Planning" },
  { id: 3, nome: "Mobile App Redesign", cor: "purple", status: "Progress" },
  { id: 4, nome: "Dashboard Analytics", cor: "blue", status: "Planning" },
];

interface MenuItem {
  id: string;
  label: string;
  icone: React.ComponentType<{ className?: string }>;
  notificacoes: number;
  url: string;
}

const itensMenu: MenuItem[] = [
  { id: "home", label: "Home", icone: Home, notificacoes: 0, url: "/home" },
  {
    id: "projects",
    label: "Projetos",
    icone: FolderOpen,
    notificacoes: 0,
    url: "/project",
  },
  //s{ id: 'my-tasks', label: 'Minhas Tarefas', icone: CheckSquare, notificacoes: 3, url: '/home' },
  //{ id: 'kanban', label: 'Kanban desks', icone: LayoutDashboard, notificacoes: 0 },
  //{ id: 'calendar', label: 'Calendário', icone: Calendar, notificacoes: 0 },
  //{ id: 'contacts', label: 'Contatos', icone: Users, notificacoes: 0 },
  //{ id: 'notifications', label: 'Notificações', icone: Bell, notificacoes: 12 },
//   {
//     id: "search",
//     label: "Pesquisar",
//     icone: Search,
//     notificacoes: 0,
//     url: "/search",
//   },
];

interface AsideProps {
  isOpen: boolean;
  isExpanded: boolean;
  onClose: () => void;
  onToggleExpand: () => void;
  onSetActive: (id: string) => void;
  activeMenu: string;
}

const AsideNavigation: React.FC<AsideProps> = ({
  isOpen,
  isExpanded,
  onClose,
  onToggleExpand,
  onSetActive,
  activeMenu,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar fixo */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-50 bg-slate-50 border-r border-slate-200
          flex flex-col shadow-2xl
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          ${isExpanded ? "w-72" : "w-20"}
        `}
      >
        {/* Header do sidebar */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 flex-shrink-0">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">A+</span>
            </div>
            {isExpanded && (
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Aluno+
              </span>
            )}
          </div>

          <button
            onClick={onToggleExpand}
            className="hidden lg:block p-2.5 rounded-xl hover:bg-slate-200 text-slate-600 transition-all"
            aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
          >
            <ChevronLeft
              className={`w-5 h-5 transition-transform ${
                !isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Conteúdo com scroll interno */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-300">
          <div className="px-4 py-6">
            <nav className="space-y-2">
              {itensMenu.map((item) => {
                const Icone = item.icone;
                const ativo = activeMenu === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSetActive(item.id);
                      if (window.innerWidth < 1024) onClose();
                      navigate(item.url);
                    }}
                    className={`
                      w-full flex items-center px-5 py-3.5 rounded-2xl transition-all duration-200 group
                      ${
                        ativo
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }
                      ${!isExpanded && "justify-center px-4"}
                    `}
                  >
                    <Icone
                      className={`w-6 h-6 flex-shrink-0 ${
                        ativo
                          ? "text-white"
                          : "text-slate-600 group-hover:text-slate-900"
                      }`}
                    />
                    {isExpanded && (
                      <span className="ml-4 font-semibold text-base">
                        {item.label}
                      </span>
                    )}
                    {item.notificacoes > 0 && isExpanded && (
                      <span className="ml-auto px-2.5 py-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-md">
                        {item.notificacoes > 99 ? "99+" : item.notificacoes}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {isExpanded && (
              <section className="mt-10">
                <h3 className="mb-5 px-3 text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Projectos Recentes
                </h3>
                <div className="space-y-3">
                  {projetosRecentes.map((projeto) => (
                    <button
                      key={projeto.id}
                      className="w-full flex items-center px-5 py-4 space-x-4 text-left rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-${projeto.cor}-500 shadow-lg`}
                        style={{
                          boxShadow: `0 0 12px ${
                            projeto.cor === "purple" ? "#c084fc" : "#60a5fa"
                          }`,
                        }}
                      />
                      <span className="flex-1 font-medium text-slate-800">
                        {projeto.nome}
                      </span>
                      <span
                        className={`px-3 py-1.5 text-xs font-bold rounded-full ${
                          projeto.status === "Progress"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {projeto.status.toUpperCase()}
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

interface HeaderProps {
  onMenuToggle: () => void;
  sidebarExpanded: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, sidebarExpanded }) => {
  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm
        transition-all duration-300
        ${sidebarExpanded ? "lg:pl-72" : "lg:pl-20"}
      `}
    >
      <div className="flex items-center justify-between h-full px-6 lg:px-10">
        <div className="flex items-center space-x-6">
          <button
            onClick={onMenuToggle}
            className="p-3 rounded-xl lg:hidden hover:bg-slate-100 text-slate-700 transition-all"
            aria-label="Abrir menu lateral"
          >
            <Menu className="w-6 h-6" />
          </button>
          
        </div>

        <div className="flex items-center space-x-5">
          <button className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Novo Projecto</span>
          </button>

          <button
            className="w-11 h-11 rounded-2xl overflow-hidden ring-4 ring-purple-100 hover:ring-purple-200 transition-all duration-200 shadow-md"
            aria-label="Perfil do usuário"
          >
            <img
              src="https://via.placeholder.com/44"
              alt="Avatar do usuário"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

const Layout: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [sidebarExpandido, setSidebarExpandido] = useState(true);
  const [menuAtivo, setMenuAtivo] = useState("home");

  const toggleMenuMobile = () => setMenuAberto((prev) => !prev);
  const fecharMenuMobile = () => setMenuAberto(false);
  const toggleExpand = () => setSidebarExpandido((prev) => !prev);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
      <AsideNavigation
        isOpen={menuAberto}
        isExpanded={sidebarExpandido}
        onClose={fecharMenuMobile}
        onToggleExpand={toggleExpand}
        onSetActive={setMenuAtivo}
        activeMenu={menuAtivo}
      />

      <Header
        onMenuToggle={toggleMenuMobile}
        sidebarExpanded={sidebarExpandido}
      />

      {/* Main com padding esquerdo sincronizado com o sidebar */}
      <main
        className={`
          pt-16 min-h-screen transition-all duration-300
          ${sidebarExpandido ? "lg:pl-72" : "lg:pl-20"}
        `}
      >
        <div className="p-6 lg:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
