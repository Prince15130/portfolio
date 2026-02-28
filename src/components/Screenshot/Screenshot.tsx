import { useState, useEffect } from "react";
import type { Screenshot as ScreenshotType } from "../../data/types";
import styles from "./Screenshot.module.css";

interface Props {
  item: ScreenshotType;
  fullWidth?: boolean;
}

export default function Screenshot({ item, fullWidth = false }: Props) {
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
        <div className={styles.imgWrap}>
          <img
            src={item.img}
            alt={item.caption}
            className={styles.img}
            loading="lazy"
            onClick={() => setIsOpen(true)}
            style={{ cursor: "pointer" }}
          />
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
            <img
              src={item.img}
              alt={item.caption}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </>
  );
}
