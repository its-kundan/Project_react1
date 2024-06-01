// import React from 'react';
import styles from './desk.module.css';
// import exampleImage from './path_to_your_image'; // Update the path to your image

const CardComponent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.smallpart}>
        <div className={styles.circle}>
          <img src="src\components\desk\photo.jpeg" alt="Person" />
        </div>
        <div className={styles.name}>John Smith</div>
        <div className={styles.position}>CEO</div>
      </div>
      <div className={styles.largepart}>
        <p className={styles.quote}>
          "This is an inspiring quote that captures the essence of leadership and vision."
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
