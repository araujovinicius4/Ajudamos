import { Bell, Building2, Handshake, HeartHandshake, Home, Menu, PlusCircle, Search, User, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const links = [
  { to: '/inicio', label: 'Início', icon: Home },
  { to: '/rede', label: 'Rede de ajuda', icon: HeartHandshake },
  { to: '/matches', label: 'Correspondências', icon: Handshake },
  { to: '/criar', label: 'Pedir ou ajudar', icon: PlusCircle },
  { to: '/unidade', label: 'Minha unidade', icon: Building2 },
  { to: '/perfil', label: 'Perfil', icon: User },
]

export function AppLayout() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return <div className="app-shell">
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="brand"><div className="brand-mark">A</div><div><strong>Ajudamos</strong><span>HU Brasil</span></div></div>
      <button className="icon-btn close-menu" onClick={() => setOpen(false)} aria-label="Fechar menu"><X /></button>
      <nav>{links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} onClick={() => setOpen(false)}><Icon size={19}/><span>{label}</span>{label === 'Matches' && <b>3</b>}</NavLink>)}</nav>
      <div className="sidebar-help"><Handshake size={24}/><strong>Quem precisa encontra quem pode ajudar.</strong><p>Compartilhe recursos, conhecimentos e capacidades com outras equipes.</p></div>
    </aside>
    {open && <div className="scrim" onClick={() => setOpen(false)} />}
    <div className="main-wrap">
      <header className="topbar">
        <button className="icon-btn menu-btn" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu/></button>
        <div className="top-search"><Search size={18}/><input aria-label="Busca rápida" placeholder="Buscar formas de ajudar..." onKeyDown={e => { if(e.key === 'Enter') navigate('/rede') }}/></div>
        <div className="top-actions"><button className="icon-btn notification"><Bell size={20}/><i/></button><button className="user-chip" onClick={() => navigate('/perfil')}><span>MA</span><div><strong>Mariana Alves</strong><small>Clínica Médica</small></div></button></div>
      </header>
      <main className="page"><Outlet /></main>
    </div>
  </div>
}
