// src/pages/AdminProjectDetail.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, BarChart3, X } from 'lucide-react';
import { useState } from 'react';

// Mock completo (em produção viria de API ou contexto global)
const mockProjects = [
  {
    id: '1',
    title: 'Jogo de Zungueira',
    description: 'Jogo mobile educativo inspirado na cultura das zungueiras em Angola. O jogador coleta produtos, gerencia vendas e supera desafios diários. Desenvolvido com React Native, Expo, animações Lottie e integração com Firebase para leaderboard.',
    progress: 50,
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', // substitua por imagens reais
      'https://images.unsplash.com/photo-1512941670853-6c3e78d5c3e9?w=800&q=80',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    ],
    lastUpdate: '2025-12-20',
    student: {
      name: 'Francisco Afonso',
      email: 'francisco@example.com',
      avatarLetters: 'FA',
    },
  },
  {
    id: '2',
    title: 'App de Gestão de Tarefas',
    description: 'Aplicação web full-stack para gerenciamento avançado de tarefas. Recursos: drag & drop, categorias, notificações push, sincronização em tempo real com Supabase, modo dark/light e dashboard analítico.',
    progress: 85,
    images: [
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
    ],
    lastUpdate: '2025-12-18',
    student: {
      name: 'Francisco Afonso',
      email: 'francisco@example.com',
      avatarLetters: 'FA',
    },
  },
  // ... outros projetos
];

export default function AdminProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = mockProjects.find(p => p.id === projectId);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <p className="text-white/70 text-xl">Projeto não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-5">
          <button
            onClick={() => navigate('/admin')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Detalhes do Projeto
          </h1>
        </div>
      </header>

      <div className="pt-24 pb-12" />

      <main className="max-w-6xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Cabeçalho do Projeto */}
          <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 px-8 py-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {project.title}
            </h2>

            {/* Info do Aluno */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {project.student.avatarLetters}
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{project.student.name}</p>
                <p className="text-white/70 text-sm">{project.student.email}</p>
              </div>
            </div>

            {/* Progresso e Data */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <BarChart3 size={24} className="text-indigo-300" />
                <div>
                  <p className="text-white/70 text-sm">Progresso Atual</p>
                  <p className="text-3xl font-bold text-white">{project.progress}%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={24} className="text-indigo-300" />
                <div>
                  <p className="text-white/70 text-sm">Última Atualização</p>
                  <p className="text-white font-medium">
                    {new Date(project.lastUpdate).toLocaleDateString('pt-AO', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="px-8 py-10 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Descrição do Projeto</h3>
            <p className="text-white/80 text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Galeria de Imagens */}
          {project.images.length > 0 && (
            <div className="px-8 py-10 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Capturas de Tela</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Captura ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold text-lg">Ver em tela cheia</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.images.length === 0 && (
            <div className="px-8 py-16 text-center border-t border-white/10">
              <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-3xl w-32 h-32 mx-auto mb-6" />
              <p className="text-white/60 text-lg">Este projeto ainda não possui capturas de tela</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox simples para imagem selecionada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Ampliada"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}