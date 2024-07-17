import React, { useState } from 'react'

const Cancle = () => {
    
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md max-w-md">
      <h2 className="text-3xl font-semibold mb-4 text-red-600">Payment Failed</h2>
      <p className="text-gray-600 mb-4">
        We apologize, but there was an error processing your payment. Please try again later.
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={() => {
            // Redirect or perform any other action on button click
            window.location.href = '/cart'; // Example: Redirect to the checkout page
          }}
        >
          Go Back to Checkout
        </button>
      </div>
    </div>
  </div>


 
  )
}

export default Cancle