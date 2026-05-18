'use client'
import { experience } from '@/app/data'

const tagColors: Record<string, string> = {
  'dbt': 'badge-green', 'Airflow': 'badge-green', 'SSIS': 'badge-green',
  'ClickHouse': 'badge-blue', 'Kafka': 'badge-blue',
  'MinIO': 'badge-cyan', 'OpenMetadata': 'badge-cyan', 'Power BI': 'badge-cyan',
  'Python': 'badge-purple', 'C#.NET': 'badge-purple', 'JavaScript': 'badge-purple',
  'Azure Data Factory': 'badge-orange', 'Azure': 'badge-orange', 'SAP S/4HANA': 'badge-orange',
  'SQL Server': 'badge-blue', 'ArgoCD': 'badge-orange',
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-[#162038] relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">// work experience</div>
        <h2 className="font-display text-3xl font-bold text-[#cdd6f4] mb-2">Where I&apos;ve worked</h2>
        <p className="font-mono text-sm text-[#8899bb] mb-10">12+ years: software development → BI development → Data Engineering.</p>
        <div className="relative pl-8">
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-[#1e2d47]" />
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-2 w-3 h-3 rounded-full border-2 border-[#00d68f] bg-[#0a0e17]" />
                <div className="dark-card">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-mono text-base font-semibold text-[#cdd6f4]">{job.role}</h3>
                      <div className="font-mono text-sm text-[#4da6ff] mt-1">@ {job.company}</div>
                    </div>
                    <span className="font-mono text-sm text-[#fb923c] whitespace-nowrap">{job.period}</span>
                  </div>
                  <p className="font-mono text-sm text-[#8899bb] leading-relaxed mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className={tagColors[tag] || 'badge-purple'}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
