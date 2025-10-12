"use client";

import React from "react";
import NavigationBar from "../components/navigation/NavigationBar";
import Footer from "../components/Footer";
import ProjectsGroup from "./components/ProjectsGroup";

export default function ProjectsPage() {
  return (
    <div className="text-foreground bg-background min-h-screen">
      <NavigationBar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-foreground/70">
            Explore my collection of projects and experiments
          </p>
        </div>
        <ProjectsGroup />
      </div>
      <Footer />
    </div>
  );
}
