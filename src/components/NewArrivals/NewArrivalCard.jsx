import React from 'react'
import { Link } from 'react-router-dom'

const NewArrivalCard = ({productData}) => {
 
  return (
    <div className='mt-10'>
    <div className='grid grid-cols-6 gap-8 bg-[#fff] px-6 py-6 rounded '>
        {productData.slice(0,6).map((val, index) =>(
        <Link to={`/product/${val._id}`} key={index}>
            <div className='' key={index}>
              <div className='img'>
                <img className='w-[200px] h-[200px]' src={val.cover} alt='' />
              </div>
              <div className='mt-5'>
              <h4>{val.name}</h4>
              <span className='text-[#E94560] '>${val.price}</span>
              <div className='mt-2'>
             {/* <Link to={`/dashboard/updateProduct/${val._id}`}>
             <button className='bg-[#E94560] text-white px-2 py-1 rounded'>update</button>
             </Link> */}
              </div>
              </div>
            </div>
        </Link>
          )
        )}
      </div>
    </div>
  )
}

export default NewArrivalCard