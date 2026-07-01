// ─── EDITABLE CONTENT ────────────────────────────────────────────────────────
// Update this file to change any text, links, or data on the site.

export const meta = {
  name: "Udbhav Saxena",
  title: "Machine Learning Engineer · Applied AI · Software Engineer",
  pitch:
    "I build practical AI and software systems that turn messy real-world workflows into reliable, usable products.",
  email: "udbhav.saxena@gmail.com",
  github: "https://github.com/udbhavsaxena",
  linkedin: "https://www.linkedin.com/in/udbhav-saxena/",
  resume: "/Udbhav_Saxena_Resume_2026.pdf",
  photo: "/e.png",
};

export const about = `Master's in Engineering Science focused on Robotics & AI from the University at Buffalo.
I've worked across healthcare software, LLM workflows, computer vision, OCR pipelines, robotics, and production backend systems.
I care about shipping things that actually work — clean APIs, maintainable code, and AI that doesn't hallucinate the important stuff.`;

export const experience = [
  {
    company: "Civitas Health Services",
    role: "Healthcare IT Programmer · ML & Software Engineer",
    period: "Jul 2023 – Present",
    bullets: [
      "Architected LLM-assisted clinical documentation workflows that transform assessment and survey data into structured treatment plans.",
      "Built and maintained EspoCRM customizations, authorization workflows, and billing logic for clinical operations.",
      "Developed full-stack healthcare reporting tools using PHP, React, and MySQL.",
      "Automated clinical documentation and data-capture pipelines, reducing manual documentation overhead.",
    ],
  },
  {
    company: "Volvo Group North America",
    role: "ML Engineer Intern",
    period: "May 2022 – Aug 2022",
    bullets: [
      "Delivered ML and data analytics projects in engineering analytics with Python-based modeling pipelines.",
      "Built automation scripts and data processing tools for manufacturing analytics workflows.",
      "Collaborated cross-functionally to prototype and evaluate predictive models in production settings.",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare LLM Documentation Platform",
    description:
      "LLM-assisted clinical documentation workflow that transforms assessment and survey data into structured treatment plans and reviewable outputs for clinicians.",
    tags: ["LLMs", "Healthcare", "PHP", "React", "MySQL", "Flask"],
    // TODO: Add repo/demo URL if public
    link: null,
  },
  {
    title: "AI Research Paper Explainer",
    description:
      "Local-first tool for uploading ML papers, summarizing sections, extracting methods, explaining equations, generating flashcards, and creating implementation roadmaps.",
    tags: ["RAG", "LLMs", "Python", "Embeddings", "React"],
    // TODO: Add repo/demo URL
    link: null,
  },
  {
    title: "Character-Level GPT",
    description:
      "Transformer language model trained from scratch to understand tokenization, self-attention, training loops, and autoregressive text generation.",
    tags: ["PyTorch", "Transformers", "NLP"],
    link: "https://github.com/udbhavsaxena/GPT-Decoder",
  },
  {
    title: "OCR / Document Understanding System",
    description:
      "CRNN-style OCR pipeline for extracting text from visual documents and improving structured data capture accuracy on noisy inputs.",
    tags: ["Computer Vision", "OCR", "PyTorch", "TensorFlow"],
    link: "https://github.com/udbhavsaxena/CRNN---Captca-Recognition-",
  },
  {
    title: "Robotics · UR10e Cobot Work",
    description:
      "Robotics and automation work involving perception, motion planning, and applied engineering workflows on a UR10e collaborative robot.",
    tags: ["Robotics", "ROS", "Python", "C++"],
    link: null,
  },
];

export const skills = [
  {
    category: "AI / ML",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "LLMs",
      "RAG",
    ],
  },
  {
    category: "Backend / Data",
    items: ["PHP", "Flask", "MySQL", "REST APIs", "ETL", "JSON workflows"],
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "DevOps / Tools",
    items: ["Docker", "Git", "Linux", "GitHub", "Apache"],
  },
  {
    category: "Other",
    items: ["Robotics", "ROS", "C/C++", "MATLAB"],
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
