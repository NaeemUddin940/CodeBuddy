import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-[#0B1120]">
        <div className="lg:px-10 h-18 flex flex-wrap items-center justify-between mx-auto p-1">
          <div className="flex space-x-3">
            <button
              className="text-white bg-[#605dff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-.8 dark:bg-[#605dff] dark:hover:bg-[#504cee] focus:outline-none dark:focus:ring-[#605dff]"
              type="button"
              data-drawer-target="drawer-disable-body-scrolling"
              data-drawer-show="drawer-disable-body-scrolling"
              data-drawer-body-scrolling="false"
              aria-controls="drawer-disable-body-scrolling">
              <i className="ri-menu-2-line text-lg"></i>
            </button>
            {/* Wesite Main Name and Image */}
            <Link to="/" className="items-center space-x-3 rtl:space-x-reverse">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              /> */}
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-[#37ff00]">
                CodeBuddy
              </span>
            </Link>
          </div>
          <div className="flex md:order-2">
            {/* Search Field */}
            <div className="relative md:block">
              <div className="relative w-60 flex items-center p-1">
                <input
                  type="search"
                  className="block w-full text-sm px-2 py-1.5 text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-[#37ff00] focus:border-[#37ff00] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#37ff00] dark:text-white dark:focus:ring-[#605dff] dark:focus:border-[#605dff]"
                  placeholder="Search..."
                />
                <svg
                  className="w-4 h-4 text-[#37ff00] right-5 absolute cursor-pointer dark:text-[#37ff00]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-xl border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#0B1120] dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-[#37ff00] rounded-sm md:bg-transparent md:text-[#37ff00] md:p-0 md:dark:text-[#37ff00]"
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cources"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#605dff] md:p-0 md:dark:hover:text-[#605dff] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/topics"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#605dff] md:p-0 dark:text-white md:dark:hover:text-[#605dff] dark:hover:bg-gray-700 dark:hover:[#605dff] md:dark:hover:bg-transparent dark:border-gray-700">
                  Topics
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#605dff] md:p-0 dark:text-white md:dark:hover:text-[#605dff] dark:hover:bg-gray-700 dark:hover:[#605dff] md:dark:hover:bg-transparent dark:border-gray-700">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        id="drawer-disable-body-scrolling"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-[#0B1120]"
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label">
        <button
          type="button"
          data-drawer-hide="drawer-disable-body-scrolling"
          aria-controls="drawer-disable-body-scrolling"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute inline-flex items-center justify-center dark:text-red-500 dark:hover:bg-[#605dff] cursor-pointer dark:hover:text-red-500">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <h5
          id="drawer-disable-body-scrolling-label"
          className="text-xl absolute top-2.5 end-2.5 font-bold text-gray-500 uppercase dark:text-[#605dff]">
          MenuBar
        </h5>

        <div className="py-4 mt-5 overflow-y-auto">
          <ul className="space-y-2 font-medium text-xl">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-[#605dff] hover:text-white hover:bg-gray-100 dark:hover:bg-[#605dff] group">
                <i className="ri-home-3-line text-xl "></i>
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cources"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group dark:hover:text-white hover:bg-gray-100 dark:text-[#605dff] dark:hover:bg-[#605dff]"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example">
                <i className="fa-solid fa-graduation-cap"></i>
                <span className="flex-1 ms-3 text-xl text-left rtl:text-right whitespace-nowrap">
                  Courses
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <Link
                    to="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-[#605dff]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-[#605dff]">
                    Billing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-[#605dff]">
                    Invoice
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/topics"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-[#605dff] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#605dff] group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Topics</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:hover:text-white hover:bg-gray-100 dark:text-[#605dff] dark:hover:bg-[#605dff] group">
                <svg
                  className="shrink-0 dark:text-[#605dff] w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:hover:text-white dark:text-[#605dff] hover:bg-gray-100 dark:hover:bg-[#605dff] group">
                <svg
                  className="shrink-0 w-5 dark:text-[#605dff] h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:hover:text-white dark:text-[#605dff] hover:bg-gray-100 dark:hover:bg-[#605dff] group">
                <svg
                  className="shrink-0 w-5 h-5 dark:text-[#605dff] text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
