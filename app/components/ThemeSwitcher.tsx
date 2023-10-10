'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react";
import LightModeIcon from "./icons/LightModeIcon";
import DarkModeIcon from "./icons/DarkModeIcon";

export default function ThemeSwitcher() {
    const [isDarkModeOn, setIsDarkModeOn] = useState(true);
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button isIconOnly onPress={() => {
            setIsDarkModeOn(!isDarkModeOn);
            setTheme(isDarkModeOn ? 'light' : 'dark')
            console.log(isDarkModeOn);
        }} radius="sm" href="#" className="bg-transparent">
            {isDarkModeOn ? <LightModeIcon /> : <DarkModeIcon />}
        </Button>
    )
}