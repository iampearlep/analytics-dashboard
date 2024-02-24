"use client"
import React from 'react'
import { useTheme } from 'next-themes'
// import LightIcon from '@/public/images/light.svg'
// import DarkIcon from '@/public/images/dark.svg'
import { MoonIcon, SunIcon } from 'lucide-react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  
  return (
    <div className='py-4 px-2 rounded-full shadow-lg flex flex-col gap-y-3'>
    <button onClick={() => setTheme('light')} className={`theme-button ${theme === 'light' ? 'active' : ''}`}>
      <SunIcon className='w-8 h-6 text-center' />
    </button>
    <button onClick={() => setTheme('dark')} className={`theme-button ${theme === 'dark' ? 'active' : ''}`}>
      <MoonIcon className='w-8 h-6 text-center' />
    </button>
    </div>
  )
}

export default ThemeSwitcher

