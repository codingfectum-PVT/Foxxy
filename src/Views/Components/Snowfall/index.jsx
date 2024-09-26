import React, { useEffect } from 'react';
import './Snowfall.css';

const SnowfallA = () => {
  useEffect(() => {
    const container = document.getElementById('snowfall-container');

    // Remove old snowflakes (if any) and create new ones
    container.innerHTML = '';
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');

      // Set random size, position, and animation duration for each snowflake
      const size = Math.random() * 10 + 0.4 // Random size between 1vw and 5vw
      const left = Math.random() * 100; // Random position between 0vw and 100vw
      const duration = Math.random() * 10 + 5; // Random duration between 5s and 10s
      const delay = Math.random() * -10; // Random delay to start at different times

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${left}vw`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;

      container.appendChild(snowflake);
    }
  }, []);

  return <div className="snowfall-wrapper"><div id="snowfall-container" className="snowfall-container" /></div>;
};

const SnowfallB = () => {
  useEffect(() => {
    const container = document.getElementById('snowfall-containerB');

    // Remove old snowflakes (if any) and create new ones
    container.innerHTML = '';
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');

      // Set random size, position, and animation duration for each snowflake
      const size = Math.random() * 10 + 0.4 // Random size between 1vw and 5vw
      const left = Math.random() * 100; // Random position between 0vw and 100vw
      const duration = Math.random() * 10 + 5; // Random duration between 5s and 10s
      const delay = Math.random() * -10; // Random delay to start at different times

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${left}vw`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;

      container.appendChild(snowflake);
    }
  }, []);

  return <div className="snowfall-wrapper"><div id="snowfall-containerB" className="snowfall-container" /></div>;
};

const Raining = () => {
  useEffect(() => {
    const container = document.getElementById('snowfall-containerC');

    // Remove old snowflakes (if any) and create new ones
    container.innerHTML = '';
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.classList.add('rain');

      // Set random size, position, and animation duration for each snowflake
      const sizeWidth = Math.random() * 1 + 0.4 // Random size between 1vw and 5vw
      const sizeHeight = Math.random() * 50 + 4 // Random size between 1vw and 5vw
      const left = Math.random() * 100; // Random position between 0vw and 100vw
      const duration = Math.random() * 1.1 + 1.1; // Random duration between 5s and 10s
      const delay = Math.random() * -50; // Random delay to start at different times

      snowflake.style.width = `${sizeWidth}px`;
      snowflake.style.height = `${sizeHeight}px`;
      snowflake.style.left = `${left}vw`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;

      container.appendChild(snowflake);
    }
  }, []);

  return <div className="snowfall-wrapper"><div id="snowfall-containerC" className="snowfall-container" /></div>;
};

export {SnowfallA,SnowfallB, Raining};
