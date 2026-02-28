import sauravPhoto from "../../assets/saurav.jpeg";
import styles from "./Hero.module.css";

const stats = [
  { val: "60+", lbl: "Components Built" },
  { val: "30+", lbl: "Apps Powered" },
  { val: "12", lbl: "Years Exp." },
  { val: "3x", lbl: "Award Winner" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Design Technologist Portfolio · 2026</p>

        <h1 className={styles.name}>Saurav Bakshi</h1>

        <p className={styles.tagline}>
          Building the <span className={styles.accentBlue}>systems</span> that
          power
          <br />
          great <span className={styles.accentOrange}>products</span>
        </p>

        <p className={styles.bio}>
          I architect the bridge between design intent and production code. At
          Philips, I built the Filament Design System's engineering foundations
          — the token pipeline, React component library with WCAG 2.1 compliance
          by default, and the MCP-powered AI workflow that cut development time
          by 30%. I don't just design interfaces, I build the systems that make
          them possible at scale.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.btnPrimary}
            onClick={() => scrollTo("projects")}
          >
            View Work ↓
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => scrollTo("contact")}
          >
            Get in touch
          </button>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.lbl} className={styles.stat}>
              <div className={styles.statVal}>{s.val}</div>
              <div className={styles.statLbl}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.photoWrap}>
        <img src={sauravPhoto} alt="Saurav Bakshi" className={styles.photo} />
        <div className={styles.badge}>
          <div className={styles.badgeNum}>iF + Red Dot</div>
          <div className={styles.badgeLbl}>
            Award Winner
            <br />
            Filament Design System
          </div>
        </div>
      </div>
    </section>
  );
}
