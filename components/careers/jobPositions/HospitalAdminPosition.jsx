// components/careers/jobPositions/HospitalAdministratorPosition.jsx

export default function HospitalAdminPosition() {
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
          <ul className='list-disc pl-5 mb-4 text-gray-700'>
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
          <ul className='list-disc pl-5 mb-4 text-gray-700'>
            <li>
              Bachelor’s degree in Healthcare Administration, Business
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
          <ul className='list-disc pl-5 mb-6 text-gray-700'>
            <li>Competitive salary and comprehensive benefits package</li>
            <li>Opportunities for professional growth and development</li>
            <li>Supportive leadership and collaborative work culture</li>
            <li>State-of-the-art medical facilities and resources</li>
          </ul>

          <div className='mt-8 border-t border-gray-200 pt-8'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              How to Apply
            </h3>
            <p className='mb-4 text-gray-700'>
              If you are a visionary leader passionate about improving
              healthcare delivery, we encourage you to apply. Please send your
              resume and cover letter to{" "}
              <a
                href='mailto:careers@hospitalname.com'
                className='text-blue-600 hover:underline'
              >
                careers@hospitalname.com
              </a>{" "}
              with the subject line "Hospital Administrator Application".
            </p>
            <p className='text-gray-700'>
              We appreciate your interest in joining our team and will review
              all applications carefully. Only shortlisted candidates will be
              contacted for an interview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
