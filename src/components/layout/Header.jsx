import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center h-24 border-b border-gray-400 px-6'>
            <Link href="/"><Image src="https://landx.fi/assets/icons/logo/logo-dashboard.svg" alt="logo" width={128} height={77} /></Link>
            <div className='flex items-center gap-8'>
                <div className='hidden md:flex items-center gap-10'>
                    <Link className='text-xl font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp" target="_blank">Community</Link>
                    <div className='flex items-center gap-10'>
                        <span className='text-xl font-semibold text-white'>Resources</span>
                        <div className='hidden'>
                            <Link className='text-xl font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp" target="_blank">Blog</Link>
                            <Link className='text-xl font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp" target="_blank">LandX Academy</Link>
                            <Link className='text-xl font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp" target="_blank">Docs</Link>
                        </div>
                    </div>
                    <Link className='text-base font-semibold text-white' href="/$LNDX">LNDX</Link>
                </div>
                <div className='hidden md:flex max-w-md rounded-xl p-px bg-gradient-to-b from-teal-600 to-purple-600 '>
                    <Link className='py-3 px-6 text-lg font-semibold text-white w-full h-full bg-black block rounded-[calc(.8rem-1px)]' href="#">LAUNCH APP</Link>
                </div>
                <div className=' md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-w-8 fill-white text-white stroke-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>
            </div>
           
        </header>


    );
};

export default Header;