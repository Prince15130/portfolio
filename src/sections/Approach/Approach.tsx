import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./Approach.module.css";

const steps = [
  {
    emoji: "🔍",
    title: "Identify",
    desc: "Audit existing systems, interview stakeholders, map fragmentation, use data to find what's broken and why.",
    variant: "one" as const,
  },
  {
    emoji: "📐",
    title: "Architect",
    desc: "Design the system structure: token layers, component contracts, API surface, versioning strategy, migration path.",
    variant: "two" as const,
  },
  {
    emoji: "⚡",
    title: "Build",
    desc: "TypeScript-first, accessible by default. Every component ships with Storybook stories, jest-axe tests, and usage guidelines.",
    variant: "three" as const,
  },
  {
    emoji: "🚀",
    title: "Adopt",
    desc: "Champions programme, workshops, automated CI gates, and the MCP AI workflow that makes using the DS the path of least resistance.",
    variant: "four" as const,
  },
  {
    emoji: "📊",
    title: "Measure",
    desc: "Adoption score matrix, telemetry on component usage, accessibility audits, developer satisfaction surveys.",
    variant: "five" as const,
  },
];

export default function Approach() {
  return (
    <section className={styles.section} id="approach">
      <SectionHeader title="My Approach" />

      <div className={styles.steps}>
        {steps.map((step) => (
          <div className={styles.step} key={step.title}>
            <div
              className={`${styles.circle} ${styles[`circle_${step.variant}`]}`}
            >
              <span className={styles.emoji} role="img" aria-label={step.title}>
                {step.emoji}
              </span>
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.desc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
