import React from "react";
import useBookings from './../../Hooks/useBookings';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';

const ProductList = () => {
  
    const {data :products=[] ,refetch}=useQuery({
        queryKey :['products'],
        queryFn : async ()=> {
          const res = await axios.get('https://bonik-e-commerce-backend.vercel.app/products')
          return res.data
        }
      })

      const handleProductDelete= async( id)=>{
        const toastId = toast.loading('Loading ...!!!')
         try {
            const res = await axios.delete(`https://bonik-e-commerce-backend.vercel.app/deleteProduct/${id}`)
            if(res.data.deletedCount >0){
                toast.success("Deleted Successfully",{id:toastId})
                refetch()
            }
            
         } catch (error) {
            toast.error(error.message ,{id:toastId})
         }

      }
       
    //   console.log('tanstacq from backend', products);
  return (
    <div className="">
      <div className=" mx-auto w-[800px] mt-8 ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
            {
                products.map((product)=>(
                    <tr>
             
                    <td>
                      <div className="flex items-center gap-3">
                           <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product.cover}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                      </div>
                    </td>
                    <td>
                    {product.name}
                    </td>
                    <td>{ product.category}  </td>
                    <td>{product.price}</td>
                    <th>
                    <Link to={`/dashboard/updateProduct/${product._id}`}>
                      <button className="btn btn-warning btn-xs text-white">Update</button>
                    </Link>
                    </th>
                    <th>
                      <button className="btn btn-error btn-xs text-white" onClick={()=>handleProductDelete(product._id)}>Delete</button>
                    </th>
                  </tr>
                ))
            }
          
       
            </tbody>
            {/* foot */}
         
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
