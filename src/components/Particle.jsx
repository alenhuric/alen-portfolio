// components/Particle.jsx
import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{ width: "100%", height: "100%" }}
      options={{
        background: {
          color: {
            value: "transparent", // Keep it transparent so your dark mode bg shows
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120, // number of stars
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
            },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outMode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
