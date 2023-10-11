import React from 'react'
import Skills from '../icons/SkillsIcon';
import { Card } from "@nextui-org/react";

export default function SkillsGroup() {
    return (
        <div className="px-40 py-14 justify-center">
            <div className="gap-8 flex flex-wrap justify-center ">
                {Skills.map((skill, index) => {
                    return (<Card
                        isPressable
                        isFooterBlurred
                        key={index}
                        radius="sm"
                        className="border-none bg-transparent p-5">
                        <div>{skill.image}</div>
                    </Card>)
                })}
            </div>
        </div>
    )
}
