import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Logo from "../icons/LogoIcon";
import SearchBar from "./SearchBar";
import ThemeSwitcher from "../ThemeSwitcher";


export default function NavigationBar() {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex justify-evenly bg-primary">
      <Navbar isBordered className="px-14 bg-primary">
        <NavbarContent justify="end">
          <NavbarBrand>
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <Logo />
                <div className="font-bold text-content1">COOKIE</div>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center" className="hidden md:flex gap-6">
          <NavbarItem>
            <Link href="/">
              <Button 
                variant={pathname === "/" ? "solid" : "light"}
                className="text-content1 font-medium"
              >
                Home
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/projects">
              <Button 
                variant={pathname.startsWith("/projects") ? "solid" : "light"}
                className="text-content1 font-medium"
              >
                Projects
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">
              <Button 
                variant={pathname === "/contact" ? "solid" : "light"}
                className="text-content1 font-medium"
              >
                Contact
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="center" className="md:hidden">
          <NavbarItem>
            <Dropdown className='bg-primary'>
              <DropdownTrigger>
                <Button variant="bordered" className="text-content1">
                  Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Navigation Menu"
                onAction={(key) => {
                  if (key === "home") window.location.href = "/";
                  else if (key === "projects") window.location.href = "/projects";
                  else if (key === "contact") window.location.href = "/contact";
                  else scrollToSection(key.toString());
                }}
              >
                <DropdownItem key="home">Home</DropdownItem>
                <DropdownItem key="about">About</DropdownItem>
                <DropdownItem key="skills">Skills</DropdownItem>
                <DropdownItem key="projects">Projects</DropdownItem>
                <DropdownItem key="contact">Contact</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <SearchBar />
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
