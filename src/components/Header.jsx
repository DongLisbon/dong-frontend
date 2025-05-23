// import React from 'react';
// import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

// function Header() {
//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             DongCoffee
//           </span>
//         </Link>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button
//             type="button"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             My Cart
//           </button>
//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Products
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;

import React from 'react';
import dongbg from '../assets/dongbg.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      {/* First Navbar */}
      <nav className="bg-[#164e63] border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={dongbg}
              className="h-20 w-15"
              alt="Dongcofee"
            />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
              DongCoffee
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              My Cart
            </button>

            {/* <Link
              to="/login"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link> */}
            <Link to="/login">
            <button class="relative left-1/2 top-8 h-14 w-40 translate-x-[-50%] translate-y-[-50%] transform cursor-pointer rounded-[10px] bg-[#0e7490] text-center text-base font-bold text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-bottom-right before:scale-0 before:rounded-[10px] before:bg-[#ffffff3a] before:transition-transform before:duration-500 before:ease-linear before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:box-border after:h-full after:w-full after:origin-bottom-right after:scale-100 after:rounded-[10px] after:border-2 after:border-solid after:border-[#fff] after:bg-transparent after:transition-transform after:duration-500 after:ease-linear after:content-[''] hover:before:origin-top-left hover:before:scale-100 hover:before:rounded-[10px] hover:before:transition-transform hover:before:duration-300 hover:before:ease-linear hover:after:origin-top-left hover:after:scale-0 hover:after:transition-transform hover:after:duration-500 hover:after:ease-linear">
              Login
            </button>
            </Link>

          </div>
        </div>
      </nav>

      {/* Second Navbar - Sticky below the first navbar */}
      <nav className="bg-gray-100 dark:bg-gray-700 sticky top-0 left-0 z-10 shadow-md">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-center w-full">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Coffees
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Equipments
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Adding padding to the top of the page to avoid content being hidden under the navbar */}
      <div>{/* Your main content will go here */}</div>
    </>
  );
}

export default Header;
