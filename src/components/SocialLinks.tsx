import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Music2 } from 'lucide-react';
import { clientConfig } from '../data/config';

export const SocialLinks: React.FC = () => {
  const { socials } = clientConfig;
  
  const socialItems = [
    { id: 'instagram', icon: Instagram, url: socials.instagram, color: 'text-[#E4405F]' },
    { id: 'facebook', icon: Facebook, url: socials.facebook, color: 'text-[#1877F2]' },
    { id: 'linkedin', icon: Linkedin, url: socials.linkedin, color: 'text-[#0A66C2]' },
    { id: 'youtube', icon: Youtube, url: socials.youtube, color: 'text-[#FF0000]' },
    { id: 'tiktok', icon: Music2, url: socials.tiktok, color: 'text-[#000000]' },
  ].filter(item => !!item.url);

  if (socialItems.length === 0) return null;

  return (
    <div className="flex justify-center gap-5 py-6">
      {socialItems.map(({ id, icon: Icon, url, color }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-all duration-300 hover:scale-110 p-2 rounded-xl border border-transparent hover:border-current/20 drop-shadow-sm ${color}`}
          aria-label={id}
        >
          <Icon size={28} strokeWidth={2} />
        </a>
      ))}
    </div>
  );
};
