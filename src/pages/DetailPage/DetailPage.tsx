import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import MetricsStrip from "../../components/MetricsStrip/MetricsStrip";
import StarCard from "../../components/StarCard/StarCard";
import Screenshot from "../../components/Screenshot/Screenshot";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag/Tag";
import styles from "./DetailPage.module.css";
import starStyles from "../../components/StarCard/StarCard.module.css";

const tagVariants = ["blue", "orange", "black"] as const;
type StarType = "S" | "T" | "A" | "R";

const colorMap: Record<StarType, string> = {
  S: starStyles.colorS,
  T: starStyles.colorT,
  A: starStyles.colorA,
  R: starStyles.colorR,
};

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <Link to="/" className={styles.homeLink}>
          ← Back to home
        </Link>
      </div>
    );
  }

  const hasRichContent =
    project.challengeText &&
    project.rolesAndResponsibilities &&
    project.outcomes;

  const challengeShots = project.screenshots.slice(0, 2);
  const taskShots = project.screenshots.slice(2, 4);
  const tokenPipelineScreenshot = project.screenshots.slice(4, 5)[0];
  const resultShots = project.screenshots.slice(5, 7);
  const galleryShots = project.screenshots.slice(7);

  return (
    <main className={styles.main}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Back to all work
        </button>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.projectNum}>
              {project.num} / Design Technologist Work
            </p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>
          <div className={styles.heroTags}>
            {project.tags.map((t, i) => (
              <Tag key={t} label={t} variant={tagVariants[Math.min(i, 2)]} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Metrics ── */}
      <div className={styles.metricsWrap}>
        <MetricsStrip metrics={project.metrics} />
      </div>

      {/* ── Roles & Outcomes ── */}
      {hasRichContent && (
        <section className={styles.roSection}>
          <div className={styles.roGrid}>
            <div className={styles.roCol}>
              <p className={styles.overline}>Roles &amp; Responsibilities</p>
              <ul className={styles.bulletList}>
                {project.rolesAndResponsibilities!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* <div className={`${styles.roCol} ${styles.roColRight}`}>
              <p className={styles.overline}>Project Outcome</p>
              <ul className={styles.bulletList}>
                {project.outcomes!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </section>
      )}

      {/* ── Challenge + Screenshots side-by-side ── */}
      <section className={styles.challengeSection}>
        <div className={styles.challengeGrid}>
          <div className={styles.challengeText}>
            <div className={starStyles.header}>
              <div className={`${starStyles.letter} ${colorMap["S"]}`}>S</div>
              <div>
                <h3 className={starStyles.title}>{project.star.S.title}</h3>
                <p className={starStyles.subtitle}>{project.star.S.subtitle}</p>
              </div>
            </div>
            <p className={styles.overline}>The Challenge</p>

            <p className={styles.challengeBody}>
              {project.challengeText ?? project.problem}
            </p>
            <blockquote className={styles.pullQuote}>
              <span className={styles.quoteIcon}>"</span>
              {project.star.S.highlight.replace(/^[""]|[""]$/g, "")}
            </blockquote>
          </div>

          <div className={styles.challengeScreenshots}>
            {challengeShots.map((s, i) => (
              <Screenshot key={i} item={s} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.challengeSection}>
        <div className={styles.challengeGrid}>
          <div className={styles.challengeText}>
            <div className={starStyles.header}>
              <div className={`${starStyles.letter} ${colorMap["T"]}`}>T</div>
              <div>
                <h3 className={starStyles.title}>{project.star.T.title}</h3>
                <p className={starStyles.subtitle}>{project.star.T.subtitle}</p>
              </div>
            </div>
            <p className={styles.overline}>The Task</p>

            <p className={styles.challengeBody}>
              {project.star.T.text.replace(/^[""]|[""]$/g, "")}
            </p>
            <blockquote className={styles.pullQuote}>
              <span className={styles.quoteIcon}>"</span>
              {project.star.T.highlight.replace(/^[""]|[""]$/g, "")}
            </blockquote>
          </div>
          <div className={styles.challengeScreenshots}>
            {taskShots.map((s, i) => (
              <Screenshot key={i} item={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Implementation — desc left, code right ── */}
      <section className={styles.codeSection}>
        <div className={styles.codeGrid}>
          <div className={styles.challengeText}>
            <div className={starStyles.header}>
              <div className={`${starStyles.letter} ${colorMap["A"]}`}>A</div>
              <div>
                <h3 className={starStyles.title}>{project.star.A.title}</h3>
                <p className={starStyles.subtitle}>{project.star.A.subtitle}</p>
              </div>
            </div>
            <div>
              <p className={styles.overline}>Technical Implementation</p>
              <p className={styles.challengeBody}>
                {project.star.A.text.replace(/^[""]|[""]$/g, "")}
              </p>
              <blockquote className={styles.pullQuote}>
                <span className={styles.quoteIcon}>"</span>
                {project.star.A.highlight.replace(/^[""]|[""]$/g, "")}
              </blockquote>
            </div>
            <p className={styles.overline} style={{ marginTop: "1rem" }}>
              Token-to-Template Pipeline
            </p>
            <div style={{ marginTop: "0.5rem" }}>
              {tokenPipelineScreenshot && (
                <Screenshot item={tokenPipelineScreenshot} />
              )}
            </div>
          </div>
          <div className={styles.codeBlockWrap}>
            <CodeBlock code={project.code} />
          </div>
        </div>
      </section>

      <section className={styles.challengeSection}>
        <div className={styles.challengeGrid}>
          <div className={styles.challengeText}>
            <div className={starStyles.header}>
              <div className={`${starStyles.letter} ${colorMap["R"]}`}>R</div>
              <div>
                <h3 className={starStyles.title}>{project.star.R.title}</h3>
                <p className={starStyles.subtitle}>{project.star.R.subtitle}</p>
              </div>
            </div>
            <p className={styles.overline}>The Result</p>

            <p className={styles.challengeBody}>
              {project.star.R.text.replace(/^[""]|[""]$/g, "")}
            </p>
            <blockquote className={styles.pullQuote}>
              <span className={styles.quoteIcon}>"</span>
              {project.star.R.highlight.replace(/^[""]|[""]$/g, "")}
            </blockquote>
          </div>

          <div className={styles.challengeScreenshots}>
            {resultShots.map((s, i) => (
              <Screenshot key={i} item={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {galleryShots.length > 0 && (
        <section className={styles.gallerySection}>
          <p className={styles.overline}>Screens &amp; Artefacts</p>
          <h2 className={styles.galleryHeading}>Key Deliverables</h2>
          <div className={styles.galleryGrid}>
            {galleryShots.map((s, i) => (
              <Screenshot key={i} item={s} />
            ))}
          </div>
        </section>
      )}

      {/* ── Full STAR narrative ── */}
      {/* <section className={styles.impactSection}>
        <p className={styles.overline}>Full Project Story</p>
        <h2 className={styles.impactHeading}>STAR Narrative</h2>
        <div className={styles.starGrid}>
          {(["S", "T", "A", "R"] as const).map((key) => (
            <StarCard key={key} type={key} data={project.star[key]} />
          ))}
        </div>
      </section> */}

      {/* ── Prev / Next ── */}
      <div className={styles.pagination}>
        <div>
          {prevProject && (
            <button
              className={styles.paginationBtn}
              onClick={() => {
                navigate(`/project/${prevProject.id}`);
                window.scrollTo(0, 0);
              }}
            >
              ← {prevProject.title}
            </button>
          )}
        </div>
        <div>
          {nextProject && (
            <button
              className={styles.paginationBtn}
              onClick={() => {
                navigate(`/project/${nextProject.id}`);
                window.scrollTo(0, 0);
              }}
            >
              {nextProject.title} →
            </button>
          )}
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
