// Every claim here must trace to Resume/career-facts.md.
export const PROFILE = {
  name: "Nikhil Shetty",
  role: "Principal Data Engineer",
  stackLine: "Spark · Databricks · Kafka · Delta Lake · AWS",
  // Cycled by the typing effect under the name in the hero.
  rotatingRoles: [
    "Principal Data Engineer",
    "Spark & Databricks specialist",
    "Streaming lakehouse builder",
  ],
  headline:
    "I build streaming and batch data platforms that run faster and cost less.",
  summary:
    "8+ years designing Spark, Databricks and Kafka pipelines for production analytics, from Kafka ingestion through Medallion lakehouses to Gold-layer APIs. Most recently I cut a lakehouse's latency by 82% and its compute bill by 77%.",
  availability: "Open to data engineering roles in Switzerland and Europe",
  currentStudy: "MSc, University of Bern (final semester)",
  location: "Bern, Switzerland",
  resumePath: "/resume/Nikhil_Shetty.pdf",
  email: "05nikhilshetty@gmail.com",
  impactCards: [
    { value: "82%", label: "lower pipeline latency on a Databricks lakehouse" },
    { value: "77%", label: "lower DBU compute cost on the same platform" },
    { value: "3.6B", label: "row target model, 60% faster end-to-end runtime" },
    { value: "8+ yrs", label: "building production data systems" },
  ],
  coreStack: [
    "Apache Spark",
    "Structured Streaming",
    "Databricks",
    "Delta Lake",
    "Kafka",
    "Airflow",
    "AWS",
    "Python",
    "Scala",
    "SQL",
  ],
  skillGroups: [
    { label: "Processing & Streaming", items: ["Apache Spark", "Structured Streaming", "Kafka", "Delta Lake", "Hive", "dbt"] },
    { label: "Platforms", items: ["Databricks", "Unity Catalog", "Airflow", "Databricks Workflows", "Docker"] },
    { label: "Cloud", items: ["AWS Glue", "EMR", "Athena", "Redshift", "BigQuery", "Snowflake"] },
    { label: "Languages", items: ["Python", "SQL", "Scala", "Java"] },
    { label: "Databases", items: ["PostgreSQL", "Oracle", "MS SQL Server"] },
  ],
  experience: [
    {
      company: "Tricon InfoTech",
      context: "Remote, US client",
      role: "Principal Data Engineer",
      period: "Jan 2021 - Present",
      summary:
        "Lead engineer on an event-driven Databricks lakehouse and a customer-facing insights platform for a US client.",
      bullets: [
        "Rebuilt the Databricks FinOps cost-attribution pipeline behind the cost dashboard: system list prices with effective-dated discounts, per-user allocation of shared SQL-warehouse cost, reconciliation checks, and Solution tags across 314 job templates.",
        "Root-caused a 127% year-over-year rise in Databricks spend with reproducible system-table analysis: serverless SQL consumption drove 78% of growth at unchanged prices; one job drove 90.5% of a product's increase.",
        "Architected an event-driven Lakehouse on Databricks (Kafka, Spark, Delta Lake, Medallion) processing TB-scale workloads; cut latency by 82% and DBU cost by 77%.",
        "Led a 4-member team building a customer insights platform: Oracle and Delta Lake data into Gold-layer tables and APIs, including a 3.6 billion-row model that runs 60% faster end to end.",
        "Built Spark Structured Streaming pipelines on Kafka topics for near real-time downstream tables.",
        "Built late-arriving-data recovery with upstream teams: automated retries, reconciliation reports and missing-record alerts.",
        "Moved orchestration from Airflow to Databricks Workflows after the E2 migration and added PagerDuty alerting.",
      ],
      stack: ["Databricks", "Spark", "Kafka", "Delta Lake", "Unity Catalog", "Airflow", "PostgreSQL"],
    },
    {
      company: "Accenture",
      context: "Bengaluru, India",
      role: "Data Engineer",
      period: "Jul 2018 - Jan 2021",
      summary:
        "Enterprise data pipelines for migration and reporting, moving on-premise Oracle and Cloudera workloads to AWS.",
      bullets: [
        "Built PySpark ETL migrating enterprise data from on-premise Oracle and Cloudera to AWS.",
        "Built self-service analytics on Athena and Redshift Spectrum, plus hourly and daily KPI dashboards in QuickSight.",
        "Built curated datasets and dimensional models to speed up downstream reporting.",
        "Stabilized business-critical reporting pipelines by fixing recurring job failures.",
      ],
      stack: ["PySpark", "AWS", "Athena", "Redshift", "Hive", "BigQuery"],
    },
  ],
  education: [
    {
      school: "University of Bern",
      mark: "M.Sc.",
      credential: "Master of Science",
      period: "2024 - Present",
      note: "Thesis: ML for merge conflict resolution",
    },
    {
      school: "B.V. Bhoomaraddi College of Engineering",
      mark: "B.Tech",
      credential: "B.Tech, Information Science",
      period: "2014 - 2018",
      note: "CGPA 8.20 / 10",
    },
  ],
  awards: ["Best Fresh Hire of the Year", "Best Impactful Engineer"],
};
