import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const image_hosting_Key = "a6254b3cd484e13c12810e9ae0858c8e";
const AddProduct = () => {
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${image_hosting_Key}`;
  const { register, handleSubmit ,reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    console.log(data);
    const res = await axios.post(imageHostingApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);

    if(res.data.success){
      const productInfo={
        name :data.name,
        category :data.category,
        description :data.description,
        price:parseFloat(data.price) ,
        discount:data.discount ,
        cover:res.data.data.display_url
      }
      const menuRes= await axios.post('https://bonik-e-commerce-backend.vercel.app/addProduct',productInfo)
      const toastID = toast.loading('Loading ...')
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        
        toast.success('Added SuccessFully',{id:toastID})
        reset()
      }else{
        toast.error('Somethings id wrong' ,{id:toastID})
      }
    }

  };

  return (
    <div>
      <div>
        <div className="container mx-auto w-[600px] mt-8 ">
          <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
          <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 ">
              <label className="block text-sm font-semibold text-gray-600">
                Product Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="name"
                {...register("name")}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Product Category
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="category"
                {...register("category")}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                name="description"
                {...register("description")}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Price
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="price"
                {...register("price")}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Discount
              </label>
              <input
                type="text-"
                className="w-full p-2 border rounded-md"
                name="discount"
                {...register("discount")}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Image
              </label>
              <input
                name="image"
                className=" my-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                accept="image/*"
                {...register("image")}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
