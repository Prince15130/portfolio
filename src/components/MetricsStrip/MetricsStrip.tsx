import type { Metric } from '../../data/types';
import styles from './MetricsStrip.module.css';

interface Props {
  metrics: Metric[];
}

export default function MetricsStrip({ metrics }: Props) {
  return (
    <div className={styles.strip}>
      {metrics.map((m) => (
        <div className={styles.cell} key={m.lbl}>
          <div className={styles.val}>{m.val}</div>
          <div className={styles.lbl}>{m.lbl}</div>
        </div>
      ))}
    </div>
  );
}
