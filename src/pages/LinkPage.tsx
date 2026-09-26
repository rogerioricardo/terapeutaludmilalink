import React, { useState, useEffect } from 'react';
import { clientConfig } from '../data/config';
import { ProfileHeader } from '../components/ProfileHeader';
import { LinkButton } from '../components/LinkButton';
import { SocialLinks } from '../components/SocialLinks';
import { ShareButton } from '../components/ShareButton';
import { QRCodeSection } from '../components/QRCodeSection';
import { Footer } from '../components/Footer';

const LinkPage: React.FC = () => {
  const [links, setLinks] = useState(clientConfig.links);

  useEffect(() => {
    // Load persisted theme and links
    const savedTheme = localStorage.getItem('custom_theme_primary');
    const savedSecondary = localStorage.getItem('custom_theme_secondary');
    
    if (savedTheme) {
      document.documentElement.style.setProperty('--primary-color', savedTheme);
    }
    if (savedSecondary) {
      document.documentElement.style.setProperty('--secondary-color', savedSecondary);
    }

    const savedLinks = localStorage.getItem('custom_links');
    if (savedLinks) {
      try {
        setLinks(JSON.parse(savedLinks));
      } catch (e) {
        console.error("Error loading links", e);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center overflow-x-hidden">
      {/* Background with Texture and Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
        style={{ 
          backgroundImage: `url(${clientConfig.backgroundImage})`,
          filter: 'blur(4px) brightness(0.95)'
        }}
      />
      <div className="fixed inset-0 z-0 bg-white/50 pointer-events-none" />

      {/* Main Container - Mobile Centered Layout */}
      <main className="relative z-10 w-full max-w-md mx-auto min-h-screen flex flex-col pt-12">
        <div className="flex-grow flex flex-col">
          <ProfileHeader />
          
          <div className="px-6 space-y-2 mt-4">
            {links.map((link) => (
              <LinkButton 
                key={link.id}
                title={link.title}
                subtitle={link.subtitle}
                url={link.url}
                icon={link.icon}
                primary={link.primary}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center">
            <SocialLinks />
            <ShareButton />
            <QRCodeSection />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default LinkPage;
