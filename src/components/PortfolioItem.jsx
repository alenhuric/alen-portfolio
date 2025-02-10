import React from "react";
import { Link } from "react-router-dom";

function PortfolioItem({ title, imgUrl, link }) {
  return (
    <Link
      to={link}
      className="relative transition-all duration-300 transform hover:scale-[1.05] group"
    >
      <div
        className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden 
                        transition-all duration-300 hover:bg-stone-100 dark:hover:bg-stone-800 
                        hover:shadow-xl hover:border-stone-400 dark:hover:border-stone-600 
                        group-hover:shadow-2xl dark:group-hover:shadow-violet-500"
      >
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-80 h-36 md:h-48 object-cover cursor-pointer transition-all duration-300 
                     group-hover:scale-105 group-hover:transform-gpu group-hover:rotate-2"
        />

        <div className="w-full p-4 relative">
          <h3
            className="text-lg md:text-xl dark:text-white text-black mb-2 md:mb-3 font-semibold 
                              group-hover:text-black dark:group-hover:text-violet-600 
                              transition-colors"
          >
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white opacity-80 group-hover:opacity-100 transition-opacity duration-200"></p>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioItem;
