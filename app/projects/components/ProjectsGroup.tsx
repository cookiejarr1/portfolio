"use client";

import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Project from "./Project";
import { projects } from "@/app/data/projects";

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
    <section id="projects" className="mx-0 md:mx-14 px-4 md:px-40 py-14">
      <div className="px-10 py-7 flex justify-between items-center">
        <p className="text-2xl font-bold">Projects</p>
        <div className="flex gap-2">
          <Dropdown className="bg-primary">
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
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
              className="text-foreground"
            >
              {years.map((year) => (
                <DropdownItem
                  key={year}
                  textValue={year}
                  className="pt-2 text-content1"
                >
                  {year}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="bg-primary">
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
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
              className="text-foreground"
            >
              {months.map((month) => (
                <DropdownItem
                  key={month}
                  textValue={month}
                  className="pt-2 text-content1"
                >
                  {month}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <Project key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center py-10 font-bold text-foreground">
            No Projects to Display
          </div>
        )}
      </div>
    </section>
  );
}
