import React from 'react'
import { Card, CardBody, Divider, Button, Image } from "@nextui-org/react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
    const socialLinks = [
        { name: "GitHub", icon: FiGithub, href: "https://github.com" },
        { name: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com" },
        { name: "Twitter", icon: FiTwitter, href: "https://twitter.com" },
        { name: "Email", icon: FiMail, href: "mailto:hello@cookie.dev" },
    ];

    return (
        <div className="px-14 py-14">
            <div className="flex justify-center py-7">
                <Card
                    isBlurred
                    className="py-4 border-none bg-background/60 dark:bg-default-100/50 max-w-[650px]"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-2 md:col-span-4">
                                <Image
                                    alt="Profile"
                                    className="object-cover"
                                    height={200}
                                    shadow="md"
                                    src="/profile.jpg"
                                    width="100%"
                                />
                            </div>
                            <div className="flex flex-col col-span-5 md:col-span-7">
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-0">
                                        <div className="pb-3 font-bold text-foreground/100 text-3xl">Want to Work Together?</div>
                                        <p className="text-sm text-foreground/70 mb-4">
                                            Let&apos;s connect and discuss how we can collaborate on your next project.
                                        </p>
                                        <Link href="/contact">
                                            <Button color='primary' className='text-foreground font-medium w-full'>
                                                Get In Touch
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <Divider className="my-4" />
                                <div className='flex justify-center gap-4'>
                                    {socialLinks.map(social => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/60 hover:text-foreground transition-colors"
                                                aria-label={social.name}
                                            >
                                                <Icon size={20} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
