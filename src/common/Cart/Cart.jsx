import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './cart.css';
import useBookings from '../../Hooks/useBookings';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

 

const Cart = () => {
  const [bookings , refetch] = useBookings();
  const [cart ,setCart]= useState([])
  console.log(cart);
  useEffect(() => {
    // Update cart when bookings change
    setCart(bookings);
  }, [bookings]);

  

  console.log( bookings);
  console.log( cart);
 
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  const incrementQty = async(product) => {
    const existproduct =await cart.find((item)=> item._id === product._id)
    console.log(  existproduct.qty);
    if(existproduct){
      setCart(cart.map((item) => (item._id === product._id ? { ...existproduct, qty: existproduct.qty + 1 } : item)))
      console.log(cart);
    }
    
  };

  const decrementQty = async(product) => {
    const existproduct =await cart.find((item)=> item._id === product._id)
    console.log(  existproduct.qty);
    if(existproduct.qty !== 1){
      setCart(cart.map((item) => (item._id === product._id ? { ...existproduct, qty: existproduct.qty - 1 } : item)))
      console.log(cart);
    }
  };

  const handleDeleteProduct= async(productId)=>{
     try {
      const res = await axios.delete(`https://bonik-e-commerce-backend.vercel.app/deleteCartProduct/${productId}`)
      refetch()
     } catch (error) {
      
     }
  }


  const handleOrder = async (e) => {
    e.preventDefault();
    const form = e.target
    const fullName = form.fullName.value
    const phoneNumber = form.phoneNumber.value
    const address = form.address.value
     
   
    const orderData = {
      fullName,
      phoneNumber,
      address,
      totalPrice: totalPrice.toFixed(2),
       cart,
   
    };
    console.log(orderData);

    // try {
    //   const res = await axios.post('https://bonik-e-commerce-backend.vercel.app/orders' , orderData)
    //   window.location.replace(res.data.url)
    //   console.log(res.data);

    // } catch (error) {
    //   console.log(error.message);
    // }

    const stripe = await loadStripe('pk_test_51OJMNEEAoFFFruGTl9Q1hqqisATTiti8a6emYeKMUQb5h1lUacyfTktzdGwM2RNA9bajZ8lL0eHRqkoAlBI5rG8L00YQjsLSjE')

    try {
      const response = await fetch("https://bonik-e-commerce-backend.vercel.app/api/create-checkout-session",{
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify([cart , totalPrice])
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
console.log("result",result);
        try {
          const res = await axios.post('https://bonik-e-commerce-backend.vercel.app/order/confirm',orderData )
          const deleteProduct = await axios.delete('https://bonik-e-commerce-backend.vercel.app/deleteAllCartProduct')
        } catch (error) {
          console.log(error.message);
        }
        
        

        if(result.error){
            console.log(result.error);
        }
    } catch (error) {
      // console.log(error);
    }
   
  };
  

  

  return (
    <div className=''>
      <section className='cart-items'>
        <div className='container flex gap-10  mx-auto h-screen'>
          <div className='cart-details'>
            {cart.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
            { cart.map((product) => {
              const productQty = product.price * product.qty;
              return (
                <div className='cart-list product flex' key={product._id}>
                  <div className='img'>
                    <img src={product.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{product.name}</h3>
                    <h4>
                      ${product.price}.00 * {product.qty}
                      {/* <span>${productQty}.00</span> */}
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={()=>handleDeleteProduct(product._id)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    <div className='cartControl flex items-center'>
                      <button className='incCart' onClick={() => incrementQty(product)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <p>{product.qty}</p>
                      <button className='desCart' onClick={() => decrementQty(product)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>
                  <div className='cart-item-price'></div>
                </div>
              );
            })}
          </div>
         {cart.length > 0 &&  <div className='cart-total product'>
            <h2>Make Order</h2>
            <div className=' gap-5  p-5 my-5'>
              <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <form className="card-body" onSubmit={handleOrder}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Full Name</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Please Enter Your Name"
                          className="input input-bordered"
                          // value={formData.fullName}
                          // onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Number</span>
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Please Enter Your Number"
                          className="input input-bordered"
                          // value={formData.phoneNumber}
                          // onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Address</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Please Enter Your Address"
                          className="input input-bordered"
                          // value={formData.address}
                          // onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-control mt-6">
                        <div className=' flex items-center gap-5'>
                          <h4>Total Price :</h4>
                          <h3>${totalPrice.toFixed(2)}</h3>
                        </div>
                        <div className='mt-10 w-3/4 mx-auto'>
                          <button className='bg-[#E94560] px-4 py-2 rounded w-full text-white' type='submit'>Check Out</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>} 
        </div>
      </section>
    </div>
  );
};

export default Cart;
