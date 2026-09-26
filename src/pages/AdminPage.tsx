import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientConfig } from '../data/config';
import { Settings, User, Link as LinkIcon, Palette, Save, LogOut, Plus, Trash2, MoveVertical, X } from 'lucide-react';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'links' | 'appearance'>('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Local states for functional UI
  const [links, setLinks] = useState([...clientConfig.links]);
  const [selectedTheme, setSelectedTheme] = useState(clientConfig.theme.primaryColor);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLink, setNewLink] = useState({ title: '', url: '', subtitle: '' });

  // Update real-time colors in the admin UI
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', selectedTheme);
    
    const theme = [
      { name: 'Natureza', primary: '#556B2F', secondary: '#E9EDC9' },
      { name: 'Oceano', primary: '#1A365D', secondary: '#EBF8FF' },
      { name: 'Pôr do Sol', primary: '#7B341E', secondary: '#FFFAF0' },
      { name: 'Minimalista', primary: '#1A202C', secondary: '#F7FAFC' },
      { name: 'Suave', primary: '#805AD5', secondary: '#FAF5FF' },
      { name: 'Elegante', primary: '#2D3748', secondary: '#EDF2F7' },
    ].find(t => t.primary === selectedTheme);
    
    if (theme) {
      document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    }
  }, [selectedTheme]);

  const handleSave = () => {
    setIsSaving(true);
    
    // Persist changes to localStorage so they appear on the Home page
    const theme = [
      { name: 'Natureza', primary: '#556B2F', secondary: '#E9EDC9' },
      { name: 'Oceano', primary: '#1A365D', secondary: '#EBF8FF' },
      { name: 'Pôr do Sol', primary: '#7B341E', secondary: '#FFFAF0' },
      { name: 'Minimalista', primary: '#1A202C', secondary: '#F7FAFC' },
      { name: 'Suave', primary: '#805AD5', secondary: '#FAF5FF' },
      { name: 'Elegante', primary: '#2D3748', secondary: '#EDF2F7' },
    ].find(t => t.primary === selectedTheme);

    localStorage.setItem('custom_theme_primary', selectedTheme);
    if (theme) {
      localStorage.setItem('custom_theme_secondary', theme.secondary);
      document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    }
    localStorage.setItem('custom_links', JSON.stringify(links));
    
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  const handleLogout = () => {
    // We don't reset theme here anymore so it persists on home page
    navigate('/');
  };

  const addLink = () => {
    if (newLink.title && newLink.url) {
      const updatedLinks = [...links, { ...newLink, id: Date.now().toString(), icon: 'Link', primary: false }];
      setLinks(updatedLinks);
      // Update localStorage immediately so the preview iframe reflects the change
      localStorage.setItem('custom_links', JSON.stringify(updatedLinks));
      setNewLink({ title: '', url: '', subtitle: '' });
      setShowAddModal(false);
    }
  };

  const removeLink = (id: string) => {
    const updatedLinks = links.filter(l => l.id !== id);
    setLinks(updatedLinks);
    localStorage.setItem('custom_links', JSON.stringify(updatedLinks));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Foto Upload Section */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">Foto de Perfil</label>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 flex-shrink-0">
                  <img src={clientConfig.profileImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                    Alterar Foto
                  </button>
                  <p className="text-xs text-slate-400">JPG, PNG ou GIF. Máximo de 2MB.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-100">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  defaultValue={clientConfig.name}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Profissão / Bio Curta</label>
                <input 
                  type="text" 
                  defaultValue={clientConfig.profession}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Descrição</label>
                <textarea 
                  rows={4}
                  defaultValue={clientConfig.description}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>
            </div>
          </div>
        );
      case 'links':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-sm font-semibold text-slate-600">Total de {links.length} links</span>
              <button 
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/10"
              >
                <Plus size={16} />
                Adicionar Link
              </button>
            </div>
            
            <div className="space-y-4">
              {links.map((link) => (
                <div key={link.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 group">
                  <div className="cursor-grab text-slate-300 hover:text-slate-400">
                    <MoveVertical size={20} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-800 text-sm">{link.title}</h4>
                    <p className="text-xs text-slate-400 truncate max-w-xs">{link.url}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <Settings size={18} />
                    </button>
                    <button 
                      onClick={() => removeLink(link.id)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'appearance':
        return (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">Esquema de Cores</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Natureza', primary: '#556B2F', secondary: '#E9EDC9' },
                  { name: 'Oceano', primary: '#1A365D', secondary: '#EBF8FF' },
                  { name: 'Pôr do Sol', primary: '#7B341E', secondary: '#FFFAF0' },
                  { name: 'Minimalista', primary: '#1A202C', secondary: '#F7FAFC' },
                  { name: 'Suave', primary: '#805AD5', secondary: '#FAF5FF' },
                  { name: 'Elegante', primary: '#2D3748', secondary: '#EDF2F7' },
                ].map((theme) => (
                  <button 
                    key={theme.name}
                    onClick={() => setSelectedTheme(theme.primary)}
                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${selectedTheme === theme.primary ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <div className="flex gap-1">
                      <div className="w-6 h-6 rounded-full shadow-sm" style={{ backgroundColor: theme.primary }} />
                      <div className="w-6 h-6 rounded-full shadow-sm" style={{ backgroundColor: theme.secondary }} />
                    </div>
                    <span className="text-xs font-medium text-slate-600">{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <label className="block text-sm font-semibold text-slate-700 mb-4">Estilo dos Botões</label>
              <div className="space-y-3">
                {['Arredondado', 'Quadrado', 'Pílula'].map((style) => (
                  <button key={style} className="w-full text-left px-4 py-3 border border-slate-100 rounded-xl hover:border-primary/30 hover:bg-slate-50 transition-all text-sm font-medium text-slate-700 flex justify-between items-center">
                    {style}
                    {style === 'Arredondado' && <div className="w-2 h-2 bg-primary rounded-full" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b md:border-r border-slate-200 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Settings size={18} />
          </div>
          <h1 className="font-bold text-xl text-slate-800">Admin Panel</h1>
        </div>
        
        <nav className="space-y-2 flex-grow text-slate-600">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl border transition-all ${activeTab === 'profile' ? 'text-white bg-primary border-primary shadow-lg shadow-primary/20' : 'border-transparent hover:bg-slate-50'}`}
          >
            <User size={18} />
            <span>Perfil</span>
          </button>
          <button 
            onClick={() => setActiveTab('links')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl border transition-all ${activeTab === 'links' ? 'text-white bg-primary border-primary shadow-lg shadow-primary/20' : 'border-transparent hover:bg-slate-50'}`}
          >
            <LinkIcon size={18} />
            <span>Links</span>
          </button>
          <button 
            onClick={() => setActiveTab('appearance')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl border transition-all ${activeTab === 'appearance' ? 'text-white bg-primary border-primary shadow-lg shadow-primary/20' : 'border-transparent hover:bg-slate-50'}`}
          >
            <Palette size={18} />
            <span>Aparência</span>
          </button>
        </nav>
        
        <div className="mt-auto pt-10 px-2">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-red-500 transition-colors"
          >
            <LogOut size={16} />
            <span>Sair do painel</span>
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {activeTab === 'profile' && 'Configurações do Perfil'}
              {activeTab === 'links' && 'Meus Links'}
              {activeTab === 'appearance' && 'Personalizar Aparência'}
            </h2>
            <p className="text-slate-500 text-sm">
              {activeTab === 'profile' && 'Gerencie as informações que aparecem no seu link na bio.'}
              {activeTab === 'links' && 'Adicione, remova ou organize seus links de contato.'}
              {activeTab === 'appearance' && 'Mude as cores e o estilo visual da sua página.'}
            </p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Save size={18} />
            )}
            <span>{isSaving ? 'Salvando...' : 'Salvar Alterações'}</span>
          </button>
        </header>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-6 right-6 z-50 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <Save size={14} className="text-white" />
            </div>
            <p className="text-sm font-medium">Configurações aplicadas com sucesso!</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Content */}
          <div className="w-full">
            {renderContent()}
          </div>

          {/* Preview Card */}
          <div className="hidden lg:block">
            <div className="sticky top-12">
              <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Prévia em tempo real</p>
              <div className="w-[320px] h-[640px] bg-white border-[8px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden mx-auto relative">
                <iframe 
                  key={`${JSON.stringify(links)}-${selectedTheme}`}
                  src="/links/" 
                  className="w-full h-full border-none pointer-events-none"
                  title="Preview"
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Link Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Novo Link</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Título do Link</label>
                <input 
                  type="text" 
                  value={newLink.title}
                  onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                  placeholder="Ex: Siga no Instagram"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subtítulo (Opcional)</label>
                <input 
                  type="text" 
                  value={newLink.subtitle}
                  onChange={(e) => setNewLink({ ...newLink, subtitle: e.target.value })}
                  placeholder="Ex: @terapeutaludmila"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">URL</label>
                <input 
                  type="text" 
                  value={newLink.url}
                  onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <button 
              onClick={addLink}
              className="w-full mt-8 bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Criar Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
