import { ArrowRight, CheckCircle2, HandHeart, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { matches } from '../data'

const publicUnit = (item: (typeof matches)[number]['need']) => item.visibility === 'protected' && item.hideUnit ? 'Unidade protegida' : item.unit

export function Matches() {
  return <><PageHeader eyebrow="CONEXÕES PROTEGIDAS" title="Correspondências encontradas" description="Compatibilidade entre necessidades e capacidades, sem exposição inicial das pessoas."/><div className="match-summary"><span><Sparkles/></span><div><strong>{matches.length} possibilidades de colaboração</strong><p>Os matches preservam a identidade até que cada pessoa decida compartilhá-la.</p></div></div><div className="matches-list">{matches.map((m, i) => <article className="match-card" key={i}><div className="match-confidence"><ShieldCheck/> CORRESPONDÊNCIA PROTEGIDA <b>{m.score}% compatível</b></div><div className="match-pair"><div><span className="pair-icon need"><Search/></span><div><small>PRECISA</small><h3>{m.need.title}</h3><p>{publicUnit(m.need)}</p><Link to={`/publicacao/${m.need.id}`}>Ver necessidade <ArrowRight/></Link></div></div><div className="match-link"><span/><Sparkles/><span/></div><div><span className="pair-icon offer"><HandHeart/></span><div><small>PODE AJUDAR</small><h3>{m.offer.title}</h3><p>{publicUnit(m.offer)}</p><Link to={`/publicacao/${m.offer.id}`}>Ver ajuda disponível <ArrowRight/></Link></div></div></div><div className="match-reason"><strong>Por que combina?</strong> {m.reason} · <CheckCircle2 size={12}/> Nenhuma identidade foi revelada.</div></article>)}</div></>
}
