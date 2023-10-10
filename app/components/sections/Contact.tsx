import React from 'react'
import { Card, CardBody, Divider, Button, Image, Input, Link } from "@nextui-org/react";
import Contacts from '../icons/ContactsIcon';

export default function Contact() {
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
                                    alt="Album cover"
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
                                        <div className='pt-3 py-2'><Input isClearable size='sm' variant="bordered" label="Name" placeholder="Your Name" /></div>
                                        <div><Input isClearable size='sm' variant="bordered" type="email" label="Email" placeholder="example@email.com" /></div>
                                        <Divider className="mt-2 mb-3" />
                                        <Button color='primary' className='text-foreground font-medium'>Let's Talk</Button>
                                    </div>
                                </div>
                                <div className='flex justify-evenly pt-3 '>
                                    {Contacts.map(contact =>
                                        <div key={contact.name} className="flex ">
                                            <Button
                                                variant='bordered'
                                                size='sm'
                                                startContent={contact.image}
                                                onPress={() => console.log(contact.name)}
                                                className='text-foreground'
                                            >
                                                {contact.name}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}
