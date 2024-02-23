"use client"
import React from 'react'
import Image from 'next/image'
import Chart from '@/public/images/chart.svg'
import BarChart from './BarChart'
const Trends = () => {
  return (
    <div className='bg-white w-full h-[450px] rounded-lg border border-[#e2e4e4] '>
      {/* <Image src={Chart} height={374} width={806} alt='' className='w-full h-full' /> */}
      Chart
      <BarChart />
    </div>
  )
}

export default Trends
