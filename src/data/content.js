// ─── EDITABLE CONTENT ────────────────────────────────────────────────────────
// Update this file to change any text, links, or data on the site.

export const meta = {
  name: "Udbhav Saxena",
  title: "Machine Learning Engineer · LLMs · RAG · Full-Stack ML Systems",
  pitch:
    "3 years shipping production ML systems in healthcare: agentic LLMs, RAG pipelines, call transcription, and full-stack EHR platforms.",
  email: "udbhav.saxena@gmail.com",
  github: "https://github.com/udbhavsaxena",
  linkedin: "https://www.linkedin.com/in/udbhav-saxena/",
  resume: "/Udbhav_Saxena_Resume-2.pdf",
  photo: "/e.png",
};

export const about = `Machine Learning Engineer with 3 years of experience building clinical AI systems across LLMs, RAG, speech pipelines, and full-stack EHR platforms.
Shipped production systems that reduced clinical documentation time by 70% across behavioral health workflows.`;

export const experience = [
  {
    company: "Civitas Health Services",
    role: "Machine Learning Engineer",
    period: "2023 – Present",
    bullets: [
      "Agentic Clinical Documentation: Built and shipped an agentic LLM system (OpenAI function calling, custom orchestration) for autonomous generation of progress notes, ISP summaries, and SMART goals; reduced average note completion time by ~70%.",
      "Full-Stack EHR Platform: Architected a clinical EHR platform (React, PHP, EspoCRM) supporting 7 workflow stages; integrated OpenAI, Twilio, and Phaxio APIs; built custom React portals, drag-and-drop planners, and assessment tools.",
      "Survey-to-Assessment NLP Pipeline: Designed a pipeline (spaCy, BERT) converting 4 instruments (CSSRS, SBIRT, FAST, VBMAPP) into structured draft assessments; eliminated ~30 min of manual write-up per intake.",
      "Call Transcription & PHI Redaction: Built a transcription pipeline (Twilio + OpenAI Whisper) with entity extraction, PHI redaction, and risk-phrase detection; processes 100+ calls/month into structured EHR entries.",
      "RAG for Medicaid Guidelines: Built a retrieval-augmented generation layer (pgvector, OpenAI embeddings, Flask) for inline guideline lookup; cut authorization prep time by ~40%.",
    ],
  },
  {
    company: "Volvo Group North America",
    role: "AI Engineer, Intern",
    period: "2022",
    bullets: [
      "Packaging Optimization: Built XGBoost model (85% accuracy) deployed across 2 production lines; generated $350K in annualized cost savings (6:1 ROI); parts-redundancy recommender reduced master database by 20%.",
      "Time-Series & Computer Vision: Built ARIMA/SARIMA time-series forecasting (±5-unit error) and YOLOv4 tool detection model for cobot automation; reduced false-positive safety stops and improved line throughput.",
    ],
  },
];

export const projects = [
  {
    title: "AgentBench-Lite",
    eyebrow: "Primary portfolio project",
    impact: "Async multi-agent evaluation framework",
    description:
      "Local-first framework for running, tracing, and evaluating multi-agent LLM systems. Built research, planning, critic, and orchestrator agents with structured outputs, tool-use metrics, DuckDB persistence, FastAPI endpoints, and a Streamlit dashboard.",
    highlights: [
      "25-task benchmark with 11 metrics: faithfulness, tool precision/recall, citations, latency, cost, schema validity",
      "Async orchestration with bounded concurrency, timeouts, retry handling, and sequential fallback",
      "Runs fully offline in mock mode; also supports OpenAI-backed live runs",
    ],
    tags: ["Agents", "Evaluation", "FastAPI", "DuckDB", "Streamlit", "Pydantic"],
    link: "https://github.com/udbhavsaxena/agentbench-lite",
    featured: true,
  },
  {
    title: "RAG Eval Dashboard",
    eyebrow: "Important RAG systems highlight",
    impact: "Production-style RAG quality dashboard",
    description:
      "Evaluation-first RAG system over a clinical guideline corpus. It compares chunking strategies, builds FAISS indexes, runs retrieval and faithfulness evaluation, and exposes per-query traces for debugging grounded answers.",
    highlights: [
      "Compares word, sentence, and semantic chunking across Recall@K, Precision@K, MRR, nDCG, faithfulness, latency, and cost",
      "Includes LLM-as-judge path with lexical fallback, extractive fallback generation, and JSONL audit traces",
      "Dashboard surfaces overview metrics, strategy comparison, failure analysis, and trace-level evidence",
    ],
    tags: ["RAG", "FAISS", "Evaluation", "LLM-as-Judge", "Streamlit", "Python"],
    link: "https://github.com/udbhavsaxena/rag-eval-dashboard",
    featured: true,
  },
  {
    title: "Chat With PDFs",
    eyebrow: "User-facing RAG app",
    impact: "PDF upload/link question-answering",
    description:
      "Clean Streamlit app that lets users upload PDFs or paste public PDF URLs, builds a local vector store from extracted page text, and answers questions with page-level citations.",
    highlights: [
      "Handles uploads, public PDF links, invalid files, empty PDFs, and scanned/image-only PDFs with clear states",
      "Uses PyMuPDF extraction, local sentence-transformer embeddings, and retrieved source snippets",
      "Supports OpenAI answers when configured and a grounded extractive fallback when running locally without an API key",
    ],
    tags: ["RAG", "PDF", "Streamlit", "Embeddings", "OpenAI", "PyMuPDF"],
    link: "https://github.com/udbhavsaxena/ChatWithPDFs",
  },
  {
    title: "Agentic Clinical Documentation",
    impact: "Production healthcare LLM workflow",
    description:
      "Agentic LLM system using OpenAI function calling and custom orchestration for autonomous generation of progress notes, ISP summaries, and SMART goals. Reduced note completion time by ~70%.",
    tags: ["LLMs", "Agentic AI", "OpenAI", "Healthcare", "Python"],
    link: null,
  },
  {
    title: "CRNN for OCR",
    impact: "Sequence recognition model",
    description:
      "95% test accuracy on sequence recognition with a CRNN architecture. Full preprocessing and augmentation pipeline with CTC loss decoding.",
    tags: ["Computer Vision", "OCR", "PyTorch", "CTC"],
    link: "https://github.com/udbhavsaxena/CRNN---Captca-Recognition-",
  },
  {
    title: "Character-Level GPT",
    impact: "Transformer from scratch",
    description:
      "Transformer language model trained from scratch — tokenization, self-attention, training loops, and autoregressive text generation.",
    tags: ["PyTorch", "Transformers", "NLP"],
    link: "https://github.com/udbhavsaxena/GPT-Decoder",
  },
];

export const skills = [
  {
    category: "ML / NLP",
    items: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "spaCy",
      "NLTK",
      "ONNX Runtime",
      "XGBoost",
      "ARIMA/SARIMA",
      "Gensim",
    ],
  },
  {
    category: "LLM & Agents",
    items: [
      "Agentic Workflows",
      "RAG",
      "Fine-tuning",
      "Prompt Engineering",
      "LLM Chaining",
      "OpenAI API",
      "Anthropic API",
      "Structured Outputs",
    ],
  },
  {
    category: "Speech / ASR",
    items: [
      "OpenAI Whisper",
      "Twilio",
      "PHI Redaction",
      "Call Transcription",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "Kubernetes",
      "Flask",
      "pgvector",
      "PySpark",
      "Pandas",
      "NumPy",
      "Git",
      "Linux",
    ],
  },
  {
    category: "Full-Stack ML",
    items: [
      "React",
      "PHP",
      "EspoCRM",
      "REST APIs",
      "Stripe",
      "Phaxio",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "C/C++", "R", "MATLAB"],
  },
];

export const education = [
  {
    degree: "M.S. Engineering Science — Robotics & AI",
    school: "University at Buffalo, SUNY",
    year: "2021 – 2023",
  },
  {
    degree: "B.Tech Mechanical Engineering",
    school: "Shiv Nadar University",
    year: "2017 – 2021",
  },
];
