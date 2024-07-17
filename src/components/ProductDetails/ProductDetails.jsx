import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import useBookings from "../../Hooks/useBookings";

const ProductDetails = () => {
  const { user } = useAuth()
  const [, refetch] = useBookings()

  const loadProduct = useLoaderData()
  console.log(loadProduct);
  // console.log(user.email);

  const { _id, cover, name, category, description, price, ratings } = loadProduct

  const addCart = {
    productId: _id,
    email: user?.email,
    cover,
    name,
    category,
    description,
    price,
    ratings,
    qty:1


  }



  const addToCart = async (addCart) => {
   
    try {
      const res = await axios.post('https://bonik-e-commerce-backend.vercel.app/add-cart', addCart)
      if (res.data.insertedId) {
        toast.success('Added Successfully')
        refetch()
      } else {
        toast.success('Already in cart ')
      }
      // console.log(res.data);
    } catch (error) {
      toast.error(error.message)

    }
  }

  return (
    <div className="w-[1200px] mx-auto">
      <div className="flex items-center gap-10 my-10">
        <div className="w-1/2  ">
          <img className="h-[400px] w-full rounded shadow-2xl" src={cover} alt="" />
        </div>
        <div className="w-1/2 shadow-xl px-10 py-10 flex flex-col space-y-4">

          <h2 className="text-2xl text-[#E94560] font-bold">Name :<span className="text-[#E94560]"> {name}</span></h2>
          <h2 className="text-lg">Category : {category}</h2>
          <h2 className="text-md"> Description : {description}</h2>
          <h2 className="text-xl text-[#E94560] font-semibold">Price : {price}</h2>

          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" checked />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
          <div className="mt-10 mx-auto">
            <button className='bg-[#E94560] py-2 rounded text-white mt-20 px-16' onClick={() => addToCart(addCart)}> Add to Cart </button>

          </div>



        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
