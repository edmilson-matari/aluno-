// src/pages/ProjectForm.tsx
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';

// Mock data (em produção viria de API ou contexto global)
const mockProjects = [
  {
    id: '1',
    title: 'Jogo de Zungueira',
    description: 'Jogo mobile educativo sobre a cultura das zungueiras em Angola. Desenvolvido com React Native, Expo e animações Lottie. Inclui mecânicas de coleta, vendas e níveis progressivos.',
    progress: 50,
    images: [], // pode ter base64 ou URLs reais
  },
  {
    id: '2',
    title: 'App de Gestão de Tarefas',
    description: 'Aplicação web full-stack com Next.js, Tailwind e Supabase. Funcionalidades: drag & drop, notificações push, sincronização em tempo real e modo dark.',
    progress: 85,
    images: [],
  },
];

const schema = z.object({
  title: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
  description: z.string().min(20, 'Descrição deve ter pelo menos 20 caracteres'),
});

type FormData = z.infer<typeof schema>;

export default function EditProject() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Carrega os dados do projeto quando em modo edição
  useEffect(() => {
    if (isEditMode && id) {
      const project = mockProjects.find(p => p.id === id);
      if (project) {
        setProgress(project.progress);
        setImages(project.images);
        reset({
          title: project.title,
          description: project.description,
        });
      } else {
        // Projeto não encontrado
        navigate('/dashboard');
      }
    } else {
      // Modo criação
      setProgress(0);
      setImages([]);
      reset({ title: '', description: '' });
    }
  }, [id, isEditMode, reset, navigate]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulação de salvamento (criação ou atualização)
    const savedProject = {
      id: isEditMode ? id : Date.now().toString(),
      ...data,
      progress,
      images,
    };

    console.log(isEditMode ? 'Projeto atualizado:' : 'Novo projeto criado:', savedProject);

    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    // Volta ao dashboard com sucesso
    navigate('/dashboard');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white">
            {isEditMode ? 'Editar Projeto' : 'Novo Projeto'}
          </h1>
        </div>
      </header>

      <div className="pt-24" />

      <main className="max-w-3xl mx-auto px-6 py-8 pb-32">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Título */}
            <div className="space-y-3">
              <label className="text-lg font-semibold text-white">Título do Projeto</label>
              <input
                type="text"
                placeholder="Ex: Jogo de Zungueira"
                className={`w-full px-5 py-4 bg-white/10 border ${
                  errors.title ? 'border-red-500/70' : 'border-white/20'
                } rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20 transition`}
                {...register('title')}
              />
              {errors.title && <p className="text-sm text-red-400">{errors.title.message}</p>}
            </div>

            {/* Descrição */}
            <div className="space-y-3">
              <label className="text-lg font-semibold text-white">Descrição do Projeto</label>
              <textarea
                rows={6}
                placeholder="Descreva o objetivo, tecnologias usadas, desafios enfrentados e progresso atual..."
                className={`w-full px-5 py-4 bg-white/10 border ${
                  errors.description ? 'border-red-500/70' : 'border-white/20'
                } rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20 transition resize-none`}
                {...register('description')}
              />
              {errors.description && <p className="text-sm text-red-400">{errors.description.message}</p>}
            </div>

            {/* Progresso */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-lg font-semibold text-white">Progresso Atual</label>
                <span className="text-2xl font-bold text-indigo-400">{progress}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${progress}%, rgba(255,255,255,0.2) ${progress}%, rgba(255,255,255,0.2) 100%)`,
                }}
              />
            </div>

            {/* Upload de Imagens */}
            <div className="space-y-4">
              <label className="text-lg font-semibold text-white">
                Capturas de Tela (opcional)
              </label>

              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/30 rounded-3xl cursor-pointer hover:border-indigo-400/70 transition bg-white/5">
                <Upload size={48} className="text-white/50 mb-4" />
                <p className="text-white/70 text-center px-6">
                  Clique para fazer upload ou arraste imagens aqui
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((src, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={src}
                        alt={`Captura ${index + 1}`}
                        className="w-full h-48 object-cover rounded-2xl shadow-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 p-2 bg-red-600/80 rounded-full opacity-0 group-hover:opacity-100 transition"
                      >
                        <X size={18} className="text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex-1 py-4 border border-white/30 text-white font-semibold rounded-3xl hover:bg-white/10 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wider py-4 rounded-3xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Salvando...
                  </>
                ) : (
                  isEditMode ? 'Atualizar Projeto' : 'Criar Projeto'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}