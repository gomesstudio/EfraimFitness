import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Send } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

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

  const shareTitle = 'Efraim Fitness | Academia em Nanuque - MG';
  const shareText = `Conheça a Academia Efraim Fitness em Nanuque - MG! Musculação completa, estrutura de qualidade e valores acessíveis. Acesse: ${url}`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: 'Conheça a Efraim Fitness - Academia em Nanuque!',
          url: url,
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

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Conheça a Academia Efraim Fitness em Nanuque - MG')}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-[#0d0f12] border border-white/15 rounded-2xl shadow-2xl p-5 sm:p-6 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 35px rgba(92, 255, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#5CFF00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#5CFF00]/15 border border-[#5CFF00]/40 flex items-center justify-center text-[#5CFF00]">
              <Share2 className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h3 id="share-modal-title" className="text-base font-extrabold uppercase tracking-wide text-white">
                Compartilhar Site
              </h3>
              <p className="text-[11px] text-gray-400">
                Efraim Fitness • Academia em Nanuque - MG
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="pt-4 space-y-4 relative z-10">
          {/* Campo de link com botão de copiar */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Link da Página
            </label>
            <div className="flex items-center gap-2 bg-[#050608] border border-white/15 rounded-xl p-1.5 focus-within:border-[#5CFF00] transition-colors">
              <input
                type="text"
                readOnly
                value={url}
                className="w-full bg-transparent px-2.5 text-xs text-gray-300 font-mono outline-none truncate select-all"
              />
              <button
                onClick={handleCopyLink}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 ${
                  copied
                    ? 'bg-[#5CFF00] text-black shadow-[0_0_12px_rgba(92,255,0,0.5)]'
                    : 'bg-white/10 hover:bg-[#5CFF00] text-white hover:text-black'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
            {copied && (
              <p className="text-[#5CFF00] text-[11px] font-semibold mt-1.5 flex items-center gap-1">
                <Check className="w-3 h-3" /> Link copiado para a área de transferência!
              </p>
            )}
          </div>

          {/* Botões de Redes Sociais */}
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
              Compartilhar direto via
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              {/* WhatsApp */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366] text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-black stroke-black" />
                </div>
                <span className="text-[11px] font-bold text-gray-200 group-hover:text-[#25D366]">WhatsApp</span>
              </a>

              {/* Telegram */}
              <a
                href={telegramShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 hover:border-[#229ED9] text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-[#229ED9] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 -rotate-12" />
                </div>
                <span className="text-[11px] font-bold text-gray-200 group-hover:text-[#229ED9]">Telegram</span>
              </a>

              {/* Facebook */}
              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 hover:border-[#1877F2] text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                  <span className="font-serif font-black text-sm">f</span>
                </div>
                <span className="text-[11px] font-bold text-gray-200 group-hover:text-[#1877F2]">Facebook</span>
              </a>
            </div>
          </div>

          {/* Opção Nativa de Compartilhar do Sistema (Mobile / Dispositivos compatíveis) */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#5CFF00] text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#5CFF00] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#5CFF00]" />
              <span>Outros Aplicativos do Dispositivo</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
