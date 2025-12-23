// src/pages/LandingPage.tsx
import { ArrowRight, Users, LogIn, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/FooterLanding';
import clsx from 'clsx';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <Users size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold">
              Aluno<span className="text-blue-400">+</span>
            </h1>
          </div>

          {/* Navegação - Hidden em mobile, visible em md+ */}
          <nav className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#projetos" className="hover:text-white transition">Projetos</a>
            <a href="#noticias" className="hover:text-white transition">Notícias</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/signin')}
              className="px-5 py-2.5 border border-gray-600 rounded-lg hover:border-gray-400 transition"
            >
              Entrar
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition shadow-lg"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </header>

{/* Hero Section - Foco em gerenciamento de projetos */}
<section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Texto - Mobile-first, centralizado em mobile */}
      <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md px-4 py-2 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
          <Calendar className={clsx("w-4 h-4 sm:w-5 sm:h-5")} />
          Inscrições abertas para 2026
        </div>

        {/* Headline - Fontes responsivas e equilibradas */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Desenvolvimento<br className="hidden sm:block" />
          Prático com<br />
          <span className="text-blue-400">Mentoria Real</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Plataforma exclusiva que conecta alunos talentosos a projetos reais, com mentoria direta da equipe técnica da AFRIKNEW e visibilidade no mercado de trabalho.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button
            onClick={() => navigate('/signup')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Users className={clsx("w-5 h-5 sm:w-6 sm:h-6")} />
            Inscreva-se Agora
            <ArrowRight className={clsx("w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition")} />
          </button>

          <button
            onClick={() => navigate('/signin')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-gray-600 hover:border-gray-400 text-white font-medium text-base sm:text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <LogIn className={clsx("w-5 h-5 sm:w-6 sm:h-6")} />
            Entrar
          </button>
        </div>
      </div>

      {/* Imagens de gerenciamento de projetos - Grid responsivo */}
      <div className="relative mt-12 lg:mt-0">
        {/* Forma decorativa de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl blur-3xl -z-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {/* Imagem 1 - Kanban/Trello style */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Dashboard de gerenciamento de projetos com kanban"
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
          </div>

          {/* Imagem 2 - Timeline/Gantt */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-2 mt-8 sm:mt-16">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Timeline e planejamento de tarefas em equipe"
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
          </div>

          {/* Imagem 3 - Colaboração em equipe (opcional, para mais profundidade) */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Equipe colaborando em projeto de desenvolvimento"
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Seção Sobre (simples) */}
      <section id="sobre" className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Por que o Aluno+?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma iniciativa da AFRIKNEW para formar a próxima geração de desenvolvedores através de projetos reais, mentoria direta e visibilidade no mercado de trabalho.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Pronto para transformar sua carreira?
        </h2>
        <button
          onClick={() => navigate('/signup')}
          className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-4 mx-auto group"
        >
          Inscreva-se no Programa 2026
          <ArrowRight size={26} className="group-hover:translate-x-2 transition" />
        </button>
      </section>
      {/* Seção Latest Blog & News */}
<section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-950">
  <div className="max-w-7xl mx-auto">
    {/* Header da seção */}
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-xl sm:text-4xl lg:text-5xl text-white">
        Últimas notícias
      </h2>
      <a
        href="#noticias"
        className="group flex items-center gap-3 text-blue-400 font-medium text-lg hover:text-blue-300 transition"
      >
        Ver mais
        <ArrowRight
          size={24}
          className="group-hover:translate-x-2 transition-transform duration-300"
        />
      </a>
    </div>

    {/* Grid de cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <article className="group relative bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
            Destaque
          </span>
        </div>

        {/* Imagem */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80"
            alt="Projeto destaque"
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* Conteúdo */}
        <div className="p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
            Salvamos nosso negócio da falência otimizando nosso site...
          </h3>
          <time className="text-gray-400 text-sm">
            08 Nov 2024
          </time>
        </div>
      </article>

      {/* Card 2 */}
      <article className="group relative bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
            Projecto
          </span>
        </div>

        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80"
            alt="Projeto em desenvolvimento"
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
            O trabalho é de altíssima qualidade e eu consistentemente supero todos os meus...
          </h3>
          <time className="text-gray-400 text-sm">
            08 Nov 2024
          </time>
        </div>
      </article>

      {/* Card 3 */}
      <article className="group relative bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
            Sucesso
          </span>
        </div>

        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80"
            alt="Aluno em ação"
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
           Expandir meu negócio por meio de busca orgânica e marketing..
          </h3>
          <time className="text-gray-400 text-sm">
            08 Nov 2024
          </time>
        </div>
      </article>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
}