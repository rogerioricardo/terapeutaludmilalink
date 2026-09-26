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
      url: "https://wa.me/5511999999999?text=Olá!%20Vim%20através%20da%20sua%20página%20e%20gostaria%20de%20obter%20mais%20informações.",
      icon: "WhatsApp",
      primary: true,
    },
    {
      id: "website",
      title: "Meu Site Oficial",
      subtitle: "Conheça meus serviços e blog",
      url: "https://ludmiladeolinda.com.br",
      icon: "Globe",
    },
    {
      id: "instagram",
      title: "Siga no Instagram",
      subtitle: "@ludmila_terapeuta",
      url: "https://instagram.com/ludmila_terapeuta",
      icon: "Instagram",
    },
    {
      id: "facebook",
      title: "Página no Facebook",
      subtitle: "Novidades e artigos",
      url: "https://facebook.com/ludmilaterapeuta",
      icon: "Facebook",
    },
    {
      id: "location",
      title: "Minha Localização",
      subtitle: "Atendimento presencial em São Paulo",
      url: "https://goo.gl/maps/example",
      icon: "MapPin",
    },
  ],

  // Social Media Icons (Bottom)
  socials: {
    instagram: "https://instagram.com/ludmila_terapeuta",
    facebook: "https://facebook.com/ludmilaterapeuta",
    linkedin: "https://linkedin.com/in/ludmiladeolinda",
    youtube: "https://youtube.com/c/ludmiladeolinda",
    tiktok: "https://tiktok.com/@ludmiladeolinda",
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
