import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

const AllProduct = () => {

    
  const {data :products=[]}=useQuery({
    queryKey :['products'],
    queryFn : async ()=> {
      const res = await axios.get('https://bonik-e-commerce-backend.vercel.app/products')
      return res.data
    }
  })
   
  console.log('tanstacq from backend', products);
  return (
    <div className='bg-[#F6F9FC] py-20'>

    <div className='container mx-auto    bg-white'>
        <div className='grid grid-cols-4 gap-10'>
            {products.map((product ,index)=>(
               <Link to={`/product/${product._id}`}>
               <div className='shadow-lg p-6 rounded  ' key={index}>
                 <div className='img'>
                   <img className='w-full h-[200px] rounded' src={product.cover} alt='' />
                 </div>
                 <div className='mt-5'>
                 <h4>{product.name}</h4>
                 <span className='text-[#E94560] '>${product.price}</span>
                 </div>
               </div>
           </Link>
            ))}
        </div>
    </div>
    </div>
  )
}

export default AllProduct