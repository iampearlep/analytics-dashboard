import React from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'


const  Input = () => {
  return (
        <div className='w-full relative flex flex-row items-center'>
         <MagnifyingGlassIcon className='w-5 h-5 absolute ml-3 text-[#958d89] dark:text-white' />
         <input className='pr-3 pl-10 py-2 w-full rounded-full dark:bg-[#1a253b] border border-[#e2e4e4] dark:border-[#495260] placeholder:text-[#958d89] placeholder:dark:text-white focus:outline-[#34caa5]' type="text" placeholder='Search...' />
        </div>
  )
}

export default Input
