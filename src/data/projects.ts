/* ============================================================
 * PROJECTS DATA — src/data/projects.ts
 * ============================================================ */

import storybookDatagrid from "../assets/storybook-datagrid.png";
import radiologyViewer from "../assets/radiology-viewer.png";
import filamentQuickstart from "../assets/filament-quickstart.png";
import vanillaExtractDocs from "../assets/vanilla-extract-docs.png";
import settingsTemplate from "../assets/settings-template.png";
import themeSetup from "../assets/theme-setup.png";
import reactComponents from "../assets/react-components.png";
import filamentOverview from "../assets/filament-overview.png";
import tokenPipeline from "../assets/token-pipeline.png";
import DesignSystemChallenge from "../assets/design-system-challenge.png";
import caseStudy from "../assets/Case Study Final Frame.png";
import tokenSystem from "../assets/token-system.png";
import tokenNaming from "../assets/tokens-naming.png";

import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "filament-ds",
    num: "01",
    title: "Philips Filament Design System",
    subtitle:
      "Enterprise-scale design system powering 368 applications across healthcare & consumer",
    tags: [
      "Vanilla Extract",
      "ReactAria",
      "Token Architecture",
      "TypeScript",
      "Storybook 10",
    ],
    problem:
      "Philips maintained 30+ fragmented UI toolkits used across 368 applications — creating massive overhead, inconsistent UX, and slow time-to-market across clinical and consumer product lines.",
    role: "Led the engineering foundations as Design Technologist on the Central Design Team — architecting the three-layer token system, Vanilla Extract component library, and driving org-wide adoption.",
    outcome:
      "Reduced toolkits from 30+ to 2 central libraries. 77% increase in accessibility compliance. 25% cost reduction. iF Design Award + 3× Red Dot Award recognition.",
    metrics: [
      { val: "93%", lbl: "Fewer Libraries" },
      { val: "132+", lbl: "Components" },
      { val: "368", lbl: "Apps Powered" },
      { val: "77%", lbl: "A11y Increase" },
      { val: "25%", lbl: "Cost Reduction" },
    ],
    star: {
      S: {
        title: "Situation",
        subtitle: "The fragmentation problem",
        text: "When I joined Philips's Central Design Team (XDC), the organisation maintained over 30 UI toolkits of varying quality across 368 applications and touchpoints — spanning healthcare clinical platforms, patient monitors, and consumer health apps. Each business unit had built their own design library, leading to catastrophic UX fragmentation. Nurses using one Philips platform had to re-learn completely different interaction patterns when switching to another. Accessibility was an afterthought — WCAG compliance sat below 25% across the portfolio.",
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
        text: "Within 18 months: the 30+ UI toolkits consolidated to 2 central libraries — a 93% reduction. The Filament DS powers 50+ applications across Philips's entire portfolio. Accessibility compliance went from below 25% to near 100% at the foundation level — a 77% improvement. Adoption rate increased by 49% from business units within 3 sessions of introduction. Development time reduced by 25% (confirmed by teams like Vaibhav at OneSpace). The system won the iF Design Award and Red Dot Award.",
        highlight:
          '"We can save 20–30% effort in UI/UX development using the DLS toolkits." — Vaibhav, Software Technologist, OneSpace, Philips',
      },
    },
    screenshots: [
      {
        img: DesignSystemChallenge,
        caption: "Filament Design System Challenge",
        sub: "Fragmented toolkits, inconsistent UX, and slow time-to-market across 50+ applications — the problem Filament was built to solve",
      },
      {
        img: caseStudy,
        caption: "Case Study",
        sub: "Case study frame from the Filament Design System project",
      },
      {
        img: tokenNaming,
        caption: "Token Naming",
        sub: "Illustration of the token naming conventions used in the Filament Design System",
      },
      {
        img: tokenSystem,
        caption: "Token System",
        sub: "Illustration of the token system architecture used in the Filament Design System",
      },
      {
        img: tokenPipeline,
        caption: "Token-to-Template Pipeline",
        sub: "Filament Tokens → Token Compiler → Themes (VE contracts) → Component Styles → React Components → Templates",
      },
      {
        img: filamentQuickstart,
        caption: "Developer Documentation",
        sub: "Quick start guide with integration examples for SPA (Vite), MPA (Next.js), and module federation",
      },
      {
        img: vanillaExtractDocs,
        caption: "Vanilla Extract Plugin Setup",
        sub: "Theme configuration via Vite/Next.js plugin — zero-config setup for teams adopting the DS",
      },
      {
        img: themeSetup,
        caption: "Multi-Theme Architecture",
        sub: "Four theme layers: Blue, Expressive, Light, Medium — all driven by Vanilla Extract CSS contracts",
      },
      {
        img: reactComponents,
        caption: "React Component API Docs",
        sub: "Typed component imports, icon/pictogram bundles, usage examples — version 4.7.1",
      },
      {
        img: settingsTemplate,
        caption: "Application Settings Template",
        sub: "Full-featured settings page built entirely from Filament components — theme switcher, localization, preferences",
      },
      {
        img: storybookDatagrid,
        caption: "Storybook — Datagrid Template",
        sub: "Living documentation with interactive templates, source code, controls, and accessibility tab",
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
      "Philips maintained over 30 UI toolkits of varying quality across 368 applications and touchpoints — spanning healthcare clinical platforms, patient monitors, and consumer health apps. This fragmentation was not only unproductive, creating massive cost overhead, but also led to deeply inconsistent user experiences. Nurses using one Philips platform had to re-learn completely different interaction patterns when switching to another. Accessibility was an afterthought with WCAG compliance below 25% across the entire portfolio. The business needed a single source of truth — a scalable, token-driven system that every product team could adopt without breaking their existing applications.",
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
      "New design system with 23+ modules, patterns, and 132+ accessible React components.",
      "Consolidated 30+ UI toolkits down to 2 central libraries — a 93% reduction in fragmentation.",
      "WCAG accessibility compliance improved from <25% to near 100% at the foundation level (77% increase).",
      "Scalable migration path with design tokens and documentation enabling teams to adopt with zero breaking changes.",
      "25% reduction in UI/UX development cost confirmed by product teams across Grooming & Beauty, Health Tech, and Clinical.",
      "Adoption rate increased 49% within 3 onboarding sessions; 368 applications now powered by Filament.",
      "iF Design Award 2024 + 3× Red Dot Award recognition for design system excellence.",
    ],
  },

  {
    id: "ai-mcp",
    num: "02",
    title: "AI-Powered Component Generation",
    subtitle:
      "MCP server + LLM integration eliminating manual design system adaptation for engineering teams",
    tags: [
      "MCP Protocol",
      "AI Integration",
      "TypeScript",
      "LLM Engineering",
      "Developer Experience",
    ],
    problem:
      "Engineers using LLMs to generate React code received generic output that ignored the Filament Design System entirely — spending 2-3 hours per component manually adapting AI output.",
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
        text: "As AI coding tools became ubiquitous in engineering workflows, a hidden bottleneck emerged: LLMs generate generic React code completely unaware of the Filament Design System. Engineers were using Copilot and ChatGPT to accelerate component development, but every output needed 2–3 hours of manual adaptation — swapping HTML elements for Filament components, replacing hard-coded colours with semantic tokens, wiring up correct ARIA roles, and matching the precise variant API. The promise of AI-assisted development was being entirely consumed by DS adaptation.",
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
        text: "I built a custom MCP server in TypeScript exposing the complete Filament component registry as a structured tool API. The server has three core tools: get_component (returns full API, variants, token constraints, ARIA requirements), list_components (searchable catalogue with categories and tags), and validate_usage (checks whether proposed usage matches DS guidelines). I structured the component registry as typed JSON with semantic metadata the LLM can reason over — variant options, required props, forbidden patterns, and ready-to-use code examples. I also built prompt templates that prime the LLM to use DS components before generating code.",
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
        img: settingsTemplate,
        caption: "AI-Generated Settings Screen",
        sub: "Full settings page generated with MCP-assisted workflow — compliant Filament components, correct tokens, zero manual adaptation",
      },
      {
        img: reactComponents,
        caption: "Component Registry API",
        sub: "The structured component API the MCP server exposes to LLMs — complete variant options, import paths, usage examples",
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

  {
    id: "cross-platform",
    num: "03",
    title: "Cross-Platform Harmonisation",
    subtitle:
      "Standardising patient monitoring UX across Acute, Ambulatory, and Health Informatics platforms",
    tags: [
      "Clinical UX",
      "SAAS Platform",
      "Accessibility",
      "Interaction Design",
      "UX Research",
    ],
    problem:
      "Philips's Connected Care platform had 15+ independent clinical applications each with unique navigation patterns, interaction models, and visual languages — creating dangerous cognitive load for ICU nurses.",
    role: "Led E2E UX harmonisation on the Acute Patient Monitoring Platform — from discovery audits through information architecture, interaction design, and validation with 18 clinical users.",
    outcome:
      "31.7% increase in usability scores. 20% decrease in learning curve. Harmonised navigation framework now used across 3 major clinical platforms.",
    metrics: [
      { val: "31.7%", lbl: "Usability Increase" },
      { val: "20%", lbl: "Learning Curve ↓" },
      { val: "18", lbl: "Users Tested" },
      { val: "3", lbl: "Platforms Unified" },
      { val: "83", lbl: "SUS Score" },
    ],
    star: {
      S: {
        title: "Situation",
        subtitle: "Fragmented clinical landscape",
        text: "Philips operates across healthcare specialisations: Acute Patient Monitoring, Ambulatory Monitoring, and Health Informatics. Each had evolved independently, creating 15+ standalone clinical applications with radically different navigation structures, information hierarchies, and interaction paradigms. An ICU nurse moving between the Patient Information Center and a radiology reporting tool had to mentally re-load an entirely different design system mid-workflow. In high-stakes clinical environments, cognitive load kills.",
        highlight:
          "Context: these tools run in ICUs, operating theatres, and radiology departments — where interaction errors carry patient safety implications.",
      },
      T: {
        title: "Task",
        subtitle: "Platform harmonisation mandate",
        text: "My mandate was to lead UX harmonisation for the Acute Patient Monitoring Platform (AcPMP) — the leading product in the North American clinical market. I was responsible for: conducting the design and process flow audit, identifying shared component patterns across platforms, redesigning the surveillance screen information architecture, building the decoupled primary/secondary/sector navigation framework, and validating with real clinical users.",
        highlight:
          "Constraint: zero breaking changes allowed. The platform serves live patient monitoring in active hospital systems.",
      },
      A: {
        title: "Action",
        subtitle: "The harmonisation methodology",
        text: "I started with a full design and process flow audit across all 15+ applications — cataloguing every navigation pattern, component, and interaction model. Working with the UXR team, I synthesised field research from clinical environments. I defined the harmonisation approach in three pillars: Baseline (token alignment), Modularisation (shared component inventory), and Governance (adoption strategy). I redesigned the Patient Sector from scratch: decoupling the sector header, waveform display, vital numerics, and alert system into independently scalable modules. I built the decoupled navigation framework — Primary Header, Secondary Header, and Sector Toolbar — that could adapt to any clinical context.",
        highlight:
          "Key insight from research: clinicians preferred the Expanding Toolbar over Overlay because it never blocked patient vital data during critical moments.",
      },
      R: {
        title: "Result",
        subtitle: "Clinical validation outcomes",
        text: "The SUS score for the prototype was 83 — versus 68 for the existing product. 13/18 participants rated the prototype higher. 31.7% overall increase in usability, 20% decrease in user learning curve. The navigation framework was adopted across 3 platforms. Mark Daly, Head of Product Marketing at Radiology Solutions: 'A new experience that not only looks and feels genuinely integrated with other Philips products, but also improves usability and efficiency for our clinical users.'",
        highlight:
          '"…improves usability and efficiency for our clinical users." — Mark Daly, Head of Product Marketing, Radiology Solutions',
      },
    },
    screenshots: [
      {
        img: radiologyViewer,
        caption: "Enterprise Radiology Viewer",
        sub: "CT scan workflow with Filament-based navigation: patient context header, study thumbnails, and clinical toolbars",
      },
      {
        img: storybookDatagrid,
        caption: "Clinical Worklist Template",
        sub: "Patient list with filter, sort, and status tracking — built on Filament Datagrid with clinical-specific density settings",
      },
    ],
    code: {
      label: "ClinicalLayout.tsx",
      language: "tsx",
      content: `import {
  PrimaryHeader,
  SecondaryHeader,
  SectorToolbar,
} from '@filament/react/navigation';
import { FlexBox } from '@filament/react';
import type { ClinicalPlatform } from './types';

// Decoupled clinical navigation framework
// Three-layer: Primary Header | Secondary Header | Sector Toolbar
export const ClinicalLayout = ({
  platform,
}: {
  platform: ClinicalPlatform;
}) => (
  <FlexBox direction="column" className={styles.layout}>

    {/* Context-aware platform header — adapts to any Philips platform */}
    <PrimaryHeader
      logo="philips"
      patientContext={platform.activePatient}
      userActions={platform.userActions}
    />

    {/* Platform-specific secondary navigation modules */}
    <SecondaryHeader modules={platform.modules} />

    {/* Expanding toolbar — never overlays patient vital data */}
    <SectorToolbar
      mode="expanding"
      vitals={platform.vitals}
      alerts={platform.activeAlerts}
    />

    <main className={styles.content}>
      {platform.children}
    </main>

  </FlexBox>
);`,
    },
  },
];
