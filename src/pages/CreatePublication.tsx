import { ArrowLeft, Check, Eye, HandHeart, Info, Search, Send, ShieldCheck } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { categories } from '../data'
import type { PublicationType, PublicationVisibility } from '../types'

export function CreatePublication() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [kind, setKind] = useState<PublicationType>(params.get('tipo') === 'oferta' ? 'Posso ajudar' : 'Preciso de ajuda')
  const [visibility, setVisibility] = useState<PublicationVisibility>('protected')
  const [hideUnit, setHideUnit] = useState(true)
  const [done, setDone] = useState(false)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    // Simulação: identidade autenticada permanece vinculada para segurança, auditoria e moderação.
    const internalAuditRecord = { authorId: 'usr-mariana-001', author: 'Mariana Alves', visibility, hideUnit }
    console.info('Registro interno protegido:', internalAuditRecord)
    setDone(true)
    setTimeout(() => navigate('/rede'), 1500)
  }

  if (done) return <div className="success-state"><span><Check/></span><h1>Publicação compartilhada!</h1><p>{visibility === 'protected' ? 'Sua identidade está protegida e a publicação já está visível na rede.' : 'Você escolheu se identificar publicamente nesta publicação.'}</p></div>

  return <>
    <button className="text-back" onClick={() => navigate(-1)}><ArrowLeft/> Voltar</button>
    <PageHeader eyebrow="COLABORAÇÃO PROTEGIDA" title="Pedir ou oferecer ajuda" description="Compartilhe primeiro a necessidade ou sua capacidade de ajudar. Você decide se e quando sua identidade aparece."/>
    <form className="publication-form" onSubmit={submit}>
      <section>
        <div className="form-section-title"><span>1</span><div><h2>Como você quer participar?</h2><p>Escolha uma forma de colaboração.</p></div></div>
        <div className="kind-options">
          <button type="button" className={kind === 'Preciso de ajuda' ? 'selected need-option' : ''} onClick={() => setKind('Preciso de ajuda')}><Search/><span><strong>PRECISO DE AJUDA</strong>Tenho uma necessidade e busco apoio, recurso ou solução.</span><i><Check/></i></button>
          <button type="button" className={kind === 'Posso ajudar' ? 'selected offer-option' : ''} onClick={() => setKind('Posso ajudar')}><HandHeart/><span><strong>POSSO AJUDAR</strong>Tenho um recurso, competência ou conhecimento para compartilhar.</span><i><Check/></i></button>
        </div>
      </section>
      <section className="privacy-section protected-default">
        <div className="form-section-title"><span>2</span><div><h2>Sua identidade está protegida</h2><p>Este é o padrão de participação no Ajudamos.</p></div></div>
        <div className="privacy-assurance"><ShieldCheck/><div><strong>Identidade protegida por padrão</strong><p>Pedidos e ofertas são compartilhados sem exposição pública. Seu usuário continua registrado internamente para segurança e moderação, mas não é revelado aos demais participantes.</p></div></div>
        <label className="privacy-option"><input type="checkbox" checked={visibility === 'identified'} onChange={e => setVisibility(e.target.checked ? 'identified' : 'protected')}/><span className="custom-check"><Check/></span><Eye/><span><strong>Quero me identificar publicamente nesta publicação</strong><small>Ao marcar, seu nome e perfil poderão ser vistos por toda a rede nesta publicação.</small></span></label>
        {visibility === 'protected' && <div className="privacy-nested"><label><input type="checkbox" checked={hideUnit} onChange={e => setHideUnit(e.target.checked)}/><span className="custom-check"><Check/></span><span><strong>Ocultar também minha unidade</strong><small>Evita identificação indireta quando o setor é muito específico.</small></span></label></div>}
      </section>
      <section>
        <div className="form-section-title"><span>3</span><div><h2>Conte o que precisa ou como pode ajudar</h2><p>Inclua somente as informações necessárias para a colaboração.</p></div></div>
        <div className="identity-warning"><Info/><span><strong>Proteja também os detalhes.</strong> Evite nomes, cargos, telefones, e-mails, matrículas ou outras informações que possam identificar você no título ou na descrição.</span></div>
        <div className="form-grid">
          <label className="full">Título<input required placeholder={kind === 'Preciso de ajuda' ? 'Ex.: Preciso de orientação para...' : 'Ex.: Posso apoiar com...'}/></label>
          <label className="full">Descrição<textarea required rows={5} placeholder="Descreva o contexto sem incluir dados pessoais ou sensíveis."/></label>
          <label>Categoria<select required defaultValue=""><option value="" disabled>Selecione</option>{categories.map(c => <option key={c}>{c}</option>)}</select></label>
          <label>Unidade / setor<select required defaultValue=""><option value="" disabled>Selecione</option><option>Unidade de Clínica Médica</option><option>Gerência de Tecnologia da Informação</option><option>Núcleo de Qualidade</option><option>Unidade de Patrimônio</option></select></label>
          <label>Tipo de recurso<input required placeholder="Ex.: Equipamento, conhecimento"/></label>
          <label>{kind === 'Preciso de ajuda' ? 'Prioridade' : 'Disponibilidade'}<select><option>{kind === 'Preciso de ajuda' ? 'Prioridade baixa' : 'Disponível agora'}</option><option>{kind === 'Preciso de ajuda' ? 'Prioridade média' : 'Sob agendamento'}</option><option>{kind === 'Preciso de ajuda' ? 'Prioridade alta' : 'A combinar'}</option></select></label>
          <label className="full">Tags<input placeholder="Ex.: organização, dados, processos (separe por vírgulas)"/><small>Não use nomes ou identificadores pessoais.</small></label>
        </div>
      </section>
      <div className="form-actions"><button type="button" className="btn secondary" onClick={() => navigate(-1)}>Cancelar</button><button className="btn primary" type="submit"><Send/> Compartilhar com identidade {visibility === 'protected' ? 'protegida' : 'pública'}</button></div>
    </form>
  </>
}
