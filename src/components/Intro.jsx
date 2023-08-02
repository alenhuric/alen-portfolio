import React from 'react';

function Intro({ theme }) {
    const logoSrc = theme === 'dark' ? '/assets/logo-white.png' : '/assets/logo-black.png';

    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
                Alen Huric
            </h1>
            <p className='text-base md:text-xl mb-3 font-medium'>
                Software Dev
            </p>
            <img src={logoSrc} alt="Logo Image" width='300' height='200' />
            <p className='text-sm max-w-xl mb-6 font-bold'>
                Experienced Software Developer with over 3 years of experience in working with Web-based applications and Enterprise Resource Planning (ERP) Systems.
            </p>
        </div>
    )
}

export default Intro;