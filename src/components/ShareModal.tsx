import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import {
  ExclusiveWhatsAppIcon,
  ExclusiveInstagramIcon,
} from './ExclusiveIcons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://efraimfitness.gomes-studio.workers.dev');

  const shareTitle = 'Efraim Fitness | Academia em Nanuque - MG';
  const shareText = `Conheça a Academia Efraim Fitness em Nanuque - MG! Saúde, treinamento funcional e musculação completa: ${currentUrl}`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: 'Conheça a Academia Efraim Fitness em Nanuque - MG!',
          url: currentUrl,
        });
      } catch (err: any) {
        if (err?.name !== 'AbortError') {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const handleInstagramShare = async () => {
    await handleCopyLink();
    window.open(GYM_INFO.instagram, '_blank', 'noopener,noreferrer');
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-[#0e1015] border border-white/10 rounded-2xl p-6 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 40px rgba(92, 255, 0, 0.15)',
        }}
      >
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#5CFF00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#5CFF00]/15 flex items-center justify-center text-[#5CFF00]">
              <Share2 className="w-4 h-4" />
            </div>
            <h3 id="share-modal-title" className="text-base sm:text-lg font-bold">
              Compartilhar Site
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Fechar janela"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="py-5 space-y-4">
          <p className="text-xs sm:text-sm text-gray-300">
            Encaminhe o link da Academia Efraim Fitness nas suas redes:
          </p>

          {/* Botões de Redes Sociais */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* WhatsApp */}
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366] text-white transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                <ExclusiveWhatsAppIcon className="w-4 h-4 fill-black" />
              </div>
              <span className="text-xs font-semibold text-gray-200 group-hover:text-[#25D366]">WhatsApp</span>
            </a>

            {/* Instagram */}
            <button
              type="button"
              onClick={handleInstagramShare}
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/30 hover:border-[#E1306C] text-white transition-all group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(225,48,108,0.3)]"
              title="Copiar link e abrir perfil do Instagram"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                <ExclusiveInstagramIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-200 group-hover:text-[#E1306C]">Instagram</span>
            </button>

            {/* Facebook */}
            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 hover:border-[#1877F2] text-white transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]"
            >
              <div className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                <span className="font-serif font-black text-sm">f</span>
              </div>
              <span className="text-xs font-semibold text-gray-200 group-hover:text-[#1877F2]">Facebook</span>
            </a>
          </div>

          {/* Opção Nativa de Compartilhar do Dispositivo (caso suporte) */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#5CFF00] text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#5CFF00] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#5CFF00]" />
              <span>Outros Aplicativos</span>
            </button>
          )}

          {/* Link para cópia direta */}
          <div className="pt-2">
            <span className="block text-xs font-medium text-gray-400 mb-1.5">Ou copie o link direto:</span>
            <div className="flex items-center gap-2 bg-[#050608] border border-white/10 rounded-xl p-1.5 pl-3">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs text-gray-300 font-mono outline-none truncate select-all"
              />
              <button
                onClick={handleCopyLink}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                  copied
                    ? 'bg-[#5CFF00] text-black shadow-[0_0_10px_rgba(92,255,0,0.5)]'
                    : 'bg-white/10 hover:bg-[#5CFF00] text-white hover:text-black'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
