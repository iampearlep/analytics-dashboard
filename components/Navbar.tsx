"use client"
import React from 'react'
import Image from 'next/image'
import NotificationsIcon from '@/public/images/notifications.svg'
import { Calendar } from "@/components/ui/calendar"
import Profile from '@/public/images/Profile.svg'
import Input from './ui/Input'
import { CalendarIcon, ChevronDownIcon, Cross1Icon, HamburgerMenuIcon, BellIcon } from '@radix-ui/react-icons'
import Link from "next/link";
import DashboardIcon from '@/public/images/dashboard.svg'
import TrendsIcon from '@/public/images/trends-up.svg'
import UsersIcon from '@/public/images/users.svg'
import BoxIcon from '@/public/images/box.svg'
import DiscountIcon from '@/public/images/discount.svg'
import InfoIcon from '@/public/images/info.svg'
import LightIcon from '@/public/images/light.svg'
import DarkIcon from '@/public/images/dark.svg'
import PlansIcon from '@/public/images/plans.svg'
import SettingsIcon from '@/public/images/settings.svg'
import LogoutIcon from '@/public/images/logout.svg'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isClicked, setIsClicked] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isToggle, setIsToggle] = React.useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className='bg-[#fafafa] text-black w-full mx-auto border-b '>
      <div className='flex flex-row items-center justify-between py-5 px-3 md:px-6'>
        <div className=''>
          <h1 className='text-2xl font-semibold'>Dashboard</h1>
        </div>
        {/* Desktop screens */}
        <div className='hidden w-9/12 md:flex flex-row justify-between items-center gap-x-4'>
          <div className='w-5/12'>
            <Input />
          </div>
          <div className='relative'>
           <button  onClick={() => setIsOpen(!isOpen)} className='px-4 py-2 hover:bg-[#e2e4e4] rounded-full flex flex-row items-center justify-center gap-x-1'>
           <CalendarIcon />
            <p className='text-sm'>November 15 2023</p>
           </button>
          {isOpen && 
            <div className='absolute -ml-12 bg-white shadow-xl mt-3 rounded-md'>
            <Calendar />
          </div>
          }
          </div>
          <div>
            <div className=''>
              <button onClick={() => setIsClicked(!isClicked)}>
              <Image src={NotificationsIcon} height={14} width={12} alt='' className='w-full h-full' />
              </button>
              {isClicked && 
              <div className='absolute -ml-20 bg-white shadow-lg text-sm py-4 px-4 mt-3 rounded-md'>
              <p>You have no notifications yet...</p>
            </div>
              }
            </div>
          </div>
          <div className='relative'>
            <button onClick={() => setOpen(!open)} className='flex flex-row px-2 py-2 justify-between items-center rounded-full border border-[#e2e4e4] gap-x-2'>
              <div>
                <Image src={Profile} height={14} width={12} alt='' className='w-full h-full' />
              </div>
              <div className='text-start'>
                <h4 className='text-[13px]'>Juston Bergson</h4>
                <p className='text-xs text-[#958d89]'>Juston@gmail.com</p>
              </div>
              <div>
                <ChevronDownIcon />
              </div>
            </button>
         {open && 
            <div className='absolute w-full'>
            <div className='bg-white px-1 rounded-md w-9/12 py-2 my-1 shadow-xl mx-auto'>
             <h5 className='text-sm font-semibold py-1 px-2'>My Account</h5>
             <hr />
            <ul className='py-1 text-xs flex flex-col'>
               <li className=' hover:bg-[#def7f1] px-2 py-1'>Profile</li>
               <li className=' hover:bg-[#def7f1] px-2 py-1'>Billing</li>
               <li className=' hover:bg-[#def7f1] px-2 py-1'>Team</li>
               <li className=' hover:bg-[#def7f1] px-2 py-1'>Subscription</li>
             </ul>
            </div>
           </div>
         }
          </div>
        </div>
        {/* Mobile screens */}
        <div className="md:hidden flex flex-row">
          <div className="flex flex-row items-center gap-x-4">
            <button onClick={handleToggle}>
              {isToggle ? (
                <Cross1Icon className="w-6 h-6" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6 " />
              )}
            </button>
          </div>
          {isToggle && (
            <div
              className="fixed top-0 right-0 h-full w-2/12 bg-white z-10 flex flex-col justify-start items-start "
            >
              <button onClick={handleToggle} className="absolute top-5 right-5">
                <Cross1Icon className="w-6 h-6" />
              </button>
              <div className="mt-20 max-h-screen overflow-y-auto w-full">
                <div className='px-2 pb-2 flex flex-col justify-center gap-y-5 items-center text-center'>
                  <CalendarIcon className='w-6 h-6 text-[#958d89]' />
                  <BellIcon className='w-6 h-6 text-[#958d89]' />
                  <Image src={Profile} height={10} width={8} alt='' className='w-6 h-6' />
                </div>
                <div className='px-2 py-2 flex flex-col justify-center gap-y-5 items-center text-center'>
                  <div>
                    <div className=''>
                      <Image src={DashboardIcon} height={20} width={16} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                      <Image src={TrendsIcon} height={20} width={16} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                      <Image src={UsersIcon} height={20} width={16} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                      <Image src={BoxIcon} height={20} width={16} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                      <Image src={DiscountIcon} height={20} width={16} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                      <Image src={InfoIcon} height={20} width={16} alt='' className='w-full h-full' />
                    </div>
                   <ThemeSwitcher />
                  </div>
                  <div>
                    <div className=''>
                      <Image src={SettingsIcon} height={20} width={16} alt='' className='w-full h-full' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
