import Link from "next/link";

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <Link href='/' className='flex items-center'>
            <svg
              className='h-8 w-8 text-blue-600'
              fill='none'
              height='24'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3' />
              <path d='M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4' />
              <circle cx='20' cy='10' r='2' />
            </svg>
            <span className='ml-2 text-xl font-bold text-gray-900'>CDCare</span>
          </Link>
          <nav className='hidden md:flex space-x-10'>
            <Link
              href='/'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              About
            </Link>
            <Link
              href='/careers'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Careers
            </Link>
            <Link
              href='/contact'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
