// // components/careers/jobPositions/PhysicianPosition.jsx

// export default function PhysicianPosition() {
//   return (
//     <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
//       <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
//         <div className='px-4 py-5 sm:px-6 bg-blue-600'>
//           <h1 className='text-2xl font-bold text-white'>
//             Physician - Family Medicine
//           </h1>
//           <p className='mt-1 max-w-2xl text-sm text-blue-100'>
//             Part-time position
//           </p>
//         </div>
//         <div className='px-4 py-5 sm:p-6'>
//           <h2 className='text-xl font-semibold text-gray-900 mb-4'>
//             Job Description
//           </h2>
//           <p className='text-gray-700 mb-4'>
//             We are looking for a compassionate and dedicated Family Medicine
//             Physician to provide comprehensive care to patients of all ages. The
//             ideal candidate will have a strong commitment to patient health and
//             wellness and be skilled in diagnosing and treating a wide variety of
//             medical conditions.
//           </p>

//           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
//             Responsibilities:
//           </h3>
//           <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
//             <li>Conduct thorough examinations and assessments of patients</li>
//             <li>Diagnose and treat various health conditions</li>
//             <li>Prescribe medications and treatment plans</li>
//             <li>
//               Educate patients and families about health management and disease
//               prevention
//             </li>
//             <li>Coordinate care with other healthcare professionals</li>
//             <li>Maintain accurate patient records and documentation</li>
//             <li>
//               Participate in continuous education and training to stay current
//               in the field
//             </li>
//             <li>Ensure compliance with healthcare regulations and standards</li>
//           </ul>

//           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
//             Qualifications:
//           </h3>
//           <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
//             <li>MD or DO degree from an accredited medical school</li>
//             <li>Board Certified in Family Medicine</li>
//             <li>Valid state medical license in good standing</li>
//             <li>Experience in family medicine or primary care preferred</li>
//             <li>Strong interpersonal and communication skills</li>
//             <li>
//               Ability to work collaboratively in a team-oriented environment
//             </li>
//             <li>Commitment to patient-centered care</li>
//           </ul>

//           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
//             We Offer:
//           </h3>
//           <ul className='list-disc pl-5 mb-6 text-gray-700 list-inside'>
//             <li>Competitive salary and benefits package</li>
//             <li>Flexible work hours and schedules</li>
//             <li>Opportunities for professional development and advancement</li>
//             <li>Access to cutting-edge medical technology and resources</li>
//           </ul>

//           <div className='mt-8 border-t border-gray-200 pt-8'>
//             <h3 className='text-lg font-semibold text-gray-900 mb-4'>
//               How to Apply
//             </h3>
//             <p className='mb-4 text-gray-700'>
//               If you're ready to make a difference in the lives of your
//               patients, we encourage you to apply. Please send your resume and
//               cover letter to{" "}
//               <a
//                 href='mailto:careers@hospitalname.com'
//                 className='text-blue-600 hover:underline'
//               >
//                 careers@hospitalname.com
//               </a>{" "}
//               with the subject line "Family Medicine Physician Application".
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

//////////////////////////

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
            Physician - Family Medicine
          </h1>
          <p className='mt-1 max-w-2xl text-sm text-blue-100'>
            Part-time position
          </p>
        </div>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>
            Job Description
          </h2>
          <p className='text-gray-700 mb-4'>
            We are looking for a compassionate and dedicated Family Medicine
            Physician to provide comprehensive care to patients of all ages. The
            ideal candidate will have a strong commitment to patient health and
            wellness and be skilled in diagnosing and treating a wide variety of
            medical conditions.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Responsibilities:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
            <li>Conduct thorough examinations and assessments of patients</li>
            <li>Diagnose and treat various health conditions</li>
            <li>Prescribe medications and treatment plans</li>
            <li>
              Educate patients and families about health management and disease
              prevention
            </li>
            <li>Coordinate care with other healthcare professionals</li>
            <li>Maintain accurate patient records and documentation</li>
            <li>
              Participate in continuous education and training to stay current
              in the field
            </li>
            <li>Ensure compliance with healthcare regulations and standards</li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Qualifications:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
            <li>MD or DO degree from an accredited medical school</li>
            <li>Board Certified in Family Medicine</li>
            <li>Valid state medical license in good standing</li>
            <li>Experience in family medicine or primary care preferred</li>
            <li>Strong interpersonal and communication skills</li>
            <li>
              Ability to work collaboratively in a team-oriented environment
            </li>
            <li>Commitment to patient-centered care</li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            We Offer:
          </h3>
          <ul className='list-disc pl-5 mb-6 text-gray-700 list-inside'>
            <li>Competitive salary and benefits package</li>
            <li>Flexible work hours and schedules</li>
            <li>Opportunities for professional development and advancement</li>
            <li>Access to cutting-edge medical technology and resources</li>
          </ul>

          <div className='mt-8 border-t border-gray-200 pt-8'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              Apply Now
            </h3>
            <a
              href='http://localhost/upload-resume'
              style={{ textDecoration: "none" }}
            >
              <button className='px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                Go to Upload Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
