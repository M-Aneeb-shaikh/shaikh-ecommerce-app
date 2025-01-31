import { Menu, ChevronDown, ListFilter, Grid2X2 } from 'lucide-react'
import React from 'react'

export default function Filters() {
  return (
    <div className='flex flex-col pb-4 md:pb-0 md:flex-row justify-between items-center border-b border-gray-300'>
      <div className='flex gap-2 py-4 items-center'>
        <button className='btn btn-sm btn-circle'>
          <Grid2X2 size={20}/>
        </button>
        <button className='btn btn-sm btn-circle'>
          <Menu size={20}/>
        </button>
        <p className='ps-4 text-gray-400 font-medium'>Showing <span className='text-gray-700'>20</span> of <span className='text-gray-700'>20</span> Products</p>
      </div>
      <div className='flex gap-4 font-extralight'>
        <button className='btn btn-ghost btn-outline btn-primary btn-sm'>
          <p>Filter</p>
          <ChevronDown size={16} />
        </button>
        <button className='btn btn-ghost btn-outline btn-primary btn-sm'>
          <p>Sort</p>
          <ListFilter size={16} />
        </button>

      </div>
    </div>
  )
}
