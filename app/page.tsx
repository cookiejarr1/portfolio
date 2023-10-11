"use client";

import NavigationBar from "./components/sections/NavigationBar";
import Footer from "./components/sections/Footer";
import ProjectsGroup from "./components/sections/ProjectsGroup";
import { useRef } from "react";
import { Button } from "@nextui-org/react";
import About from "./components/sections/About";
import { Certificate } from "crypto";
import Certificates from "./components/sections/Certificates";
import SkillsGroup from "./components/sections/SkillsGroup";
import Contact from "./components/sections/Contact";

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
        {/* <SkillsGroup /> */}
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
