/* ============================================================
 * NAV — src/components/Nav/Nav.tsx
 * ============================================================ */

import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetail = location.pathname.startsWith("/project/");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        SB — Design Technologist
      </Link>

      <ul className={styles.links}>
        {isDetail ? (
          <li>
            <button onClick={() => navigate(-1)} className={styles.link}>
              ← All Projects
            </button>
          </li>
        ) : (
          <>
            <li>
              <button
                onClick={() => scrollTo("approach")}
                className={styles.link}
              >
                Approach
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollTo("projects")}
                className={styles.link}
              >
                Work
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("stack")} className={styles.link}>
                Stack
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("experience")}
                className={styles.link}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("awards")}
                className={styles.link}
              >
                Awards
              </button>
            </li>
          </>
        )}
      </ul>

      <button className={styles.cta} onClick={() => scrollTo("contact")}>
        Let's talk →
      </button>
    </nav>
  );
}
