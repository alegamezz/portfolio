import React, { useCallback } from "react";
import Particles from "@tsparticles/react"; // Nueva importación
import type { Engine } from "@tsparticles/engine"; // Nueva importación
import { loadFull } from "tsparticles";
 // Esta sigue siendo válida

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 10,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;