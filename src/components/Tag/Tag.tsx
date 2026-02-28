import styles from './Tag.module.css';

type Variant = 'blue' | 'orange' | 'black';

interface Props {
  label: string;
  variant?: Variant;
}

export default function Tag({ label, variant = 'black' }: Props) {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>{label}</span>
  );
}
