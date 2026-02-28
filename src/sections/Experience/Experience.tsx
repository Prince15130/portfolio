import { clients } from "../../data/clients";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./Experience.module.css";

const timelineItems = [
  {
    period: "June 2022 — Present · Bengaluru",
    role: "Design Technologist",
    company: "Philips — Central Design Team (XDC)",
    desc: "Led the engineering foundations of Filament DS — three-layer token architecture, Vanilla Extract component library, ReactAria accessibility layer, Storybook documentation, and MCP-based AI workflow. Drove adoption across 50+ applications and 5+ product lines.",
    variant: "blue" as const,
  },
  {
    period: "Mar 2021 — Jun 2022  · Bengaluru",
    role: "Module Lead - UI",
    company: "Impetus Technologies (Client: American Express)",
    desc: "Led development of 10+ interactive dashboards and data visualization solution for GRC banking clients using React and Visx, enabling risk-monitoring for 500+ users.Reduced manual reporting efforts by 40% through automation and integrating Chart.js and D3.js visualizations, replacing spreadsheet-based workflows.",
    variant: "orange" as const,
  },
  {
    period: "Feb 2014 — Mar 2021 · Bengaluru",
    role: "Technical Lead",
    company: "MetricStream Infotech (Client: SCB, Shell, NT, P&G)",
    desc: "Engineered and deployed 10+ custom web applications using ExtJS and React.js to address functionality gaps in MetricStream's platform, improving usability scores by 40% as measured by internal UX audits.",
    variant: "grey" as const,
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <SectionHeader title="Experience" />

      <div className={styles.grid}>
        {/* Timeline */}
        <div className={styles.timeline}>
          {timelineItems.map((t) => (
            <div className={styles.item} key={t.role}>
              <div className={`${styles.dot} ${styles[`dot_${t.variant}`]}`} />
              <p className={styles.period}>{t.period}</p>
              <h3 className={styles.role}>{t.role}</h3>
              <p className={styles.company}>{t.company}</p>
              <p className={styles.desc}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div className={styles.clientsWrap}>
          <p className={styles.clientsLabel}>Clients & Organisations</p>
          <div className={styles.clientsGrid}>
            {clients.map((c) => (
              <div
                className={`${styles.clientCard} ${c.current ? styles.clientCardCurrent : ""}`}
                key={c.name}
              >
                <div className={`${styles.clientIcon}`}>
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className={styles.clientLogo}
                    />
                  ) : (
                    <span className={styles.clientAbbr}>{c.abbr}</span>
                  )}
                </div>
                <div className={styles.clientName}>{c.name}</div>
                <div
                  className={`${styles.clientSub} ${c.current ? styles.clientSubCurrent : ""}`}
                >
                  {c.current ? `Current · ${c.sub}` : c.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
