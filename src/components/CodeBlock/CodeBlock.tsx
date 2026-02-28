import Highlight from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { CodeBlock as CodeBlockType } from "../../data/types";
import styles from "./CodeBlock.module.css";

interface Props {
  code: CodeBlockType;
}

export default function CodeBlock({ code }: Props) {
  const language = code.language || "typescript";

  return (
    <div className={styles.wrap}>
      <div className={styles.topbar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.red}`} />
          <span className={`${styles.dot} ${styles.yellow}`} />
          <span className={`${styles.dot} ${styles.green}`} />
        </div>
        <span className={styles.label}>{code.label}</span>
        <span />
      </div>
      <div className={styles.body}>
        <Highlight
          style={atomOneDark}
          language={language}
          customStyle={{ margin: 0 }}
        >
          {code.content}
        </Highlight>
      </div>
    </div>
  );
}
