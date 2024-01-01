import React, { useEffect, useState } from 'react';

const Intro = ({ theme }) => {
  const logoSrc = theme === 'dark' ? '/assets/logo-white.png' : '/assets/logo-black.png';
  const text = 'Alen Huric';

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const animateText = () => {
      setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % (text.length + 1));
    };

    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(animateText, 1000);
    } else if (currentLetterIndex === text.length) {
      setTimeout(() => {
        setCurrentLetterIndex(0);
        setIsPaused(false);
      }, 7000); // Pause for 3 seconds before restarting
    }

    return () => clearInterval(intervalId);
  }, [currentLetterIndex, isPaused, text.length]);

  useEffect(() => {
    if (currentLetterIndex === text.length) {
      setIsPaused(true);
    }
  }, [currentLetterIndex, text.length]);

  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className={`animated-letter ${index === currentLetterIndex ? 'text-violet-500' : ''}`}
            style={{
              animationDelay: `${index * 100}ms`,
              fontSize: index === currentLetterIndex ? '3rem' : 'inherit',
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <img src={logoSrc} alt="Logo Image" width='200' height='150' />
      <p className='text-sm max-w-xl mb-6 font-bold'>
        A Software Developer with over 3 years of experience working with web-based applications and Enterprise Resource Planning (ERP) systems. Select one of the projects below to browse through some of my work!
      </p>
      <style>
        {`
          @keyframes bounceEffect {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
          }
          
          .animated-letter {
            animation: bounceEffect 0.1s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Intro;