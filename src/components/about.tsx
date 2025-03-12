import React  from "react";
import { Cover } from "./ui/cover";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { GraduationCap, Briefcase, Code, Globe, Car } from "lucide-react";
import { FaJava, FaPython, FaReact, FaAws } from 'react-icons/fa';  // Importa iconos relevantes
import { SiSupabase } from 'react-icons/si';  // Icono de Supabase

import { GlowingEffect } from "./ui/glowing-effect";

// About Section
const About: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Conoce más sobre mí <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Alejandro Gámez
              </span>
            </h1>
          </>
        }
      >
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<GraduationCap className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Formación Académica"
            description="Ingeniero Informático por la Universidad Pablo de Olavide, con intercambio en la Università di Bologna."
          />
    
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Briefcase className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Experiencia Profesional"
            description="Desarrollador de software en Fujitsu y creador de Scoutalyst, una aplicación fullstack en Reflex."
          />
    
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Tecnologías"
            description={
              <div className="flex flex-wrap gap-3">
                
                <FaJava className="h-6 w-6 text-black dark:text-neutral-400" />
                <FaPython className="h-6 w-6 text-black dark:text-neutral-400" />
                <FaReact className="h-6 w-6 text-black dark:text-neutral-400" />
                <SiSupabase className="h-6 w-6 text-black dark:text-neutral-400" />
                <ul className="mt-2 text-sm text-black dark:text-neutral-400">
                <li>Java</li>
                <li>Python</li>
                <li>React</li>
                <li>Supabase</li>
              </ul>
              </div>
            }
          />
    
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Idiomas"
            description="Español (nativo), Inglés (C1), Alemán (A1) e Italiano (básico)."
          />
    
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Car className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Certificaciones"
            description="Azure Fundamentals, FHIR HL7, Introducción a la Ciberseguridad, Redes Neuronales y más."
          />
        </ul>
      </ContainerScroll>
    </div>
  );
};


  interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  }
   
  const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
      <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                  {title}
                </h3>
                <h2
                  className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
                md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                >
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

export default About;


