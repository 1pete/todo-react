import { HashRouter, Navigate, Route, Routes } from 'react-router'

import HomePage from './pages/Home'
import NewPage from './pages/New'
import ViewPage from './pages/View'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/item/:id" element={<ViewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
