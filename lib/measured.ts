// The "# measured" block on the home page. Real, verifiable numbers only —
// each entry links to its proof. Add a line only when something has actually
// been measured (next candidate: trading-desk routing accuracy over its
// 50-query eval, once run against a live key).
export const measured = [
  {
    label: "recall@5",
    value: "33% → 88.9%",
    note: "sec_research_agent · six rounds of measure-then-fix",
    href: "/projects/sec-research-agent",
  },
  {
    label: "alpha funnel",
    value: "259 → 30",
    note: "wq_alpha_research · robustness-gated survivors",
    href: "/projects/wq-alpha-research",
  },
  {
    label: "test suite",
    value: "7/7 green",
    note: "llm_eval_harness · offline, no API key",
    href: "/projects/llm-eval-harness",
  },
];
