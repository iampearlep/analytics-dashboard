"use client"
import React from 'react'

const TopPlatform = () => {
  const [showContent, setShowContent] = React.useState(false)

  return (
    <div className={`bg-white dark:bg-[#1a253b] w-full rounded-lg border border-[#e2e4e4] dark:border-[#495260]`}>
    <div className='px-4 py-4'>
      <div className='flex flex-row justify-between items-center pb-5'>
        <h2 className='text-base font-semibold'>Top Platform</h2>
        <button onClick={() => setShowContent(!showContent)} className='text-base font-semibold text-[#56cdb6]'>{showContent ? 'See Less': 'See All'}</button>
      </div>
      <div className={`${showContent ? 'h-[690px] overflow-y-auto' : 'overflow-y-hidden h-[373px]'}`}>
      <div className='flex flex-col gap-y-2 py-2'>
      <div className="text-base font-semibold dark:text-white">Book Bazaar</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div className="bg-[#6160dc] h-2.5 rounded-full dark:bg-[#6160dc]" style={{width: "70%"}}></div>
      </div>
      <div className='flex text-sm md:text-base flex-row justify-between items-center font-light'>
        <p>$2,500,000</p>
        <p>+15%</p>
      </div>
      </div>
      <div className='flex flex-col gap-y-2 py-3'>
      <div className="text-base font-semibold dark:text-white">Artisan Aisle</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div className="bg-[#54c5eb] h-2.5 rounded-full dark:bg-[#54c5eb]" style={{width: "60%"}}></div>
      </div>
      <div className='flex text-sm md:text-base flex-row justify-between items-center font-light'>
        <p>$1,800,500</p>
        <p>+10%</p>
      </div>
      </div>
      <div className='flex flex-col gap-y-2 py-3'>
      <div className="text-base font-semibold dark:text-white">Toy Troop</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div className="bg-[#ffb74a] h-2.5 rounded-full dark:bg-[#ffb74a]" style={{width: "45%"}}></div>
      </div>
      <div className='flex text-sm md:text-base flex-row justify-between items-center font-light'>
        <p>$1,200,500</p>
        <p>+8%</p>
      </div>
      </div>
      <div className='flex flex-col gap-y-2 py-3'>
      <div className="text-base font-semibold dark:text-white">XStore</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-[#ff4855] h-2.5 rounded-full dark:bg-[#ff4855]" style={{width: "35%"}}></div>
      </div>
      <div className='flex text-sm md:text-base flex-row justify-between items-center font-light'>
        <p>$600,000</p>
        <p>+5%</p>
      </div>
      </div>
      <div className='flex flex-col gap-y-2 py-3'>
      <div className="text-base font-medium dark:text-white">Drone</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-green-400 h-2.5 rounded-full dark:bg-blue-500" style={{width: "20%"}}></div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <p>$500,000</p>
        <p>+3%</p>
      </div>
      </div>
      <div className='flex flex-col gap-y-2 py-3'>
      <div className="text-base font-medium dark:text-white">Hogwarts</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[#54c5eb] h-2.5 rounded-full dark:bg-[#54c5eb]" style={{width: "15%"}}></div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <p>$400,000</p>
        <p>+2%</p>
      </div>
      </div>
      <div className='flex flex-col gap-y-2 py-3'>
      <div className="text-base font-medium dark:text-white">Monopoly</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[#ff4855] h-2.5 rounded-full dark:bg-[#ff4855]" style={{width: "8%"}}></div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <p>$300,000</p>
        <p>+1%</p>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default TopPlatform
