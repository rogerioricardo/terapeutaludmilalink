/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LinkPage from './pages/LinkPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redireciona a raiz para /link conforme solicitado */}
        <Route path="/" element={<Navigate to="/link" replace />} />
        
        {/* Página principal de links */}
        <Route path="/link" element={<LinkPage />} />
        
        {/* Página de administração */}
        <Route path="/link/admin" element={<AdminPage />} />
        
        {/* Fallback para 404 redirecionando para a página de links */}
        <Route path="*" element={<Navigate to="/link" replace />} />
      </Routes>
    </Router>
  );
}
