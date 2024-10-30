// "use client";
// import { useState } from "react";

// export default function BookAppointment() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     department: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log("Form submitted:", formData);
//     // Reset form after submission
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       date: "",
//       time: "",
//       department: "",
//       reason: "",
//     });
//     alert("Appointment request submitted successfully!");
//   };

//   return (
//     <div className='min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8'>
//       <div className='max-w-4xl mx-auto'>
//         <div className='bg-white shadow-2xl rounded-lg overflow-hidden'>
//           <div className='px-4 py-6 sm:p-10'>
//             <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
//               Book an Appointment
//             </h1>
//             <form onSubmit={handleSubmit} className='space-y-6'>
//               <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2'>
//                 <div>
//                   <label
//                     htmlFor='firstName'
//                     className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type='text'
//                     name='firstName'
//                     id='firstName'
//                     required
//                     className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='lastName'
//                     className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type='text'
//                     name='lastName'
//                     id='lastName'
//                     required
//                     className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2'>
//                 <div>
//                   <label
//                     htmlFor='email'
//                     className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                   >
//                     Email
//                   </label>
//                   <input
//                     type='email'
//                     name='email'
//                     id='email'
//                     required
//                     className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='phone'
//                     className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type='tel'
//                     name='phone'
//                     id='phone'
//                     required
//                     className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2'>
//                 <div>
//                   <label
//                     htmlFor='date'
//                     className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                   >
//                     Preferred Date
//                   </label>
//                   <input
//                     type='date'
//                     name='date'
//                     id='date'
//                     required
//                     className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                     value={formData.date}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='time'
//                     className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                   >
//                     Preferred Time
//                   </label>
//                   <input
//                     type='time'
//                     name='time'
//                     id='time'
//                     required
//                     className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                     value={formData.time}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor='department'
//                   className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                 >
//                   Department
//                 </label>
//                 <select
//                   name='department'
//                   id='department'
//                   required
//                   className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                   value={formData.department}
//                   onChange={handleChange}
//                 >
//                   <option value=''>Select a department</option>
//                   <option value='general'>General Medicine</option>
//                   <option value='cardiology'>Cardiology</option>
//                   <option value='neurology'>Neurology</option>
//                   <option value='orthopedics'>Orthopedics</option>
//                   <option value='pediatrics'>Pediatrics</option>
//                 </select>
//               </div>
//               <div>
//                 <label
//                   htmlFor='reason'
//                   className='block text-lg sm:text-xl font-medium text-gray-700 mb-2'
//                 >
//                   Reason for Visit
//                 </label>
//                 <textarea
//                   name='reason'
//                   id='reason'
//                   rows={5}
//                   className='block w-full border border-gray-300 rounded-lg shadow-sm py-2 sm:py-3 px-4 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
//                   placeholder='Briefly describe your symptoms or reason for the appointment'
//                   value={formData.reason}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type='submit'
//                   className='w-full flex justify-center py-3 sm:py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg sm:text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                 >
//                   Request Appointment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
