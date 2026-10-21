import { ArrowUpRight, Building2, CalendarDays, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Publication } from '../types'

export function PublicationCard({ item, compact = false }: { item: Publication; compact?: boolean }) {
  return <article className={`publication-card ${compact ? 'compact' : ''}`}>
    <div className="card-top"><span className={`type-badge ${item.type === 'Preciso de ajuda' ? 'need' : 'offer'}`}>{item.type}</span><span className="category">{item.category}</span></div>
    <h3>{item.title}</h3>
    {!compact && <p>{item.description}</p>}
    <div className="meta">
      {item.visibility === 'protected' && <span className="protected-label"><ShieldCheck size={15}/>Identidade protegida</span>}
      <span><Building2 size={15}/>{item.visibility === 'protected' && item.hideUnit ? 'Unidade protegida' : item.unit}</span>
      <span><CalendarDays size={15}/>{item.date}</span>
    </div>
    <div className="card-bottom"><div className="tags">{item.tags.slice(0, 2).map(t => <span key={t}>#{t}</span>)}</div><Link to={`/publicacao/${item.id}`} aria-label={`Ver ${item.title}`}><ArrowUpRight size={19}/></Link></div>
  </article>
}
