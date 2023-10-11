"use client";

import React, { Key, useMemo, useState } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardFooter,
  Image,
} from "@nextui-org/react";
import ProjectsCard from "./ProjectsCard";

export default function ProjectsGroup() {
  const projects = [
    {
      name: "Project",
      id: 5,
      dateCreated: "09-03-2022", //mm-dd-yyyy
      dateUpdated: "12-01-2023",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 4,
      dateCreated: "27-06-2021",
      dateUpdated: "12-05-2022",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 3,
      dateCreated: "18-03-2020",
      dateUpdated: "08-22-2020",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 2,
      dateCreated: "07-07-2019",
      dateUpdated: "05-11-2019",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
    {
      name: "Project",
      id: 1,
      dateCreated: "11-08-2013",
      dateUpdated: "11-08-2013",
      images: [],
      links: [],
    },
  ];
  const currentYear = new Date().getFullYear();
  const years = ["All"];

  for (let i = currentYear; i >= 2013; i--) {
    years.push(i.toString());
  }

  const [selectedKeys, setSelectedKeys] = useState(new Set([years[0]]));

  const filtered = projects.filter(function (item) {
    return selectedKeys.has(
      new Date(item.dateUpdated).getFullYear().toString()
    );
  });

  return (
    <div className="px-40 py-14">
      <div className="px-10 py-7 flex justify-between ">
        <p className="text-2xl font-bold">Projects</p>
        <ButtonGroup variant="flat">
          <Dropdown className="bg-primary">
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {selectedKeys}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Projects by Year"
              variant="bordered"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
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
        </ButtonGroup>
      </div>
      <div className="gap-7 flex flex-wrap justify-center ">
        {selectedKeys.keys().next().value === "All"
          ? projects.map((project, index) => {
              return (
                <ProjectsCard key={index} index={index} project={project} />
              );
            })
          : filtered.map((project, index) => {
              console.log(filtered);
              return filtered ? (
                <ProjectsCard key={index} index={index} project={project} />
              ) : (
                <div className="font-bold text-foreground">
                  No Projects to Display
                </div>
              );
            })}
      </div>
    </div>
  );
}
