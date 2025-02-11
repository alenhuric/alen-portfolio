import React from "react";

function ProjectsPortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative transition-all transform hover:scale-[1.05] group"
    >
      <div
        className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden 
                        duration-300 hover:bg-stone-100 dark:hover:bg-stone-800 hover:shadow-xl hover:border-stone-400 dark:hover:border-stone-600 group-hover:shadow-2xl dark:group-hover:shadow-violet-500"
      >
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-80 h-41 md:h-48 object-fill cursor-pointer group-hover:scale-105 group-hover:transform-gpu group-hover:rotate-2"
        />
        <div className="w-full p-4 ">
          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold group-hover:text-black dark:group-hover:text-violet-600 group-hover:opacity-60 dark:group-hover:opacity-100">
            {title}
          </h3>
          {Array.isArray(stack) && (
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
              {stack.map((item) => (
                <span
                  key={item}
                  className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md group-hover:opacity-60"
                >
                  {item}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}

export default ProjectsPortfolioItem;
