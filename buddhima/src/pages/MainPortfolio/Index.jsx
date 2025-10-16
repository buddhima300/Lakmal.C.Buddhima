import React from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { experiences, projects } from "../../data/MainPortfolio";
export const MainPortfolio = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience sectionData={experiences} />
      <Projects sectionData={projects} />
      <Contact />
    </>
  );
};
