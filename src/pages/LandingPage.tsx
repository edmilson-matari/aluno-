// src/pages/LandingPage.tsx
import { ArrowRight, Sparkles, Newspaper, Target, Users, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const recentNews = [
  {
    id: 1,
    title: 'Aluno+ lança parceria com FFNEOCOMMERCE para 2026',
    excerpt: 'Nova iniciativa vai acompanhar mais de 200 alunos em projetos reais com mentoria direta da empresa.',
    date: '2025-12-20',
  },
  {
    id: 2,
    title: 'Primeiro batch conclui projetos com 100% de aprovação',
    excerpt: 'Todos os alunos do programa piloto entregaram projetos funcionais e receberam feedback positivo da equipe técnica.',
    date: '2025-12-15',
  },
  {
    id: 3,
    title: 'Aluno+ é destaque em evento de inovação em Luanda',
    excerpt: 'Plataforma foi apresentada como case de sucesso no desenvolvimento prático de competências digitais.',
    date: '2025-12-10',
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo + Nome */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Sparkles className={clsx("text-white", "w-5 h-5 sm:w-6 sm:h-6")} />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white whitespace-nowrap">
              Aluno<span className="text-indigo-400">+</span>
            </h1>
          </div>

          {/* CTAs */}
          <nav className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => navigate('/signin')}
              className="text-sm sm:text-base text-white/80 font-medium hover:text-white transition"
            >
              Entrar
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
            >
              Criar Conta
              <ArrowRight className={clsx("w-4 h-4 sm:w-5 sm:h-5")} />
            </button>
          </nav>
        </div>
      </header>

      {/* Espaço para header */}
      <div className="pt-16 sm:pt-20" />

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-indigo-300 text-xs sm:text-sm font-medium mb-8">
            <Sparkles className={clsx("w-4 h-4 sm:w-5 sm:h-5")} />
            Programa de Desenvolvimento Prático • FFNEOCOMMERCE
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 sm:mb-8 px-4">
            Construa seu futuro<br className="hidden sm:block" />
            com <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">projetos reais</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
            Plataforma exclusiva que conecta alunos talentosos a desafios práticos com mentoria direta da equipe técnica da FFNEOCOMMERCE.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <button
              onClick={() => navigate('/signup')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Começar Agora → Criar Conta
              <ArrowRight className={clsx("w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition")} />
            </button>

            <button
              onClick={() => navigate('/signin')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-base sm:text-lg rounded-2xl border border-white/20 transition-all duration-300"
            >
              Já tenho conta
            </button>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <Target className={clsx("text-indigo-400", "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12")} />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                  Nosso Propósito
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Acreditamos que a melhor forma de aprender tecnologia é <strong>fazendo</strong>. 
                O Aluno+ existe para eliminar a barreira entre formação académica e o mercado real.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className={clsx("text-indigo-300", "w-5 h-5 sm:w-6 sm:h-6")} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Acompanhamento Personalizado</h3>
                    <p className="text-white/70 text-sm sm:text-base">Mentoria direta da equipe técnica da FFNEOCOMMERCE durante todo o projeto.</p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className={clsx("text-indigo-300", "w-5 h-5 sm:w-6 sm:h-6")} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Visibilidade no Mercado</h3>
                    <p className="text-white/70 text-sm sm:text-base">Projetos concluídos são divulgados, aumentando suas chances de oportunidades profissionais.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center border border-white/20">
                  <p className="text-white/50 text-center text-sm sm:text-base px-4">
                    Ilustração: alunos desenvolvendo projetos reais<br className="hidden sm:block" />
                    com mentoria profissional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-black/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <Newspaper className={clsx("text-indigo-400", "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12")} />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Notícias Recentes
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentNews.map((news) => (
              <article
                key={news.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 hover:border-indigo-400/50 transition-all duration-300"
              >
                <time className="text-indigo-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 block">
                  {new Date(news.date).toLocaleDateString('pt-AO', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{news.title}</h3>
                <p className="text-white/70 text-sm sm:text-base">{news.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8">
          Junte-se ao futuro do desenvolvimento prático
        </h2>
        <button
          onClick={() => navigate('/signup')}
          className="px-8 sm:px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-3 sm:gap-4 mx-auto group"
        >
          Criar Minha Conta Gratuita
          <ArrowRight className={clsx("w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition")} />
        </button>
      </section>
    </div>
  );
}