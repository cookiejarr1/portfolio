"use client";

import React, { useState } from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Project from "./Project";
import { projects } from "@/app/data/projects";
import type { StaticImageData } from "next/image";
import islaArenaImage from "@/app/assets/images/isla-arenapng.png";
import luveVenturesImage from "@/app/assets/images/luve-ventures.png";
import caapDesImage from "@/app/assets/images/caap-des.png";
import streamappImage from "@/app/assets/images/streamapp.png";
import iWasHereImage from "@/app/assets/images/i-was-here.png";
import smartPigFarm from "@/app/assets/images/smart-pig-farm.png";

// Map project IDs to their illustrative images
const projectImages: Partial<Record<string, StaticImageData>> = {
  "isla-arena": islaArenaImage,
  "luve-ventures": luveVenturesImage,
  "caap-des": caapDesImage,
  streamapp: streamappImage,
  "smart-pig-farm-app": smartPigFarm,
  "i-was-here": iWasHereImage,
};

export default function ProjectsGroup() {
  const currentYear = new Date().getFullYear();
  const years = ["All"];
  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = currentYear; i >= 2013; i--) {
    years.push(i.toString());
  }

  const [selectedYear, setSelectedYear] = useState(new Set(["All"]));
  const [selectedMonth, setSelectedMonth] = useState(new Set(["All"]));

  const filtered = projects.filter((item) => {
    const itemDate = new Date(item.dateUpdated);
    const itemYear = itemDate.getFullYear().toString();
    const itemMonth = months[itemDate.getMonth() + 1];

    const yearMatch = selectedYear.has("All") || selectedYear.has(itemYear);
    const monthMatch = selectedMonth.has("All") || selectedMonth.has(itemMonth);

    return yearMatch && monthMatch;
  });

  return (
    <section id="projects" className="relative z-10 mx-0 md:mx-14 px-4 md:px-40 py-14 mb-24">
      <div className="px-0 py-7 flex justify-between items-center">
        <p className="text-3xl font-medium text-black dark:text-white">
          {"What projects I'm working on"}
        </p>
        <div className="flex gap-2">
          {(!selectedYear.has("All") || !selectedMonth.has("All")) && (
            <Button
              variant="bordered"
              className="capitalize bg-red-500 rounded-md font-normal text-sm py-2"
              onPress={() => {
                setSelectedYear(new Set(["All"]));
                setSelectedMonth(new Set(["All"]));
              }}
            >
              Clear filter
            </Button>
          )}
          <Dropdown className="bg-gray-700 rounded-md">
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize bg-gray-600 rounded-md font-normal text-sm py-2"
              >
                Year: {Array.from(selectedYear)[0]}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Filter by Year"
              variant="bordered"
              closeOnSelect={true}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedYear}
              onSelectionChange={setSelectedYear}
              className="text-foreground text-sm font-medium pb-2"
            >
              {years.map((year) => (
                <DropdownItem key={year} textValue={year} className="pt-2 text-white">
                  {year}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="bg-gray-700 rounded-md">
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize bg-gray-600 rounded-md font-normal text-sm py-2"
              >
                Month: {Array.from(selectedMonth)[0]}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Filter by Month"
              variant="bordered"
              closeOnSelect={true}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedMonth}
              onSelectionChange={setSelectedMonth}
              className="text-foreground text-sm font-medium pb-2"
            >
              {months.map((month) => (
                <DropdownItem key={month} textValue={month} className="pt-2 text-white">
                  {month}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Project key={project.id} project={project} image={projectImages[project.id]} />
          ))}
        </div>
      ) : (
        <div className="pt-16 pb-10 h-72 align-middle">
          <p className="text-center font-medium text-foreground">No projects to display</p>
        </div>
      )}
    </section>
  );
}
