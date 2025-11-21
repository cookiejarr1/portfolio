"use client";
import { portfolio } from "@/app/data/portfolio";
import { routeLinks } from "@/app/data/routes";
import { socialLinks } from "@/app/data/socials";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeSwitcher from "../ThemeSwitcher";
import PageRoutes from "./PageRoutes";
import Socials from "./Socials";
import * as motion from "motion/react-client";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col items-center border-b border-border/40 bg-gradient-to-br from-bg-background/95 to-bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group mr-10">
            <motion.span
              initial={{ opacity: 0, x: -80 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.6,
                scale: { type: "spring", stiffness: 10, delay: 0.6 },
              }}
              className="text-4xl font-medium text-foreground hidden sm:block"
            >
              {portfolio.username[0]}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              scale: { type: "spring", stiffness: 10, delay: 1.6 },
            }}
            className="hidden md:flex grow justify-center items-center space-x-1 px-4"
          >
            <PageRoutes routes={routeLinks} />
          </motion.div>

          {/* Right Side - Social Links & Theme Switcher */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.6,
              scale: { type: "spring", stiffness: 10, delay: 0.6 },
            }}
            className="hidden md:flex items-center space-x-4"
          >
            {/* <Socials socialsLinks={socialLinks} /> */}
            <div className="h-6 w-px bg-border/40" />
            <ThemeSwitcher />
          </motion.div>

          {/* Mobile Menu Button & Theme Switcher */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col space-y-2">
              <PageRoutes routes={routeLinks} />
              <div className="h-px bg-border/40 my-2" />
              <div className="flex items-center space-x-4 px-4 py-2">
                <Socials socialsLinks={socialLinks} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
