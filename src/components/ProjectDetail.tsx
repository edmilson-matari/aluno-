// src/components/projects/ProjectDetailsModal.tsx
// Modal de detalhes do projeto - fiel à imagem fornecida, adaptado para Aluno+
// Responsivo: full screen em mobile, centered em desktop, com animações suaves (framer-motion)
// Carrega dados do projeto clicado, tabs placeholder, descrição, progress, nota, datas, prioridade
// Sem membros/professores - substituído por imagem do projeto

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Users, FileText, BarChart2, MessageSquare } from 'lucide-react';

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

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;
  const tabs = [
    { icon: FileText, label: 'Visão Geral' },
    { icon: Users, label: 'Tarefas' },
    { icon: MessageSquare, label: 'Equipe' },
    { icon: BarChart2, label: 'Discussões' },
    { icon: BarChart2, label: 'Analytics' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {/* Header do modal */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 rounded-full bg-green-500" />
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              {project.isFavorite && <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Stats principais */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border-b border-gray-100">
            <div>
              <p className="text-sm font-medium text-gray-600">Progresso</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: `${project.progress}%` }} />
                </div>
                <span className="text-sm font-bold text-gray-900">{project.progress}%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{project.tasks} tarefas ({Math.round((project.tasks * project.progress) / 100)} concluídas)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Nota Máxima</p>
              <p className="text-sm font-bold text-gray-900">{project.notaMaxima}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600">Datas</p>
              <p className="text-sm font-bold text-gray-900">Início: {project.startDate}</p>
              <p className="text-sm font-bold text-gray-900">Prazo: {project.deadline}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button key={i} className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-300">
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Conteúdo do tab (Overview placeholder) */}
          <div className="p-6 flex-1 overflow-y-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Descrição do Projeto</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
            {/* Placeholder para outros tabs */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;