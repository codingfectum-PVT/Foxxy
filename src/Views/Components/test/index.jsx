import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import Header from '../Sections/S1_Header';
import About from '../Sections/S2_About';
import Tokenomics from '../Sections/S3_Tokenomics';
import Community from '../Sections/S4_Community';
import Features from '../Sections/S3_Features';
import RoadMap from '../Sections/S3_RoadMap';
import TokenDistribution from '../Sections/S3_TokenDistribution';

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
    content: <div style={{ height: '100vh', width: '100vw' }}><Features /></div>,
  },
  {
    id: 4,
    content: <div style={{ height: '100vh', width: '100vw' }}><Tokenomics /></div>,
  },
  {
    id: 5,
    content: <div style={{ height: '100vh', width: '100vw' }}><TokenDistribution /></div>,
  },
  {
    id: 6,
    content: <div style={{ height: '100vh', width: '100vw' }}><RoadMap /></div>,
  },
  {
    id: 7,
    content: <div style={{ height: '100vh', width: '100vw' }}><Community /></div>,
  },
];

// Remove the first slide from the slides array
slides.shift();

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);
  const isThrottling = useRef(false);

  // Throttle function to limit rapid fire events
  const throttle = (func, limit) => {
    if (!isThrottling.current) {
      func();
      isThrottling.current = true;
      setTimeout(() => {
        isThrottling.current = false;
      }, limit);
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Smoothly handle mouse wheel events
  const handleWheel = (event) => {
    throttle(() => {
      setCurrentSlide((prevSlide) => {
        if (event.deltaY > 0) {
          return (prevSlide + 1) % slides.length;
        } else {
          return (prevSlide - 1 + slides.length) % slides.length;
        }
      });
    }, 500);
  };

  // Touch start and move for mobile gesture support
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    
    // Set a threshold for a valid swipe to trigger slide movement
    const swipeThreshold = 110; // 50px is a good threshold for detecting a swipe

    console.log("Outter test: ",Math.abs(swipeDistance));
    if (Math.abs(swipeDistance) > swipeThreshold) {
      console.log("inner test: ", Math.abs(swipeDistance));
      if (swipeDistance > 0) {
        // Swipe left (next slide)
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      } else {
        // Swipe right (previous slide)
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      }
    } 
    // If swipeDistance is below the threshold, it's considered a tap, so do nothing
  };

  // Keyboard navigation
  const handleKeyDown = (event) => {
    throttle(() => {
      if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
      if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      }
    }, 500);
  };

  useEffect(() => {
    const slider = sliderRef.current;
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
      ref={sliderRef}
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
          width: `${slides.length * 14.289}vw`, // Adjust width based on number of slides
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slides.map((slide) => (
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
          bottom: '5%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {slides.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            color={currentSlide === index ? 'primary' : 'default'}
            className={currentSlide === index ? 'MUI-custom-primary' : 'MUI-custom-default'}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CustomSlider;
