import type { Metadata } from 'next'
import { JetBrains_Mono, Syne } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300','400', '500', '600', '700'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400','600','700','800'],
})

export const metadata: Metadata = {
  title: 'Thet Win Aung — Data Engineer & BI Developer',
  description: '12+ years experience in ETL pipelines, Data Warehouse, Power BI, and Azure cloud. Currently at Grand Royal Group (ThaiBev), Bangkok.',
  keywords: ['Data Engineer', 'BI Developer', 'ETL', 'SSIS', 'Power BI', 'Azure Data Factory', 'SQL Server', 'SAP S/4HANA'],
  openGraph: {
    title: 'Thet Win Aung — Data Engineer & BI Developer',
    description: 'ETL Pipeline Architect · Azure Cloud · Power BI · 12+ years experience',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${syne.variable}`}>
      <body className="bg-[#0a0e17] text-[#cdd6f4] antialiased">
        {children}
      </body>
    </html>
  )
}
