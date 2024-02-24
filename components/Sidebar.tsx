import React from 'react'
import Image from 'next/image'
import LogoIcon from '@/public/images/Logo.svg'
import DashboardIcon from '@/public/images/dashboard.svg'
import TrendsIcon from '@/public/images/trends-up.svg'
import UsersIcon from '@/public/images/users.svg'
import BoxIcon from '@/public/images/box.svg'
import DiscountIcon from '@/public/images/discount.svg'
import InfoIcon from '@/public/images/info.svg'
import PlansIcon from '@/public/images/plans.svg'
import SettingsIcon from '@/public/images/settings.svg'
import LogoutIcon  from '@/public/images/logout.svg'
import ThemeSwitcher from './ThemeSwitcher'





const Sidebar = () => {
  return (
  <div className=' bg-[#f7f8fa] fixed top-0 left-0 h-screen w-24 z-10 border-r border-[#e2e4e4]'>
  <div className='px-6 py-6 flex flex-col justify-center gap-y-10 items-center text-center'>
    <div>
    <div className='pt-1'>
      <Image src={LogoIcon} height={20} width={20} alt='' className='w-full h-full' />
    </div>
    </div>
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
    <div className=''>
      <Image src={LogoutIcon} height={20} width={16} alt='' className='w-full h-full' />
    </div>
    </div>
  </div>
  </div>
  )
}

export default Sidebar