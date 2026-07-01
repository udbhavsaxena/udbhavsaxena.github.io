// ─── EDITABLE CONTENT ────────────────────────────────────────────────────────
// Update this file to change any text, links, or data on the site.

export const meta = {
  name: "Udbhav Saxena",
  title: "Machine Learning Engineer · LLMs · RAG · Full-Stack ML Systems",
  pitch:
    "3 years building production clinical AI — agentic LLM systems, RAG pipelines, speech workflows, and EHR platforms that ship and actually work.",
  email: "udbhav.saxena@gmail.com",
  github: "https://github.com/udbhavsaxena",
  linkedin: "https://www.linkedin.com/in/udbhav-saxena/",
  resume: "/Udbhav_Saxena_Resume-2.pdf",
  photo: "/e.png",
};

export const about = `Machine Learning Engineer with 3 years building production clinical AI spanning LLMs, RAG, full-stack ML systems, speech pipelines, and EHR integration.
Shipped evaluated, production-grade systems reducing clinical documentation time by 70% across behavioral health workflows.
I care about building things that actually make it to production — not just demos.`;

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
    title: "Clinical RAG Pipeline",
    description:
      "End-to-end retrieval-augmented generation system over behavioral health guidelines. Chunking, embedding (OpenAI), pgvector storage, and re-ranking — grounded LLM outputs in source documents with citation traces.",
    tags: ["RAG", "pgvector", "OpenAI", "Flask", "Python"],
    link: null,
  },
  {
    title: "Agentic Clinical Documentation",
    description:
      "Agentic LLM system using OpenAI function calling and custom orchestration for autonomous generation of progress notes, ISP summaries, and SMART goals. Reduced note completion time by ~70%.",
    tags: ["LLMs", "Agentic AI", "OpenAI", "Healthcare", "Python"],
    link: null,
  },
  {
    title: "BERT Fine-tune & Compression",
    description:
      "94% accuracy on text classification via fine-tuned BERT. Applied DistilBERT distillation, INT8 quantization, and ONNX Runtime optimization — reduced inference latency by ~3× with minimal accuracy loss.",
    tags: ["BERT", "DistilBERT", "ONNX", "PyTorch", "NLP"],
    link: null,
  },
  {
    title: "CRNN for OCR",
    description:
      "95% test accuracy on sequence recognition with a CRNN architecture. Full preprocessing and augmentation pipeline with CTC loss decoding.",
    tags: ["Computer Vision", "OCR", "PyTorch", "CTC"],
    link: "https://github.com/udbhavsaxena/CRNN---Captca-Recognition-",
  },
  {
    title: "Character-Level GPT",
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
