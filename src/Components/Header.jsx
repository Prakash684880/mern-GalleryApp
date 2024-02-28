import React from 'react'

const Header = () => {
  return (
    <div className='pt-8'>
      <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold '>Photos</h2>
          <input type="text" className='border border-gray-400 py-2 w-52 rounded-md' 
          placeholder='Search Image....'/>
        </div>

        <div className='flex items-center gap-4 text-gray-500 pt-2'>
          <p className='text-[#31b666] font-semibold '>Recent</p>
          <p>1 Month Ago</p>
          <p>3 Months Ago</p>
        </div>
      </div>
  )
}

export default Header
