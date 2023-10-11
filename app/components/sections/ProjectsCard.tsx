import React from 'react'
import {
    Button,
    Card,
    CardFooter,
    Image
} from "@nextui-org/react";
import CookieUnlikeIcon from '../icons/CookieUnlikeIcon';
import CookieLikeIcon from '../icons/CookieLikeIcon';

export default function ProjectsCard({ index, project }: {
    index: number, project: {
        name: string;
        id: number;
        dateCreated: string;
        dateUpdated: string;
        images: never[];
        links: never[];
    }
}) {
    const [isCookieLike, setIsCookieLike] = React.useState(false);

    return (
        <Card
            key={index}
            shadow="sm"
            className="pb-2 border-none bg-background/60 dark:bg-default-100/50 max-w-[650px]"

        >
            <Image
                removeWrapper
                radius='sm'
                alt={project.name}
                className="w-full object-cover h-[140px]"
                src="/placeholder.png"
                placeholder="blur"
            />
            <CardFooter className="justify-evenly">
                <div className=" px-4">
                    <div className="text-small text-foreground">{project.name}{index}</div>
                    <div className="text-small text-foreground">Last Updated: {project.dateUpdated}</div>
                </div>
                <Button
                    isIconOnly
                    radius="sm"
                    href="#"
                    className="bg-transparent"
                    onPress={() => {
                        setIsCookieLike(!isCookieLike);
                        console.log(isCookieLike);
                    }}
                >
                    {isCookieLike ? <CookieLikeIcon /> : <CookieUnlikeIcon />}
                </Button>
            </CardFooter>
        </Card>
    )
}

