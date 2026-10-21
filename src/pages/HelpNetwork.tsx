import { Plus, Search, SlidersHorizontal, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { PublicationCard } from '../components/PublicationCard'
import { categories, publications } from '../data'

export function HelpNetwork() {
  const [query, setQuery] = useState(''); const [type, setType] = useState('Todos'); const [category, setCategory] = useState('Todas'); const [unit, setUnit] = useState('Todas')
  const units = [...new Set(publications.filter(p => !(p.visibility === 'protected' && p.hideUnit)).map(p => p.unit))]
  const filtered = useMemo(() => publications.filter(p => (type === 'Todos' || p.type === type) && (category === 'Todas' || p.category === category) && (unit === 'Todas' || (!(p.visibility === 'protected' && p.hideUnit) && p.unit === unit)) && `${p.title} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [query, type, category, unit])
  const clear = () => {setQuery(''); setType('Todos'); setCategory('Todas'); setUnit('Todas')}
  return <><PageHeader eyebrow="COLABORAÇÃO PROTEGIDA" title="Rede de ajuda" description="Primeiro conhecemos a necessidade ou a capacidade de ajudar. A identidade vem depois, somente quando necessária." action={<Link className="btn primary" to="/criar"><Plus/> Pedir ou oferecer ajuda</Link>}/>
    <div className="filter-panel"><div className="market-search"><Search/><input placeholder="Como podemos ajudar?" value={query} onChange={e => setQuery(e.target.value)}/></div><div className="type-tabs">{['Todos','Preciso de ajuda','Posso ajudar'].map(t => <button key={t} className={type === t ? 'active' : ''} onClick={() => setType(t)}>{t}</button>)}</div><div className="select-filters"><span><SlidersHorizontal/> Filtrar por</span><select value={category} onChange={e=>setCategory(e.target.value)}><option>Todas</option>{categories.map(c=><option key={c}>{c}</option>)}</select><select value={unit} onChange={e=>setUnit(e.target.value)}><option>Todas</option>{units.map(u=><option key={u}>{u}</option>)}</select><button className="clear-btn" onClick={clear}><X/> Limpar</button></div></div>
    <div className="result-line"><strong>{filtered.length} possibilidades de ajuda encontradas</strong><span>Mais recentes primeiro</span></div><div className="publication-grid">{filtered.map(p => <PublicationCard item={p} key={p.id}/>)}</div>{!filtered.length && <div className="empty"><Search/><h3>Nenhuma possibilidade encontrada</h3><p>Tente remover alguns filtros ou buscar por outro termo.</p></div>}</>
}
