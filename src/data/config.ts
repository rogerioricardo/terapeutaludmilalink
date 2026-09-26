/**
 * Configuration file for the "Link na Bio" application.
 * Update these values to customize the page for different clients.
 */

export const clientConfig = {
  name: "Ludmila Deolinda",
  profession: "Terapeuta Integrativa e Holística",
  description: "Acompanhamento terapêutico especializado para equilíbrio emocional, saúde mental e autoconhecimento profundo.",
  // Para hospedar no cPanel:
  // 1. Após o 'build', você terá uma pasta 'dist'.
  // 2. Suba o conteúdo da 'dist' para a sua pasta (ex: public_html/links).
  // 3. Coloque a foto 'ludmila.jpeg' diretamente nesta mesma pasta.
  profileImage: "ludmila.jpeg",
  backgroundImage: "ludmila.jpeg",
  
  // Primary Action Links
  // Icons can be any name from lucide-react (e.g., MessageCircle, Globe, Instagram, Facebook, MapPin)
  links: [
    {
      id: "whatsapp",
      title: "Falar comigo no WhatsApp",
      subtitle: "Agende sua sessão ou tire dúvidas",
      url: "https://wa.me/5548996302042?text=Olá%20Ludmila!%20Vim%20através%20da%20sua%20página%20e%20gostaria%20de%20mais%20informações.",
      icon: "WhatsApp",
      primary: true,
    },
    {
      id: "instagram",
      title: "Siga no Instagram",
      subtitle: "@ludmilla_deolinda",
      url: "https://www.instagram.com/ludmilla_deolinda?stkn=a2s0bDZxbGZ1dGo4",
      icon: "Instagram",
    },
    {
      id: "tiktok",
      title: "Me acompanhe no TikTok",
      subtitle: "@ludmila.deolinda",
      url: "https://www.tiktok.com/@ludmila.deolinda?_r=1&_t=ZS-9A4D8MHAGHt",
      icon: "Music2",
    },
    {
      id: "youtube",
      title: "Canal no YouTube",
      subtitle: "Vídeos e meditações",
      url: "https://www.youtube.com/@ludmilladeolindaterapias",
      icon: "Youtube",
    },
    {
      id: "facebook",
      title: "Página no Facebook",
      subtitle: "Novidades e artigos",
      url: "https://www.facebook.com/share/1MH5Afgfyj/",
      icon: "Facebook",
    },
    {
      id: "location",
      title: "Minha Localização",
      subtitle: "Centro, Criciúma - SC",
      url: "https://www.google.com/maps/place/Ludmila+Deolinda%2FReiki+%2FCrici%C3%BAma+-+R.+Cel.+Pedro+Benedet,+46+-+Centro,+Crici%C3%BAma+-+SC,+88801-250/data=!4m2!3m1!1s0x9521795445d1cecb:0x2990a09798b84710?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjM4LjIYACDXggMqWiw5NDI2NzcyNyw5NDI5MjE5NSw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOUICQlI%3D&skid=c1e3741c-fb5b-4011-ba4f-7e610f945a23&g_st=aw",
      icon: "MapPin",
    },
  ],

  // Social Media Icons (Bottom)
  socials: {
    instagram: "https://www.instagram.com/ludmilla_deolinda?stkn=a2s0bDZxbGZ1dGo4",
    facebook: "https://www.facebook.com/share/1MH5Afgfyj/",
    linkedin: "",
    youtube: "https://www.youtube.com/@ludmilladeolindaterapias",
    tiktok: "https://www.tiktok.com/@ludmila.deolinda?_r=1&_t=ZS-9A4D8MHAGHt",
  },

  // QR Code Settings
  qrCode: {
    title: "Aponte a câmera para acessar meu perfil",
    enabled: true,
  },

  // Style Settings
  theme: {
    primaryColor: "#556B2F", // Dark Olive Green
    secondaryColor: "#E9EDC9", // Tea Green
    backgroundColor: "#F0F2F0", // Soft Neutral
    textColor: "#333333",
    accentColor: "#BC6C25", // Tiger's Eye (warm accent)
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Ludmila Deolinda`,
    rights: "Todos os direitos reservados.",
  }
};
