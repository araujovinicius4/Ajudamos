import { ArrowLeft, Check, LockKeyhole, Send, ShieldCheck, UserRound } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { publications } from '../data'

export function ProtectedConversation() {
  const navigate = useNavigate()
  const { id } = useParams()
  const item = publications.find(p => p.id === Number(id)) ?? publications[0]
  const [sent, setSent] = useState(false)
  const [identityNotice, setIdentityNotice] = useState(false)

  return <>
    <button className="text-back" onClick={() => navigate(-1)}><ArrowLeft/> Voltar à publicação</button>
    <div className="conversation-shell">
      <header className="conversation-header"><div className="protected-avatar"><ShieldCheck/></div><div><span>CONVERSA PROTEGIDA</span><h1>Pessoa da rede</h1><p>Conexão sobre “{item.title}”</p></div><div className="conversation-status"><LockKeyhole/> Identidades não compartilhadas</div></header>
      <div className="consent-note"><ShieldCheck/><div><strong>Vocês podem conversar sem exposição inicial.</strong><p>Sua identidade só será compartilhada com a outra pessoa se você escolher fazer isso. A ação abaixo é apenas conceitual neste protótipo.</p></div></div>
      <div className="messages" aria-label="Mensagens da conversa protegida">
        <div className="message network"><span><UserRound/></span><div><small>PESSOA DA REDE</small><p>Olá! Vi sua publicação e acredito que posso ajudar. Podemos começar entendendo melhor o contexto, sem compartilhar dados pessoais.</p><time>10:24</time></div></div>
        <div className="message mine"><div><small>VOCÊ</small><p>Obrigada! Gostaria de conversar sobre os primeiros passos e combinar uma forma segura de colaboração.</p><time>10:28</time></div></div>
        {sent && <div className="message mine"><div><small>VOCÊ</small><p>Podemos continuar por aqui. Minha identidade permanece protegida.</p><time>agora</time></div></div>}
      </div>
      <div className="conversation-compose"><input aria-label="Mensagem" placeholder="Escreva sem incluir dados pessoais..."/><button className="btn primary" onClick={() => setSent(true)}><Send/> Enviar</button></div>
      <div className="identity-consent"><div><strong>Quando você se sentir confortável</strong><p>Compartilhar a identidade nunca acontece automaticamente e não depende de haver um match.</p></div><button className="btn secondary" onClick={() => setIdentityNotice(true)}><UserRound/> Compartilhar minha identidade</button></div>
      {identityNotice && <div className="toast consent-toast"><Check/> Solicitação simulada. Em uma versão futura, a outra pessoa será avisada e sua confirmação será necessária.</div>}
    </div>
  </>
}
