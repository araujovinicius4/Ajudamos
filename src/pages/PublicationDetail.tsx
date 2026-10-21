import { ArrowLeft, Building2, CalendarDays, CheckCircle2, Clock3, HandHeart, MessageCircle, Send, ShieldCheck, UserRound } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { publications } from '../data'

export function PublicationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const item = publications.find(p => p.id === Number(id))
  if (!item) return <div className="empty"><h2>Publicação não encontrada</h2></div>
  const isProtected = item.visibility === 'protected'
  const visibleAuthor = isProtected ? 'Pessoa da rede' : item.author
  const visibleUnit = isProtected && item.hideUnit ? 'Unidade protegida' : item.unit
  const act = (text: string) => { setMessage(text); setTimeout(() => setMessage(''), 2500) }
  const startConversation = () => navigate(`/conversa/${item.id}`)

  return <>
    <button className="text-back" onClick={() => navigate(-1)}><ArrowLeft/> Voltar à rede de ajuda</button>
    <div className="detail-layout">
      <article className="detail-main">
        <div className="detail-kicker"><span className={`type-badge ${item.type === 'Preciso de ajuda' ? 'need' : 'offer'}`}>{item.type}</span><span className="status-dot"><i/> {item.status}</span></div>
        {isProtected && <div className="protected-banner"><ShieldCheck/><div><strong>Identidade protegida</strong><span>Esta pessoa escolheu colaborar sem exposição pública.</span></div></div>}
        <h1>{item.title}</h1><p className="lead">{item.description}</p>
        <div className="detail-info">
          <div><Building2/><span><small>UNIDADE / SETOR</small>{visibleUnit}</span></div>
          <div><UserRound/><span><small>COMPARTILHADO POR</small>{visibleAuthor}</span></div>
          <div><CalendarDays/><span><small>DATA</small>{item.date}</span></div>
          <div><Clock3/><span><small>{item.type === 'Preciso de ajuda' ? 'PRIORIDADE' : 'DISPONIBILIDADE'}</small>{item.urgency}</span></div>
        </div>
        <hr/><h2>Sobre esta possibilidade de ajuda</h2><p>No Ajudamos, a colaboração começa pela necessidade. Manifestações e conversas podem acontecer sem revelar automaticamente a identidade de nenhuma das pessoas.</p>
        <h3>Tags relacionadas</h3><div className="detail-tags">{item.tags.map(t => <span key={t}>#{t}</span>)}</div>
      </article>
      <aside className="action-card"><div className="action-icon"><HandHeart/></div><h2>Uma pessoa da rede pode ajudar</h2><p>Comece uma conversa protegida. Nomes, fotos e contatos não são compartilhados ao registrar interesse ou iniciar o contato.</p><button className="btn primary" onClick={startConversation}><CheckCircle2/> {item.type === 'Preciso de ajuda' ? 'Posso ajudar' : 'Tenho interesse'}</button><button className="btn secondary" onClick={() => act('Pedido registrado com identidade protegida!')}><Send/> Pedir ajuda com este recurso</button><button className="btn plain" onClick={startConversation}><MessageCircle/> Conversar com identidade protegida</button>{message && <div className="toast"><CheckCircle2/> {message}</div>}<small>O vínculo autenticado permanece disponível apenas para segurança, auditoria e moderação simuladas. Usuários comuns não têm acesso.</small></aside>
    </div>
  </>
}
