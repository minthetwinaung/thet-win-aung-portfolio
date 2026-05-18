'use client'
import { useState, useEffect } from 'react'
import { siteConfig, stats, techStack } from '@/app/data'

const badgeClass: Record<string, string> = {
  orchestration: 'badge-green',
  processing: 'badge-blue',
  language: 'badge-purple',
  cloud: 'badge-orange',
  bi: 'badge-cyan',
}

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [shown, setShown] = useState('')
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  useEffect(() => {
    if (!started || shown.length >= text.length) return
    const t = setTimeout(() => setShown(text.slice(0, shown.length + 1)), 40)
    return () => clearTimeout(t)
  }, [shown, started, text])
  return (
    <span>
      {shown}
      {shown.length < text.length && (
        <span className="cursor-blink text-[#00d68f] ml-0.5">|</span>
      )}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          {/* Left — text */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="fade-up font-mono text-sm text-[#00d68f] flex items-center gap-3 mb-5">
              <span className="w-5 h-px bg-[#00d68f]"></span>$ whoami
            </div>
            <h1 className="fade-up delay-1 font-display font-extrabold leading-none mb-4 tracking-tight"
              style={{ fontSize: 'clamp(44px,7vw,76px)', color: '#cdd6f4' }}>
              <TypeWriter text="Thet Win Aung" delay={300} />
            </h1>
            <div className="fade-up delay-2 font-mono text-[#4da6ff] text-base md:text-lg mb-5 tracking-wide">
              <TypeWriter text={siteConfig.tagline} delay={900} />
            </div>
            <p className="fade-up delay-3 font-mono text-sm text-[#8899bb] leading-relaxed max-w-xl mb-8">
              {siteConfig.bio}
            </p>
            <div className="fade-up delay-4 flex flex-wrap gap-2 mb-10">
              {techStack.map(t => (
                <span key={t.name} className={badgeClass[t.category] || 'badge-green'}
                  style={{ fontSize: '12px', padding: '5px 11px' }}>
                  {t.name}
                </span>
              ))}
            </div>
            <div className="fade-up delay-5 flex flex-wrap gap-3">
              <a href="#projects"
                className="font-mono text-sm px-6 py-3 border border-[#00d68f] text-[#00d68f] rounded hover:bg-[#00d68f] hover:text-[#0a0e17] transition-all duration-200">
                view projects →
              </a>
              <a href={`mailto:${siteConfig.email}`}
                className="font-mono text-sm px-5 py-3 border border-[#1e2d47] text-[#4a6080] rounded hover:border-[#4da6ff] hover:text-[#4da6ff] transition-all duration-200">
                ✉ email
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                className="font-mono text-sm px-5 py-3 border border-[#1e2d47] text-[#4a6080] rounded hover:border-[#00d68f] hover:text-[#00d68f] transition-all duration-200">
                linkedin
              </a>
            </div>
          </div>

          {/* Right — profile photo */}
          <div className="order-1 lg:order-2 fade-up delay-2 flex-shrink-0">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #00d68f, #4da6ff, #a78bfa, #00d68f)',
                  padding: '3px',
                  borderRadius: '50%',
                  animation: 'spin 6s linear infinite',
                }}>
              </div>
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden"
                style={{
                  border: '3px solid transparent',
                  background: 'linear-gradient(#0a0e17, #0a0e17) padding-box, conic-gradient(from 0deg, #00d68f, #4da6ff, #a78bfa, #00d68f) border-box',
                  boxShadow: '0 0 40px rgba(0,214,143,0.25), 0 0 80px rgba(77,166,255,0.1)',
                }}>
                <img src="/photo.png" alt="Thet Win Aung" className="w-full h-full object-cover" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0f1520] border border-[#1e2d47] rounded-full px-3 py-1.5 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-[#00d68f]" style={{ animation: 'pulse 2s infinite' }}></div>
                <span className="font-mono text-[10px] text-[#00d68f]">Hi, Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="fade-up delay-5 grid grid-cols-2 md:grid-cols-4 gap-3 mt-16">
          {stats.map(s => (
            <div key={s.label} className="dark-card text-center">
              <div className="font-display text-3xl font-bold text-[#00d68f] mb-1">{s.value}</div>
              <div className="font-mono text-xs text-[#4a6080]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
      `}</style>
    </section>
  )
}
