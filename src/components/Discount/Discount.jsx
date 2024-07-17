import React from "react";
import DiscountCard from "./DiscountCard";
 
const Discount = () => {
 
  return (
 <>
    <section className='container mx-auto mt-6   py-10'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2 className="text-2xl font-semibold">Big Discounts</h2>
            </div>
            <div className=' '>
              <span className="text-[#E94560] mr-3">View all</span>
              <i className='fa-solid fa-caret-right text-gray-500'></i>
            </div>
          </div>
          <DiscountCard />
        </div>
      </section>
 </>
  );
};

export default Discount;
