// Resume data — edit this file to update /resume.
// Tailored toward AI engineering / data science roles.
export const experience = [
  {
    company: "Qsentia · Los Angeles",
    role: "Quantitative Research Intern",
    period: "May 2026 — present",
    points: [
      "Research agentic trading strategies for crypto markets: momentum, reversal, and statistical arbitrage signals executed by Claude-based agents",
      "Build systematic backtests and evaluation harnesses for agent trading decisions",
    ],
  },
  {
    company: "Visa · Singapore",
    role: "Senior Software Engineer",
    period: "2025",
    points: [
      "Designed and deployed an AI system that finds and remediates security vulnerabilities in production code, combining static analysis, LLMs, and ML models",
      "Led development of a self-healing framework using automated anomaly detection to recover failing services, improving reliability by 25%",
    ],
  },
  {
    company: "Visa · Singapore",
    role: "Software Engineer",
    period: "2023 — 2025",
    points: [
      "Built production ML pipelines processing billions of transaction data points daily for payment risk analytics and fraud detection",
      "Trained and deployed service-load forecasting models to optimize server allocation, improving throughput by 15%",
      "Prototyped agentic AI systems that automate compliance monitoring across payment clusters, reducing operational risk",
      "Built statistical monitoring and reporting infrastructure for model evaluation and alerting, cutting production incidents by 40%",
    ],
  },
  {
    company: "Factorem · Singapore",
    role: "Software Engineer Intern",
    period: "2021",
    points: [
      "R&D on CAD file analysis using linear algebra and vector geometry to detect structural defects like boundary holes and sharp edges",
      "Shipped a Flask feature-detection API for real-time shape analysis of CAD models",
    ],
  },
  {
    company: "Southern Ridges Capital · Singapore",
    role: "Data Science Intern",
    period: "2020",
    points: [
      "Built a Python framework for FX option valuation and calibration under Garman-Kohlhagen, with automated implied-vol surface construction via cubic-spline interpolation on total variance",
      "Designed a Flask-SQL dashboard tracking daily pricing errors, vol shifts, and delta/vega exposures for portfolio managers",
    ],
  },
];

export const education = [
  {
    school: "UCLA Anderson School of Management",
    degree: "Master of Financial Engineering",
    period: "exp. Dec 2026",
    points: [
      "Coursework: Machine Learning, Optimization, Time Series Analysis, Stochastic Calculus, Econometrics",
    ],
  },
  {
    school: "National University of Singapore",
    degree: "B.Comp., Computer Science · Minor in Management",
    period: "2023",
    points: [
      "Merit Scholar",
      "Coursework: Machine Learning, Probability and Statistics, Investment Analysis and Portfolio Management",
    ],
  },
];

export const skills = [
  { label: "languages", items: ["Python", "SQL", "C++", "TypeScript", "Java", "R"] },
  { label: "ml & ai", items: ["PyTorch", "scikit-learn", "Pandas", "Claude API", "LangChain", "RAG", "evals"] },
  { label: "data & infra", items: ["ETL pipelines", "PostgreSQL", "Docker", "AWS", "Flask", "React"] },
  { label: "quant", items: ["Monte Carlo", "options pricing", "GARCH", "backtesting", "P&L attribution"] },
];
