import React, { useState } from "react";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    setFormStatus("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Contact Us</h1>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
          <ul className='space-y-4'>
            <li className='flex items-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-blue-500 mr-2 mt-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              <span>
                123 Medical Center Dr,
                <br />
                Healthytown, HT 12345
              </span>
            </li>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-blue-500 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              <span>(123) 456-7890</span>
            </li>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-blue-500 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              <span>contact@medicalcenter.com</span>
            </li>
          </ul>

          <h2 className='text-xl font-semibold mt-8 mb-4'>Opening Hours</h2>
          <ul className='space-y-2'>
            <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
            <li>Saturday: 9:00 AM - 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-4'>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p className='mt-4 text-center text-green-600'>{formStatus}</p>
          )}
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='text-xl font-semibold mb-4'>Our Location</h2>
        <div className='bg-gray-200 h-64 flex items-center justify-center rounded-lg'>
          <p className='text-gray-600'>
            Map placeholder - Replace with actual map component
          </p>
        </div>
      </div>
    </div>
  );
}
