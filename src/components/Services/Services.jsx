import React from 'react'

const Services = () => {
    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-headset'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
  return (
    <>
      <section className=' '>
        <div className='container mx-auto flex gap-5 pb-10 rounded ' >
          {data.map((val, index) => {
            return (
              <div className='product text-center  bg-white px-5 py-5' key={index}>
                <div className='   p-10'>
                  <i className='bg-[#F3F5F9] text-2xl p-6 rounded-full'>{val.cover}</i>
                </div>
                <h3 className='text-lg mt-2 text-[#E94560] font-medium'>{val.title}</h3>
                <p className='text-md text-gray-500 mt-5'>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Services