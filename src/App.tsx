"use client";

import { AuroraBackground } from "./components/ui/aurora-background"; // Revisa si la ruta es correcta
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Header from "./components/header";
import Skills from "./components/skills";




export function Index() {
  return (
    <AuroraBackground className="bg-background text-white min-h-screen"> {/* Aplica min-h-screen para que ocupe toda la pantalla */}
      <div className="bg-background text-white min-h-screen">
        <Header /> {/* Agrega el Header aquí */}
        <div className="pt-20">{/* Ajusta el padding para evitar que el header cubra contenido */}
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </AuroraBackground>
  );
}

export default function App() {
  return <Index />;
}
