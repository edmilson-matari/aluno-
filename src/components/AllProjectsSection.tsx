
import React, { useState } from 'react';
import { Search, Calendar, MoreHorizontal, Grid3X3, List, Star } from 'lucide-react';
import ProjectDetailsModal from './ProjectDetail';

interface Project {
  id: number;
  title: string;
  description: string;
  deadline: string;
  progress: number;
  status: 'Em Andamento' | 'Planejamento';
  isFavorite: boolean;
  tasks: number;
  activities: number;
  projectImage: string;
  notaMaxima: string;
  startDate: string;
  priority: 'Alta' | 'Média' | 'Baixa';
}

const mockProjects: Project[] = [
  // (mesmos dados que você já tinha - mantidos)
  {
    id: 1,
    title: 'Figma Design System',
    description: 'Biblioteca de componentes UI para sistema de design acadêmico',
    deadline: '15 Nov, 2025',
    progress: 65,
    status: 'Em Andamento',
    isFavorite: true,
    tasks: 24,
    activities: 128,
    projectImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    notaMaxima: '10,0',
    startDate: '01 Out, 2025',
    priority: 'Alta',
  },
  {
    id: 2,
    title: 'Keep React',
    description: 'Desenvolvimento de biblioteca de componentes React frontend',
    deadline: '5 Dez, 2025',
    progress: 25,
    status: 'Planejamento',
    isFavorite: false,
    tasks: 18,
    activities: 86,
    projectImage: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    notaMaxima: '10,0',
    startDate: '15 Out, 2025',
    priority: 'Média',
  },
  {
    id: 3,
    title: 'Banco de Dados Avançado',
    description: 'Modelagem NoSQL e implementação escalável para app acadêmico',
    deadline: '20 Dez, 2025',
    progress: 40,
    status: 'Em Andamento',
    isFavorite: true,
    tasks: 32,
    activities: 95,
    projectImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    notaMaxima: '10,0',
    startDate: '10 Set, 2025',
    priority: 'Alta',
  },
  {
    id: 4,
    title: 'App Mobile TCC',
    description: 'Desenvolvimento nativo React Native para trabalho final',
    deadline: '10 Jan, 2026',
    progress: 80,
    status: 'Em Andamento',
    isFavorite: false,
    tasks: 45,
    activities: 210,
    projectImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    notaMaxima: '10,0',
    startDate: '01 Ago, 2025',
    priority: 'Baixa',
  },
];

const ProjectCardSquare: React.FC<{ project: Project }> = ({ project }) => {
  const progressColor = project.status === 'Em Andamento' ? 'bg-yellow-500' : 'bg-blue-500';
  const statusBadgeColor = project.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800';
  const priorityColor = 
    project.priority === 'Alta' ? 'bg-red-100 text-red-800' :
    project.priority === 'Média' ? 'bg-orange-100 text-orange-800' :
    'bg-green-100 text-green-800';

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col overflow-hidden">
      {/* Imagem - fixa em 55% do card */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.projectImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-3 left-3 w-2 h-12 rounded-full ${progressColor}`} />
        {project.isFavorite && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-1.5 rounded-2xl shadow">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
        )}
        <span className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold ${statusBadgeColor}`}>
          {project.status}
        </span>
      </div>

      {/* Conteúdo - flex-1 para preencher o quadrado */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 text-base line-clamp-2 mb-2">{project.title}</h3>
        <div className="flex items-center text-xs text-slate-600 mb-3">
          <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
          <span className="truncate">Prazo: {project.deadline}</span>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium text-slate-700">Progresso</span>
            <span className="font-bold">{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1.5">
            <div className={`h-full ${progressColor} rounded-full transition-all duration-700`} style={{ width: `${project.progress}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
          <div className="flex items-center gap-1">
            <span>📄</span>
            <span>{project.tasks} tarefas</span>
          </div>
          <div className="flex items-center gap-1">
            <span>💬</span>
            <span>{project.activities} ativs.</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
          <div>
            <p className="text-slate-500 mb-0.5">Nota Máx.</p>
            <p className="font-bold text-lg text-slate-900">{project.notaMaxima}</p>
          </div>
          <div>
            <p className="text-slate-500 mb-0.5">Início</p>
            <p className="text-slate-800">{project.startDate}</p>
          </div>
          <div className="col-span-2">
            <p className="text-slate-500 mb-0.5">Prioridade</p>
            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${priorityColor}`}>
              {project.priority}
            </span>
          </div>
        </div>

        <button className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 rounded-xl font-medium text-xs text-slate-700 transition-colors flex items-center justify-center gap-1">
          <MoreHorizontal className="w-3.5 h-3.5" />
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

const AllProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="mt-12 lg:mt-20">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8 lg:mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Todos os Projetos</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar projetos..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-sm text-sm"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm">
              <span className="font-medium text-slate-700">Todos</span>
              <span className="text-slate-500">▼</span>
            </button>
            <div className="flex bg-slate-100 rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
              >
                <Grid3X3 className="w-4 h-4 text-slate-700" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
              >
                <List className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GRID QUADRADO RESPONSIVO - SEM OVERFLOW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
        {mockProjects.map((project) => (
          <button key={project.id} onClick={() => setSelectedProject(project)} className="text-left">
            <ProjectCardSquare project={project} />
          </button>
        ))}
      </div>

      {/* Modal */}
      <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default AllProjectsSection;