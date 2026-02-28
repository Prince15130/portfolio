import type { StarEntry } from '../../data/types';
import styles from './StarCard.module.css';

type StarType = 'S' | 'T' | 'A' | 'R';

const colorMap: Record<StarType, string> = {
  S: styles.colorS,
  T: styles.colorT,
  A: styles.colorA,
  R: styles.colorR,
};

interface Props {
  type: StarType;
  data: StarEntry;
}

export default function StarCard({ type, data }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={`${styles.letter} ${colorMap[type]}`}>{type}</div>
        <div>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.text}>{data.text}</p>
        <div className={styles.highlight}>
          <span className={styles.highlightIcon}>💡</span>
          {data.highlight}
        </div>
      </div>
    </article>
  );
}
