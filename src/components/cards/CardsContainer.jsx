// // import React from 'react'

// function Cards() {

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Cards


// src/CardsContainer.js
// import React from 'react';
import Card from './Card';
import styles from './CardsContainer.module.css';

const CardsContainer = () => {
  const cardsData = [
    {
      heading: 'Card 1',
      name: 'John Doe',
      age: 25,
      color: '#1E90FF',
      year: 2020,
      icon: '📘',
    },
    {
      heading: 'Card 2',
      name: 'Jane Smith',
      age: 30,
      color: '#FF4500',
      year: 2021,
      icon: '📙',
    },
    {
      heading: 'Card 3',
      name: 'Mike Johnson',
      age: 35,
      color: '#32CD32',
      year: 2022,
      icon: '📗',
    },
    {
      heading: 'Card 4',
      name: 'Sarah Brown',
      age: 28,
      color: '#FFD700',
      year: 2023,
      icon: '📒',
    },
    {
      heading: 'Card 5',
      name: 'Chris Lee',
      age: 22,
      color: '#FF1493',
      year: 2024,
      icon: '📕',
    },
  ];

  return (
    <div className={styles.container}>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsContainer;
