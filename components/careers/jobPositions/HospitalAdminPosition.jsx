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

      // Create a FormData object to hold the file
      const formData = new FormData();
      formData.append("file", selectedFile); // Use "file" to match your API endpoint's expected field name

      try {
        // Send the file to the server
        const response = await fetch("/api/submitResume", {
          method: "POST",
          body: formData,
        });

        console.log("GOT HERE");

        // Check if the response is ok (status in the range 200-299)
        if (response.ok) {
          const data = await response.json();
          setUploadStatus(`Upload successful!`);
        } else {
          setUploadStatus("Upload failed.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        setUploadStatus("Upload failed due to an error.");
      }

      setSelectedFile(null);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='px-4 py-5 sm:px-6 bg-blue-600'>
          <h1 className='text-2xl font-bold text-white'>
            Hospital Administrator
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
            We are seeking a dynamic and experienced Hospital Administrator to
            oversee the operations of our healthcare facility. The ideal
            candidate will be responsible for ensuring high-quality patient care
            while managing financial and operational efficiencies.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Responsibilities:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
            <li>Direct the day-to-day operations of the hospital</li>
            <li>Ensure compliance with healthcare regulations and standards</li>
            <li>
              Develop and implement policies and procedures to improve
              efficiency
            </li>
            <li>Manage hospital budgets and financial performance</li>
            <li>
              Supervise and support staff, including recruitment and training
            </li>
            <li>
              Collaborate with physicians and department heads on strategic
              planning
            </li>
            <li>Enhance patient satisfaction and overall experience</li>
            <li>
              Monitor healthcare quality metrics and implement improvement
              initiatives
            </li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Qualifications:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700 list-inside'>
            <li>
              Bachelor's degree in Healthcare Administration, Business
              Administration, or related field (Master's preferred)
            </li>
            <li>
              Proven experience in hospital administration or healthcare
              management
            </li>
            <li>
              Strong understanding of healthcare laws, regulations, and
              compliance
            </li>
            <li>Excellent leadership and team management skills</li>
            <li>Effective communication and interpersonal abilities</li>
            <li>
              Analytical and problem-solving skills with attention to detail
            </li>
            <li>Ability to work collaboratively in a fast-paced environment</li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            We Offer:
          </h3>
          <ul className='list-disc pl-5 mb-6 text-gray-700 list-inside'>
            <li>Competitive salary and comprehensive benefits package</li>
            <li>Opportunities for professional growth and development</li>
            <li>Supportive leadership and collaborative work culture</li>
            <li>State-of-the-art medical facilities and resources</li>
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
