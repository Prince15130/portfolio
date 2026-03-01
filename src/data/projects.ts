/* ============================================================
 * PROJECTS DATA — src/data/projects.ts
 * ============================================================ */

import storybookDatagrid from "../assets/storybook-datagrid.png";
import filamentQuickstart from "../assets/filament-quickstart.png";
import vanillaExtractDocs from "../assets/vanilla-extract-docs.png";
import settingsTemplate from "../assets/settings-template.png";
import themeSetup from "../assets/theme-setup.png";
import reactComponents from "../assets/react-components.png";
import tokenPipeline from "../assets/token-pipeline.png";
import DesignSystemChallenge from "../assets/design-system-challenge.png";
import caseStudy from "../assets/Case Study Final Frame.png";
import Filament from "../assets/Filament-Design-System.png";
import Result from "../assets/Result.png";
import businessGoals from "../assets/business-goals.png";
import designGoals from "../assets/design-goals.png";
import MCPArchitecture from "../assets/Filament-MCP.png";
import MCPMindmap from "../assets/MCP Tools MindMap.png";
import BeforeAfter from "../assets/BeforevsAfter.png";
import MCPResponse from "../assets/MCP Fiirst Response.png";
import MCPResult from "../assets/MCP Result.png";

import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "filament-ds",
    num: "01",
    title: "Philips Filament Design System",
    subtitle:
      "From 30+ toolkits to one. Filament is the token-driven, accessibility-first design system I engineered to power 300+  Philips applications — from ICU patient monitors to consumer health apps.",
    tags: [
      "Vanilla Extract",
      "ReactAria",
      "Token Architecture",
      "TypeScript",
      "Storybook 10",
    ],
    problem:
      "Philips maintained 30+ fragmented UI toolkits used across 300+ applications — creating massive overhead, inconsistent UX, and slow time-to-market across clinical and consumer product lines.",
    role: "Led the engineering foundations as Design Technologist on the Central Design Team — architecting the three-layer token system, Vanilla Extract component library, and driving org-wide adoption.",
    outcome:
      "Reduced toolkits from 30+ to 2 central libraries. 77% increase in accessibility compliance. 25% cost reduction. iF Design Award + 3× Red Dot Award recognition.",
    metrics: [
      { val: "93%", lbl: "Fewer Libraries" },
      { val: "60+", lbl: "Components" },
      { val: "30+", lbl: "Apps Powered" },
      { val: "77%", lbl: "A11y Increase" },
      { val: "25%", lbl: "Cost Reduction" },
    ],
    star: {
      S: {
        title: "Situation",
        subtitle: "The fragmentation problem",
        text: "When I joined Philips's Central Design Team (XDC), the organisation maintained over 30 UI toolkits of varying quality across 300+ applications and touchpoints — spanning healthcare clinical platforms, patient monitors, and consumer health apps. Each business unit had built their own design library, leading to catastrophic UX fragmentation. Nurses using one Philips platform had to re-learn completely different interaction patterns when switching to another. Accessibility was an afterthought — WCAG compliance sat below 25% across the portfolio.",
        highlight:
          "The core problem: no single source of truth, no scalable token architecture, and zero automated quality gates.",
      },
      T: {
        title: "Task",
        subtitle: "My mandate",
        text: "As the Design Technologist on the libraries team, my mandate was to architect and build the engineering foundations of the Filament Design System from the ground up. This meant designing a token architecture that could scale across clinical and consumer products simultaneously, building a React component library that would pass WCAG 2.1 AA/AAA requirements by default, establishing CI/CD quality gates that would make non-compliant code impossible to ship, and driving adoption across 5+ major product lines without breaking any existing applications.",
        highlight:
          "Scope: three-layer token system + Vanilla Extract component library + accessibility pipeline + adoption playbook — in parallel.",
      },
      A: {
        title: "Action",
        subtitle: "The engineering approach",
        text: "I designed the three-layer token architecture: Primitive (raw values like blue-500), Semantic (context like color.action.primary), and Component (button.background.primary). I built a custom Node.js token compiler that resolves references recursively and throws a hard error if any token combination fails WCAG contrast ratios — making inaccessible tokens literally impossible to ship. I chose Vanilla Extract for the component library: zero runtime, TypeScript safety, and theme contracts that catch token misuse at compile time. Every component was built on ReactAria for accessible interaction patterns. I set up a 5-gate CI/CD pipeline: lint → token contrast check → visual regression → jest-axe assertions → Figma audit. Then I ran a champions programme — 15 product teams onboarded with dedicated workshops, migration guides, and async support.",
        highlight:
          "Key architectural decision: the token compiler that auto-enforces contrast made accessibility invisible to developers — they couldn't get it wrong even if they tried.",
      },
      R: {
        title: "Result",
        subtitle: "Measured impact",
        text: "Within 18 months: the 30+ UI toolkits consolidated to 2 central libraries — a 93% reduction. The Filament DS powers 30+ applications across Philips's entire portfolio. Accessibility compliance went from below 25% to near 100% at the foundation level — a 77% improvement. Adoption rate increased by 49% from business units within 3 sessions of introduction. Development time reduced by 25% (confirmed by teams like Sunil Kumar at Grooming & Beauty). The system won the iF Design Award and Red Dot Award.",
        highlight:
          '"We can save 20–30% effort in UI/UX development using the DLS toolkits." — Sunil Kumar, Software Technologist, Grooming & Beauty, Philips',
      },
    },
    screenshots: [
      {
        img: DesignSystemChallenge,
        caption: "Filament Design System Challenge",
        sub: "Fragmented toolkits, inconsistent UX, and slow time-to-market across 300+ applications — the problem Filament was built to solve",
        section: "challenge",
      },
      {
        img: caseStudy,
        caption: "Case Study",
        sub: "Case study frame from the Filament Design System project",
        section: "challenge",
      },
      {
        img: businessGoals,
        caption: "Business Goals",
        sub: "Illustration of the business goals driving the Filament Design System project",
        section: "task",
      },
      {
        img: designGoals,
        caption: "Design Goals",
        sub: "Illustration of the design goals driving the Filament Design System project",
        section: "task",
      },
      {
        img: tokenPipeline,
        caption: "Token-to-Template Pipeline",
        sub: "Filament Tokens → Token Compiler → Themes (VE contracts) → Component Styles → React Components → Templates",
        section: "pipeline",
      },
      {
        img: Filament,
        caption: "Filament Design System",
        sub: "One design system for all of Philips — from ICU patient monitors to consumer health apps — with 60+ accessible React components and a scalable token architecture",
        section: "result",
      },
      {
        img: Result,
        caption: "Project Results",
        sub: "Measured impact and outcomes of the Filament Design System project",
        section: "result",
      },
      {
        img: filamentQuickstart,
        caption: "Developer Documentation",
        sub: "Quick start guide with integration examples for SPA (Vite), MPA (Next.js), and module federation",
        section: "gallery",
      },
      {
        img: vanillaExtractDocs,
        caption: "Vanilla Extract Plugin Setup",
        sub: "Theme configuration via Vite/Next.js plugin — zero-config setup for teams adopting the DS",
        section: "gallery",
      },
      {
        img: themeSetup,
        caption: "Multi-Theme Architecture",
        sub: "Four theme layers: Blue, Expressive, Light, Medium — all driven by Vanilla Extract CSS contracts",
        section: "gallery",
      },
      {
        img: reactComponents,
        caption: "React Component API Docs",
        sub: "Typed component imports, icon/pictogram bundles, usage examples — version 4.7.1",
        section: "gallery",
      },
      {
        img: settingsTemplate,
        caption: "Application Settings Template",
        sub: "Full-featured settings page built entirely from Filament components — theme switcher, localization, preferences",
        section: "gallery",
      },
      {
        img: storybookDatagrid,
        caption: "Storybook — Datagrid Template",
        sub: "Living documentation with interactive templates, source code, controls, and accessibility tab",
        section: "gallery",
      },
    ],
    code: {
      label: "token-compiler.ts",
      language: "typescript",
      content: `import { TokenInput, ResolvedTokens } from './types';
import { contrastRatio, resolveAll } from './utils';

// Three-layer token architecture with automated WCAG enforcement
export const compileTokens = async (
  rawTokens: TokenInput
): Promise<ResolvedTokens> => {
  // Layer 1: Primitive — raw design values
  const primitive = {
    'blue-500': '#0066ff',
    'grey-50':  '#f7f7f7',
    'white':    '#ffffff',
  };

  // Layer 2: Semantic — context-aware intent references
  const semantic = {
    'color.action.primary':     '{primitive.blue-500}',
    'color.surface.default':    '{primitive.white}',
    'color.text.on-surface':    '{primitive.grey-50}',
  };

  // Layer 3: Component — scoped per-component tokens (auto-derived)
  const resolved = resolveAll(semantic, primitive);

  // Enforce WCAG 2.1 AA — throw hard error on contrast failure
  const ratio = contrastRatio(
    resolved['color.action.primary'],
    resolved['color.surface.default']
  );

  if (ratio < 4.5) {
    throw new ContrastError(
      \`WCAG AA fail on 'color.action.primary': \${ratio.toFixed(2)}:1 (min 4.5:1)\`
    );
  }

  return resolved;
};`,
    },
    challengeText:
      "Philips maintained over 30 UI toolkits of varying quality across 300 applications and touchpoints — spanning healthcare clinical platforms, patient monitors, and consumer health apps. This fragmentation was not only unproductive, creating massive cost overhead, but also led to deeply inconsistent user experiences. Nurses using one Philips platform had to re-learn completely different interaction patterns when switching to another. Accessibility was an afterthought with WCAG compliance below 25% across the entire portfolio. The business needed a single source of truth — a scalable, token-driven system that every product team could adopt without breaking their existing applications.",
    rolesAndResponsibilities: [
      "Led the libraries team within the DLS programme from both process and content side.",
      "Defined strategy for system architecture, token layers, toolkits, and org-wide adoption roadmap.",
      "Architected the three-layer token system: Primitive → Semantic → Component.",
      "Built a custom Node.js token compiler with automated WCAG 2.1 AA contrast enforcement.",
      "Established a 5-gate CI/CD pipeline: lint → token contrast → visual regression → jest-axe → Figma audit.",
      "Evaluated design implementation quality using the adoption score matrix.",
      "Provided solutions for business-unit issues, new use cases, and evolving user feedback.",
      "Facilitated trainings, workshops, and champions programme to drive adoption across 15 product teams.",
    ],
    outcomes: [
      "New design system with 23+ modules, patterns, and 60+ accessible React components.",
      "Consolidated 30+ UI toolkits down to 2 central libraries — a 93% reduction in fragmentation.",
      "WCAG accessibility compliance improved from <25% to near 100% at the foundation level (77% increase).",
      "Scalable migration path with design tokens and documentation enabling teams to adopt with zero breaking changes.",
      "25% reduction in UI/UX development cost confirmed by product teams across Grooming & Beauty, Health Tech, and Clinical.",
      "Adoption rate increased 49% within 3 onboarding sessions; 30+ applications now powered by Filament.",
      "iF Design Award 2024 + Red Dot Award recognition for design system excellence.",
    ],
  },

  {
    id: "ai-mcp",
    num: "02",
    title: "AI-Powered Component Generation",
    subtitle:
      "MCP server + LLM integration that gives AI coding agents live access to the Filament design system — so they generate DS-compliant React, iOS, and Android code on the first try.",
    tags: [
      "MCP Protocol",
      "AI Integration",
      "TypeScript",
      "LLM Engineering",
      "Developer Experience",
    ],
    problem:
      "Engineers using AI tools like GitHub Copilot and Claude Code to build Philips UIs were getting generic, non-compliant output — wrong component names, incorrect props, made-up imports. They'd spend 2–3 hours per screen manually searching Storybook, copy-pasting examples, and fixing AI hallucinations. The Filament Design System existed, but AI agents had no way to access it.",
    role: "Designed and built the custom MCP (Model Context Protocol) server exposing the Filament component registry to LLMs, enabling first-pass compliant code generation.",
    outcome:
      "30% faster development across 5 product lines. 75% fewer design-dev clarification cycles. Rework rate dropped from 30% to 8%.",
    metrics: [
      { val: "30%", lbl: "Faster Dev" },
      { val: "75%", lbl: "Fewer Cycles" },
      { val: "8%", lbl: "Rework Rate" },
      { val: "5+", lbl: "Product Lines" },
      { val: "3×", lbl: "Adoption Speed" },
    ],
    star: {
      S: {
        title: "Situation",
        subtitle: "The AI adaptation bottleneck",
        text: "Engineers using AI tools like GitHub Copilot and Claude Code to build Philips UIs were getting generic, non-compliant output — wrong component names, incorrect props, made-up imports. They'd spend 2–3 hours per screen manually searching Storybook, copy-pasting examples, and fixing AI hallucinations. The Filament Design System existed, but AI agents had no way to access it.",
        highlight:
          "The problem: AI acceleration created a new DS compliance debt that was invisible until code review — often late in the sprint.",
      },
      T: {
        title: "Task",
        subtitle: "Build the AI integration layer",
        text: "My task was to design and build a custom MCP (Model Context Protocol) server that would make the Filament component registry available as context to any LLM — transforming generic AI output into DS-compliant React code on the first pass. The system needed to expose component APIs, token constraints, variant options, ARIA requirements, and usage guidelines in a format the LLM could reason over. Crucially, it needed to integrate into existing developer workflows with zero friction.",
        highlight:
          "Key constraint: the solution had to work with any LLM (Copilot, Claude, GPT-4) via the standard MCP protocol — no vendor lock-in.",
      },
      A: {
        title: "Action",
        subtitle: "Building the MCP server",
        text: "Designed and built the Filament MCP Server — a hosted, schema-driven server with 14 tools across 4 categories: API (search_api, find_api_examples, search_api_member), Assets (search_assets, get_asset), Templates (find_templates, get_template), and Docs (documentation, setup, rules). Architected it as platform-agnostic from the ground up so React, Swift, and Kotlin libraries all share the same server logic. Integrated with VS Code Copilot, Claude Code, and Windsurf with zero local installation required.",
        highlight:
          "Architecture decision: the component registry is the single source of truth — same data powers Storybook, the MCP server, and automated testing.",
      },
      R: {
        title: "Result",
        subtitle: "Developer productivity impact",
        text: "The MCP server deployed across 5 product line engineering teams. Development time per component dropped by 30% — measured over a 3-month rollout. Design-dev clarification cycles fell by 75%: engineers no longer needed to ask designers which component to use or which variant applied. The rework rate at code review dropped from 30% to 8%. Teams using the MCP workflow adopted new DS components 3× faster than teams using traditional documentation.",
        highlight:
          "The MCP server transformed the design system from a constraint (something to comply with) into an accelerator (something that writes the code for you).",
      },
    },
    screenshots: [
      {
        img: BeforeAfter,
        caption: "Before vs After MCP Integration",
        sub: "Developer workflow transformation — from manual Storybook searches and AI hallucinations to first-pass compliant code generation",
        section: "challenge",
      },
      {
        img: MCPArchitecture,
        caption: "MCP Server Architecture",
        sub: "Multi-platform MCP server exposing Filament component registry, tokens, and documentation to LLMs across React, iOS, and Android",
        section: "task",
      },
      {
        img: MCPMindmap,
        caption: "MCP Tools Mindmap",
        sub: "14 tools across 4 categories: API discovery, asset management, template generation, and documentation access",
        section: "task",
      },
      {
        img: MCPResponse,
        caption: "MCP Server Response Example",
        sub: "Real-world MCP response showing component API, variants, token constraints, and ARIA requirements exposed to AI agents",
        section: "result",
      },
      {
        img: MCPResult,
        caption: "MCP Results & Impact Metrics",
        sub: "Measured productivity gains: 30% faster development, 75% fewer review cycles, and 8% rework rate across 5 product lines",
        section: "result",
      },
    ],
    videos: [
      {
        video: new URL("../assets/Filament-MCP_Demo.mov", import.meta.url).href,
        caption: "MCP Demo",
        sub: "Live demo of the MCP server in action — AI agent generating Filament-compliant React code on the first try, with no manual intervention",
        section: "gallery",
      },
    ],
    code: {
      label: "mcp-server.ts",
      language: "typescript",
      content: `import {
  Server,
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/server/index.js';
import { componentRegistry } from './registry';

// MCP server exposing Filament component registry to LLMs
const server = new Server({
  name: 'filament-ds',
  version: '1.0.0',
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'get_component',
      description: 'Filament DS component: API, variants, tokens, ARIA reqs',
      inputSchema: {
        type: 'object',
        properties: {
          component: { type: 'string', description: 'e.g. Button, Card, Modal' },
          variant: { enum: ['primary', 'secondary', 'ghost', 'danger'] },
        },
        required: ['component'],
      },
    },
    {
      name: 'validate_usage',
      description: 'Check whether proposed code is DS-compliant',
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  if (req.params.name === 'get_component') {
    const comp = componentRegistry.get(req.params.arguments.component);
    return { content: [{ type: 'text', text: JSON.stringify(comp) }] };
  }
});

// Result: 30% faster dev · 75% fewer review cycles · 8% rework rate`,
    },
  },
];
