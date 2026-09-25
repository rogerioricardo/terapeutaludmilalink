import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { clientConfig } from '../data/config';
import { Camera } from 'lucide-react';

export const QRCodeSection: React.FC = () => {
  if (!clientConfig.qrCode.enabled) return null;

  return (
    <div className="flex flex-col items-center py-8 px-6 bg-white/50 backdrop-blur-sm rounded-3xl mt-8 border border-white/50">
      <div className="bg-white p-4 rounded-2xl shadow-lg mb-4">
        <QRCodeSVG 
          value={window.location.href} 
          size={160}
          level="H"
          includeMargin={false}
          imageSettings={{
            src: "/favicon.ico",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
      
      <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
        <Camera size={14} />
        <span>{clientConfig.qrCode.title}</span>
      </div>
    </div>
  );
};
