import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Intro = ({ theme }) => {
  const logoSrc =
    theme === "dark" ? "/assets/logo-white.png" : "/assets/logo-black.png";
  const text = "Alen Huric";

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
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`animated-letter ${
              index === currentLetterIndex ? "text-violet-500" : ""
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              fontSize: index === currentLetterIndex ? "3rem" : "inherit",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <motion.img
        src={logoSrc}
        alt="AH Logo"
        width="200"
        height="150"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-6 font-semibold dark:text-gray-300 tracking-wide italic"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Browse through some of my{" "}
        <span className="text-violet-500">software development</span> work
        below!
      </motion.p>
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
