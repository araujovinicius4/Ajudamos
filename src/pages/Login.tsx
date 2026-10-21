import { ArrowLeft, ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react'
import { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()
  const enter = (e: FormEvent) => { e.preventDefault(); navigate('/inicio') }
  return <div className="login-page"><div className="login-side"><Link to="/" className="back"><ArrowLeft/> Voltar</Link><div className="login-message"><div className="brand-mark">HU</div><h1>Juntos, fazemos<br/>o hospital acontecer.</h1><p>Conecte-se às oportunidades de colaboração da nossa comunidade.</p></div><small>HU Brasil · Hospital Universitário</small></div><div className="login-panel"><form className="login-card" onSubmit={enter}><span className="eyebrow">ACESSO INSTITUCIONAL</span><h2>Boas-vindas</h2><p>Use seus dados institucionais para acessar.</p><label>E-mail institucional<input type="email" defaultValue="mariana.alves@hubrasil.gov.br" required/></label><label>Senha<div className="password"><input type="password" defaultValue="demonstracao" required/><LockKeyhole size={18}/></div></label><button className="btn primary large" type="submit">Entrar <ArrowRight/></button><div className="demo-note"><ShieldCheck/><span><strong>Ambiente de demonstração</strong>Use o botão acima para acessar diretamente.</span></div></form></div></div>
}
