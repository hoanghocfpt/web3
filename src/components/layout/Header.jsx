import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center h-24 border-b border-gray-400 px-6'>
            <Link href="/"><Image src="https://landx.fi/assets/icons/logo/logo-dashboard.svg" alt="logo" width={128} height={77} /></Link>
            <div className='flex items-center gap-3'>
                <Link className='text-base font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp">Community</Link>
                <div>
                    <span className='text-base font-semibold text-white'>Resources</span>
                    <div className='hidden'>
                        <Link className='text-base font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp">Blog</Link>
                        <Link className='text-base font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp">LandX Academy</Link>
                        <Link className='text-base font-semibold text-white' href="https://discord.com/invite/hZnTwenQtp">Docs</Link>
                    </div>
                </div>
                <Link className='text-base font-semibold text-white' href="/$LNDX">LNDX</Link>
            </div>
            <div className='py-1 px-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl'>
                <Link className='py-3 px-6 text-lg font-semibold text-white w-full h-full bg-black block rounded-lg' href="#">LAUNCHING 15 DECEMBER 2023</Link>
            </div>
        </header>
    );
};

export default Header;