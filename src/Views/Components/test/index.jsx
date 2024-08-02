import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import Header from '../Sections/S1_Header';
import About from '../Sections/S2_About';
import Tokenomics from '../Sections/S3_Tokenomics';
import Community from '../Sections/S4_Community';

// Define the slides array and remove the first object
const slides = [
  {
    id: 0,
    content: <div style={{ background: 'red', height: '100vh', width: '100vw' }}>Slide 1</div>,
  },
  {
    id: 1,
    content: <div style={{ height: '100vh', width: '100vw' }}><Header /></div>,
  },
  {
    id: 2,
    content: <div style={{ height: '100vh', width: '100vw' }}><About /></div>,
  },
  {
    id: 3,
    content: <div style={{ height: '100vh', width: '100vw' }}><Tokenomics /></div>,
  },
  {
    id: 4,
    content: <div style={{ height: '100vh', width: '100vw' }}><Community /></div>,
  },
];

// Remove the first slide from the slides array
slides.shift();

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Handler for dot clicks
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Handler for mouse wheel events
  const handleWheel = (event) => {
    setCurrentSlide((prevSlide) => {
      if (event.deltaY > 0) {
        return (prevSlide + 1) % slides.length;
      } else {
        return (prevSlide - 1 + slides.length) % slides.length;
      }
    });
  };

  // Handler for touch start
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  // Handler for touch move
  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  // Handler for touch end
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }
  };

  // Handler for arrow keys
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }
    if (event.key === 'ArrowLeft') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const slider = document.getElementById('slider');
    slider.addEventListener('wheel', handleWheel);
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      slider.removeEventListener('wheel', handleWheel);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Box
      id="slider"
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: `${slides.length * 25}vw`, // Adjust width based on number of slides
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            sx={{
              minWidth: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {slide.content}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '12%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {slides.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            className="customButton"
            color={currentSlide === index ? 'primary' : 'default'}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CustomSlider;
