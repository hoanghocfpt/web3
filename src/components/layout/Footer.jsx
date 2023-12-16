import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='p-7 md:p-12 border-b border-gray-300 w-full md:flex'>
            <div className='md:w-1/2 flex justify-between flex-col mb-8'>
                <Image src="https://landx.fi/assets/icons/logo/logo-dashboard.svg" alt="logo" width={128} height={80} className=' mb-4' />    
                <div className='flex gap-4'>
                    <div className=''>
                        <a href='#' className='w-12 h-12 p-3 flex items-center justify-center bg-white rounded-lg'>
                            <Image src="/assets/icons/twitter.svg" alt="logo" width={40} height={40} />
                        </a>
                    </div>
                    <div>
                        <a href='#' className='w-12 h-12 p-3 flex items-center justify-center bg-white rounded-lg'>
                            <Image src="/assets/icons/discord.svg" alt="logo" width={40} height={40} />
                        </a>
                    </div>
                    <div>
                        <a href='#' className='w-12 h-12 p-3 flex items-center justify-center bg-white rounded-lg'>
                            <Image src="/assets/icons/tiktok.svg" alt="logo" width={40} height={40} />
                        </a>
                    </div>
                    {/* <div>
                        <a href='#' className='w-12 h-12 p-3 flex items-center justify-center bg-white rounded-lg'>
                            <Image src="/assets/icons/twitter.svg" alt="logo" width={40} height={40} />
                        </a>
                    </div> */}
                </div>
            </div>
            <div className='md:w-1/2 justify-between'>
                    <div className='flex flex-col gap-4 md:gap-8 md:flex-row mb-6 justify-end'>
                        <ul className='text-xl font-bold text-white'><span className='text-xl block mb-4'>Resources</span>
                            <li className='text-white text-xl font-normal mb-4 hover:text-gray-300 cursor-pointer'> <a href='#'></a>Blog</li>
                            <li className='text-white text-xl font-normal mb-4 hover:text-gray-300 cursor-pointer'> <a href='#'></a>LandX Academy</li>
                            <li className='text-white text-xl font-normal mb-4 hover:text-gray-300 cursor-pointer'> <a href='#'></a>Docs</li>
                            <li className='text-white text-xl font-normal mb-4 hover:text-gray-300 cursor-pointer'> <a href='#'></a>Audit</li>
                        </ul>
                        <ul className='text-xl font-bold text-white'><span className='text-xl block mb-4'>Legal</span>
                            <li className='text-white text-xl font-normal mb-4 hover:text-gray-300 cursor-pointer'> <a href='#'></a>Terms and Conditions</li>
                            <li className='text-white text-xl font-normal mb-4 hover:text-gray-300 cursor-pointer'> <a href='#'></a>Disclaimer</li>
                        </ul>
                        <ul className='text-xl font-bold text-white'><span className='text-xl block mb-4'>Landowners</span>
                            <li className='text-white text-xl font-normal mb-4 hover:text-gray-300 cursor-pointer'> <a >Apply for Finance</a> </li>
                        </ul>
                    </div>
                    <div className='text-white text-lg md:text-right'>Engineered by LandX Labs Limited, © 2023</div>
            </div>
        </footer>
    );
};

export default Footer;