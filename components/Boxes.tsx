import React from 'react'
import Image from 'next/image'
import OrderIcon from "@/public/images/order.svg"
import RefundIcon from "@/public/images/refund.svg"
import SalesIcon from "@/public/images/sales.svg"
import IncomeIcon from "@/public/images/income.svg"
import TrendsIcon1 from "@/public/images/trends-green.svg"
import TrendsIcon2 from "@/public/images/trends-red.svg"
import TrendingGreen from "@/public/images/trending-up-green.svg"
import TrendingRed from "@/public/images/trending-up-red.svg"


const Boxes = () => {
  return (
    <div>
    <div className='grid grid-cols-2 gap-2 md:gap-4'>
        <div className='bg-[#ffffff] dark:bg-[#1a253b]  hover:bg-[#e6f9f4] hover:ease-linear rounded-lg border border-[#e2e4e4] dark:border-[#495260] px-4 py-4' >
            <div className='flex flex-row justify-between items-center'>
           <div>
           <Image src={OrderIcon} height={10} width={8} alt='' className='w-7 h-7 md:w-full md:h-full' />
           </div>
           <div>
           <Image src={TrendsIcon1} height={14} width={10} alt='' className='w-20 h-9 md:w-full md:h-full' />
           </div>
            </div>
            <div className='flex flex-col py-3'>
                <h3 className='text-lg md:text-xl text-[#958d89] font-medium'>Total Order</h3>
                <p className='text-xl md:text-2xl font-semibold pt-1'>350</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className='w-1/2 md:w-2/5 flex flex-row items-center bg-[#e6f9f4] rounded-full px-2 py-1 gap-x-1'>
                <Image src={TrendingGreen} height={20} width={20} alt='' className='' />
                <p className='text-[0.65rem] md:text-xs text-[#56cdb6]'>23.7%</p>
                </div>
               <div><p className='text-xs md:text-sm'>vs. previous month</p></div>
            </div>
        </div>
        <div className='bg-[#ffffff] dark:bg-[#1a253b]  hover:bg-[#e6f9f4] hover:ease-linear rounded-lg border border-[#e2e4e4] dark:border-[#495260] px-4 py-4' >
            <div className='flex flex-row justify-between items-center'>
           <div>
           <Image src={RefundIcon} height={10} width={8} alt='' className='w-7 h-7 md:w-full md:h-full' />
           </div>
           <div>
           <Image src={TrendsIcon2} height={14} width={10} alt='' className='w-20 h-9 md:w-full md:h-full' />
           </div>
            </div>
            <div className='flex flex-col py-3'>
                <h3 className='text-lg md:text-xl text-[#958d89] font-medium'>Total Refund</h3>
                <p className='text-xl md:text-2xl font-semibold pt-1'>270</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className='w-1/2 md:w-2/5 flex flex-row items-center bg-[#fdeae9] rounded-full px-2 py-1 gap-x-1'>
                <Image src={TrendingRed} height={20} width={20} alt='' className='' />
                <p className='text-[0.65rem] md:text-xs text-[#f38883]'>23.5%</p>
                </div>
               <div><p className='text-xs md:text-sm'>vs. previous month</p></div>
            </div>
        </div>
        <div className='bg-[#ffffff] dark:bg-[#1a253b]  hover:bg-[#e6f9f4] hover:ease-linear rounded-lg border border-[#e2e4e4] dark:border-[#495260] px-4 py-4' >
            <div className='flex flex-row justify-between items-center'>
           <div>
           <Image src={RefundIcon} height={10} width={8} alt='' className='w-7 h-7 md:w-full md:h-full' />
           </div>
           <div>
           <Image src={TrendsIcon2} height={14} width={10} alt='' className='w-20 h-9 md:w-full md:h-full' />
           </div>
            </div>
            <div className='flex flex-col py-3'>
                <h3 className='text-lg md:text-xl text-[#958d89] font-medium'>Average Sales</h3>
                <p className='text-xl md:text-2xl font-semibold pt-1'>1567</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className='w-1/2 md:w-2/5 flex flex-row items-center bg-[#fdeae9] rounded-full px-2 py-1 gap-x-1'>
                <Image src={TrendingRed} height={20} width={20} alt='' className='' />
                <p className='text-[0.65rem] md:text-xs text-[#f38883]'>23.5%</p>
                </div>
               <div><p className='text-xs md:text-sm'>vs. previous month</p></div>
            </div>
        </div>
        <div className='bg-[#ffffff] dark:bg-[#1a253b]  hover:bg-[#e6f9f4] hover:ease-linear rounded-lg border border-[#e2e4e4] dark:border-[#495260] px-4 py-4' >
            <div className='flex flex-row justify-between items-center'>
           <div>
           <Image src={IncomeIcon} height={10} width={8} alt='' className='w-7 h-7 md:w-full md:h-full' />
           </div>
           <div>
           <Image src={TrendsIcon1} height={14} width={10} alt='' className='w-20 h-9 md:w-full md:h-full' />
           </div>
            </div>
            <div className='flex flex-col py-3'>
                <h3 className='text-lg md:text-xl text-[#958d89] font-medium'>Total Income</h3>
                <p className='text-xl md:text-2xl font-semibold pt-1'>$350.00</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className='w-1/2 md:w-2/5 flex flex-row items-center bg-[#e6f9f4] rounded-full px-2 py-1 gap-x-1'>
                <Image src={TrendingGreen} height={20} width={20} alt='' className='' />
                <p className='text-[0.65rem] md:text-xs text-[#56cdb6]'>23.7%</p>
                </div>
               <div><p className='text-xs md:text-sm'>vs. previous month</p></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Boxes
