"use client";

import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    Chip
} from "@nextui-org/react";
import Link from "next/link";
import { Project } from '../../data/projects';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export default function ProjectsCard({ project }: { project: Project }) {
    const [isFavorite, setIsFavorite] = React.useState(false);

    return (
        <Card
            shadow="sm"
            className="border-none bg-background/60 dark:bg-default-100/50"
            isPressable
        >
            <Link href={`/projects/${project.id}`}>
                <Image
                    removeWrapper
                    radius='sm'
                    alt={project.title}
                    className="w-full object-cover h-[200px]"
                    src={project.image}
                />
                <CardBody className="px-4 py-3">
                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                        <p className="text-sm text-foreground/70 line-clamp-2 mt-1">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                            <Chip key={tag} size="sm" variant="flat" color="primary">
                                {tag}
                            </Chip>
                        ))}
                        {project.tags.length > 3 && (
                            <Chip size="sm" variant="flat">
                                +{project.tags.length - 3}
                            </Chip>
                        )}
                    </div>
                </CardBody>
            </Link>
            <CardFooter className="justify-between px-4 pt-0">
                <div className="text-xs text-foreground/60">
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
    )
}

