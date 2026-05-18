'use client'
import { projects } from '@/app/data'
import { Github, ExternalLink, Database, GitBranch, Cloud, BarChart3 } from 'lucide-react'

const icons: Record<string, React.ReactNode> = {
  database: <Database size={22} />,
  'git-branch': <GitBranch size={22} />,
  cloud: <Cloud size={22} />,
  'chart-bar': <BarChart3 size={22} />,
}
const iconColor: Record<string, string> = {
  database: 'text-[#00d68f]',
  'git-branch': 'text-[#4da6ff]',
  cloud: 'text-[#fb923c]',
  'chart-bar': 'text-[#a78bfa]',
}
const tagClass: Record<string, string> = {
  orchestration: 'badge-green',
  processing: 'badge-blue',
  language: 'badge-purple',
  cloud: 'badge-orange',
  bi: 'badge-cyan',
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-[#162038] relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">// featured projects</div>
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#cdd6f4] mb-1">What I&apos;ve built</h2>
            <p className="font-mono text-sm text-[#8899bb]">Real enterprise systems — real scale, real impact.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(p => (
            <div key={p.title} className="dark-card hover:border-[#4da6ff]/30 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className={iconColor[p.icon]}>{icons[p.icon]}</div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-[#4a6080] hover:text-[#cdd6f4] transition-colors"><Github size={16} /></a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-[#4a6080] hover:text-[#4da6ff] transition-colors"><ExternalLink size={16} /></a>
                </div>
              </div>
              <h3 className="font-mono text-sm font-semibold text-[#cdd6f4] mb-2">{p.title}</h3>
              <p className="font-mono text-sm text-[#8899bb] leading-relaxed mb-3 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.metrics.map(m => (
                  <span key={m} className="font-mono text-xs text-[#00d68f] bg-[#00d68f]/5 border border-[#00d68f]/20 px-2 py-1 rounded">{m}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t.name} className={tagClass[t.type]}>{t.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
