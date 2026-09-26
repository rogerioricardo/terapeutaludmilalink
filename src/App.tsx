/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LinkPage from './pages/LinkPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Router basename="/links">
      <Routes>
        {/* Página principal na raiz da pasta /links */}
        <Route path="/" element={<LinkPage />} />
        
        {/* Painel administrativo em /links/admin */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Redireciona qualquer erro para a raiz */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
