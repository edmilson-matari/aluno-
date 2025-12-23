// src/components/Footer.tsx
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Coluna 1 - Marca e Copyright */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Aluno+</h3>
            <p className="text-white/60 text-sm">
              Plataforma de desenvolvimento prático de habilidades<br />
              em parceria com a FFNEOCOMMERCE.
            </p>
            <p className="text-white/50 text-sm flex items-center justify-center md:justify-start gap-2">
              Feito com <Heart size={16} className="text-red-500 fill-red-500" /> em Angola
            </p>
          </div>

          {/* Coluna 2 - Links úteis */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/about" className="hover:text-indigo-400 transition">Sobre o Projeto</a></li>
              <li><a href="/terms" className="hover:text-indigo-400 transition">Termos de Uso</a></li>
              <li><a href="/privacy" className="hover:text-indigo-400 transition">Política de Privacidade</a></li>
              <li><a href="/contact" className="hover:text-indigo-400 transition">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Direitos reservados */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Direitos</h4>
            <p className="text-white/60 text-sm">
              © {currentYear} Aluno+. Todos os direitos reservados.<br />
              Desenvolvido em parceria com a <span className="text-indigo-400 font-medium">FFNEOCOMMERCE</span>.
            </p>
          </div>
        </div>

        {/* Linha final com versão ou algo sutil */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
          Plataforma de formação prática para o mercado de trabalho • v1.0.0
        </div>
      </div>
    </footer>
  );
}