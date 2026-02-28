import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.card}>
        <p className={styles.eyebrow}>Open to opportunities</p>
        <h2 className={styles.heading}>
          Let's build
          <br />
          something
          <br />
          <span className={styles.accent}>great.</span>
        </h2>
        <p className={styles.sub}>
          Looking for a Design Technologist who can architect systems, write the
          code, and speak both design and engineering?
        </p>
        <div className={styles.links}>
          <a
            href="mailto:prince.bakshi2000@gmail.com"
            className={styles.btnPrimary}
          >
            Email me →
          </a>
          <a
            href="https://www.linkedin.com/in/saurav-bakshi-5959a556/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Prince15130"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
