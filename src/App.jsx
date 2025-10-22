import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import ExperienceIntro from "./components/ExperienceIntro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import ProjectsPortfolio from "./components/projects/ProjectsPortfolio";
import symfonyportfolio from "./data/projects/symfonyportfolio";
import reactportfolio from "./data/projects/reactportfolio";
import laravelportfolio from "./data/projects/laravelportfolio";
import vueportfolio from "./data/projects/vueportfolio";
import GithubCalendar from "./components/GithubCalendar";
import Skills from "./components/Skills";
import { SiLaravel, SiSymfony } from "react-icons/si";
import { FaReact, FaVuejs } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
    const menuIcon = document.getElementById("menu-icon");

    if (menuIcon) {
      const rect = menuIcon.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
  };

  const handleScroll = () => {
    getMenuPosition();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const openResumeInNewWindow = () => {
    const url = "/assets/Resume.pdf";
    window.open(url, "_blank");
  };

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="relative">
        <Header
          theme={theme}
          handleThemeSwitch={handleThemeSwitch}
          openResumeInNewWindow={openResumeInNewWindow}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          closeDropdown={closeDropdown}
          menuPosition={menuPosition}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto">
                  <Intro theme={theme} />
                  {/* <Portfolio />
                  <Timeline /> */}
                  <Contact />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/About"
            element={
              <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto">
                  <ExperienceIntro theme={theme} />
                  <Skills />
                  <Timeline />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/Projects"
            element={
              <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto pt-2">
                  <Portfolio />
                  <GithubCalendar />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/ReactProjects"
            element={
              <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto">
                  {/* <Intro theme={theme} /> */}
                  {/* <h1 className="text-4xl md:text-5xl font-bold pt-28 text-center">
                    React Projects
                  </h1> */}
                  <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold pt-28 text-center">
                    <FaReact className="text-sky-400 text-5xl md:text-6xl" />
                    React Projects
                  </h1>
                  <ProjectsPortfolio data={reactportfolio} />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/VueProjects"
            element={
              <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto">
                  {/* <Intro theme={theme} /> */}
                  {/* <h1 className="text-4xl md:text-5xl font-bold pt-28 text-center">
                    Vue Projects
                  </h1> */}
                  <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold pt-28 text-center">
                    <FaVuejs className="text-green-500 text-5xl md:text-6xl" />
                    Vue Projects
                  </h1>
                  <ProjectsPortfolio data={vueportfolio} />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/SymfonyProjects"
            element={
              <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto">
                  {/* <Intro theme={theme} /> */}
                  {/* <h1 className="text-4xl md:text-5xl font-bold pt-28 text-center">
                    Symfony Projects
                  </h1> */}
                  <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold pt-28 text-center">
                    <SiSymfony className="text-gray-500 text-5xl md:text-6xl" />
                    Symfony Projects
                  </h1>
                  <ProjectsPortfolio data={symfonyportfolio} />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/LaravelProjects"
            element={
              <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto">
                  <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold pt-28 text-center">
                    <SiLaravel className="text-red-500 text-5xl md:text-6xl" />
                    Laravel Projects
                  </h1>
                  {/* <Intro theme={theme} /> */}
                  <ProjectsPortfolio data={laravelportfolio} />
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
