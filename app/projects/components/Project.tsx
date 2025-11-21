"use client";
import { cn, Button, Card, CardBody, CardFooter, Image, Chip, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { Project } from "@/app/data/projects";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";

const tagLength = 4;
const randomColors = "bg-[#" + Math.floor(Math.random() * 16777215).toString(16) + "]";

export default function Project({ project }: { project: Project }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const visibleTags = project.tags.slice(0, tagLength);
  const hiddenTags = project.tags.slice(tagLength);

  return (
    <Card shadow="sm" className="border-none bg-[#585C61] rounded-[10px]">
      <Link href={`/projects/${project.id}`}>
        <Image
          removeWrapper
          radius="sm"
          alt={project.title}
          className="w-full object-cover h-[200px] rounded-none"
          src={project.image}
        />
        <CardBody className="px-4 py-3">
          <div className="mt-2 mb-2">
            <p className="text-xl font-medium text-foreground">{project.title}</p>
            <p className="text-xs text-foreground/70 line-clamp-2 mt-1">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {visibleTags.map((tag) => (
              <Chip
                key={tag}
                size="sm"
                variant="flat"
                className={cn(randomColors, "text-black dark:text-white px-2 py-2")}
              >
                {tag}
              </Chip>
            ))}
            {project.tags.length > 3 && (
              <Tooltip content={hiddenTags.join(", ")}>
                <Chip size="sm" variant="flat" className={cn(randomColors)}>
                  +{project.tags.length - 3}
                </Chip>
              </Tooltip>
            )}
          </div>
        </CardBody>
      </Link>
      <CardFooter className="justify-between px-4 pt-0">
        <div className="text-xs font-medium text-foreground/60">
          Updated: {new Date(project.dateUpdated).toLocaleDateString()}
        </div>
        <Button
          isIconOnly
          size="sm"
          radius="sm"
          className="bg-transparent"
          onPress={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <HiHeart className="text-red-500" size={20} />
          ) : (
            <HiOutlineHeart size={20} />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
