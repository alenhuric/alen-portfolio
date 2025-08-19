import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-4xl md:text-2xl font-bold mb-4">
          Hi There!{" "}
          <span
            role="img"
            aria-label="wave"
            style={{
              display: "inline-block",
              transformOrigin: "70% 70%",
              animation: "wave 2s ease-in-out infinite",
            }}
          >
            👋🏻
          </span>
        </h2>

        <h1 className="text-3xl md:text-4xl mb-3 md:mb-3 font-bold">
          I'm{" "}
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

        <div className="text-xl md:text-xl text-violet-500 font-semibold">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "PHP & LAMP Stack Specialist",
                "Open Source Contributor",
                "Freelancer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 70,
            }}
          />
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <motion.img
          src={logoSrc}
          alt="AH Logo"
          className="w-48 h-auto md:w-60"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ rotate: 3 }}
        />
      </div>

      {/* <motion.p
        className="text-lg md:text-xl max-w-2xl mt-10 font-semibold tracking-wide italic text-center md:text-left"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {[
          "Browse",
          "through",
          "some",
          "of",
          "my",
          "software",
          "development",
          "work",
          "below!",
        ].map((word, index) => (
          <span
            key={index}
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } hover:text-violet-500 transition-colors duration-300 inline-block mr-1`}
          >
            {word}
          </span>
        ))}
      </motion.p> */}

      <style>
        {`
        @keyframes bounceEffect {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
          }

          .animated-letter {
            animation: bounceEffect 0.1s infinite;
          }

          @keyframes wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(14deg); }
            30% { transform: rotate(-8deg); }
            45% { transform: rotate(14deg); }
            60% { transform: rotate(-4deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Intro;
