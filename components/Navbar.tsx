'use client'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/app/data'

const navLinks = [
  { href: '#home', label: '~/home' },
  { href: '#pipeline', label: 'pipeline' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#learn', label: 'commands' },
  { href: '#game', label: 'quiz' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0e17]/95 backdrop-blur border-b border-[#1e2d47]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-mono text-sm text-[#00d68f]">
          <span className="text-[#4a6080]">~/</span>thetwinaung
        </a>
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="font-mono text-sm text-[#4a6080] hover:text-[#00d68f] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-mono text-sm px-3 py-1.5 border border-[#1e2d47] text-[#4a6080] rounded hover:border-[#4da6ff] hover:text-[#4da6ff] transition-all">
            linkedin
          </a>
          <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer"
            className="font-mono text-sm px-3 py-1.5 border border-[#00d68f] text-[#00d68f] rounded hover:bg-[#00d68f] hover:text-[#0a0e17] transition-all">
            resume.pdf
          </a>
        </div>
        <button className="lg:hidden text-[#4a6080] text-xl hover:text-[#cdd6f4]" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0f1520] border-b border-[#1e2d47] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-mono text-sm text-[#4a6080] hover:text-[#00d68f] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
