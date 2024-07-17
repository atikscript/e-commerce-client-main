import React, { useState } from 'react'

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement logic to handle the form submission (e.g., send data to API)
      console.log({ name, email, message });
    };
  return (
    <div>
      <div className="w-[1000px] mx-auto  my-10">
      {/* Header Section */}
      <div className="text-center mt-10 mb-8 ">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-gray-600">We'd love to hear from you</p>
      </div >

      {/* Contact Form Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Message
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> info@example.com
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Main St, City, Country
          </p>
        </div>
      </section>
    </div>
    </div>
  )
}

export default ContactUs