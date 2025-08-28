import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

const Header = ({
  theme,
  handleThemeSwitch,
  /*openResumeInNewWindo*/ isDropdownOpen,
  toggleDropdown,
  closeDropdown,
  menuPosition,
}) => {
  const dropdownRef = useRef(null);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, closeDropdown]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 hover:scale-[1.20]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6 hover:scale-[1.20]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const documentIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v6h6" />
    </svg>
  );

  const documentIcon2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 stroke-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v6h6" />
    </svg>
  );

  const menuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 hover:scale-[1.20]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );

  return (
    <>
      {/* <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === "dark" ? sun : moon}
      </button> */}

      {/* <button
        type="button"
        onClick={openResumeInNewWindow}
        className="fixed p-2 z-10 right-5 top-20 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === 'dark' ? documentIcon : documentIcon2}
      </button> */}

      {/* <button
        type="button"
        onClick={toggleDropdown}
        className="fixed p-2 z-10 left-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {menuIcon}
      </button> */}

      <nav
        className={`fixed top-0 left-0 w-full flex justify-center bg-gray-100/90 dark:bg-violet-500/90 px-6 py-3 shadow-md backdrop-blur-sm z-50 transition-all`}
      >
        <Link
          to="/"
          className="relative flex items-center space-x-1 mx-4 xs:mx-0 font-medium transition-colors duration-300 text-gray-800 dark:text-white hover:text-violet-700 dark:hover:text-black after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-violet-700 dark:after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          <AiOutlineHome className="text-lg" />
          <span>Home</span>
        </Link>

        <Link
          to="/About"
          className="relative flex items-center space-x-1 mx-4 font-medium transition-colors duration-300 text-gray-800 dark:text-white hover:text-violet-700 dark:hover:text-black after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-violet-700 dark:after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          <AiOutlineUser className="text-lg" />
          <span>About</span>
        </Link>

        <Link
          to="/projects"
          className="relative flex items-center space-x-1 mx-4 xs:mx-0 font-medium transition-colors duration-300 text-gray-800 dark:text-white hover:text-violet-700 dark:hover:text-black after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-violet-700 dark:after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          <AiOutlineFundProjectionScreen className="text-lg" />
          <span>Projects</span>
        </Link>

        {/* <a
          href="https://github.com/alenhuric/alen-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          // className="flex items-center space-x-1 mx-4 px-3 py-2 bg-gray-200 dark:bg-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-400 transition"
          // className="flex fixed z-10 right-14 top-1 mx-4 px-3 py-2 bg-gray-200 dark:bg-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-400 transition"
          className="flex fixed z-10 right-5 top-1 px-2 py-2.5 bg-gray-200 dark:bg-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-400 transition"
        >
          <CgGitFork style={{ fontSize: "1.2em" }} />
          <AiFillStar style={{ fontSize: "1.0em" }} />
        </a> */}

        <a
          href="https://github.com/alenhuric/alen-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex 
            fixed z-10 right-5 top-1 
            px-4 xs:px-1 py-2.5 
            bg-gray-200
            rounded-md 
            items-center 
            space-x-1 
            text-center
            transition-all 
            duration-200 
            ease-in-out
            hover:-translate-y-0.5
            hover:bg-violet-300
            dark:hover:bg-violet-300
          "
        >
          <CgGitFork className="text-[1.2em]" />
          <AiFillStar className="text-[1em]" />
        </a>

        <button
          type="button"
          onClick={handleThemeSwitch}
          className="fixed p-2 z-10 left-5 top-1 bg-violet-300 dark:bg-orange-200 text-lg rounded-md"
        >
          {theme === "dark" ? sun : moon}
        </button>
      </nav>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed bg-white dark:bg-gray-400 border border-gray-300 dark:border-gray-700 p-3 rounded-lg shadow-lg"
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            zIndex: 1000,
            minWidth: "180px",
          }}
        >
          <ul className="flex flex-col space-y-2">
            {!isHomePage && (
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-violet-500 transition duration-300"
                  onClick={closeDropdown}
                >
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/ReactProjects"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-violet-500 transition duration-300"
                onClick={closeDropdown}
              >
                React Projects
              </Link>
            </li>
            <li>
              <Link
                to="/LaravelProjects"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-violet-500 transition duration-300"
                onClick={closeDropdown}
              >
                Laravel Projects
              </Link>
            </li>
            <li>
              <Link
                to="/VueProjects"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-violet-500 transition duration-300"
                onClick={closeDropdown}
              >
                Vue.js Projects
              </Link>
            </li>
            <li>
              <Link
                to="/SymfonyProjects"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-violet-500 transition duration-300"
                onClick={closeDropdown}
              >
                Symfony Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
