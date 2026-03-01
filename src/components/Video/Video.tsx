import { useState, useEffect } from "react";
import type { Video as VideoType } from "../../data/types";
import styles from "./Video.module.css";

interface Props {
  item: VideoType;
  fullWidth?: boolean;
}

export default function Video({ item, fullWidth = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <figure
        className={`${styles.figure} ${fullWidth ? styles.fullWidth : ""}`}
      >
        <div className={styles.videoWrap}>
          <video
            src={item.video}
            className={styles.videoThumb}
            onClick={() => setIsOpen(true)}
            style={{ cursor: "pointer" }}
          />
          <div className={styles.playButtonOverlay}>
            <button
              className={styles.playButton}
              aria-label="Play video"
              onClick={() => setIsOpen(true)}
            >
              ▶
            </button>
          </div>
        </div>
        <figcaption className={styles.caption}>
          <span className={styles.captionTitle}>{item.caption}</span>
          <span className={styles.captionSub}>{item.sub}</span>
        </figcaption>
      </figure>

      {isOpen && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <video
              src={item.video}
              className={styles.lightboxVideo}
              autoPlay
              controls
            />
          </div>
        </div>
      )}
    </>
  );
}
