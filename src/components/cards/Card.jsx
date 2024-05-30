// src/Card.js
// import React from 'react';
import styles from './Card.module.css';
// import PropTypes from 'prop-types';
// import {styles

const Card = ({ heading, name, age, color, year, icon }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.info}>Name: {name}</p>
      <p className={styles.info}>Age: {age}</p>
      <p className={styles.info}>Year: {year}</p>
    </div>
  );
};

export default Card;