'use client'
import { pipelineSteps } from '@/app/data'

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-20 px-6 border-t border-[#162038] relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="section-heading">// data pipeline architecture</div>
        <h2 className="font-display text-2xl font-bold text-[#cdd6f4] mb-2">How I build data systems</h2>
        <p className="font-mono text-sm text-[#8899bb] leading-relaxed mb-10 max-w-2xl">
          End-to-end pipeline design — from ERP/SAP source systems to analytics-ready data warehouse and Power BI dashboards.
        </p>
        <div className="overflow-x-auto pb-4">
          <div className="flex items-start gap-2 min-w-max">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className="bg-[#141c2e] border border-[#1e2d47] rounded-lg px-4 py-3 hover:border-[#00d68f]/50 transition-colors cursor-default min-w-[130px] text-center">
                    <div className="font-mono text-sm text-[#cdd6f4] font-medium mb-1">{step.label}</div>
                    <div className="font-mono text-[9px] text-[#4a6080]">{step.sub}</div>
                  </div>
                  <div className="font-mono text-[9px] text-[#4a6080] mt-2">step {String(i + 1).padStart(2,'0')}</div>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <span className="text-[#00d68f] text-base mt-[-12px]">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'ETL & Batch Processing',
              desc: 'SSIS ETL pipelines collecting from ERP operational systems (Finance, Inventory, Manufacturing, Logistics) into staging & production DW servers with retry logic and monitoring.',
              tools: ['SSIS', 'SQL Server', 'Airflow', 'dbt'],
              color: 'text-[#00d68f] border-[#00d68f]/20',
            },
            {
              title: 'Cloud Data Platform',
              desc: 'Azure Data Factory pipelines, Azure SQL Managed Instance, Azure Storage. SAP S/4HANA integration with new Data Warehouse architecture on Azure cloud.',
              tools: ['Azure Data Factory', 'Azure SQL', 'SAP S/4HANA', 'Azure Storage'],
              color: 'text-[#fb923c] border-[#fb923c]/20',
            },
            {
              title: 'BI & Reporting',
              desc: 'Power BI dashboards for Finance (ThaiBev), Trade Edge DMS, and Trade Edge Monitoring — enabling data-driven strategic decisions across the group.',
              tools: ['Power BI', 'DAX', 'SQL', 'Azure'],
              color: 'text-[#22d3ee] border-[#22d3ee]/20',
            },
          ].map(item => (
            <div key={item.title} className={`dark-card border ${item.color}`}>
              <h3 className={`font-mono text-xs font-medium mb-2 ${item.color.split(' ')[0]}`}>{item.title}</h3>
              <p className="font-mono text-[11px] text-[#8899bb] leading-relaxed mb-3">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tools.map(t => (
                  <span key={t} className="font-mono text-[9px] text-[#4a6080] bg-[#0a0e17] px-2 py-0.5 rounded border border-[#1e2d47]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
