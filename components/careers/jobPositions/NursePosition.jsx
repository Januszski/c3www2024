// export default function NursePosition() {
//   return (
//     <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
//       <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
//         <div className='px-4 py-5 sm:px-6 bg-blue-600'>
//           <h1 className='text-2xl font-bold text-white'>
//             Registered Nurse - Emergency Department
//           </h1>
//           <p className='mt-1 max-w-2xl text-sm text-blue-100'>
//             Full-time position
//           </p>
//         </div>
//         <div className='px-4 py-5 sm:p-6'>
//           <h2 className='text-xl font-semibold text-gray-900 mb-4'>
//             Job Description
//           </h2>
//           <p className='text-gray-700 mb-4'>
//             We are seeking a highly skilled and compassionate Registered Nurse
//             to join our Emergency Department team. The ideal candidate will
//             thrive in a fast-paced environment and be dedicated to providing
//             exceptional patient care.
//           </p>

//           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
//             Responsibilities:
//           </h3>
//           <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
//             <li>Assess and triage patients quickly and accurately</li>
//             <li>Provide emergency care and treatment to patients</li>
//             <li>
//               Collaborate with physicians and other healthcare professionals
//             </li>
//             <li>Administer medications and monitor patient conditions</li>
//             <li>Maintain accurate and detailed patient records</li>
//             <li>Educate patients and families on care plans and procedures</li>
//             <li>Respond swiftly to emergency situations</li>
//             <li>Ensure compliance with hospital policies and regulations</li>
//           </ul>

//           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
//             Qualifications:
//           </h3>
//           <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
//             <li>Current RN license in good standing</li>
//             <li>BSN preferred</li>
//             <li>BLS and ACLS certifications required</li>
//             <li>
//               Minimum of 2 years experience in emergency or critical care
//               nursing
//             </li>
//             <li>Strong communication and interpersonal skills</li>
//             <li>
//               Ability to remain calm and focused in high-stress situations
//             </li>
//             <li>
//               Physical stamina to work long shifts and handle emergency
//               situations
//             </li>
//           </ul>

//           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
//             We Offer:
//           </h3>
//           <ul className='list-disc pl-5 mb-6 text-gray-700 list-inside'>
//             <li>Competitive salary and benefits package</li>
//             <li>Opportunities for professional development and advancement</li>
//             <li>Supportive and collaborative work environment</li>
//             <li>State-of-the-art medical facilities and equipment</li>
//           </ul>

//           <div className='mt-8 border-t border-gray-200 pt-8'>
//             <h3 className='text-lg font-semibold text-gray-900 mb-4'>
//               How to Apply
//             </h3>
//             <p className='mb-4 text-gray-700'>
//               If you're ready to take on this challenging and rewarding role, we
//               encourage you to apply. Please send your resume and cover letter
//               to{" "}
//               <a
//                 href='mailto:careers@hospitalname.com'
//                 className='text-blue-600 hover:underline'
//               >
//                 careers@hospitalname.com
//               </a>{" "}
//               with the subject line "Emergency Department RN Application".
//             </p>
//             <p className='text-gray-700'>
//               We appreciate your interest in joining our team and will review
//               all applications carefully. Only shortlisted candidates will be
//               contacted for an interview.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

///////////////////////

"use client";

import { useState, useEffect } from "react";

export default function HospitalAdminPosition() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
      setUploadStatus("");
    } else {
      alert("Please upload a PDF or DOCX file.");
      event.target.value = "";
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploadStatus("Uploading...");

      // Simulating file upload with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real application, you would send the file to your server here
      // For example, using fetch:
      // const formData = new FormData()
      // formData.append("resume", selectedFile)
      // const response = await fetch('/api/upload-resume', { method: 'POST', body: formData })
      // if (response.ok) { setUploadStatus("Upload successful!") } else { setUploadStatus("Upload failed.") }

      setUploadStatus("Upload successful!");
      setSelectedFile(null);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='px-4 py-5 sm:px-6 bg-blue-600'>
          <h1 className='text-2xl font-bold text-white'>
            Registered Nurse - Emergency Department
          </h1>
          <p className='mt-1 max-w-2xl text-sm text-blue-100'>
            Full-time position
          </p>
        </div>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>
            Job Description
          </h2>
          <p className='text-gray-700 mb-4'>
            We are seeking a highly skilled and compassionate Registered Nurse
            to join our Emergency Department team. The ideal candidate will
            thrive in a fast-paced environment and be dedicated to providing
            exceptional patient care.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Responsibilities:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
            <li>Assess and triage patients quickly and accurately</li>
            <li>Provide emergency care and treatment to patients</li>
            <li>
              Collaborate with physicians and other healthcare professionals
            </li>
            <li>Administer medications and monitor patient conditions</li>
            <li>Maintain accurate and detailed patient records</li>
            <li>Educate patients and families on care plans and procedures</li>
            <li>Respond swiftly to emergency situations</li>
            <li>Ensure compliance with hospital policies and regulations</li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Qualifications:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
            <li>Current RN license in good standing</li>
            <li>BSN preferred</li>
            <li>BLS and ACLS certifications required</li>
            <li>
              Minimum of 2 years experience in emergency or critical care
              nursing
            </li>
            <li>Strong communication and interpersonal skills</li>
            <li>
              Ability to remain calm and focused in high-stress situations
            </li>
            <li>
              Physical stamina to work long shifts and handle emergency
              situations
            </li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            We Offer:
          </h3>
          <ul className='list-disc pl-5 mb-6 text-gray-700 list-inside'>
            <li>Competitive salary and benefits package</li>
            <li>Opportunities for professional development and advancement</li>
            <li>Supportive and collaborative work environment</li>
            <li>State-of-the-art medical facilities and equipment</li>
          </ul>

          <div className='mt-8 border-t border-gray-200 pt-8'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              Apply Now
            </h3>
            <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <input
                type='file'
                accept='.pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                onChange={handleFileChange}
                className='w-full sm:w-auto'
              />
              <button
                onClick={handleUpload}
                disabled={!selectedFile}
                className='w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Upload Resume
              </button>
            </div>
            {selectedFile && (
              <p className='mt-2 text-sm text-gray-600'>
                Selected file: {selectedFile.name}
              </p>
            )}
            {uploadStatus && (
              <p className='mt-2 text-sm text-gray-600'>{uploadStatus}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
