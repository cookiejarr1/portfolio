import React from "react";
import { Input } from "@nextui-org/react";
import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => (
  <Input
    isClearable
    placeholder="Search..."
    size="md"
    startContent={<SearchIcon />}
    classNames={{
      input: [
        "placeholder:text-content2 dark:placeholder:text-content2",
        "text-foreground dark:text-foreground",
      ],
      inputWrapper: [
        "bg-content1 dark:bg-content1",
      ]
    }}
  />
);

export default SearchBar