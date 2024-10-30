export default function CareersPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-blue-600 text-white py-6'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold'>
            Careers at City General Hospital
          </h1>
        </div>
      </header>

      <main className='flex-grow container mx-auto px-4 py-8'>
        <section className='mb-12 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Join Our Team of Healthcare Heroes
          </h2>
          <p className='text-xl text-gray-600 mb-6'>
            Make a difference in people's lives every day. We're looking for
            passionate individuals to join our dedicated team.
          </p>
          <a
            href='#job-openings'
            className='inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'
          >
            View Open Positions
          </a>
        </section>

        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-6'>Why Work With Us?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                icon: "❤️",
                title: "Meaningful Work",
                description:
                  "Make a real impact on patient care and community health.",
              },
              {
                icon: "👥",
                title: "Collaborative Environment",
                description: "Work alongside top professionals in healthcare.",
              },
              {
                icon: "🎓",
                title: "Continuous Learning",
                description:
                  "Access to ongoing education and professional development.",
              },
              {
                icon: "🏥",
                title: "State-of-the-art Facilities",
                description:
                  "Work with the latest medical technologies and equipment.",
              },
              {
                icon: "🩺",
                title: "Comprehensive Benefits",
                description:
                  "Excellent healthcare, retirement plans, and work-life balance.",
              },
            ].map((benefit, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <span
                  className='text-4xl mb-2 block'
                  role='img'
                  aria-label={benefit.title}
                >
                  {benefit.icon}
                </span>
                <h3 className='text-xl font-semibold mb-2'>{benefit.title}</h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id='job-openings' className='mb-12'>
          <h2 className='text-2xl font-semibold mb-6'>Current Job Openings</h2>
          <div className='grid gap-6'>
            {[
              {
                title: "Registered Nurse - Emergency Department",
                type: "Full-time",
                location: "Main Campus",
                link: "/careers/nurse", // Adjusted to an absolute path
              },
              {
                title: "Physician Assistant - Family Medicine",
                type: "Part-time",
                location: "West Branch",
                link: "/careers/physician", // Add the specific link for this job
              },
              {
                title: "Medical Laboratory Technician",
                type: "Full-time",
                location: "Main Campus",
                link: "/careers/medicalTech", // Add the specific link for this job
              },
              {
                title: "Physical Therapist",
                type: "Full-time",
                location: "Rehabilitation Center",
                link: "/careers/physicalTherapist", // Add the specific link for this job
              },
              {
                title: "Hospital Administrator",
                type: "Full-time",
                location: "Main Campus",
                link: "/careers/hospitalAdmin", // Add the specific link for this job
              },
            ].map((job, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-2'>{job.title}</h3>
                <p className='text-gray-600 mb-4'>
                  {job.type} | {job.location}
                </p>
                <a
                  href={job.link}
                  className='inline-block bg-white text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded hover:bg-blue-100 transition duration-300'
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-6'>
            Our Culture and Values
          </h2>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <p className='mb-4'>
              At City General Hospital, we're committed to fostering a culture
              of compassion, excellence, and innovation. Our values guide
              everything we do:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                Patient-Centered Care: We put our patients first in all
                decisions and actions.
              </li>
              <li>
                Integrity: We uphold the highest standards of professionalism
                and ethics.
              </li>
              <li>
                Teamwork: We collaborate effectively to provide the best
                possible care.
              </li>
              <li>
                Innovation: We continuously seek new ways to improve healthcare
                delivery.
              </li>
              <li>
                Diversity and Inclusion: We celebrate diversity and create an
                inclusive environment for all.
              </li>
            </ul>
          </div>
        </section>

        <section className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>
            Ready to Make a Difference?
          </h2>
          <p className='text-xl text-gray-600 mb-6'>
            Join our team and help us provide exceptional healthcare to our
            community.
          </p>
          <a
            href='#job-openings'
            className='inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'
          >
            Apply Now
          </a>
        </section>
      </main>

      <footer className='bg-gray-100 py-6 mt-12'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          <p>
            &copy; {new Date().getFullYear()} City General Hospital. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
