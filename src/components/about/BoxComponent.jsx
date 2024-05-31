// import React from 'react';
import styles from './styles.module.css';

const colors = ['#EC9A9E', '#91CBE3', '#A0D1AA'];  // Colors for the outer circles and headings
const icons = ['🔔', '⭐', '⚡']; // Icons for the inner circles

const BoxComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={styles.box}
          style={{ '--outer-circle-color': color, '--heading-color': color }}
        >
          <div className={styles.outerCircle}>
            <div className={styles.innerCircle}>
              <span className={styles.icon}>{icons[index]}</span>
            </div>
          </div>
          <h2 className={styles.heading}>
            Heading {index + 1}
          </h2>
          <p className={styles.paragraph}>
            This is a paragraph inside box {index + 1}.
          </p>
        </div>
      ))}
    </div>
  );
};

export default BoxComponent;
