export default function AboutUs() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        <section className='bg-blue-100 py-12 md:py-24'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                About CDCare Hospital
              </h1>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                Dedicated to providing exceptional healthcare with compassion
                and innovation since 1985.
              </p>
            </div>
          </div>
        </section>

        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                  Our History
                </h2>
                <p className='text-lg text-gray-500 mb-6'>
                  Founded in 1985, CDCare Hospital began as a small community
                  clinic with a vision to provide accessible, high-quality
                  healthcare to all. Over the years, we've grown into a leading
                  medical institution, continuously adapting to meet the
                  evolving needs of our patients and community.
                </p>
                <p className='text-lg text-gray-500'>
                  Today, we're proud to be at the forefront of medical
                  innovation, offering cutting-edge treatments while maintaining
                  our commitment to compassionate, patient-centered care.
                </p>
              </div>
              <div className='relative h-64 md:h-auto'>
                <img
                  src='/pictures/HospitalBuilding.jpeg'
                  alt='CDCare Hospital Building'
                  className='rounded-lg shadow-lg object-cover w-full h-full'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-gray-900 mb-8 text-center'>
              Our Leadership Team
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  name: "Dr. Emily Chen",
                  role: "Chief Executive Officer",
                  image: "/pictures/DrChen.jpg",
                },
                {
                  name: "Dr. Michael Johnson",
                  role: "Chief Medical Officer",
                  image: "/pictures/DrMichaelJohnson.png",
                },
                {
                  name: "Sarah Thompson",
                  role: "Chief Nursing Officer",
                  image: "/pictures/SarahThompson.jpg",
                },
                {
                  name: "David Rodriguez",
                  role: "Chief Financial Officer",
                  image: "/pictures/DavidRodriguez.jpg",
                },
                {
                  name: "Dr. Lisa Patel",
                  role: "Director of Research",
                  image: "/pictures/DrLisaPatel.jpg",
                },
                {
                  name: "Robert Kim",
                  role: "Chief Information Officer",
                  image: "/pictures/RobertKim.jpg",
                },
              ].map((leader) => (
                <div
                  key={leader.name}
                  className='bg-gray-50 rounded-lg overflow-hidden shadow-md'
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className='w-full h-48 object-cover'
                  />
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {leader.name}
                    </h3>
                    <p className='text-gray-500'>{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-16 bg-blue-100'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
              Join Our Team
            </h2>
            <p className='text-xl text-gray-500 mb-8'>
              We're always looking for talented individuals to join our mission
              of providing exceptional healthcare.
            </p>
            <a
              href='/careers'
              className='inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300'
            >
              View Career Opportunities
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
