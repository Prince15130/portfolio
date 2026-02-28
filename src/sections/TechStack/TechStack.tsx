import { stackItems } from "../../data/clients";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./TechStack.module.css";

export default function TechStack() {
  return (
    <section className={styles.outer} id="stack">
      <div className={styles.inner}>
        <SectionHeader title="Tech Stack" dark />
        <div className={styles.grid}>
          {stackItems.map((s) => (
            <div className={styles.item} key={s.name}>
              <p className={styles.tag}>{s.tag}</p>
              <p className={styles.name}>{s.name}</p>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
