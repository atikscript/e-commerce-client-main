import React from 'react'
import Slider from 'react-slick'
import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlideCard = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       
      }
      console.log(Sdata);
  return (
    <div>
        <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='flex items-center justify-between gap-5' key={index} >
                <div className='w-1/2'>
                  <h1 className='text-4xl font-semibold mb-5'>{value.title}</h1>
                  <p className='text-lg text-[#676767] mb-5'>{value.desc}</p>
                  <button className='bg-[#E94560] px-4 py-2 rounded text-white'>Visit Collections</button>
                </div>
                <div className='w-1/2'>
                  <img className='w-[400px]  h-[400px]' src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider >
    </div>
  )
}

export default SlideCard