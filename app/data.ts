export const siteConfig = {
  name: "Thet Win Aung",
  role: "Data Engineer",
  tagline: "dbt · Airflow · ClickHouse · Kafka · Azure",
  bio: "Data Engineer with 12+ years of experience. Currently at ThaiBev building modern data platforms with dbt, Apache Airflow, ClickHouse, Kafka, and MinIO. Previously built enterprise ETL/BI solutions at Grand Royal Group and Myanmar Information Technology.",
  github: "https://github.com/thetwinaung",
  linkedin: "https://www.linkedin.com/in/sike-rot-720465347/",
  email: "minthetwinaung@gmail.com",
  phone: "+66 65 294 0798",
  location: "Khlong Toei, Bangkok, Thailand",
  resume: "https://drive.google.com/file/d/1vdVwgqUXSPIDfdCeiCgV9k6RfstvrDlS/view?usp=drive_link",
}

export const stats = [
  { value: "12+", label: "years experience" },
  { value: "20+", label: "enterprise projects" },
  { value: "4", label: "cloud platforms" },
  { value: "4", label: "IBM certifications" },
]

export const techStack = [
  { name: "Apache Airflow", category: "orchestration" },
  { name: "dbt", category: "orchestration" },
  { name: "Apache Kafka", category: "processing" },
  { name: "ClickHouse", category: "processing" },
  { name: "MinIO", category: "cloud" },
  { name: "Python", category: "language" },
  { name: "SQL / T-SQL", category: "language" },
  { name: "Azure Data Factory", category: "cloud" },
  { name: "Power BI", category: "bi" },
  { name: "SSIS / ETL", category: "orchestration" },
  { name: "SAP S/4HANA", category: "cloud" },
  { name: "Snowflake", category: "cloud" },
]

export const pipelineSteps = [
  { label: "Source Systems", sub: "ERP · APIs · DB" },
  { label: "Ingestion", sub: "Kafka · Airflow" },
  { label: "Storage", sub: "MinIO · ClickHouse" },
  { label: "Transform", sub: "dbt · Spark" },
  { label: "Data Mart", sub: "Staging · Mart" },
  { label: "Analytics", sub: "Power BI · OpenMetadata" },
]

export const projects = [
  {
    title: "ThaiBev CDP & OishiClub Data Platform",
    description: "Built end-to-end Customer Data Platform pipelines for OishiClub, CDP, MTM/VSMS, chanworld, sook, sx projects using Airflow DAGs, dbt models (Staging → Intermediate → Mart layers), and ClickHouse as the production database.",
    metrics: ["10+ DAG pipelines", "3-layer dbt models", "ClickHouse prod"],
    tags: [
      { name: "Airflow", type: "orchestration" },
      { name: "dbt", type: "orchestration" },
      { name: "ClickHouse", type: "processing" },
      { name: "Kafka", type: "processing" },
    ],
    github: "https://github.com/thetwinaung",
    icon: "database",
  },
  {
    title: "BevFood & Delta Lake Pipeline",
    description: "dag_bevfood_delta_to_minio_and_clickhouse — Delta Lake pipeline using Spark, moving BevFood data into MinIO object storage and ClickHouse for analytics. Part of ThaiBev modern data stack.",
    metrics: ["Delta Lake", "MinIO + ClickHouse", "Spark processing"],
    tags: [
      { name: "Kafka", type: "processing" },
      { name: "MinIO", type: "cloud" },
      { name: "ClickHouse", type: "processing" },
      { name: "Python", type: "language" },
    ],
    github: "https://github.com/thetwinaung",
    icon: "git-branch",
  },
  {
    title: "Grand Royal Group Data Warehouse (ThaiBev)",
    description: "New DW architecture with dedicated staging and production servers. SSIS ETL for Finance, Inventory, Manufacturing, Logistics. SAP S/4HANA integration. Power BI dashboards: ThaiBev Finance, Trade Edge DMS, Trade Edge Monitoring.",
    metrics: ["5+ ERP modules", "ADF pipelines", "SAP integration"],
    tags: [
      { name: "Power BI", type: "bi" },
      { name: "Azure Data Factory", type: "cloud" },
      { name: "SSIS", type: "orchestration" },
      { name: "SAP S/4HANA", type: "cloud" },
    ],
    github: "https://github.com/thetwinaung",
    icon: "chart-bar",
  },
  {
    title: "JupyterLab Data Migration",
    description: "Database migration using JupyterLab — moving data from PostgreSQL and MS SQL Server into ClickHouse production database. Automated migration scripts for large-scale data transfer.",
    metrics: ["Postgres → ClickHouse", "MS SQL → ClickHouse", "Automated scripts"],
    tags: [
      { name: "Python", type: "language" },
      { name: "ClickHouse", type: "processing" },
      { name: "SQL", type: "language" },
    ],
    github: "https://github.com/thetwinaung",
    icon: "database",
  },
  {
    title: "Pacific AA Power BI on Azure",
    description: "Data Warehouse design and BI dashboards hosted on Azure, delivering detailed business insights. Completed remotely during COVID-19 under challenging conditions.",
    metrics: ["Azure hosted", "DW + BI reports", "Remote delivery"],
    tags: [
      { name: "Power BI", type: "bi" },
      { name: "Azure", type: "cloud" },
      { name: "SQL Server", type: "language" },
    ],
    github: "https://github.com/thetwinaung",
    icon: "cloud",
  },
  {
    title: "V5/V6 ERP & mPOS Systems (MIT)",
    description: "Enterprise ERP for retail/enterprise sectors with EOD processing, multi-branch data centralization. mPOS and mPOS Plus for real-time retail tracking and ERP integration.",
    metrics: ["Multi-branch", "EOD processing", "V5 & V6"],
    tags: [
      { name: "C#.NET", type: "language" },
      { name: "SQL Server", type: "language" },
      { name: "SSIS", type: "orchestration" },
    ],
    github: "https://github.com/thetwinaung",
    icon: "git-branch",
  },
]

export const skills = [
  { name: "SQL / T-SQL", level: 95, category: "language" },
  { name: "dbt (Staging/Intermediate/Mart)", level: 88, category: "orchestration" },
  { name: "Apache Airflow (DAGs)", level: 88, category: "orchestration" },
  { name: "ClickHouse", level: 82, category: "processing" },
  { name: "Apache Kafka", level: 80, category: "processing" },
  { name: "Python", level: 82, category: "language" },
  { name: "Power BI / DAX", level: 90, category: "bi" },
  { name: "SSIS / ETL", level: 92, category: "orchestration" },
  { name: "Azure Data Factory", level: 85, category: "cloud" },
  { name: "Snowflake (learning)", level: 55, category: "cloud" },
]

export const experience = [
  {
    role: "Data Engineer",
    company: "Thai Beverage PLC (ThaiBev) — Bangkok, Thailand",
    period: "Nov 2025 — Present",
    description: "Building modern data pipelines using dbt (Staging → Intermediate → Mart layers), Apache Airflow DAGs, ClickHouse production database, Kafka, MinIO object storage, and OpenMetadata. Projects include CDP, OishiClub, MTM/VSMS, ConnectX, BevFood, chanworld, ongroudevent, ranger, sook, sx. Deployed via ArgoCD.",
    tags: ["dbt", "Airflow", "ClickHouse", "Kafka", "MinIO", "Python", "ArgoCD", "OpenMetadata"],
  },
  {
    role: "BI Developer / Data Analyst",
    company: "Grand Royal Group International — Yangon",
    period: "Jul 2023 — Oct 2025",
    description: "Built Data Warehouse architecture with SSIS ETL for Finance, Inventory, Manufacturing, Logistics modules. Developed Power BI dashboards: ThaiBev Finance, Trade Edge DMS, Trade Edge Monitoring. Integrated SAP S/4HANA with Azure Data Factory pipelines.",
    tags: ["Power BI", "SSIS", "SQL Server", "SAP S/4HANA"],
  },
  {
    role: "Project Leader / Senior Software Developer",
    company: "Myanmar Information Technology Pte Ltd (MIT) — Yangon",
    period: "Dec 2012 — Jun 2023",
    description: "Led ERP Accounting and POS system development for over 10 years, delivering V5/V6 ERP solutions, mPOS systems, Fixed Assets Management, Pacific AA Power BI on Azure, CMHL BI Solutions, Hospital Queue Management Systems, and iTHIS LIS/RIS integrations. Designed and implemented cloud-based data warehouse solutions using Azure SQL, Azure Data Factory (ADF), and Power BI. Experienced in SQL Server Log Shipping, SQL Replication, ETL processes, data integration, and business intelligence solution development.",
    tags: ["C#.NET", "SQL Server", "Azure", "Power BI", "SSIS", "JavaScript"],
  },
]

export const certifications = [
  {
    name: "ETL and Data Pipelines with Shell, Airflow and Kafka",
    issuer: "IBM · Coursera",
    year: "Mar 2026",
    link: "https://coursera.org/verify/RPV92SIHT8U5",
  },
  {
    name: "Tools for Data Science",
    issuer: "IBM · Coursera",
    year: "Oct 2025",
    link: "https://coursera.org/verify/JTVWYT45ZJZL",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM · Coursera",
    year: "May 2025",
    link: "https://coursera.org/verify/T082KLB6D0ZZ",
  },
  {
    name: "What is Data Science?",
    issuer: "IBM · Coursera",
    year: "May 2025",
    link: "https://coursera.org/verify/SXEBMJQBR8TF",
  },
]

export const education = [
  {
    degree: "Post-Graduate Diploma in Computer Application (PGDCA)",
    school: "University of Yangon — Centre for Human Resource Development",
    period: "2010 — 2012",
  },
  {
    degree: "B.Sc (Botany)",
    school: "University of Mawlamyine, Myanmar",
    period: "2005 — 2009",
  },
  {
    degree: "Software Engineering Course",
    school: "ACE Data Systems Ltd, Yangon",
    period: "Jan 2011 — Apr 2011",
  },
]
