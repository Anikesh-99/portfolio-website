// Central place for personal facts — edit here, everything updates.
export const site = {
  name: "Anikesh Banik",
  firstName: "Anikesh",
  role: "Software Engineer",
  tagline:
    "I build software that ships — from data pipelines to the interfaces on top of them.",
  email: "b.anikesh@gmail.com",
  github: "https://github.com/anikesh-banik", // TODO: real username
  linkedin: "https://www.linkedin.com/in/anikesh-banik", // TODO: real profile
  url: "https://portfolio-website.vercel.app", // updated after first deploy
};

export const navLinks = [
  { href: "/projects", label: "/projects" },
  { href: "/blog", label: "/blog" },
  { href: "/resume", label: "/resume" },
] as const;
