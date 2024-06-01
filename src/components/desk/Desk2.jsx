// import React from 'react';
import styles from './desk.module.css';
// import ceoImage from './src\components\desk\photo.jpeg'; 

// import exampleImage from './path_to_your_image'; // Update the path to your image

const Desk2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.smallPart}>
        <div className={styles.circle}>
          <img src="src\components\desk\photo.jpeg" alt="Person" />
        </div>
        <div className={styles.name}>John Smith</div>
        <div className={styles.position}>CEO</div>
      </div>
      <div className={styles.largePart}>
        <p className={styles.quote}>
          This is an inspiring quote that captures the essence of leadership and vision.
          this is why you should add a quote.
          hello
          hi
        </p>
      </div>
    </div>
  );
};

export default Desk2;



