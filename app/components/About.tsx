import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { jobTitles } from "../data/jobs";
import TypewriterEffect from "./TypewriterEffect";
import { about } from "../data/about";
import Profile from "./Profile";

export default function About() {
  return (
    <section id="about" className="mx-0 md:mx-14 px-4 md:px-14 py-14">
      <div className="flex justify-center py-8 border-none bg-background/60 dark:bg-slate-700/20 hover:bg-default-80 rounded-lg">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Profile Picture */}
          <span className="w-48 h-48 rounded-full overflow-hidden inline-block relative">
            <Profile />
          </span>

          {/* Name */}
          <div className="font-bold text-foreground/100 text-3xl md:text-4xl">
            {about.name}
            {/* Typewriter Job Title */}
            <span className="block text-lg text-foreground/80 min-h-[1.5rem] mt-2">
              <TypewriterEffect
                words={jobTitles}
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
              />
            </span>
          </div>

          {/* Description */}
          <div className="space-y-1 max-w-md">
            <div className="text-medium font-medium">{about.tagLine}</div>
            <div className="text-small text-foreground/70">
              {about.description}
            </div>
          </div>

          <Divider className="w-full" />

          {/* Action Buttons */}
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              as={Link}
              href="/projects"
              color="primary"
              className="dark:text-foreground font-medium"
            >
              View Projects
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="bordered"
              className="text-foreground font-medium"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
