import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

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
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === "dark" ? sun : moon}
      </button>

      {/* <button
        type="button"
        onClick={openResumeInNewWindow}
        className="fixed p-2 z-10 right-5 top-20 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === 'dark' ? documentIcon : documentIcon2}
      </button> */}

      <button
        type="button"
        onClick={toggleDropdown}
        className="fixed p-2 z-10 left-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {menuIcon}
      </button>

      {!isHomePage && (
        <button
          onClick={() => window.history.back()}
          className="fixed p-2 z-10 left-5 top-16 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="w-6 h-6 hover:scale-[1.20]"
          >
            <path
              fill="currentColor"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            />
            <path
              fill="currentColor"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            />
          </svg>
        </button>
      )}

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
