"use client";

import NavigationBar from "./components/sections/NavigationBar";
import About from "./components/sections/About";
import SkillsGroup from "./components/sections/SkillsGroup";
import ProjectsGroup from "./components/sections/ProjectsGroup";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { useRef } from "react";

export default function Home() {
  const scrollToRef = useRef<HTMLInputElement>(null);
  return (
    <div className="text-foreground bg-background">
      <div>
        <NavigationBar />
      </div>
      <div className="px-14 ">
        <About />
      </div>
      <div className="px-14 ">
        <SkillsGroup />
      </div>
      <div className="px-14 ">
        <ProjectsGroup />
      </div>
      <div className="px-14 ">
        <Contact />
      </div>
      <div ref={scrollToRef}>
        <Footer />
      </div>
    </div>
  );
}
