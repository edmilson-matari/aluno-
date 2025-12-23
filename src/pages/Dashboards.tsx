// src/pages/Dashboard.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Calendar, Trophy, BarChart3 } from 'lucide-react';
import AppFooter from '../components/Footer';
import AppHeader from '../components/AppHeader';

interface Project {
  id: number;
  title: string;
  description: string;
  progress: number;
  lastUpdate: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Jogo de Zungueira',
    description: 'Jogo mobile educativo sobre a cultura das zungueiras em Angola, com mecânicas de coleta e vendas.',
    progress: 50,
    lastUpdate: '2025-12-20',
  },
  {
    id: 2,
    title: 'App de Gestão de Tarefas',
    description: 'Aplicação web para gerenciamento de tarefas diárias com notificações e sincronização.',
    progress: 85,
    lastUpdate: '2025-12-18',
  },
];

export default function Dashboard() {
  const [projects] = useState<Project[]>(mockProjects);
  const userName = 'Francisco Afonso';
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header com glassmorphism */}
      <AppHeader/>

      {/* Espaço para header fixo */}
      <div className="pt-24" />

      {/* Conteúdo principal */}
      <main className="max-w-4xl mx-auto px-6 py-8 pb-32">
        {/* Card de Progresso Geral */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-10 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Seu Progresso Geral</h2>
            <Trophy className="text-indigo-400 drop-shadow-lg" size={36} />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span className="text-white/80">Média de conclusão</span>
              <span className="font-bold text-white">68%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-5 overflow-hidden">
              <div
                className="bg-indigo-500 h-full rounded-full transition-all duration-1000 shadow-lg"
                style={{ width: '68%' }}
              />
            </div>
            <p className="text-white/70 text-center mt-4">
              Você está no caminho certo! Continue atualizando seus projetos.
            </p>
          </div>
        </div>

        {/* Botão Adicionar Projeto */}
        <button onClick={() => {navigate('/project/novo')}} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-wider py-6 rounded-3xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-4 mb-12 text-lg">
          <Plus size={32} />
          Adicionar ou Atualizar Projeto
        </button>

        {/* Listagem de Projetos */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
            Meus Projetos
          </h2>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:border-indigo-400/50 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/60 text-sm mt-2 flex items-center gap-2">
                      <Calendar size={18} />
                      Última atualização: {new Date(project.lastUpdate).toLocaleDateString('pt-AO')}
                    </p>
                  </div>
                  <button onClick={() => {navigate(`/project/edit/${project.id}`)}} className="p-4 bg-indigo-600/30 rounded-2xl hover:bg-indigo-600/50 transition">
                    <Edit2 size={24} className="text-indigo-300" />
                  </button>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span className="text-white/80">Progresso</span>
                    <span className="font-bold text-indigo-400 drop-shadow">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full rounded-full transition-all duration-1000 shadow-md"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-3xl w-40 h-40 mx-auto mb-8" />
              <p className="text-white text-2xl font-bold drop-shadow-lg">
                Ainda não tens projetos cadastrados.
              </p>
              <p className="text-white/70 text-lg mt-4">
                Começa agora adicionando o teu primeiro projeto!
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Botão flutuante mobile */}
      <button className="fixed bottom-8 right-6 bg-indigo-600 text-white p-6 rounded-full shadow-2xl hover:shadow-indigo-500/70 hover:scale-110 transition-all z-20 md:hidden">
        <Plus size={36} />
      </button>
      <footer>
        <AppFooter/>
      </footer>
    </div>
  );
}