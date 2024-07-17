import React, { useState } from "react";
// import data from "../data";
import NewArrivalCard from "../NewArrivals/NewArrivalCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {

  // const [products,setProducts ]=useState([])

  const {data :products=[]}=useQuery({
    queryKey :['products'],
    queryFn : async ()=> {
      const res = await axios.get('https://bonik-e-commerce-backend.vercel.app/products')
      return res.data
    }
  })
   
  console.log('tanstacq from backend', products);


  return (
    <div>
      <section className="">
        <div className="container mx-auto pb-10">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2 className="text-2xl font-semibold">Products </h2>
            </div>
            <div className=" ">
              <Link to='/allproducts'>
              <span className="text-[#E94560] mr-3">View all</span>
              <i className="fa-solid fa-caret-right text-gray-500"></i>
              </Link>
            </div>
          </div>
          <NewArrivalCard productData={products} />
        </div>
      </section>
    </div>
  );
};

export default Products;
