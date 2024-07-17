import React from 'react'

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md max-w-md">
      <h2 className="text-3xl font-semibold mb-4 text-green-600">Payment Successful!</h2>
      <p className="text-gray-600 mb-4">
        Thank you for your purchase. Your payment has been successfully processed.
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={() => {
            // Redirect or perform any other action on button click
            window.location.href = '/'; // Example: Redirect to the dashboard
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  </div>
  )
}

export default Success