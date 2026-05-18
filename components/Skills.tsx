'use client'
import { useState, useEffect, useRef } from 'react'
import { skills, certifications, education } from '@/app/data'

const barColor: Record<string, string> = {
  language: '#a78bfa', orchestration: '#00d68f',
  bi: '#22d3ee', cloud: '#fb923c', processing: '#4da6ff',
}

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-6 border-t border-[#162038] relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">// technical skills & certifications</div>
        <h2 className="font-display text-3xl font-bold text-[#cdd6f4] mb-2">Tech stack depth</h2>
        <p className="font-mono text-sm text-[#8899bb] mb-10">12+ years of hands-on enterprise experience.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div ref={ref} className="space-y-5">
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm text-[#cdd6f4]">{s.name}</span>
                  <span className="font-mono text-sm text-[#4a6080]">{s.level}%</span>
                </div>
                <div className="h-1.5 bg-[#162038] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: visible ? `${s.level}%` : '0%', background: barColor[s.category] || '#00d68f', transitionDelay: `${i * 80}ms` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="dark-card">
              <div className="section-heading mb-4">// IBM Coursera certifications</div>
              <div className="space-y-4">
                {certifications.map(c => (
                  <div key={c.name} className="flex justify-between items-start border-b border-[#162038] pb-4 last:border-none last:pb-0">
                    <div>
                      <div className="font-mono text-sm text-[#cdd6f4] mb-1">{c.name}</div>
                      <div className="font-mono text-xs text-[#4a6080] mb-1">{c.issuer}</div>
                      <a href={c.link} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-xs text-[#4da6ff] hover:underline">↗ verify certificate</a>
                    </div>
                    <span className="font-mono text-xs text-[#fb923c] whitespace-nowrap ml-3">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="dark-card">
              <div className="section-heading mb-4">// education</div>
              <div className="space-y-4">
                {education.map(e => (
                  <div key={e.degree} className="flex justify-between items-start border-b border-[#162038] pb-4 last:border-none last:pb-0">
                    <div>
                      <div className="font-mono text-sm text-[#cdd6f4] mb-1">{e.degree}</div>
                      <div className="font-mono text-xs text-[#4a6080]">{e.school}</div>
                    </div>
                    <span className="font-mono text-xs text-[#fb923c] whitespace-nowrap ml-3">{e.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
