"use client"
import React from 'react'
import Image from 'next/image'
import Chart from '@/public/images/chart.svg'
import BarChart from './BarChart'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import MobileBarChart from './MobileBarChart'

const Trends = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='bg-white dark:bg-[#1a253b] w-full  rounded-lg border border-[#e2e4e4] dark:border-[#495260] overflow-y-hidden py-4 px-4'>
  <div className='flex flex-col gap-y-10'>
  <div className='flex flex-row justify-between items-center'>
        <h2 className='font-semibold text-base md:text-lg'>Sales Trend</h2>
       <div className='relative flex flex-row items-center gap-x-2'>
        <h2 className='font-semibold text-base md:text-lg'>Sort By:</h2>
       <button onClick={() => setOpen(!open)} className='flex flex-row px-2 py-2 justify-between items-center rounded-full border border-[#e2e4e4] dark:border-[#495260] gap-x-2  text-xs md:text-sm'>Monthly  <ChevronDownIcon /></button>
       {open && 
            <div className='absolute w-full mt-36 ml-6'>
            <div className='bg-white dark:bg-[#111827] px-1 rounded-md w-9/12 py-2 my-1 shadow-xl mx-auto'>
            <ul className='py-1 text-xs text-center flex flex-col'>
               <li className=' hover:bg-[#def7f1] dark:hover:bg-[#1a253b] px-2 py-1'>Weekly</li>
               <li className=' hover:bg-[#def7f1] dark:hover:bg-[#1a253b] px-2 py-1'>Monthly</li>
               <li className=' hover:bg-[#def7f1] dark:hover:bg-[#1a253b] px-2 py-1'>Yearly</li>
             </ul>
            </div>
           </div>
        }
       </div>
        </div>
    <div className='md:h-[336px] hidden md:flex justify-center items-center'>
        <BarChart />
    </div>
    <div className='flex justify-center items-center md:hidden'>
      <MobileBarChart />
    </div>
  </div>
    </div>
  )
}

export default Trends
