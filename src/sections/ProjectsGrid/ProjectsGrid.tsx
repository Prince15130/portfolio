import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Tag from "../../components/Tag/Tag";
import styles from "./ProjectsGrid.module.css";

const tagVariants = ["blue", "orange", "black"] as const;

export default function ProjectsGrid() {
  const navigate = useNavigate();

  return (
    <section className={styles.section} id="projects">
      <SectionHeader title="Selected Work" />

      <div className={styles.grid}>
        {projects.map((p) => (
          <article
            key={p.id}
            className={styles.card}
            onClick={() => navigate(`/project/${p.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/project/${p.id}`)}
            aria-label={`View case study: ${p.title}`}
          >
            {/* Header */}
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.subtitle}>{p.subtitle}</p>
              </div>
              <div className={styles.tags}>
                {p.tags.slice(0, 3).map((t, i) => (
                  <Tag key={t} label={t} variant={tagVariants[i]} />
                ))}
              </div>
            </div>

            {/* Body */}
            <div className={styles.cardBody}>
              <div className={styles.bodyGrid}>
                <div>
                  <p className={styles.colLabel}>The Problem</p>
                  <p className={styles.colText}>{p.problem.slice(0, 140)}…</p>
                </div>
                <div>
                  <p className={styles.colLabel}>My Role</p>
                  <p className={styles.colText}>{p.role.slice(0, 140)}…</p>
                </div>
                <div>
                  <p className={styles.colLabel}>Outcome</p>
                  <p className={styles.colText}>{p.outcome.slice(0, 140)}…</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={styles.cardFooter}>
              <div className={styles.chips}>
                {p.metrics.slice(0, 3).map((m) => (
                  <div className={styles.chip} key={m.lbl}>
                    <span className={styles.chipVal}>{m.val}</span>
                    <span className={styles.chipLbl}>{m.lbl}</span>
                  </div>
                ))}
              </div>
              <button
                className={styles.viewBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/project/${p.id}`);
                }}
              >
                View Case Study →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
