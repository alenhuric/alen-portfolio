// import React from 'react';
// import portfolio from '../data/portfolio';
// import PortfolioItem from './PortfolioItem';

// function Portfolio() {
//    return (
//       <div className="flex flex-col md:flex-row items-center justify-center">
//          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {portfolio.map((project, index) => (
//                <PortfolioItem 
//                   key={index}
//                   imgUrl={project.imgUrl}
//                   title={project.title}
//                   link={project.link}
//                />
//             ))}
//          </div>
//       </div>
//    );
// }

// export default Portfolio;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((project, index) => (
               //<Link key={index} to={project.link} className="portfolio-link">
                  <PortfolioItem 
                     imgUrl={project.imgUrl}
                     title={project.title}
                     link={project.link}
                  />
               //</Link>
            ))}
         </div>
      </div>
   );
}

export default Portfolio;
