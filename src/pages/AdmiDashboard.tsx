// src/pages/AdminDashboard.tsx
import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, User, BarChart3, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data para admin (em produção viria de API)
const mockAlunos = [
  {
    id: '1',
    name: 'Francisco Afonso',
    email: 'francisco@example.com',
    joinedDate: '2025-10-15',
    projects: [
      { id: '1', title: 'Jogo de Zungueira', progress: 50, lastUpdate: '2025-12-20' },
      { id: '2', title: 'App de Gestão de Tarefas', progress: 85, lastUpdate: '2025-12-18' },
    ],
    averageProgress: 68,
  },
  {
    id: '2',
    name: 'Maria Silva',
    email: 'maria@example.com',
    joinedDate: '2025-11-01',
    projects: [
      { id: '3', title: 'Site Portfolio Pessoal', progress: 100, lastUpdate: '2025-12-10' },
    ],
    averageProgress: 100,
  },
  {
    id: '3',
    name: 'João Mendes',
    email: 'joao@example.com',
    joinedDate: '2025-12-01',
    projects: [],
    averageProgress: 0,
  },
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAluno, setExpandedAluno] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredAlunos = mockAlunos.filter(aluno =>
    aluno.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aluno.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedAluno(expandedAluno === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Admin */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Admin <span className="text-indigo-400">Aluno+</span>
            </h1>
            <p className="text-white/70 hidden sm:block">Gestão de alunos e projetos • FFNEOCOMMERCE</p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-5 py-3 bg-indigo-600/30 hover:bg-indigo-600/50 rounded-2xl text-white font-medium transition"
          >
            Voltar ao Dashboard
          </button>
        </div>
      </header>

      <div className="pt-24 pb-12" />

      <main className="max-w-7xl mx-auto px-6">
        {/* Título e Busca */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Gestão de Alunos
          </h2>

          {/* Barra de busca */}
          <div className="relative max-w-md">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
            <input
              type="text"
              placeholder="Buscar por nome ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20 transition"
            />
          </div>
        </div>

        {/* Lista de Alunos */}
        <div className="space-y-6">
          {filteredAlunos.map((aluno) => (
            <div
              key={aluno.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-indigo-400/50 hover:shadow-indigo-500/20"
            >
              {/* Cabeçalho do Aluno - Clique para expandir */}
              <button
                onClick={() => toggleExpand(aluno.id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {aluno.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{aluno.name}</h3>
                    <p className="text-white/60 text-sm">{aluno.email}</p>
                    <p className="text-white/50 text-xs mt-1 flex items-center gap-2">
                      <Calendar size={14} />
                      Entrou em {new Date(aluno.joinedDate).toLocaleDateString('pt-AO')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right hidden sm:block">
                    <p className="text-white/60 text-sm">Progresso Médio</p>
                    <p className="text-2xl font-bold text-indigo-400">{aluno.averageProgress}%</p>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    {expandedAluno === aluno.id ? (
                      <ChevronUp size={24} className="text-white" />
                    ) : (
                      <ChevronDown size={24} className="text-white/70" />
                    )}
                  </div>
                </div>
              </button>

              {/* Painel expansível com projetos */}
              {expandedAluno === aluno.id && (
                <div className="px-8 pb-8 border-t border-white/10">
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                      <BarChart3 size={20} />
                      Projetos ({aluno.projects.length})
                    </h4>

                    {aluno.projects.length > 0 ? (
                      <div className="space-y-4">
                        {aluno.projects.map((proj) => (
                          <div
                            key={proj.id}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-indigo-400/50 transition cursor-pointer"
                            onClick={() => navigate(`/admin/project/${proj.id}`)} // ← NAVEGA AQUI
                            >
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="text-white font-semibold">{proj.title}</h5>
                                <p className="text-white/50 text-sm mt-1">
                                  Última atualização: {new Date(proj.lastUpdate).toLocaleDateString('pt-AO')}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-indigo-400">{proj.progress}%</p>
                                <div className="w-32 bg-white/20 rounded-full h-3 mt-2 overflow-hidden">
                                  <div
                                    className="bg-indigo-500 h-full rounded-full transition-all duration-700"
                                    style={{ width: `${proj.progress}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white/50 italic text-center py-8">
                        Este aluno ainda não cadastrou projetos.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredAlunos.length === 0 && (
          <div className="text-center py-20">
            <User size={64} className="text-white/30 mx-auto mb-6" />
            <p className="text-white/60 text-xl">Nenhum aluno encontrado</p>
          </div>
        )}
      </main>
    </div>
  );
}