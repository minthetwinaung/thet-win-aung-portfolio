'use client'
import { useState, useEffect, useCallback } from 'react'

const questions = [
  { q: "What does DAG stand for in Apache Airflow?", a: "Directed Acyclic Graph", options: ["Data Aggregation Group", "Directed Acyclic Graph", "Dynamic Auto Generator", "Data Analytics Grid"] },
  { q: "What is the main purpose of the dbt Staging layer?", a: "Clean and rename raw source data", options: ["Apply business logic", "Clean and rename raw source data", "Generate final reports", "Delete old data"] },
  { q: "What type of database is ClickHouse?", a: "Column-oriented (OLAP)", options: ["Row-oriented (OLTP)", "Column-oriented (OLAP)", "Graph Database", "Document Database"] },
  { q: "In Kafka, where are messages stored?", a: "Topic", options: ["Queue", "Stream", "Topic", "Channel"] },
  { q: "What does 'dbt run --select staging.*' do?", a: "Runs all models in the staging folder", options: ["Runs only one model named staging", "Runs all models in the staging folder", "Queries staging schema tables", "Triggers a staging DAG"] },
  { q: "What is MinIO used for?", a: "S3-compatible object storage", options: ["SQL database", "S3-compatible object storage", "Message queue", "Workflow orchestration"] },
  { q: "What is ArgoCD?", a: "GitOps continuous delivery tool for Kubernetes", options: ["CI testing tool", "GitOps continuous delivery tool for Kubernetes", "Data pipeline framework", "Monitoring platform"] },
  { q: "What does the dbt ref() function do?", a: "References one model from another model", options: ["References an external table", "References one model from another model", "Creates a database connection", "Loads a config file"] },
  { q: "What does Airflow schedule='0 8 * * *' mean?", a: "Every day at 8:00 AM", options: ["Every hour at minute 8", "Every day at 8:00 AM", "8th day of every month", "Every 8 minutes"] },
  { q: "What is ReplacingMergeTree in ClickHouse used for?", a: "Deduplicating rows on merge", options: ["Compressing data", "Deduplicating rows on merge", "Partitioning data", "Building indexes"] },
  { q: "What is a Kafka Consumer Group?", a: "A group of consumers that read from topics in parallel", options: ["A producer cluster", "A group of consumers that read from topics in parallel", "A broker cluster", "A Zookeeper group"] },
  { q: "What does dbt test check?", a: "Data quality (not null, unique, relationships)", options: ["SQL syntax errors", "Data quality (not null, unique, relationships)", "Python runtime errors", "Network connectivity"] },
  { q: "In dbt, what is the Mart layer for?", a: "Final business-facing aggregated models", options: ["Raw data ingestion", "Final business-facing aggregated models", "Source system connections", "Data deletion"] },
  { q: "What does OpenMetadata provide?", a: "Data catalog and metadata management", options: ["Data storage", "Data catalog and metadata management", "Pipeline orchestration", "Message streaming"] },
]

export default function Game() {
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [shuffled, setShuffled] = useState<typeof questions>([])
  const [timeLeft, setTimeLeft] = useState(20)
  const [streak, setStreak] = useState(0)
  const [ready, setReady] = useState(false)

  const startGame = useCallback(() => {
    const s = [...questions].sort(() => Math.random() - 0.5).slice(0, 8)
    setShuffled(s)
    setIdx(0)
    setScore(0)
    setSelected(null)
    setDone(false)
    setTimeLeft(20)
    setStreak(0)
    setReady(true)
  }, [])

  useEffect(() => { startGame() }, [startGame])

  useEffect(() => {
    if (!ready || selected || done || shuffled.length === 0) return
    if (timeLeft <= 0) {
      setSelected('__timeout__')
      setStreak(0)
      setTimeout(() => {
        if (idx + 1 >= shuffled.length) setDone(true)
        else { setIdx(i => i + 1); setSelected(null); setTimeLeft(20) }
      }, 1200)
      return
    }
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000)
    return () => clearInterval(t)
  }, [timeLeft, selected, done, shuffled.length, ready, idx])

  const handleAnswer = (opt: string) => {
    if (selected || !ready) return
    setSelected(opt)
    const correct = opt === shuffled[idx].a
    if (correct) { setScore(s => s + (timeLeft > 10 ? 2 : 1)); setStreak(s => s + 1) }
    else setStreak(0)
    setTimeout(() => {
      if (idx + 1 >= shuffled.length) setDone(true)
      else { setIdx(i => i + 1); setSelected(null); setTimeLeft(20) }
    }, 1400)
  }

  if (!ready || shuffled.length === 0) {
    return (
      <section id="game" className="py-20 px-6 border-t border-[#162038] relative z-10">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs text-[#4a6080]">Loading quiz...</p>
        </div>
      </section>
    )
  }

  const q = shuffled[idx]

  return (
    <section id="game" className="py-20 px-6 border-t border-[#162038] relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="section-heading">// interactive quiz</div>
        <h2 className="font-display text-3xl font-bold text-[#cdd6f4] mb-2">Data Engineer Quiz</h2>
        <p className="font-mono text-sm text-[#8899bb] mb-8">Test your knowledge — dbt · Airflow · Kafka · ClickHouse · OpenMetadata</p>

        {!done ? (
          <div className="max-w-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm text-[#4a6080]">Question {idx + 1} / {shuffled.length}</span>
              <div className="flex items-center gap-4">
                {streak >= 2 && <span className="font-mono text-sm text-[#fb923c]">🔥 {streak} streak</span>}
                <span className="font-mono text-sm text-[#00d68f]">Score: {score}</span>
                <span className={`font-mono text-base font-bold ${timeLeft <= 5 ? 'text-[#f87171]' : 'text-[#4da6ff]'}`}>{timeLeft}s</span>
              </div>
            </div>
            <div className="h-1 bg-[#162038] rounded-full mb-2 overflow-hidden">
              <div className="h-full bg-[#00d68f] rounded-full transition-all duration-400"
                style={{ width: `${((idx) / shuffled.length) * 100}%` }} />
            </div>
            <div className="h-1 bg-[#162038] rounded-full mb-6 overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 5 ? 'bg-[#f87171]' : 'bg-[#4da6ff]'}`}
                style={{ width: `${(timeLeft / 20) * 100}%` }} />
            </div>
            <div className="bg-[#0f1520] border border-[#1e2d47] rounded-xl p-6 mb-5">
              <div className="font-mono text-xs text-[#00d68f] mb-3">$ quiz --question {idx + 1}</div>
              <p className="font-mono text-base text-[#cdd6f4] leading-relaxed">{q.q}</p>
            </div>
            <div className="space-y-3">
              {q.options.map(opt => {
                let style = 'border-[#1e2d47] text-[#8899bb] hover:border-[#4da6ff] hover:text-[#cdd6f4]'
                if (selected) {
                  if (opt === q.a) style = 'border-[#00d68f] text-[#00d68f] bg-[#00d68f]/10'
                  else if (opt === selected) style = 'border-[#f87171] text-[#f87171] bg-[#f87171]/10'
                  else style = 'border-[#1e2d47] text-[#4a6080]'
                }
                return (
                  <button key={opt} onClick={() => handleAnswer(opt)}
                    className={`w-full text-left font-mono text-sm p-4 rounded-lg border transition-all duration-200 ${style}`}>
                    <span className="text-[#4a6080] mr-2">→</span>{opt}
                  </button>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl text-center">
            <div className="bg-[#0f1520] border border-[#1e2d47] rounded-xl p-10">
              <div className="font-mono text-sm text-[#00d68f] mb-4">$ quiz --result</div>
              <div className="font-display text-7xl font-bold mb-3"
                style={{ color: score >= 12 ? '#00d68f' : score >= 8 ? '#fb923c' : '#f87171' }}>
                {score}
              </div>
              <div className="font-mono text-sm text-[#8899bb] mb-6">points out of {shuffled.length * 2} possible</div>
              <div className="font-mono text-base text-[#cdd6f4] mb-8">
                {score >= 12 ? '🏆 Senior Data Engineer level!' : score >= 8 ? '⚡ Mid-level — keep building!' : '📚 Keep learning — you got this!'}
              </div>
              <button onClick={startGame}
                className="font-mono text-sm px-6 py-3 border border-[#00d68f] text-[#00d68f] rounded hover:bg-[#00d68f] hover:text-[#0a0e17] transition-all">
                $ restart --quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
