import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

export const ShareButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: 'Confira o perfil de Ludmila Deolinda - Terapeuta',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-6 py-4">
      <button
        onClick={handleShare}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors font-medium text-sm border border-slate-200"
      >
        {copied ? (
          <>
            <Check size={18} className="text-emerald-600" />
            <span>Link copiado!</span>
          </>
        ) : (
          <>
            <Share2 size={18} />
            <span>Compartilhar perfil</span>
          </>
        )}
      </button>
    </div>
  );
};
