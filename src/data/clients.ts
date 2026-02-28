/* ============================================================
 * CLIENTS & STACK DATA — src/data/clients.ts
 * ============================================================ */

import type { Client } from "./types";
import PhilipsLogo from "../assets/Philips.png";
import AmexLogo from "../assets/American Express.png";
import StandardCharteredLogo from "../assets/Standard Chartered.png";
import ShellLogo from "../assets/Shell.png";
import NorthernTrustLogo from "../assets/NortthenTrust.jpeg";
import PandGLogo from "../assets/P&G.png";

export const clients: Client[] = [
  {
    name: "Philips",
    abbr: "PHI",
    sub: "Design Technologist",
    current: true,
    logo: PhilipsLogo,
  },
  {
    name: "American Express",
    abbr: "AMEX",
    sub: "Module Lead - UI",
    logo: AmexLogo,
  },
  {
    name: "Standard Chartered",
    abbr: "SCB",
    sub: "Technical Lead",
    logo: StandardCharteredLogo,
  },
  { name: "Shell", abbr: "SHEL", sub: "Senior UI Developer", logo: ShellLogo },
  {
    name: "Northern Trust",
    abbr: "NT",
    sub: "UI Developer",
    logo: NorthernTrustLogo,
  },
  { name: "P&G", abbr: "P&G", sub: "UI Developer", logo: PandGLogo },
];

export interface StackItem {
  tag: string;
  name: string;
  desc: string;
}

export const stackItems: StackItem[] = [
  {
    tag: "Foundation",
    name: "Vanilla Extract",
    desc: "Zero-runtime CSS-in-TypeScript. Type-safe design tokens, theme contracts compiled at build time.",
  },
  {
    tag: "Accessibility",
    name: "ReactAria",
    desc: "Adobe's accessibility primitives — focus management, ARIA, keyboard navigation in every interactive component.",
  },
  {
    tag: "Documentation",
    name: "Storybook 10",
    desc: "Living documentation with CSF 3.0, play functions, a11y addon, and Figma plugin integration.",
  },
  {
    tag: "Quality",
    name: "jest-axe",
    desc: "Automated WCAG testing. Every PR runs axe-core assertions. Zero violations required to merge.",
  },
  {
    tag: "AI Integration",
    name: "MCP Server",
    desc: "Custom Model Context Protocol server exposing the component registry to LLMs for DS-compliant codegen.",
  },
  {
    tag: "Tokens",
    name: "Node.js Compiler",
    desc: "Custom token compiler resolving references, enforcing contrast ratios, outputting CSS / iOS / Android.",
  },
  {
    tag: "Design Ops",
    name: "Figma + Tokens Studio",
    desc: "Bidirectional token sync between Figma and code. Single source of truth across design and engineering.",
  },
  {
    tag: "CI / CD",
    name: "5-Gate Pipeline",
    desc: "lint → token contrast → visual regression → axe-core → Figma audit. Automated quality gates on every PR.",
  },
];
