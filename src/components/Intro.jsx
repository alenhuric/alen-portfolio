import React from 'react';

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
                Alen Huric
            </h1>
            <p className='text-base md:text-xl mb-3 font-medium'>
                Software Developer
            </p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                This is my Bio. I am a web developer with two years of experience
                writing PHP and JS code in work. I also like soccer, spending time with
                friends and eating good food.
            </p>
        </div>
    )
}

export default Intro;