import React from "react";
import { motion } from "framer-motion";

const ExperienceIntro = ({ theme }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-10 px-6 md:px-20">
      <div className="md:w-4/5 text-center md:text-left mt-5 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-2xl font-bold mb-4">
          About Me{" "}
          <span
            role="img"
            aria-label="emoji"
            style={{
              display: "inline-block",
              transformOrigin: "70% 70%",
              animation: "wave 2s ease-in-out infinite",
            }}
          >
            🧑‍💻
          </span>
        </h2>

        <motion.p
          className="text-lg md:text-md sm:text-md xs:text-xs max-w-2xl mt-10 font-semibold tracking-wide text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            "I",
            "love",
            "exploring",
            "areas",
            "of",
            "technology,",
            "including",
            "cloud",
            "hosting,",
            "security,",
            "infrastructure,",
            "and",
            "AI.",
            "I",
            "have",
            "developed",
            "an",
            "interest",
            "in",
            "studying",
            "AI",
            "tools",
            "to",
            "understand",
            "how",
            "they",
            "can",
            "be",
            "integrated",
            "into",
            "software",
            "development,",
            "automation,",
            "and",
            "problem-solving,",
            "and",
            "I",
            "regularly",
            "experiment",
            "with",
            "AI",
            "to",
            "streamline",
            "workflows,",
            "optimize",
            "projects,",
            "and",
            "create",
            "smarter,",
            "more",
            "efficient",
            "solutions.",
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
        </motion.p>
      </div>

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

export default ExperienceIntro;
