import React from 'react'
import { Card, CardBody, Divider, Button, Image } from "@nextui-org/react";

export default function About() {
    return (
        <div className="px-14 py-14">
            <div className="flex justify-center py-7">
                <Card
                    // isHoverable
                    isBlurred
                    className="py-4 border-none 
                    bg-background/60 
                    dark:bg-default-100/50 
                    hover:bg-default-80
                    max-w-[900px]"
                    shadow="md"
                >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="flex flex-col col-span-6 md:col-span-8 ">
                                <div className="flex justify-center items-start">
                                    <div className="flex flex-col gap-0 ">
                                        <div className="font-bold text-foreground/100 text-4xl">CYRUS JAROD LAYUGAN</div>
                                        <div className="text-medium text-foreground/80 ">Aspiring Software Engineer</div>
                                        <div className="text-medium font-medium mt-3">I'm a builder. I'm a thinker. I'm a puzzle solver.</div>
                                        <div className="text-small font-small ">A persistent and creative developer forever driven by curiosity, knowledge, and truth.</div>
                                        <Divider className="mt-2 mb-3" />
                                        <Button color='primary' className='text-foreground font-medium'>Cookie for you!</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="relative col-span-2 md:col-span-4">
                                <Image
                                    alt="Album cover"
                                    className="object-cover"
                                    height={200}
                                    shadow="md"
                                    src="/profile.jpg"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
