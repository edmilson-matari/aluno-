
import React, { useState } from 'react';
import { Upload} from 'lucide-react';

const CreateProjectPage: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [imageType, setImageType] = useState<'upload' | 'emoji'>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleCreate = () => {
    if (!projectName.trim()) return;
    // Aqui você faria a chamada à API ou adicionaria ao estado global
    console.log('Projeto criado:', {
      title: projectName,
      description: projectDescription,
      
      imageType,
    });
    // Redirecionar ou mostrar sucesso
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário esquerdo */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Criar Novo Projeto</h1>
              <p className="text-lg text-slate-600">Preencha os detalhes para criar um novo projeto.</p>
            </div>

            {/* Nome do projeto */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Nome do Projeto <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Ex: Figma Design System"
                className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-lg"
              />
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Descrição do Projeto
              </label>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Descreva o objetivo, escopo e detalhes do projeto..."
                rows={8}
                className="w-full px-5 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-base"
              />
              <p className="text-sm text-slate-500 mt-3">Opcional • Máximo 1000 caracteres</p>
            </div>

            {/* Botões de ação - mobile */}
            <div className="lg:hidden flex items-center gap-4">
              <button className="flex-1 px-6 py-4 text-slate-700 hover:bg-slate-100 rounded-2xl font-medium transition-colors border border-slate-300">
                Cancelar
              </button>
              <button
                onClick={handleCreate}
                disabled={!projectName.trim()}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Criar Projeto
              </button>
            </div>
          </div>

          {/* Imagem do projeto - direita (desktop) */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-4">Imagem do Projeto</label>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setImageType('upload')}
                  className={`px-6 py-3 rounded-2xl font-medium transition-colors ${
                    imageType === 'upload'
                      ? 'bg-purple-100 text-purple-700 ring-2 ring-purple-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Upload imagem
                </button>
                
              </div>

              {/* Upload */}
              {imageType === 'upload' && (
                <div className="border-2 border-dashed border-slate-300 rounded-3xl p-12 text-center hover:border-purple-400 transition-colors bg-white">
                  {uploadedImage ? (
                    <div className="space-y-6">
                      <img src={uploadedImage} alt="Preview" className="mx-auto max-h-96 rounded-2xl shadow-xl object-cover" />
                      <p className="text-lg text-slate-700 font-medium">Imagem carregada com sucesso!</p>
                      <button onClick={() => setUploadedImage(null)} className="text-purple-600 hover:text-purple-700 font-medium">
                        Alterar imagem
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-16 h-16 text-slate-400 mx-auto mb-6" />
                      <p className="text-lg font-medium text-slate-700 mb-2">Arraste ou clique para upload</p>
                      <p className="text-sm text-slate-500 mb-6">Mínimo 800×600 • PNG, JPEG ou WEBP</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="mx-auto file:mr-6 file:py-3 file:px-8 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            const reader = new FileReader();
                            reader.onload = (ev) => setUploadedImage(ev.target?.result as string);
                            reader.readAsDataURL(e.target.files[0]);
                          }
                        }}
                      />
                    </>
                  )}
                </div>
              )}

              
            </div>

            {/* Botões de ação - desktop */}
            <div className="hidden lg:flex items-center justify-end gap-4">
              <button className="px-8 py-4 text-slate-700 hover:bg-slate-100 rounded-2xl font-medium transition-colors border border-slate-300">
                Cancelar
              </button>
              <button
                onClick={handleCreate}
                disabled={!projectName.trim()}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Criar Projeto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;