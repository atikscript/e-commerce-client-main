import React from 'react'
import NewArrivalCard from './NewArrivalCard'
import newArrData from './NewArrivalData'
const NewArrival = () => {
  return (
    <>
     <section className=''>
        <div className='container mx-auto pb-10'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-5'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2 className='text-2xl font-semibold'>New Arrivals </h2>
            </div>
            <div className=' '>
              <span className="text-[#E94560] mr-3">View all</span>
              <i className='fa-solid fa-caret-right text-gray-500'></i>
            </div>
          </div>
            <NewArrivalCard  productData={newArrData} />
        </div>
      </section>
    </>
  )
}

export default NewArrival