import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { useForm } from "react-hook-form";
import { useLoaderData } from 'react-router-dom'
const image_hosting_Key = "a6254b3cd484e13c12810e9ae0858c8e";
const UpdateProduct = () => {
const loadData = useLoaderData()
const {_id,name, category,description,cover,price,discount, ratings}=loadData
console.log('loaded data ',loadData);
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${image_hosting_Key}`;
  const { register, handleSubmit ,reset  } = useForm();

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
      const menuRes= await axios.put(`https://bonik-e-commerce-backend.vercel.app/updateProduct/${_id}`,productInfo)
      const toastID = toast.loading('Loading ...')
      console.log(menuRes.data);
      if(menuRes.data.modifiedCount >0){
        
        toast.success('Added SuccessFully',{id:toastID})
        reset()
      }else{
        toast.error('Somethings id wrong' ,{id:toastID})
      }
    }

  };

  // const handleUpdateProduct=async(e)=>{
  //   e.preventDefault()
  //   const form =e.target
  //   const name =form.name.value
  //   const category =form.category.value
  //   const description =form.description.value
  //   const price =form.price.value
  //   const discount= form.discount.value
  //   const image = form.image.files[0]
  //   const formData = new FormData()
  //   formData.append('image',image)

  //   console.log(name ,category,description ,price,discount,ratings);
  //   const toastID = toast.loading('Loading ...?')
  //   try {
  //     const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=786da6b80f8c40e8d3f16b8e2f15de81`,formData)

  //     console.log(data.data);
  //     const UpdateProductInfo = {
  //       name ,
  //       category ,
  //       description ,
  //       price ,
  //       discount ,
  //       cover :data.data.display_url
  //     }
  //     console.log(UpdateProductInfo);
  //     axios.put(`https://bonik-e-commerce-backend.vercel.app/updateProduct/${_id}`,UpdateProductInfo)
  //     .then((res)=>{
  //       console.log(res.data);
  //       if(res.data.modifiedCount >0 ){
  //         toast.success('Product Update Successfully' ,{id:toastID})
  //       }
  //     })
  //   } catch (error) {
  //     toast.error(error.message ,{id:toastID})
  //   }
  // }

  return (
    <div>
      <div>
        <div className="container mx-auto w-[600px] mt-8 ">
          <h1 className="text-2xl font-bold mb-4 text-center">Update Product</h1>
          <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 ">
              <label className="block text-sm font-semibold text-gray-600">
                Product Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="name"
                defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={description}
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
                defaultValue={price}
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
                defaultValue={discount}
                {...register("discount")}
              />
            </div>
            <div className='flex items-center justify-center border-2 shadow-lg p-5 my-5'>
              <img className='w-[300px] h-[300px]' src={cover} alt="" />
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
  )
}

export default UpdateProduct