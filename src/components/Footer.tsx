import React from 'react';
import { clientConfig } from '../data/config';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 text-center text-slate-400">
      <p className="text-sm font-medium mb-1">
        {clientConfig.footer.copyright}
      </p>
      <p className="text-[10px] uppercase tracking-widest opacity-60">
        {clientConfig.footer.rights}
      </p>
      
      <div className="mt-8 pt-8 border-t border-slate-200/50">
        <p className="text-[10px] opacity-50">
          Desenvolvido por Geane Digital
        </p>
      </div>
    </footer>
  );
};
