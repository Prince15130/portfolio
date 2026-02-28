import styles from "./Awards.module.css";
import IFAward from "../../assets/IF Design.png";
import RedDot from "../../assets/red-dot.jpeg";

const awards = [
  {
    logo: IFAward,
    title: "iF Design Award",
    project: "Filament Design System",
    year: "2023",
    desc: "Recognised for outstanding design quality and innovation in enterprise software design systems — International Forum Design.",
  },
  {
    logo: RedDot,
    title: "Red Dot Award",
    project: "Design Team of the Year",
    year: "2023",
    desc: "Recognised for the Filament DS impact on product quality and accessibility across the entire Philips portfolio.",
  },
  {
    logo: IFAward,
    title: "iF Design Award",
    project: "AI-based UI Builder",
    year: "2026",
    desc: "AI-based UI Builder automates interface design in line with the company’s design system and codebase, leading to faster development cycles and fewer errors.",
  },
];

export default function Awards() {
  return (
    <section className={styles.section} id="awards">
      <div className={styles.grid}>
        {awards.map((a) => (
          <article className={styles.card} key={a.project}>
            <div className={styles.logoWrap}>
              <img src={a.logo} alt={a.title} />
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.year}>{a.year}</span>
                <span className={styles.project}>{a.project}</span>
              </div>
              <h4 className={styles.title}>{a.title}</h4>
              <p className={styles.desc}>{a.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
