
import React from "react";
import { Calendar, MoreHorizontal, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  deadline: string;
  progress: number;
  status: "In Progress" | "Planning";
  isFavorite?: boolean;
  tasks: number;
  activities: number;
  members: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  deadline,
  progress,
  status,
  isFavorite = false,
  tasks,
  activities,
}) => {
  const statusColor =
    status === "In Progress"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-blue-100 text-blue-800";
  const progressColor =
    status === "In Progress" ? "bg-yellow-500" : "bg-blue-500";
  const titleAccentColor =
    status === "In Progress" ? "bg-yellow-500" : "bg-blue-500";

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 p-6 md:p-8 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div
              className={`w-1.5 h-10 rounded-full ${titleAccentColor} flex-shrink-0`}
            />
            <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center flex-wrap gap-2">
              {title}
              {isFavorite && (
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 flex-shrink-0" />
              )}
            </h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${statusColor}`}
        >
          {status === "In Progress" ? "Em Andamento" : "Planejamento"}
        </span>
      </div>

      {/* Deadline */}
      <div className="flex items-center justify-between text-slate-600 text-sm mb-6">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>Prazo: {deadline}</span>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
          <MoreHorizontal className="w-5 h-5 text-slate-500" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">Progresso</span>
          <span className="text-sm font-semibold text-slate-900">
            {progress}%
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full ${progressColor} rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
        

        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <div className="flex items-center">
            <span className="mr-2">📄</span>
            <span>{tasks} tarefas</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">💬</span>
            <span>{activities} atividades</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectOverview: React.FC = () => {
  const projects = [
    {
      title: "Figma Design System",
      description: "UI component library for design system",
      deadline: "15 Nov, 2023",
      progress: 65,
      status: "In Progress" as const,
      isFavorite: true,
      tasks: 24,
      activities: 128,
      members: [
        "https://via.placeholder.com/40?text=A1",
        "https://via.placeholder.com/40?text=A2",
        "https://via.placeholder.com/40?text=A3",
        "https://via.placeholder.com/40?text=A4",
        "https://via.placeholder.com/40?text=A5",
      ],
    },
    {
      title: "Keep React",
      description: "React component library development",
      deadline: "5 Dez, 2023",
      progress: 25,
      status: "Planning" as const,
      isFavorite: false,
      tasks: 18,
      activities: 86,
      members: [
        "https://via.placeholder.com/40?text=B1",
        "https://via.placeholder.com/40?text=B2",
        "https://via.placeholder.com/40?text=B3",
      ],
    },
  ];

  return (
    <section className="mt-16 lg:mt-20">
      {/* Header da seção - responsivo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 lg:mb-10">
        <h2 className="text-2xl md:text-3xl text-slate-900">
          Visão geral do projeto
        </h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2.5 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors whitespace-nowrap">
            <span className="text-slate-700 font-medium">Filtro</span>
            <span className="text-slate-500 text-lg leading-none">▼</span>
          </button>
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors whitespace-nowrap">
            Ver todos
          </button>
        </div>
      </div>

      {/* Grid responsivo corrigido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;
