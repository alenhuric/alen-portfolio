import React from "react";
import { Link } from "react-router-dom";

function PortfolioItem({ title, imgUrl, link }) {
  return (
    <Link to={link} className="relative transform hover:scale-[1.05] group">
      <div
        className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden 
                        duration-300 hover:bg-stone-100 dark:hover:bg-stone-800 
                        hover:shadow-xl hover:border-stone-400 dark:hover:border-stone-600 
                        group-hover:shadow-2xl dark:group-hover:shadow-violet-500"
      >
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-80 h-36 md:h-48 object-cover cursor-pointer
                     group-hover:scale-105 group-hover:transform-gpu group-hover:rotate-2"
        />

        <div className="w-full p-4 relative">
          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold group-hover:text-black dark:group-hover:text-violet-600 group-hover:opacity-60 dark:group-hover:opacity-100">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioItem;
