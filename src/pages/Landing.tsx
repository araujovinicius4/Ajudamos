import { ArrowRight, CheckCircle2, HandHeart, HeartHandshake, Search, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Landing() {
  return <div className="landing">
    <header className="landing-nav"><div className="brand"><div className="brand-mark">A</div><div><strong>Ajudamos</strong><span>HU Brasil</span></div></div><Link className="btn ghost" to="/login">Acessar a rede <ArrowRight size={17}/></Link></header>
    <main>
      <section className="hero">
        <div className="hero-copy"><span className="hero-kicker"><ShieldCheck size={15}/> Colaboração com identidade protegida</span><h1>Ajude sem precisar se expor. <em>A necessidade vem antes do nome.</em></h1><p>Peça ajuda ou ofereça conhecimento, recursos e capacidades com identidade protegida por padrão. Você continua autenticado, mas decide se e quando quer se identificar.</p><div className="hero-actions"><Link className="btn primary large" to="/login">Entrar na rede <ArrowRight size={18}/></Link><span><ShieldCheck size={18}/> Ambiente interno, acolhedor e seguro</span></div></div>
        <div className="hero-visual"><div className="visual-glow"/><div className="floating-card need-card"><span><Search/> PRECISO DE AJUDA</span><strong>Orientação para organizar finanças</strong><small>Identidade protegida · há 2 dias</small></div><div className="connection"><HeartHandshake/></div><div className="floating-card offer-card"><span><HandHeart/> POSSO AJUDAR</span><strong>Apoio em organização financeira</strong><small>Identidade protegida · disponível agora</small></div><div className="match-pill"><CheckCircle2/> Match protegido</div></div>
      </section>
      <section className="concepts"><div className="section-intro"><span>COMO FUNCIONA</span><h2>Colabore com liberdade e confiança</h2><p>No Ajudamos, primeiro conhecemos a necessidade ou a capacidade de ajudar. A identidade vem depois, somente quando necessária.</p></div><div className="concept-grid"><article className="concept need-concept"><div><Search/></div><span>01</span><h3>Preciso de ajuda</h3><p>Compartilhe uma necessidade sem precisar expor seu nome, foto ou contato à rede.</p><a>Encontrar ajuda <ArrowRight/></a></article><article className="concept offer-concept"><div><HandHeart/></div><span>02</span><h3>Posso ajudar</h3><p>Ofereça conhecimento ou recursos com a mesma proteção de identidade.</p><a>Oferecer ajuda <ArrowRight/></a></article><article className="concept"><div><ShieldCheck/></div><span>03</span><h3>Conversa protegida</h3><p>Matches aproximam pessoas sem revelar identidades automaticamente.</p><a>Conhecer a rede <ArrowRight/></a></article></div></section>
    </main>
    <footer><span>© 2026 Ajudamos · HU Brasil</span><span>A colaboração começa pela necessidade, não pelo nome.</span></footer>
  </div>
}
