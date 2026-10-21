import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { HelpNetwork } from './pages/HelpNetwork'
import { CreatePublication } from './pages/CreatePublication'
import { PublicationDetail } from './pages/PublicationDetail'
import { Matches } from './pages/Matches'
import { Profile } from './pages/Profile'
import { UnitPanel } from './pages/UnitPanel'
import { ProtectedConversation } from './pages/ProtectedConversation'

export default function App() {
  return <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route element={<AppLayout />}>
      <Route path="/inicio" element={<Dashboard />} />
      <Route path="/rede" element={<HelpNetwork />} />
      <Route path="/publicacao/:id" element={<PublicationDetail />} />
      <Route path="/criar" element={<CreatePublication />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/conversa/:id" element={<ProtectedConversation />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/unidade" element={<UnitPanel />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}
