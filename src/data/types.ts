/* ============================================================
 * TYPES — src/data/types.ts
 * ============================================================ */

export interface StarEntry {
  title: string;
  subtitle: string;
  text: string;
  highlight: string;
}

export interface Screenshot {
  img: string;
  caption: string;
  sub: string;
}

export interface Metric {
  val: string;
  lbl: string;
}

export interface CodeBlock {
  label: string;
  content: string; // Raw code string (no HTML)
  language?: string; // Language for syntax highlighting (default: 'typescript')
}

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  problem: string;
  role: string;
  outcome: string;
  metrics: Metric[];
  star: {
    S: StarEntry;
    T: StarEntry;
    A: StarEntry;
    R: StarEntry;
  };
  screenshots: Screenshot[];
  code: CodeBlock;
  // Rich narrative fields for the editorial layout
  challengeText?: string;
  rolesAndResponsibilities?: string[];
  outcomes?: string[];
}

export interface Client {
  name: string;
  abbr: string;
  sub: string;
  current?: boolean;
  logo?: string;
}
