import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import ProjectsPortfolio from './components/projects/ProjectsPortfolio';
import symfonyportfolio from './data/projects/symfonyportfolio'; 
import reactportfolio from './data/projects/reactportfolio';
import laravelportfolio from './data/projects/laravelportfolio';

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const [menuPosition, setMenuPosition] = useState({ top: 57, left: 20 });

  const getMenuPosition = () => {
    const menuIcon = document.getElementById('menu-icon');

    if (menuIcon) {
      const rect = menuIcon.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
  };

  const handleScroll = () => {
    getMenuPosition();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const sun = (
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
      className="w-6 h-6"
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
	  className="w-6 h-6"
	>
	  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
	</svg>
  );

  const openResumeInNewWindow = () => {
    const url = '/assets/Resume.pdf';
    window.open(url, '_blank');
  };

  return (
	<Router basename="/">
		<div className="relative">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === 'dark' ? sun : moon}
      </button>
      <button
        type="button"
        onClick={openResumeInNewWindow}
        className="fixed p-2 z-10 right-5 top-20 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === 'dark' ? documentIcon : documentIcon2}
      </button>
	  <button
        type="button"
        onClick={toggleDropdown}
        className="fixed p-2 z-10 left-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {menuIcon}
      </button>

	  {isDropdownOpen && (
          <div
		  className="fixed bg-gray-200 dark:bg-stone-100 border border-gray-500 dark:border-stone-200 p-2 rounded-md shadow-md"
		  style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
		>
            <Link
              to="/"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-stone-500 transition duration-300"
              onClick={closeDropdown}
            >
              Home
            </Link>
            <Link
              to="/ReactProjects"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-stone-500 transition duration-300"
              onClick={closeDropdown}
            >
              React Projects
            </Link>
            <Link
              to="/SymfonyProjects"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-stone-500 transition duration-300"
              onClick={closeDropdown}
            >
              Symfony Projects
            </Link>
            <Link
              to="/LaravelProjects"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-stone-500 transition duration-300"
              onClick={closeDropdown}
            >
              Laravel Projects
            </Link>
          </div>
        )}

        <Routes>
          <Route path="/" element={
            <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
              <div className="max-w-5xl w-11/12 mx-auto">
                <Intro theme={theme} />
                <Portfolio />
                <Timeline />
                <Contact />
                <Footer />
              </div>
            </div>
          } />
          <Route path="/ReactProjects" element={
            <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
              <div className="max-w-5xl w-11/12 mx-auto">
			  	<Intro theme={theme} />
                <ProjectsPortfolio data={reactportfolio} />
                <Footer />
              </div>
            </div>
          } />
		  <Route path="/SymfonyProjects" element={
            <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
              <div className="max-w-5xl w-11/12 mx-auto">
			  	<Intro theme={theme} />
                <ProjectsPortfolio data={symfonyportfolio} />
                <Footer />
              </div>
            </div>
          } />
		  <Route path="/LaravelProjects" element={
            <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
              <div className="max-w-5xl w-11/12 mx-auto">
			  	<Intro theme={theme} />
                <ProjectsPortfolio data={laravelportfolio} />
                <Footer />
              </div>
            </div>
          } />
        </Routes>
	</div>
	</Router>
  );
}

export default App;