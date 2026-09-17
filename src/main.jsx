import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Dumbbell,
  HeartHandshake,
  TrendingUp,
  Laptop,
  User,
  Users,
  HeartPulse,
  Sparkles,
  Zap,
  MessageCircle,
  Instagram,
  Menu,
  X,
  ArrowUpRight,
  Check,
  ChevronRight
} from 'lucide-react'
import './styles.css'

// Importando as imagens pelo pipeline do Vite (necessário para funcionar no build de produção)
import logoImg from './assets/logo.png'
import heroImg from './assets/hero.png'
import aboutImg from './assets/brunasena-sobre.png'
import result1 from './assets/result1.jpg'
import result2 from './assets/result2.jpg'
import result3 from './assets/result3.jpg'
import result4 from './assets/result4.jpg'
import factDesktopImg from './assets/fact-desktop.png'
import factMobileImg from './assets/fact.png'

const wa = 'https://wa.me/5581997786124'
const instagram = 'https://www.instagram.com/personalbrunasena/'

const services = [
  {
    icon: Laptop,
    title: 'CONSULTORIA',
    accent: 'ON-LINE',
    text: 'Treinos personalizados, ajuste a cada 45 dias e acompanhamento de perto, onde você estiver.'
  },
  {
    icon: User,
    title: 'PERSONAL',
    accent: 'PRESENCIAL',
    text: 'Treinos individualizados e acompanhamento exclusivo para resultados reais e duradouros.'
  },
  {
    icon: Users,
    title: 'TREINOS EM',
    accent: 'GRUPO',
    text: 'Motivação coletiva, energia contagiante e resultados que vão além do treino.'
  }
]

const benefits = [
  [Dumbbell, 'Ganho de força'],
  [HeartPulse, 'Melhora da saúde'],
  [Sparkles, 'Aumento da autoestima'],
  [Zap, 'Mais disposição e energia']
]

const miniFeatures = [
  [Dumbbell, 'Treinos', 'personalizados'],
  [HeartHandshake, 'Acompanhamento', 'humanizado'],
  [TrendingUp, 'Resultados', 'comprovados']
]

const aboutList = [
  'Formada em Educação Física',
  'Especialista em Treinamento Personalizado',
  'Acompanhamento humanizado e individualizado',
  'Foco em saúde, performance e autoestima',
  'Treinos adaptados à sua rotina e objetivo'
]

const results = [result1, result2, result3, result4]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    return () => {
      window.history.scrollRestoration = 'auto'
    }
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll(
      '.services .service-card, .results .result-card'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const go = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#inicio" onClick={(e)=>{e.preventDefault();go('#inicio')}}>
          <img className="brand-logo" src={logoImg} alt="Bruna Sena" />
          <div>
            <strong>BRUNA SENA</strong>
            <small>PERSONAL TRAINER</small>
          </div>
        </a>

        <button className="mobile-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {[
            ['#inicio','INÍCIO'],
            ['#sobre','SOBRE'],
            ['#servicos','SERVIÇOS'],
            ['#resultados','RESULTADOS'],
            ['#contato','CONTATO']
          ].map(([href,label]) =>
            <a key={href} href={href} onClick={(e)=>{e.preventDefault();go(href)}}>{label}</a>
          )}
        </nav>

        <a className="top-cta" href={wa} target="_blank" rel="noopener noreferrer">FALE COMIGO <ArrowUpRight size={13} /></a>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-bg-lines" />
          <div className="hero-copy">
            <h1>TREINE COM<br/><em>PROPÓSITO.</em><br/>TRANSFORME<br/>SUA VIDA!</h1>
            <p>Mais saúde, mais autoestima e mais qualidade de vida com treinos personalizados e acompanhamento de verdade.</p>
            <div className="hero-actions">
              <a className="primary" href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> QUERO COMEÇAR AGORA</a>
              <button className="secondary" onClick={()=>go('#servicos')}>CONHECER SERVIÇOS</button>
            </div>
            <div className="mini-features">
              {miniFeatures.map(([Icon, l1, l2]) => (
                <span key={l1}><b><Icon size={20} /></b>{l1}<br/>{l2}</span>
              ))}
            </div>
          </div>

          <div className="hero-person">
            <img src={heroImg} alt="Bruna Sena treinando" />
            <div className="hero-glow" />
          </div>
          <div className="geometric geometric-one" aria-hidden="true">⌁</div>
          <div className="geometric geometric-two" aria-hidden="true">⌁</div>
        </section>

        <section className="fact">
          <picture>
            <source media="(max-width: 768px)" srcSet={factMobileImg} />
            <img src={factDesktopImg} alt="Você sabia?" />
          </picture>
        </section>

        <section id="servicos" className="section services">
          <div className="section-heading">
            <span>MEUS <em>SERVIÇOS</em></span>
            <p>Soluções completas para você alcançar seus melhores resultados.</p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.title}>
                <div className="service-icon"><s.icon size={27} /></div>
                <h3>{s.title}<br/><em>{s.accent}</em></h3>
                <p>{s.text}</p>
                <button onClick={()=>go('#contato')}>SAIBA MAIS <ChevronRight size={12} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits section">
          <div className="section-heading compact"><span>BENEFÍCIOS DA <em>MUSCULAÇÃO</em></span></div>
          <div className="benefit-grid">
            {benefits.map(([Icon,text]) => <div className="benefit" key={text}><b><Icon size={19} /></b><span>{text}</span></div>)}
          </div>
        </section>

        <section id="resultados" className="results section">
          <div className="section-heading"><span>RESULTADOS <em>REAIS</em><br/>DE ALUNOS <em>REAIS</em></span></div>
          <div className="results-grid">
            {results.map((src,i) => (
              <div className="result-card" key={src}>
                <img src={src} alt={`Resultado de aluno ${i+1}`} />
                <div><span>ANTES</span><span>DEPOIS</span></div>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre" className="about section">
          <div className="about-photo">
            <img src={aboutImg} alt="Bruna Sena" />
          </div>

          <div className="about-copy">
            <small>SOBRE MIM</small>

            <h2>
              QUEM É<br />
              <span>BRUNA SENA?</span>
            </h2>

            <p>
              Apaixonada por transformar vidas através do exercício e da educação física.
              Acredito que disciplina, consistência e acompanhamento são a chave para uma
              vida mais leve, saudável e confiante.
            </p>

            <ul>
              {aboutList.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>

            <div className="about-highlight">
              Seu objetivo é único. Seu treino também deve ser.
            </div>
          </div>
        </section>

        <section id="contato" className="contact section">
          <div className="contact-bg-text">TRANSFORME</div>

          <div>
            <h2>PRONTA PARA <em>SUA<br/>MELHOR FASE?</em></h2>
            <p>Vamos juntas transformar sua rotina, seu corpo e sua mente!</p>
          </div>
          <div className="contact-action">
            <span className="contact-label">COMECE SUA TRANSFORMAÇÃO</span>

            <a className="primary large" href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> QUERO COMEÇAR AGORA</a>
            <span>Ou fale comigo pelas redes sociais</span>
            <div className="socials">
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
              <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={24} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand">
            <img className="brand-logo" src={logoImg} alt="Bruna Sena" />
            <div><strong>BRUNA SENA</strong><small>PERSONAL TRAINER</small></div>
          </div>
          <p>Treine com propósito.<br/>Transforme sua vida.</p>
        </div>
        <div>
          <h4>LINKS RÁPIDOS</h4>
          <a onClick={()=>go('#inicio')}>Início</a>
          <a onClick={()=>go('#sobre')}>Sobre</a>
          <a onClick={()=>go('#servicos')}>Serviços</a>
          <a onClick={()=>go('#resultados')}>Resultados</a>
          <a onClick={()=>go('#contato')}>Contato</a>
        </div>
        <div>
          <h4>FALE COMIGO</h4>
          <a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={13} /> (81) 99778-6124</a>
          <a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={13} /> @personalbrunasena</a>
        </div>
        <div className="copyright">© 2025 Bruna Sena Personal Trainer. Todos os direitos reservados.</div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
