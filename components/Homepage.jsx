import Link from "next/link"; // Ensure this import is present

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        <section className='bg-blue-100 py-12 md:py-24 lg:py-32'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                Welcome to CDCare Hospital
              </h1>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                Providing compassionate care and cutting-edge medical services
                to our community.
              </p>
              <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                <div className='rounded-md shadow'>
                  <Link
                    href='/book'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='lg:text-center'>
              <h2 className='text-base text-blue-600 font-semibold tracking-wide uppercase'>
                Our Services
              </h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Comprehensive Healthcare Solutions
              </p>
            </div>
            <div className='mt-10'>
              <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-10'>
                <div className='relative p-8 bg-blue-50 rounded-lg shadow-md'>
                  <div className='absolute flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white'>
                    <svg
                      className='h-8 w-8'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                      />
                    </svg>
                  </div>
                  <div className='ml-20'>
                    <h3 className='text-xl leading-7 font-semibold text-gray-900'>
                      Emergency Care
                    </h3>
                    <p className='mt-3 text-lg text-gray-500'>
                      24/7 emergency services for immediate medical attention.
                    </p>
                  </div>
                </div>
                <div className='relative p-8 bg-blue-50 rounded-lg shadow-md'>
                  <div className='absolute flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white'>
                    <svg
                      className='h-8 w-8'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </div>
                  <div className='ml-20'>
                    <h3 className='text-xl leading-7 font-semibold text-gray-900'>
                      Specialized Departments
                    </h3>
                    <p className='mt-3 text-lg text-gray-500'>
                      Expert care across various medical specialties.
                    </p>
                  </div>
                </div>
                <div className='relative p-8 bg-blue-50 rounded-lg shadow-md'>
                  <div className='absolute flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white'>
                    <svg
                      className='h-8 w-8'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-20'>
                    <h3 className='text-xl leading-7 font-semibold text-gray-900'>
                      Outpatient Services
                    </h3>
                    <p className='mt-3 text-lg text-gray-500'>
                      Convenient scheduling for consultations and treatments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className='py-16 bg-gray-50 mt-20'>
              <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-extrabold text-gray-900 mb-8 text-center'>
                  Our Mission and Values
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                      Our Mission
                    </h3>
                    <p className='text-lg text-gray-500'>
                      To enhance the health and well-being of our community by
                      providing exceptional, compassionate care and advancing
                      medical knowledge through research and education.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                      Our Values
                    </h3>
                    <ul className='space-y-4 text-lg text-gray-500'>
                      <li className='flex items-start'>
                        <svg
                          className='h-6 w-6 text-blue-500 mr-2'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span>
                          Compassion: Treating every patient with kindness and
                          empathy
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <svg
                          className='h-6 w-6 text-blue-500 mr-2'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span>
                          Excellence: Striving for the highest standards in
                          healthcare
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <svg
                          className='h-6 w-6 text-blue-500 mr-2'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span>
                          Innovation: Embracing new technologies and treatments
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <svg
                          className='h-6 w-6 text-blue-500 mr-2'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span>
                          Integrity: Maintaining the highest ethical standards
                          in all we do
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
