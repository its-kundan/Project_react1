// import React from 'react';
// import { color } from 'framer-motion';
import styles from './styles.module.css';

const outerCircleColors = ['#EC9A9E', '#91CBE3', '#A0D1AA'];  // Colors for the outer circles and headings
const headingColors = ['red', 'blue', 'green']; 
const icons = ['🎯', '👁️', '💎']; // Icons for the inner circles
const headings = ['Mission', 'Vision', 'Values'];
// const dis = ['our mission is to provide a high quality education to the all over india', 'Our Vision is to make many skilled students','Our alumni is the value'];
const dis = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore etxytx dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
];
const BoxComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',}} className='card'>
      {outerCircleColors.map((outerColor, index) => (
        <div key={index} className={styles.box}>
          <div
            className={styles.outerCircle}
            style={{ backgroundColor: outerColor }}
          >
            <div className={styles.innerCircle}>
              <span className={styles.icon}>{icons[index]}</span>
            </div>
          </div>
          <h2 className={styles.heading} style={{ color: headingColors[index] }}>
            {headings[index]}
          </h2>
          <p className={styles.paragraph}>
             {dis[index]};
          </p>
        </div>
      ))}
    </div>
  );
};

export default BoxComponent;
