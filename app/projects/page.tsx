"use client";

import React from "react";
import ProjectsGroup from "./components/ProjectsGroup";

export default function ProjectsPage() {
  return (
    <div className="text-foreground bg-background min-h-screen py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-foreground/70">
          Explore my collection of projects and experiments
        </p>
      </div>
      <ProjectsGroup />
    </div>
  );
}
