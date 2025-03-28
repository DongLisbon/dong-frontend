import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DongCoffee
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Products
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1" className="hover:underline">
                    Coffees
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1" className="hover:underline">
                    Equipments
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="https://www.facebook.com/dongcoffeept" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link to="https://www.instagram.com/dongcoffee.pt?igsh=bmg1YXgzZmk4azMz" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="https://x.com/dongcoffeept?t=wbEFb0qqzMBx__8NhHOtDQ&s=09" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1" className="hover:underline">
                    Tiktok
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Information
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    +351920346789
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Dongcoffee@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    84 arrois, 203-8554 Lisbon
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <Link to="/" className="hover:underline">Dongcoffee™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Facebook Icon */}
            <Link
              to="https://www.facebook.com/dongcoffeept"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
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
            </Link>
            {/* Instagram Icon */}
            <Link
              to="https://www.instagram.com/dongcoffee.pt?igsh=bmg1YXgzZmk4azMz"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
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
            </Link>
            {/* Twitter Icon */}
            <Link
              to="https://x.com/dongcoffeept?t=wbEFb0qqzMBx__8NhHOtDQ&s=09"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.444 4.724c-.84.37-1.74.624-2.686.74a4.702 4.702 0 0 0 2.064-2.593 9.305 9.305 0 0 1-2.96 1.131A4.68 4.68 0 0 0 16.492 3c-2.56 0-4.646 2.083-4.646 4.654 0 .365.043.723.126 1.065a13.215 13.215 0 0 1-9.613-4.85A4.654 4.654 0 0 0 6.07 8.62a4.62 4.62 0 0 1-2.1-.588v.06c0 2.248 1.594 4.13 3.71 4.565a4.76 4.76 0 0 1-2.03.077c.568 1.774 2.21 3.066 4.157 3.1a9.375 9.375 0 0 1-5.79 1.988c-.381 0-.757-.022-1.13-.066a13.147 13.147 0 0 0 7.075 2.067c8.49 0 13.145-7.027 13.145-13.146 0-.2 0-.39-.017-.585A9.227 9.227 0 0 0 24 4.66a9.306 9.306 0 0 1-2.556.64z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            {/* TikTok Icon */}
            <Link
              to="https://www.tiktok.com/@dongcoffeept?_t=ZN-8v0fyO35T0Q&_r=1"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1.174 14.115c-.389.735-.945 1.314-1.595 1.742-.651.438-1.415.651-2.226.651-.392 0-.78-.036-1.16-.107.043-.452.125-.892.243-1.306-.693-.329-1.309-.775-1.888-1.325-.507-.468-.97-.994-1.351-1.563-.51-.842-.917-1.748-1.247-2.686-.232-.619-.479-1.228-.731-1.842-.487-.9-.957-1.803-1.495-2.72-.358-.625-.795-1.187-1.288-1.69C5.833 7.062 4.622 5.54 4.62 5.538c-.24-.34-.533-.588-.883-.85-.149-.016-.332-.037-.522-.059C2.89 4.52 2.554 5.486 3.352 6.232c-.401 1.374-.336 3.057.317 4.192.246.345.566.601.951.771.032-.04.061-.081.091-.122 1.488-1.841 2.31-4.267 1.315-6.468C9.442 10.067 12.102 7.027 11.174 14.115z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
