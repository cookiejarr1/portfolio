import React from "react";
import { Card, CardBody, Divider, Button } from "@nextui-org/react";
import Link from "next/link";
import TypewriterEffect from "./TypewriterEffect";
import Image from "next/image";

export default function About() {
  const jobTitles = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Mobile Developer",
  ];

  return (
    <section id="about" className="mx-0 md:mx-14 px-4 md:px-14 py-14">
      <div className="flex justify-center py-8 border-none bg-background/60 dark:bg-slate-700 hover:bg-default-80">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Profile Picture */}
          <span className="w-48 h-48 rounded-full overflow-hidden inline-block relative">
            <Image
              alt="Profile"
              src="/profile.png"
              fill
              className="object-cover"
              style={{}}
              priority={false}
            />
          </span>

          {/* Name */}
          <div className="font-bold text-foreground/100 text-3xl md:text-4xl">
            CYRUS JAROD LAYUGAN
          </div>

          {/* Typewriter Job Title */}
          <div className="text-lg text-foreground/80 min-h-[1.5rem]">
            <TypewriterEffect
              words={jobTitles}
              className="text-white font-medium"
            />
          </div>

          {/* Description */}
          <div className="space-y-3 max-w-md">
            <div className="text-medium font-medium">
              I&apos;m a builder. I&apos;m a thinker. I&apos;m a puzzle solver.
            </div>
            <div className="text-small text-foreground/70">
              A persistent and creative developer forever driven by curiosity,
              knowledge, and truth.
            </div>
          </div>

          <Divider className="w-full" />

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/projects">
              <Button color="primary" className="text-foreground font-medium">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="bordered"
                className="text-foreground font-medium"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
