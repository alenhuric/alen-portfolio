import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioItem({ title, imgUrl, link }) {
   return (
      <Link
         to={link}
         className="portfolio-link" 
      >
         <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
            <img
               src={imgUrl}
               alt="portfolio" 
               className="w-80 h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
               <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
               <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                  {/* Add any additional content or styles as needed */}
               </p>
            </div>
         </div>
      </Link>
   )
}

export default PortfolioItem;