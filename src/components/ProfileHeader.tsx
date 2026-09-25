import React from 'react';
import { clientConfig } from '../data/config';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-8 pb-4 px-6 text-center">
      {clientConfig.profileImage ? (
        <div className="relative mb-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white/20">
            <img 
              src={clientConfig.profileImage} 
              alt={clientConfig.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full shadow-sm" title="Online" />
        </div>
      ) : (
        <div className="mb-8 pt-4">
          <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full mb-6" />
        </div>
      )}
      
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-1">
        {clientConfig.name}
      </h1>
      
      <p className="text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wider">
        {clientConfig.profession}
      </p>
      
      <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
        {clientConfig.description}
      </p>
    </div>
  );
};
