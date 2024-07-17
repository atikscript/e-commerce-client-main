import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const data = [
        {
          cateImg: "https://i.ibb.co/wz4DcQN/cat4.png",
          category: "shoes",
        },
        {
          cateImg: "https://i.ibb.co/yWzhQ52/cat5.png",
          category: "monitor",
        },
        {
          cateImg: "https://i.ibb.co/JH9PKFS/cat-2.webp",
          category: "watch",
        },
        {
          cateImg: "https://i.ibb.co/T1KVmZD/cat11.png",
          category: "laptop",
        },
        {
          cateImg: "https://i.ibb.co/yWzhQ52/cat5.png",
          category: "mobile",
        },
        {
          cateImg: "https://i.ibb.co/QfqszNj/cat6.png",
          category: "music",
        },
    
     
      ]
  return (
    <div className=''>
         <div className=''>
        {data.map((value, index) => {
          return (
            <div className='flex items-center gap-4 mb-4 mt-10  ' key={index}>
             <Link to={`products/${value.category}`} className='flex items-center gap-4'>
             <img className='w-9 h-9' src={value.cateImg} alt='' />
              <span className='font-medium capitalize' >{value.category}</span>
             </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories