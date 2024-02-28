import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import {GoChevronDown} from 'react-icons/go';
const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between pt-4'>
        <h2 className='text-2xl font-semibold'>
            Gallery App
        </h2>

        <div className='flex items-center gap-2'>
            <div className='size-[40px] rounded-full border border-gray-400
            text-2xl grid place-items-cemter text-gray-600'>
                <AiOutlineUser/>
          </div>
          <p>Prakash</p>
          <GoChevronDown className='text-gray-600'/>
        </div>
      </div>
    </>
  )
}

export default Navbar;

