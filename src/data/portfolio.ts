export interface HeroMetric {
  value: string;
  count: number;
  label: string;
}

export interface ExperienceOutcome {
  label: string;
  text: string;
}

export interface CredentialRow {
  key: string;
  title: string;
  text: string;
  meta: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectOverviewCard {
  label: string;
  title: string;
  text: string;
}

export interface ProjectDetailSection {
  label: string;
  title: string;
  kind?: "list" | "stack";
  items?: string[];
  stack?: string[];
  links?: {
    label: string;
    href: string;
  }[];
}

export interface PortfolioProject {
  id: string;
  group: "work" | "personal";
  tabTag: string;
  title: string;
  tabSubtitle: string;
  panelTag: string;
  timeline: string;
  domain: string;
  summary: string;
  preview: {
    description: string;
    bullets?: string[];
    featured?: boolean;
  };
  embed?: {
    title: string;
    url: string;
    note: string;
  };
  overviewCards: ProjectOverviewCard[];
  detailSections: ProjectDetailSection[];
}

export const siteMeta = {
  name: "Vybhav Nath C A",
  role: "Sr Data Scientist",
  email: "vybhav.nca@gmail.com",
  linkedin: "https://linkedin.com/in/vybhav-nath-c-a-67b0641a2",
  github: "https://github.com/vybhav2000",
  resumePath: "/assets/Vybhav_Resume.pdf",
};

export const homeContent = {
  hero: {
    eyebrow: "Sr Data Scientist | Applied AI | NLP Systems",
    title: "Senior Data Scientist building production NLP and ML systems.",
    text:
      "Senior Data Scientist with experience building NLP, retrieval, ranking, information extraction, and LLM systems for healthcare workflows.",
    focusLabel: "Current Focus",
    focusTitle: "Applied ML for healthcare operations",
    focusText:
      "NLP systems, retrieval pipelines, contract intelligence, structured extraction, and production ML infrastructure.",
    metrics: [
      {
        value: "4+",
        count: 4,
        label: "Major applied ML projects across coding, contracts, validation, and automation",
      },
      {
        value: "1500+",
        count: 1500,
        label: "Credentialing and roster cases automated in the latest workflow",
      },
      {
        value: "100K+",
        count: 100,
        label: "Provider contracts supported in the contract intelligence knowledge and retrieval stack",
      },
      {
        value: "2000+",
        count: 2000,
        label: "Daily requests handled by the clinical coding platform",
      },
    ] satisfies HeroMetric[],
  },
  profile: {
    eyebrow: "Profile",
    title: "Applied ML and NLP background",
    paragraphs: [
      "I work across machine learning, NLP, and production systems, with experience taking applied ML workflows from problem definition to deployment.",
      "My background includes information extraction, semantic retrieval, question answering, ranking, clinical NLP, contract intelligence, and LLM-based automation.",
    ],
    highlights: [
      "Led a cross-functional team of 4 data scientists across production programs.",
      "Built FastAPI, Docker, Kafka, and AWS EKS infrastructure for deployed ML systems.",
      "Worked on retrieval and extraction systems spanning OCR, fine-tuning, and hybrid search.",
      "Built systems for clinical coding, provider validation, contract intelligence, and email automation.",
    ],
  },
  experienceSection: {
    eyebrow: "Experience",
    title: "Professional track record",
  },
  experience: {
    role: "Senior Data Scientist",
    company: "HiLabs India Pvt. Ltd.",
    period: "June 2022 to Present",
    tags: ["Bengaluru, India", "ML / NLP / Applied AI"],
    summary:
      "Built and deployed production ML/NLP systems for clinical coding, provider validation, contract intelligence, and autonomous email workflows.",
    outcomes: [
      {
        label: "Scope",
        text: "Architected 4 production systems serving 1,000+ daily requests.",
      },
      {
        label: "Leadership",
        text: "Established evaluation, code quality, and deployment standards across projects.",
      },
      {
        label: "DS Work",
        text: "Worked across modeling, retrieval, experimentation, evaluation, and productionization for deployed ML systems.",
      },
      {
        label: "Recognition",
        text: "Won DS Pioneer in NLP (2024) and Insights Champion (2025).",
      },
    ] satisfies ExperienceOutcome[],
  },
  credentials: [
    {
      key: "Education",
      title: "IIT Madras",
      text: "B.Tech in Mechanical Engineering",
      meta: "2018 to 2022",
    },
    {
      key: "Academics",
      title: "CGPA 8.85 / 10.0",
      text: "Strong academic track record with quantitative coursework relevant to ML.",
      meta: "IIT Madras",
    },
    {
      key: "Awards",
      title: "NTSE Scholar and KVPY Fellow",
      text: "Recognized through national-level academic programs.",
      meta: "Academic",
    },
    {
      key: "Exam Highlights",
      title: "JEE Advanced AIR 1030",
      text: "CBSE Class 12: 98.4%",
      meta: "2018",
    },
  ] satisfies CredentialRow[],
  selectedWorkSection: {
    eyebrow: "Selected Work",
    title: "Projects that show how I think",
  },
  skillsSection: {
    eyebrow: "Skills",
    title: "Core technical depth",
  },
  personalProjectsSection: {
    eyebrow: "Personal Projects",
    title: "Independent work outside company projects",
  },
  contactSection: {
    eyebrow: "Contact",
    title: "Contact",
    text:
      "Reach out for roles and conversations in applied ML, NLP, retrieval, and production AI systems.",
  },
};

export const skillGroups = [
  {
    title: "ML and NLP",
    items: [
      "Named Entity Recognition",
      "Semantic Search",
      "Question Answering",
      "Learning to Rank",
      "Information Extraction",
      "Calibration",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    title: "Models and Frameworks",
    items: [
      "PyTorch",
      "Hugging Face",
      "BERT",
      "T5",
      "Scikit-learn",
      "LightGBM",
      "CatBoost",
      "XGBoost",
      "SpaCy",
      "FAISS",
      "ScaNN",
      "LangChain",
    ],
  },
  {
    title: "Engineering and Infra",
    items: [
      "Python",
      "PySpark",
      "SQL",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Git",
      "AWS EKS",
      "S3",
      "EC2",
      "Lambda",
      "Kafka",
      "Snowflake",
      "PostgreSQL",
      "Redis",
    ],
  },
] satisfies SkillGroup[];

export const workProjects = [
  {
    id: "email-agent",
    group: "work",
    tabTag: "Agentic AI",
    title: "Autonomous Email Agent",
    tabSubtitle: "Credentialing and roster automation",
    panelTag: "Agentic Workflow Automation",
    timeline: "September 2025 to Present",
    domain: "Healthcare operations",
    summary:
      "Built an autonomous email agent for credentialing and roster automation across email-driven workflows such as DEA verification, medical license validation, and malpractice insurance tracking.",
    preview: {
      featured: true,
      description:
        "Built a multi-agent email system using LangGraph, Qwen, and retrieval over prior cases for credentialing and roster automation.",
      bullets: [
        "75% processing time reduction across 1,500+ cases.",
        "92% task completion with less than 5% escalation.",
        "Schema-constrained extraction reached 96% field accuracy.",
      ],
    },
    overviewCards: [
      {
        label: "Scope",
        title: "Credentialing and roster workflows",
        text:
          "Focused on email-driven workflows including DEA verification, medical license validation, and malpractice insurance tracking.",
      },
      {
        label: "What I built",
        title: "Multi-agent automation with retrieval",
        text:
          "Built a multi-agent system using LangGraph with agents for classification, extraction, checklist tracking, and action planning.",
      },
      {
        label: "Impact",
        title: "Measured workflow improvement",
        text:
          "Reduced processing time by 75% across 1,500+ cases, with a 92% task completion rate and less than 5% escalation.",
      },
    ],
    detailSections: [
      {
        label: "Architecture",
        title: "System design",
        items: [
          "Email-thread-aware workflow orchestration for repeated back-and-forth tasks.",
          "Specialized agents for request, remind, clarify, and escalate actions.",
          "Retrieval over historical cases and policy documents.",
          "Audit logging and human-in-the-loop handling.",
        ],
      },
      {
        label: "Modeling",
        title: "Extraction workflow",
        items: [
          "Schema-constrained generation with Qwen 3 8B JSON mode and Pydantic validators.",
          "96% field extraction accuracy.",
          "Retry and recovery logic for failed outputs.",
          "Queue-based execution for workflow processing.",
        ],
      },
      {
        label: "Stack",
        title: "Core stack",
        kind: "stack",
        stack: [
          "Qwen",
          "LangChain",
          "LangGraph",
          "FastAPI",
          "PostgreSQL",
          "Redis",
          "RabbitMQ",
        ],
      },
    ],
  },
  {
    id: "contracts-ai",
    group: "work",
    tabTag: "Hybrid RAG",
    title: "Provider Contracts AI",
    tabSubtitle: "Knowledge graphs and retrieval",
    panelTag: "Hybrid RAG and Knowledge Graphs",
    timeline: "June 2024 to September 2025",
    domain: "Contract intelligence",
    summary:
      "Developed an end-to-end hybrid RAG contract intelligence system to query structured entities from scanned PDFs, including TIN, effective dates, renewal terms, and payment schedules.",
    preview: {
      description:
        "Built a contract intelligence system combining OCR, layout parsing, fine-tuning, knowledge graphs, and hybrid retrieval.",
    },
    overviewCards: [
      {
        label: "Scope",
        title: "Structured querying over scanned contracts",
        text:
          "Focused on extracting entities such as TIN, effective dates, renewal terms, and payment schedules from scanned PDFs.",
      },
      {
        label: "What I built",
        title: "Hybrid RAG contract intelligence pipeline",
        text:
          "Combined OCR, layout parsing, Qwen fine-tuning, multimodal extraction, and hybrid retrieval across graph, dense, and sparse search.",
      },
      {
        label: "Impact",
        title: "Extraction and query performance",
        text:
          "Achieved 94% extraction accuracy, improved downstream extraction quality by 12%, and supported sub-second latency for contract analytics queries.",
      },
    ],
    detailSections: [
      {
        label: "Pipeline",
        title: "Document pipeline",
        items: [
          "Textract OCR for scanned PDFs followed by LayoutLMv3-based region parsing.",
          "LoRA fine-tuning of Qwen 3 8B on contract entity extraction and structured decoding.",
          "Qwen 2.5-VL for multimodal extraction from provider profile screenshots.",
          "Natural-language querying over extracted contract information.",
        ],
      },
      {
        label: "Retrieval Design",
        title: "Retrieval and graph layer",
        items: [
          "Neo4j knowledge graph storing entities, relationships, and hierarchies across 100k+ contracts.",
          "Cypher queries for relationship-based reasoning.",
          "Dense vector search and BM25 sparse retrieval with reciprocal rank fusion.",
          "Document, page, and clause level provenance tracking.",
        ],
      },
      {
        label: "Stack",
        title: "Core stack",
        kind: "stack",
        stack: [
          "Qwen 3",
          "Qwen 2.5-VL",
          "LoRA",
          "FAISS",
          "Neo4j",
          "Document AI",
          "FastAPI",
        ],
      },
    ],
  },
  {
    id: "codex",
    group: "work",
    tabTag: "Clinical NLP",
    title: "CodEx Medical Coding",
    tabSubtitle: "Extraction, normalization, retrieval",
    panelTag: "Clinical NLP",
    timeline: "June 2023 to May 2024",
    domain: "Clinical coding",
    summary:
      "Developed an end-to-end clinical NLP pipeline automating ICD-10 and CPT code assignment from medical charts across healthcare facilities.",
    preview: {
      description:
        "Developed an end-to-end clinical NLP pipeline using BERT-CRF, T5, semantic retrieval, and PySpark to automate ICD-10/CPT code assignment at scale.",
    },
    overviewCards: [
      {
        label: "Scope",
        title: "Clinical coding automation",
        text:
          "Focused on automating ICD-10 and CPT code assignment from medical charts across healthcare facilities.",
      },
      {
        label: "What I built",
        title: "Clinical NLP pipeline",
        text:
          "Combined BERT-CRF entity extraction, BERT QA, Clinical T5 normalization, and semantic search over 900k codes with reranking for final recommendation quality.",
      },
      {
        label: "Impact",
        title: "Large throughput with measurable gains",
        text:
          "Reduced manual coding time by 60%, achieved 0.91 F1 for clinical entity extraction, and handled 2,000+ requests per day in production.",
      },
    ],
    detailSections: [
      {
        label: "Model Components",
        title: "Models",
        items: [
          "BERT-CRF for entity extraction across conditions, procedures, labs, and medications.",
          "Multi-label enrichment for assertion, temporality, and subject.",
          "BERT QA for extracting lab values, dosages, and dates.",
          "Clinical T5 fine-tuned on 800k entity-code pairs for terminology normalization.",
        ],
      },
      {
        label: "Retrieval and Deployment",
        title: "Retrieval and deployment",
        items: [
          "Bi-encoder plus ScaNN semantic search across 900k codes with 18 ms latency and 95% recall@20.",
          "Cross-encoder reranking improved precision by 13 percentage points.",
          "PySpark pipelines handled data extraction and offline processing.",
          "Deployment on AWS EKS with continuous monitoring for latency and quality.",
        ],
      },
      {
        label: "Stack",
        title: "Core stack",
        kind: "stack",
        stack: [
          "BERT-CRF",
          "T5",
          "ScaNN",
          "PySpark",
          "FastAPI",
          "Docker",
          "AWS EKS",
        ],
      },
    ],
  },
  {
    id: "directory-validation",
    group: "work",
    tabTag: "Ranking Systems",
    title: "Provider Directory Validation",
    tabSubtitle: "Large-scale recommendations",
    panelTag: "Recommendation Systems",
    timeline: "2022 to 2023",
    domain: "Ranking and prioritization",
    summary:
      "Built an ML recommendation system to prioritize provider directory updates such as address, phone, and status changes to improve directory accuracy at scale.",
    preview: {
      description:
        "Built a large-scale recommendation system prioritizing directory updates using feature engineering over web evidence, claims, and CMS data with calibration and fairness analysis.",
    },
    overviewCards: [
      {
        label: "Scope",
        title: "Provider directory validation",
        text:
          "Built an ML recommendation system to prioritize provider directory updates such as address, phone, and status changes.",
      },
      {
        label: "What I built",
        title: "Large-scale recommendation pipeline",
        text:
          "Engineered 80+ features from web evidence, claims patterns, CMS data, and quality indicators, then trained ensemble models optimized for class imbalance with calibration and fairness analysis.",
      },
      {
        label: "Impact",
        title: "Business outcome",
        text:
          "Improved operational efficiency by 40% across 2M+ providers and increased accuracy from below 60% to above 90% on call-validated ground truth.",
      },
    ],
    detailSections: [
      {
        label: "Data and Features",
        title: "Ranking inputs",
        items: [
          "80+ engineered features from web evidence, CMS data, claims patterns, and quality indicators.",
          "PySpark feature computation over 50B+ claims-related records.",
          "Stacking ensemble optimized for PR-AUC and F1 under class imbalance.",
          "Specialty-specific calibration to support more equitable predictions across demographics.",
        ],
      },
      {
        label: "MLOps",
        title: "Monitoring and retraining",
        items: [
          "MLflow and DVC for model and data versioning.",
          "Drift-triggered retraining and champion-challenger A/B testing.",
          "Shadow validation before production rollout.",
          "Monitoring for drift and performance changes.",
        ],
      },
      {
        label: "Stack",
        title: "Core stack",
        kind: "stack",
        stack: [
          "LightGBM",
          "CatBoost",
          "PySpark",
          "Scikit-learn",
          "Snowflake",
          "MLflow",
          "DVC",
        ],
      },
    ],
  },
] satisfies PortfolioProject[];

export const personalProjects = [
  {
    id: "research-paper-assistant",
    group: "personal",
    tabTag: "Personal Project",
    title: "Research Paper Assistant",
    tabSubtitle: "On-demand summaries, grounded Q&A, and agentic workflows",
    panelTag: "Personal Project",
    timeline: "Independent build",
    domain: "Research workflows",
    summary:
      "Built a FastAPI application that imports arXiv papers by title or link, reads PDFs in-app, generates concise markdown summaries on demand, saves highlights, and supports grounded question answering over the paper with OpenAI.",
    preview: {
      description:
        "Built a research workflow assistant that imports arXiv papers by title or link, reads PDFs in-app, generates concise markdown summaries on demand, saves highlights, and answers questions grounded in the paper with OpenAI.",
      bullets: [
        "Generates a concise markdown summary only when Create summary is pressed.",
        "Supports both a standard grounded chat flow and an agentic paper assistant workflow.",
        "Uses FastAPI, SQLite, ChromaDB, OpenAI, Tavily, and Docker in the current build.",
      ],
    },
    embed: {
      title: "Live product demo",
      url: "https://research-paper-assistant-bhfx.onrender.com/",
      note: "If the embedded app does not load, open it in a new tab. Some hosted apps block iframe rendering.",
    },
    overviewCards: [
      {
        label: "Problem",
        title: "Research reading tools rarely stay grounded in the paper",
        text:
          "I wanted a workflow where paper reading, note-taking, and question answering happen in one place with answers tied back to extracted paper context instead of loose chat history.",
      },
      {
        label: "Solution",
        title: "Paper workspace with retrieval-backed and agentic chat",
        text:
          "The app imports arXiv papers, chunks and embeds extracted PDF text, supports on-demand summary generation, persistent highlights, and two chat modes: standard retrieval-backed Q&A and an agentic LangGraph workflow.",
      },
      {
        label: "Product Shape",
        title: "Designed like a focused single-paper research console",
        text:
          "Users can import a paper, read the PDF inline, create a summary when needed, save highlights and notes, and ask questions with context grounded in selected chunks, retrieved chunks, and prior memory.",
      },
    ],
    detailSections: [
      {
        label: "Core Flow",
        title: "Document pipeline",
        items: [
          "Imports a paper from an arXiv title or direct arXiv link.",
          "Downloads the PDF, extracts text with pypdf, and chunks it for retrieval.",
          "Creates a concise markdown summary on demand and caches it for later reuse.",
          "Stores papers, chunks, highlights, and chat history in a SQLite-backed app state.",
          "Serves the original PDF inline through FastAPI for in-app reading.",
        ],
      },
      {
        label: "Chat and Agentic Mode",
        title: "Answering workflow",
        items: [
          "Standard mode retrieves relevant chunks and generates answers grounded in paper context.",
          "Agentic mode uses LangGraph to plan the question, retrieve context in one or two passes, and synthesize the answer.",
          "Selection-aware chat combines chosen chunks, retrieved chunks, saved highlights memory, and optional external search context.",
          "Summaries and chat responses support LaTeX rendering for technical papers.",
        ],
      },
      {
        label: "Stack",
        title: "Core stack",
        kind: "stack",
        stack: [
          "FastAPI",
          "OpenAI",
          "SQLite",
          "ChromaDB",
          "LangGraph",
          "Tavily",
          "Docker",
        ],
        links: [
          {
            label: "Open GitHub Repo",
            href: "https://github.com/vybhav2000/research-paper-assistant/tree/master",
          },
          {
            label: "Live Demo",
            href: "https://research-paper-assistant-bhfx.onrender.com",
          },
        ],
      },
    ],
  },
] satisfies PortfolioProject[];

export const archiveContent = {
  hero: {
    eyebrow: "Project Archive",
    title: "Case studies in production applied ML.",
    text:
      "A structured view of the systems I have shipped across agent workflows, contract intelligence, clinical NLP, recommendation systems, and personal AI tools.",
    cards: [
      {
        label: "Production scope",
        value: "4 shipped systems",
        text: "Work projects spanning retrieval, extraction, ranking, and orchestration.",
      },
      {
        label: "Personal build",
        value: "Research Paper Assistant",
        text: "A grounded paper-reading workflow with retrieval-backed and agentic chat.",
      },
      {
        label: "Review lens",
        value: "Problem, system, impact, stack",
        text: "Each case is organized like a concise product and engineering review.",
      },
    ],
  },
  browser: {
    eyebrow: "Deep Dive",
    title: "Move through the portfolio like a case-study review",
    intro:
      "Use the left rail to switch between work and personal projects. Each case breaks out the operating problem, the system design, the measurable outcome, and the stack.",
    noteTitle: "Inside each case",
    noteItems: [
      "Problem framing tied to the actual workflow.",
      "System choices and retrieval or modeling design.",
      "Operational outcomes and production constraints.",
      "Stack snapshots for faster technical screening.",
    ],
  },
};
