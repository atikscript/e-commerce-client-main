import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CategoryProduct = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  return (
    <div>
      <div className="bg-[#F6F9FC] py-20">
        <div className="container mx-auto    bg-white">
         {
          loadData.length > 0 ?   <div className="grid grid-cols-4 gap-10">
            {loadData.map((product, index) => (
              <Link to={`/product/${product._id}`}>
                <div className="shadow-lg p-6 rounded  " key={index}>
                  <div className="img">
                    <img
                      className="w-full h-[200px] rounded"
                      src={product.cover}
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <h4>{product.name}</h4>
                    <span className="text-[#E94560] ">${product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>  :
          <div className="flex items-center justify-center h-1/2 py-20  ">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">No Match Data Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find any matching data.</p>
            <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
          </div>
        </div>
         }
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
