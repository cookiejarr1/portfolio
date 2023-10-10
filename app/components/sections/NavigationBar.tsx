import React, { useState } from "react";

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
  return (
    <div className="flex justify-evenly bg-primary">
      <Navbar isBordered className="px-14 bg-primary">
        <NavbarContent justify="end">
          <NavbarBrand>
            <Dropdown className='bg-primary'>
              <DropdownTrigger>
                <Button isIconOnly size="lg" href="#" className="bg-transparent">
                  <Logo />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Scroll to View"
                onAction={(key) => alert(key)}
              >
                <DropdownItem key="about">About</DropdownItem>
                <DropdownItem key="skills">Skills</DropdownItem>
                <DropdownItem key="projects">Projects</DropdownItem>
                <DropdownItem key="contact">Contact</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div className="font-bold text-content1">COOKIE</div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarItem>
            <SearchBar />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
