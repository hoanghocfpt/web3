import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className='border-b border-gray-300 p-5 sm:p-7 md:p-24'>
                <div className='lg:flex lg:gap-6 lg:justify-between mb-12'>
                    <div className='mb-5 lg:w-5/12'>
                        <h1 className='text-4xl text-white font-extrabold leading-snug mb-3'>The Perpetual Commodity Vaults Protocol</h1>
                        <p className='text-lg text-white mb-8'>Commodity vaults provide investors an inflation hedged return backed by a legal contract secured on underlying farmland. LandX makes commodity vaults available as a liquid digital asset.</p>
                        <div className='flex max-w-xs rounded-xl p-px bg-gradient-to-b from-teal-600 to-purple-600'>
                            <Link className='text-center py-4 px-7 text-base font-semibold text-white w-full h-full bg-black block rounded-[calc(.8rem-1px)]' href="#">LAUNCHING 15 DECEMBER 2023</Link>
                        </div>
                    </div>
                    <div className='lg:w-7/12 flex max-w-xl rounded-xl h-fit p-px bg-gradient-to-b from-teal-600 to-purple-600'>
                        <video className='rounded-[calc(.8rem-1px)]' autoPlay loop muted playsInline>
                            <source src="/videos/english.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='gap-6 flex flex-col md:flex-row'>
                    <div className='flex flex-col items-center justify-center py-6'>
                        <div className='bg-gradient-to-tl from-teal-600 to-purple-600 w-20 h-20 rotate-45 flex items-center justify-center rounded-xl mb-8'>
                            <Image src="/assets/icons/hand.svg" alt="logo" width={60} height={60} className='-rotate-45'/>
                        </div>
                        <span className='text-xl font-bold text-white mb-4'>Farmers</span>
                        <p className='text-lg text-white text-center'>Receive upfront capital for committing a legal share of their crop in perpetuity.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-6'>
                        <div className='bg-gradient-to-tl from-teal-600 to-purple-600 w-20 h-20 rotate-45 flex items-center justify-center rounded-xl mb-8'>
                            <Image src="/assets/icons/clock-with-flower.svg" alt="logo" width={60} height={60} className='-rotate-45'/>
                        </div>
                        <span className='text-xl font-bold text-white mb-4'>Investors</span>
                        <p className='text-lg text-white text-center'>Buy xTokens for asymmetric exposure to real farmland commodities.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-6'>
                        <div className='bg-gradient-to-tl from-teal-600 to-purple-600 w-20 h-20 rotate-45 flex items-center justify-center rounded-xl mb-8'>
                            <Image src="/assets/icons/branch.svg" alt="logo" width={60} height={60} className='-rotate-45'/>
                        </div>
                        <span className='text-xl font-bold text-white mb-4'>Farmers</span>
                        <p className='text-lg text-white text-center'>Receive upfront capital for committing a legal share of their crop in perpetuity.</p>
                    </div>
                </div>
            </div>

            <div className='p-5 sm:p-7 md:p-24 border-b border-gray-300'>
                <div className='flex flex-col justify-center items-center md:flex-row md:justify-center md:gap-6 mb-10'>
                    <Image src="/images/lndx-circles-and-cubes.svg" alt="logo" width={350} height={326} className='mb-6 md:w-5/12 lg:w-6/12 md:max-w-sm'/>
                    <div className='md:w-7/12 lg:w-6/12 md:px-9'>
                        <h2 className='text-4xl text-white font-semibold mb-5 leading-snug'>Why invest in xTokens?</h2>
                        <p className='text-lg text-white leading-normal'>Benefit from a unique on-chain financial instrument backed by one of the most valuable real world assets - global farmland.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6'>
                    <div className='gap-6 sm:flex py-4'>
                        <div className='w-20 h-20 lg:w-12 lg:h-12 bg-white rounded-full flex-shrink-0 mb-3'>
                            <Image src="/assets/icons/financial.svg" alt="logo" width={50} height={50} className='w-full h-full p-4 lg:p-2 justify-center items-center flex'/>
                        </div>
                        <div>
                            <h3 className='text-2xl text-white font-bold mb-3'>Hedge Against Inflation</h3>
                            <p className='text-lg text-white leading-relaxed'>xTokens provide exposure to farmland commodities and act as a natural long-term hedge against inflation.</p>
                        </div>
                    </div>
                    <div className='gap-6 sm:flex py-4'>
                        <div className='w-20 h-20 lg:w-12 lg:h-12 bg-white rounded-full flex-shrink-0 mb-3'>
                            <Image src="/assets/icons/geometry.svg" alt="logo" width={50} height={50} className='w-full h-full p-4 lg:p-2 justify-center items-center flex'/>
                        </div>
                        <div>
                            <h3 className='text-2xl text-white font-bold mb-3'>Diversify Your Portfolio</h3>
                            <p className='text-lg text-white leading-relaxed'>Exposure to commodities provides an uncorrelated diversification from crypto, stocks, and bonds.</p>
                        </div>
                    </div>
                    <div className='gap-6 sm:flex py-4'>
                        <div className='w-20 h-20 lg:w-12 lg:h-12 bg-white rounded-full flex-shrink-0 mb-3'>
                            <Image src="/assets/icons/coins.svg" alt="logo" width={50} height={50} className='w-full h-full p-4 lg:p-2 justify-center items-center flex'/>
                        </div>
                        <div>
                            <h3 className='text-2xl text-white font-bold mb-3'>Liquid Digital Income</h3>
                            <p className='text-lg text-white leading-relaxed'>xTokens are traded 365 days a year on decentralized exchanges such as Uniswap.</p>
                        </div>
                    </div>
                    <div className='gap-6 sm:flex py-4'>
                        <div className='w-20 h-20 lg:w-12 lg:h-12 bg-white rounded-full flex-shrink-0 mb-3'>
                            <Image src="/assets/icons/diamond.svg" alt="logo" width={50} height={50} className='w-full h-full p-4 lg:p-2 justify-center items-center flex'/>
                        </div>
                        <div>
                            <h3 className='text-2xl text-white font-bold mb-3'>Collect Daily Yield</h3>
                            <p className='text-lg text-white leading-relaxed'>Crop yield is added daily and can be claimed in USDC anytime. Each xToken adds 0.0027 kg of the underlying crop per day, equating to 1 kg per year.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='p-5 sm:p-7 md:p-24 border-b border-gray-300'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex justify-center items-center mb-5 md:w-6/12'>
                        <Image src="/images/lndx-cubes.svg" alt="logo" width={350} height={326} className='mb-6 md:w-5/12 lg:w-6/12 md:max-w-sm'/>
                    </div>
                    <div className='px-8 md:w-6/12'>
                        <h2 className='text-white text-4xl font-bold mb-7'>How LandX Works</h2>
                        <ul>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>LandX provides capital to real-world farmers in exchange for a legal share of their crop in perpetuity.</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>The contract is ensured by a farm audit, security deposit, and lien on their land.</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>The farmer's crop share becomes ERC20 tokenized commodity vault (minted xTokens).</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>Investors receive asymmetric exposure to real farmland commodities through the xToken and its daily yield.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='p-5 sm:p-7 md:p-24 border-b border-gray-300'>
                
            </div>


        </>
    );
};

export default HomePage;