import React from 'react';
import dongbg from '../assets/dongbg.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#164e63] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={dongbg}
                className="h-20 w-15"
                alt="Dongcofee"
              />
              <span className="self-center text-white text-2xl font-bold whitespace-nowrap dark:text-white">
                DongCoffee
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm text-white font-bold uppercase dark:text-white">
                Products
              </h2>
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Coffees
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Equipments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm text-white font-bold uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com/dongcoffeept" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com/dongcoffee.pt?igsh=bmg1YXgzZmk4azMz" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://x.com/dongcoffeept?t=wbEFb0qqzMBx__8NhHOtDQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm text-white font-bold uppercase dark:text-white">
                Contact Information
              </h2>
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="tel:+351920346789" className="hover:underline">
                    +351920346789
                  </a>
                </li>
                <li className="mb-4">
                  <a href="mailto:Dongcoffee@gmail.com" className="hover:underline">
                    Dongcoffee@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    84 arrois, 203-8554 Lisbon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 font-semibold sm:text-center dark:text-gray-400">
            © 2025 <Link to="/" className="hover:underline">Dongcoffee™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/dongcoffeept"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.525 0H1.475C.66 0 0 .66 0 1.475v21.05C0 23.34.66 24 1.475 24h21.05c.815 0 1.475-.66 1.475-1.475V1.475C24 .66 23.34 0 22.525 0zm-3.549 12.35h-2.549v9.6H13V12.35h-2v-2.549h2V8.55c0-2.441 1.303-3.949 4.019-3.949 1.199 0 2.289.089 2.513.129v2.866h-1.791c-1.388 0-1.717.663-1.717 1.643v2.1h3.5l-.45 2.549h-3.05V24h-3.5v-9.65h-2.549V12.35h2.55v-2.1c0-2.694 1.907-4.65 4.687-4.65 1.473 0 2.557.111 2.878.116v2.749z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/dongcoffee.pt?igsh=bmg1YXgzZmk4azMz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.45 2.5C7.45 2.5 7.5 2.5 7.5 2.5H16.5C16.5 2.5 16.5 2.5 16.5 2.5C18.5 2.5 20 4 20 6C20 7.2 19.1 8.6 18 9.2C18 9.3 18 9.5 18 9.7V12.1C18 13.5 18.7 14.8 19.8 15.6C20.3 16 20.6 16.6 20.6 17.2C20.6 18.6 19.6 19.6 18.2 19.6C18 19.6 17.7 19.6 17.5 19.5H6.5C6.3 19.6 6 19.6 5.8 19.6C4.4 19.6 3.4 18.6 3.4 17.2C3.4 16.6 3.7 16 4.2 15.6C5.3 14.8 6 13.5 6 12.1V9.7C6 9.5 6 9.3 6 9.2C4.9 8.6 4 7.2 4 6C4 4 5.5 2.5 7.45 2.5ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM18 6C18 5.4 17.6 5 17 5C16.4 5 16 5.4 16 6C16 6.6 16.4 7 17 7C17.6 7 18 6.6 18 6Z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            {/* Twitter Icon */}
            <a
              href="https://x.com/dongcoffeept?t=wbEFb0qqzMBx__8NhHOtDQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.444 4.724c-.84.37-1.74.624-2.686.74a4.702 4.702 0 0 0 2.064-2.593 9.607 9.607 0 0 1-3.004 1.137 4.685 4.685 0 0 0-7.986 4.27c-3.68-.19-6.94-1.95-9.14-4.63A4.666 4.666 0 0 0 1.5 8.445c0 1.63.83 3.07 2.1 3.92a4.66 4.66 0 0 1-2.12-.584v.06c0 2.24 1.58 4.11 3.69 4.54a4.692 4.692 0 0 1-2.09.08c.59 1.84 2.28 3.18 4.29 3.22a9.407 9.407 0 0 1-5.84 2.03c-.38 0-.76-.03-1.13-.07a13.23 13.23 0 0 0 7.26 2.13c8.73 0 13.51-7.23 13.51-13.51 0-.21 0-.42-.02-.63a9.63 9.63 0 0 0 2.3-2.47z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            {/* TikTok Icon */}
            <a
              href="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.99 0C5.372 0 0 5.373 0 11.99 0 18.61 4.73 23.96 10.88 24v-2.41c-3.26-.19-5.87-2.81-5.87-5.88 0-3.25 2.63-5.88 5.87-5.88 2.13 0 4.12.93 5.44 2.48V7.67h-2.41V5.26h4.53V7.67H18.3v5.88h-2.41v2.41h2.41v2.41h-5.56c-.04 0-.08-.02-.12-.02-3.61 0-6.54 2.91-6.54 6.54s2.92 6.54 6.54 6.54c2.64 0 4.98-1.58 6.12-3.84l3.17.34V0h-2.4v11.79c-.65-1.04-1.79-1.79-3.02-1.79z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
