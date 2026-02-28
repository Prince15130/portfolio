/* ============================================================
 * SECTION HEADER — src/components/SectionHeader/SectionHeader.tsx
 * ============================================================ */

import styles from "./SectionHeader.module.css";

interface Props {
  title: string;
  dark?: boolean;
}

export default function SectionHeader({ title, dark = false }: Props) {
  return (
    <div className={styles.header}>
      <h2 className={`${styles.title} ${dark ? styles.dark : ""}`}>{title}</h2>
      <div className={`${styles.divider} ${dark ? styles.dividerDark : ""}`} />
    </div>
  );
}
