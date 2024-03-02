"use client"
import React from 'react'
import { useTheme } from 'next-themes'
// import LightIcon from '@/public/images/light.svg'
// import DarkIcon from '@/public/images/dark.svg'
import { MoonIcon, SunIcon } from 'lucide-react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='py-3.5 md:py-4  px-2 dark:bg-[#1a253b] rounded-full shadow-lg flex flex-col items-center gap-y-3'>
    <button onClick={() => setTheme('light')} className={`theme-button ${theme === 'light' ? 'active' : ''}`}>
      <SunIcon className='w-6 h-4 md:w-8 md:h-6 text-center' />
    </button>
    <button onClick={() => setTheme('dark')} className={`theme-button ${theme === 'dark' ? 'active' : ''}`}>
      <MoonIcon className='w-6 h-4 md:w-8 md:h-6 text-center' />
    </button>
    </div>
  )
}

export default ThemeSwitcher

