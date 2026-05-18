'use client'
import { siteConfig } from '@/app/data'

const links = [
  { label: 'minthetwinaung@gmail.com', href: `mailto:${siteConfig.email}`, icon: '✉', color: '#00d68f' },
  { label: '+66 65 294 0798', href: `tel:${siteConfig.phone}`, icon: '☏', color: '#4da6ff' },
  { label: 'LinkedIn Profile', href: siteConfig.linkedin, icon: '💼', color: '#a78bfa' },
  { label: 'Coursera Certs', href: 'https://coursera.org/share/f8d9b1e7ea7d9b34bad2317baf02461f', icon: '📜', color: '#fb923c' },
  { label: 'Khlong Toei, Bangkok', href: '#', icon: '📍', color: '#22d3ee' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-[#162038] relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="section-heading flex justify-center">// get in touch</div>
        <h2 className="font-display text-4xl font-bold text-[#cdd6f4] mb-4">
          Let&apos;s build something great
        </h2>
        <p className="font-mono text-sm text-[#8899bb] max-w-md mx-auto mb-12 leading-relaxed">
          Open to Data Engineering roles, pipeline architecture projects, and BI collaborations.
          Currently based in Bangkok, Thailand.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {links.map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 font-mono text-sm px-5 py-3 border border-[#1e2d47] text-[#4a6080] rounded-lg transition-all duration-200"
              style={{ '--hover-color': l.color } as React.CSSProperties}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = l.color
                el.style.color = l.color
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = '#1e2d47'
                el.style.color = '#4a6080'
              }}>
              <span>{l.icon}</span> {l.label}
            </a>
          ))}
        </div>
        <div className="border-t border-[#162038] pt-8">
          <div className="font-mono text-sm text-[#4a6080]">
            <span className="text-[#00d68f]">$ </span>
            built with <span className="text-[#4da6ff]">Next.js 14</span> ·
            {/* deployed on <span className="text-[#a78bfa]">Vercel</span> · */}
            designed by <span className="text-[#cdd6f4]">Thet Win Aung</span>
            <span className="cursor-blink text-[#00d68f] ml-0.5">_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
