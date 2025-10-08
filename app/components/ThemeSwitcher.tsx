'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { HiMoon, HiSun } from "react-icons/hi"

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-9 h-9" />
        )
    }

    const isDark = theme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-md text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
        </button>
    )
}