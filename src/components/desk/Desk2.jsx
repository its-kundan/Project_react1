// import React from 'react';
import styles from './desk.module.css';
// import exampleImage from './path_to_your_image'; // Update the path to your image

const CardComponent = () => {
  return (
    <div className={styles.desk}>


        <div className={styles.titlec}>
          <p className={styles.title}> CEO&apos;s Message</p>
        </div>
        <div className={styles.card}>
          <div className={styles.smallpart}>
            <div className={styles.circle}>
              <img src="src\components\desk\photo2.jpeg" alt="Person" />
            </div>
            <div className={styles.name}>John Smith</div>
            <div className={styles.position}>CEO</div>
          </div>
          <div className={styles.largepart}>
              <div className={styles['quote-container']}>
              <p className={styles['quote-text'] }>
                This slide is 100% editable. Adapt it to your needs and capture your audiene &apos;s attention.
              </p>
             </div>
          </div>
        </div>
    </div>
    
    
  );
};

export default CardComponent;
