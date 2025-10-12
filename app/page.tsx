"use client";

import NavigationBar from "./components/sections/NavigationBar";
import About from "./components/sections/About";
import SkillsGroup from "./components/sections/skills/SkillsGroup";
import ProjectsGroup from "./components/sections/ProjectsGroup";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { useRef } from "react";

export default function Home() {
  const scrollToRef = useRef<HTMLInputElement>(null);
  return (
    <main className="text-foreground bg-background">
      <section>
        <NavigationBar />
      </section>
      <section id="about" className="px-14 ">
        <About />
      </section>
      <section id="skills" className="px-14 ">
        <SkillsGroup />
      </section>
      <section id="projects" className="px-14 ">
        <ProjectsGroup />
      </section>
      <section id="contact" className="px-14 ">
        <Contact />
      </section>
      <section ref={scrollToRef}>
        <Footer />
      </section>
    </main>
  );
}
