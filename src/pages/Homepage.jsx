import React from 'react'
import Banner from './HomeSection/Banner'
import Discount from '../components/Discount/Discount'
import NewArrival from '../components/NewArrivals/NewArrival'
import Annocument from '../components/Annocument/Annocument'
import Services from '../components/Services/Services'
import Products from '../components/Products/Products'
import useAdmin from '../Hooks/useAdmin'

const HomePage = () => {
  
  return (
    <div>
        <Banner />
        <div className='bg-[#F6F9FC] mb-10'>
        <Discount />
        <Products />
        {/* <NewArrival /> */}
        <Annocument/>
        <Services />
        </div>
    </div>
  )
}

export default HomePage