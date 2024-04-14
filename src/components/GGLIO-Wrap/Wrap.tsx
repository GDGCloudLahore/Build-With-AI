import wrapImg from "/src/assets/badge.webp";
import styles from './Wrap.module.css'; // Import the CSS module

const Wrap = () => {
  return (
    <div className={styles.wrapContainer}>
      <div className={styles.content}>
        <p className={styles.headline}>
          That's a wrap on Build With AI 2024
        </p>
        <div className={styles.contentDetails}>
          <p>
            Catch up on announcements, deep-dives, and anything you may have missed.
          </p>
          <a href="https://postman.gdgcloudlahore.org/subscription/form" target="_blank" rel="noopener noreferrer">
            <button className={styles.subscribeButton}>
              Subscribed to Newsletter
            </button>
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={wrapImg} alt="wrap image" className={styles.responsiveImg} />
      </div>
    </div>
  );
};

export default Wrap;
