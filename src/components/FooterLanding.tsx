// src/components/Footer.tsx
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FooterLanding() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-950 text-white">
      {/* Parte principal - 3 colunas */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Coluna 1 - Logo + CTA */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  Aluno<span className="text-blue-400">+</span>
                </h3>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                 Pronto para <br />começar?
                </h2>
                <button
                  onClick={() => navigate('/signup')}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Começar
                </button>
              </div>
            </div>

            {/* Coluna 2 - Support */}
            <div className="space-y-6 text-center lg:text-left lg:border-l lg:border-r border-gray-800 lg:px-12">
              <h3 className="text-xl font-semibold">Support</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Phone size={18} />
                  <span>+ (244) 923 456 789</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Mail size={18} />
                  <span>suporte@aluno-plus.com</span>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#" className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Coluna 3 - Newsletter */}
            <div className="space-y-6 text-center lg:text-left">
              
              <p className="text-gray-400 text-sm">
                Para ficar por dentro de todas as novidades, artigos e atualizações de produtos.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 px-5 py-3 bg-gray-800/50 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-lg"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Centralizado */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Aluno+. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido em parceria com a <span className="text-blue-400 font-medium">FFNEOCOMMERCE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}