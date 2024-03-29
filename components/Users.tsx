"use client"
import React from 'react'
import Image from 'next/image'
import ProfileImg1 from '@/public/images/marcus.svg'
import ProfileImg2 from '@/public/images/cooper.svg'
import ProfileImg3 from '@/public/images/corey.svg'
import ProfileImg4 from '@/public/images/jaydon.svg'
import ProfileImg5 from '@/public/images/user2.svg'
import DownloadIcon from '@/public/images/document-download.svg'

const Users = () => {
  const [showContent, setShowContent] = React.useState(false)

  return (
    <div className='bg-white dark:bg-[#1a253b] w-full rounded-lg border border-[#e2e4e4] dark:border-[#495260]'>
    <div className='px-4 py-4'>
    <div className='flex flex-row justify-between items-center pb-5'>
        <h2 className='text-base font-semibold'>Last Orders</h2>
        <button onClick={() => setShowContent(!showContent)} className='text-base font-semibold text-[#56cdb6]'>{showContent ? 'See Less': 'See All'}</button>
      </div>
    <div className={`${showContent ? 'overflow-y-auto h-[600px]' : 'overflow-y-hidden h-[375px]'}`}>
    <div className="relative overflow-x-auto">
    <table className="w-full text-xs md:text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase">
            <tr>
                <th scope="col" className="text-[#a5a4ae] pr-6  py-3">
                   Name
                </th>
                <th scope="col" className="text-[#a5a4ae] px-6 py-3">
                    Date
                </th>
                <th scope="col" className="text-[#a5a4ae] px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="text-[#a5a4ae] px-6 py-3">
                    Status
                </th>
                <th scope="col" className="text-[#a5a4ae] px-6 py-3">
                    Invoice
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="  border-b">
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg1} height={10} width={8} alt='' className='w-6 h-6' />
                     <h4>Marcus Bergson</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 15, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="text-[#56cdb6] px-6 py-4">
                Paid
                </td>
                <td>
                <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
            <tr className='border-b'>
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg2} height={10} width={8} alt='' className='w-6 h-6' />
                      <h4>Cooper Press</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 15, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="text-[#ff4855] px-6 py-4">
                Refund
                </td>
                <td>
                <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
            <tr className="border-b">
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg3} height={10} width={8} alt='' className='w-6 h-6' />
                      <h4>Corey Schleifer</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 14, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="text-[#56cdb6] px-6 py-4">
                Paid
                </td>
                <td >
                <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
            <tr className="border-b">
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg4} height={10} width={8} alt='' className='w-6 h-6' />
                      <h4>Jaydon Vaccaro</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 14, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="text-[#ff4855] px-6 py-4">
                Refund
                </td>
                <td>
                <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
            <tr className="border-b">
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg5} height={10} width={8} alt='' className='w-6 h-6' />
                      <h4>Phillip Lubin</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 13, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="px-6 py-4 text-[#56cdb6]">
                Paid
                </td>
                <td className="">
               <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
            <tr className="border-b">
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg1} height={10} width={8} alt='' className='w-6 h-6' />
                      <h4>Sheldon Cooper</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 13, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="px-6 py-4 text-[#ff4855]">
                Refund
                </td>
                <td className="">
               <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
            <tr className="border-b">
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg3} height={10} width={8} alt='' className='w-6 h-6' />
                      <h4>Harvey Scott</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 13, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="px-6 py-4 text-[#56cdb6]">
                Paid
                </td>
                <td className="">
               <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
            <tr>
                <th scope="row" className="flex flex-row items-center gap-x-2 pl-2 pr-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Image src={ProfileImg5} height={10} width={8} alt='' className='w-6 h-6' />
                      <h4>Phillip Lubin</h4> 
                </th>
                <td className="text-[#958d89] px-6 py-4">
                Nov 13, 2023
                </td>
                <td className="px-6 py-4">
                $80,000
                </td>
                <td className="px-6 py-4 text-[#56cdb6]">
                Paid
                </td>
                <td className="">
               <button className='flex flex-row items-center gap-x-1 px-6'>
               <Image src={DownloadIcon} height={10} width={8} alt='' className='w-3 h-3 dark:hidden' />
                    <p className="">View</p>
               </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
    </div>
    </div>
  )
}

export default Users
