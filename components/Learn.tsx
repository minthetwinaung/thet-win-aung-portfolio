'use client'
import { useState } from 'react'

const categories = [
  {
    id: 'airflow',
    label: 'Airflow',
    color: '#00d68f',
    commands: [
      { cmd: 'airflow dags list', desc: 'List all DAGs' },
      { cmd: 'airflow dags trigger <dag_id>', desc: 'Manually trigger a DAG' },
      { cmd: 'airflow dags pause <dag_id>', desc: 'Pause a DAG' },
      { cmd: 'airflow dags unpause <dag_id>', desc: 'Unpause a DAG' },
      { cmd: 'airflow tasks list <dag_id>', desc: 'List tasks in a DAG' },
      { cmd: 'airflow tasks run <dag_id> <task_id> <date>', desc: 'Run a single task' },
      { cmd: 'airflow dags backfill -s 2024-01-01 -e 2024-01-07 <dag_id>', desc: 'Backfill DAG runs' },
      { cmd: 'airflow db init', desc: 'Initialize Airflow database' },
      { cmd: 'airflow scheduler', desc: 'Start the scheduler' },
      { cmd: 'airflow webserver --port 8080', desc: 'Start web server' },
    ],
  },
  {
    id: 'dbt',
    label: 'dbt',
    color: '#fb923c',
    commands: [
      { cmd: 'dbt run', desc: 'Run all models' },
      { cmd: 'dbt run --select <model_name>', desc: 'Run specific model' },
      { cmd: 'dbt run --select staging.*', desc: 'Run all staging models' },
      { cmd: 'dbt test', desc: 'Run all tests' },
      { cmd: 'dbt test --select <model_name>', desc: 'Test specific model' },
      { cmd: 'dbt compile', desc: 'Compile SQL without running' },
      { cmd: 'dbt debug', desc: 'Check connection & config' },
      { cmd: 'dbt docs generate', desc: 'Generate documentation' },
      { cmd: 'dbt docs serve', desc: 'Serve docs locally' },
      { cmd: 'dbt seed', desc: 'Load CSV seed files' },
      { cmd: 'dbt snapshot', desc: 'Run snapshot models (SCD Type 2)' },
      { cmd: 'dbt deps', desc: 'Install dbt packages' },
    ],
  },
  {
    id: 'kafka',
    label: 'Kafka',
    color: '#4da6ff',
    commands: [
      { cmd: 'kafka-topics.sh --list --bootstrap-server localhost:9092', desc: 'List all topics' },
      { cmd: 'kafka-topics.sh --create --topic <name> --bootstrap-server localhost:9092', desc: 'Create a topic' },
      { cmd: 'kafka-topics.sh --describe --topic <name> --bootstrap-server localhost:9092', desc: 'Describe a topic' },
      { cmd: 'kafka-console-producer.sh --topic <name> --bootstrap-server localhost:9092', desc: 'Produce messages' },
      { cmd: 'kafka-console-consumer.sh --topic <name> --from-beginning --bootstrap-server localhost:9092', desc: 'Consume messages' },
      { cmd: 'kafka-consumer-groups.sh --list --bootstrap-server localhost:9092', desc: 'List consumer groups' },
      { cmd: 'kafka-consumer-groups.sh --describe --group <group> --bootstrap-server localhost:9092', desc: 'Describe consumer group' },
      { cmd: 'kafka-topics.sh --delete --topic <name> --bootstrap-server localhost:9092', desc: 'Delete a topic' },
    ],
  },
  {
    id: 'clickhouse',
    label: 'ClickHouse',
    color: '#f87171',
    commands: [
      { cmd: 'clickhouse-client', desc: 'Connect to ClickHouse CLI' },
      { cmd: 'SHOW DATABASES', desc: 'List all databases' },
      { cmd: 'USE <database>', desc: 'Switch database' },
      { cmd: 'SHOW TABLES', desc: 'List all tables' },
      { cmd: 'DESCRIBE TABLE <table>', desc: 'Show table schema' },
      { cmd: 'SELECT count() FROM <table>', desc: 'Count rows' },
      { cmd: 'OPTIMIZE TABLE <table> FINAL', desc: 'Merge parts (deduplicate)' },
      { cmd: 'SELECT * FROM system.processes', desc: 'See running queries' },
      { cmd: 'KILL QUERY WHERE query_id = \'<id>\'', desc: 'Kill a query' },
      { cmd: 'INSERT INTO <table> SELECT * FROM s3(...)', desc: 'Load from S3/MinIO' },
    ],
  },
  {
    id: 'python',
    label: 'Python/SQL',
    color: '#a78bfa',
    commands: [
      { cmd: 'pip install dbt-clickhouse apache-airflow', desc: 'Install key packages' },
      { cmd: 'python -m venv .venv && source .venv/bin/activate', desc: 'Create virtual env' },
      { cmd: 'pip freeze > requirements.txt', desc: 'Save dependencies' },
      { cmd: 'pip install -r requirements.txt', desc: 'Install from requirements' },
      { cmd: 'jupyter lab', desc: 'Start JupyterLab' },
      { cmd: 'psql -h localhost -U postgres -d mydb', desc: 'Connect to PostgreSQL' },
      { cmd: 'sqlcmd -S localhost -U sa -P password', desc: 'Connect to MS SQL Server' },
      { cmd: 'SELECT version()', desc: 'Check DB version' },
      { cmd: 'EXPLAIN ANALYZE SELECT ...', desc: 'Analyze query performance' },
    ],
  },
  {
    id: 'git',
    label: 'Git / ArgoCD',
    color: '#22d3ee',
    commands: [
      { cmd: 'git status', desc: 'Check working tree status' },
      { cmd: 'git pull origin main', desc: 'Pull latest changes' },
      { cmd: 'git checkout -b feature/<name>', desc: 'Create new feature branch' },
      { cmd: 'git add . && git commit -m "feat: description"', desc: 'Stage and commit' },
      { cmd: 'git push origin feature/<name>', desc: 'Push branch' },
      { cmd: 'argocd app list', desc: 'List ArgoCD applications' },
      { cmd: 'argocd app sync <app-name>', desc: 'Sync ArgoCD app' },
      { cmd: 'argocd app get <app-name>', desc: 'Get app status' },
      { cmd: 'kubectl get pods -n airflow', desc: 'Check Airflow pods' },
      { cmd: 'kubectl logs <pod-name> -n airflow', desc: 'View pod logs' },
    ],
  },
]

export default function Learn() {
  const [active, setActive] = useState('airflow')
  const [copied, setCopied] = useState('')

  const cat = categories.find(c => c.id === active)!

  const copy = (cmd: string) => {
    navigator.clipboard.writeText(cmd)
    setCopied(cmd)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <section id="learn" className="py-20 px-6 border-t border-[#162038] relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="section-heading">// data engineer command reference</div>
        <h2 className="font-display text-2xl font-bold text-[#cdd6f4] mb-2">Command Cheatsheet</h2>
        <p className="font-mono text-xs text-[#8899bb] mb-8">Click any command to copy it to clipboard.</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className="font-mono text-sm px-4 py-2 rounded border transition-all duration-200"
              style={{
                background: active === c.id ? c.color + '18' : 'transparent',
                borderColor: active === c.id ? c.color : '#1e2d47',
                color: active === c.id ? c.color : '#4a6080',
              }}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="bg-[#0f1520] border border-[#1e2d47] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2d47] bg-[#141c2e]">
            <div className="w-3 h-3 rounded-full bg-[#f87171]"></div>
            <div className="w-3 h-3 rounded-full bg-[#fb923c]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00d68f]"></div>
            <span className="font-mono text-[10px] text-[#4a6080] ml-2">terminal — {cat.label} commands</span>
          </div>
          <div className="p-4 space-y-2">
            {cat.commands.map((item) => (
              <div key={item.cmd}
                onClick={() => copy(item.cmd)}
                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-[#141c2e] cursor-pointer transition-all border border-transparent hover:border-[#1e2d47]">
                <span className="font-mono text-[10px] mt-0.5 flex-shrink-0" style={{ color: cat.color }}>$</span>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-sm text-[#cdd6f4] break-all">{item.cmd}</div>
                  <div className="font-mono text-xs text-[#4a6080] mt-1">{item.desc}</div>
                </div>
                <span className="font-mono text-[9px] text-[#4a6080] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  {copied === item.cmd ? '✓ copied' : 'copy'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
