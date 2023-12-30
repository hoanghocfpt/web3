import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className='border-b border-gray-300 p-5 sm:p-7 md:p-24'>
                <div className='lg:flex lg:gap-6 lg:justify-between mb-12'>
                    <div className='mb-5 lg:w-5/12'>
                        <h1 className='text-4xl text-white font-extrabold leading-snug mb-3'>Where Special Boxes Keep Valuables Safe and Everyone Plays Fair!</h1>
                        <p className='text-lg text-white mb-8'>Imagine special money boxes that keep your money safe from getting more expensive. These boxes are like a promise tied to a piece of farmland. With LandX, you can easily trade these special money boxes online, like trading cards or toys!</p>
                        <div className='flex max-w-xs rounded-xl p-px bg-gradient-to-b from-teal-600 to-purple-600'>
                            <Link className='text-center py-4 px-7 text-base font-semibold text-white w-full h-full bg-black block rounded-[calc(.8rem-1px)]' href="#">LAUNCH APP</Link>
                        </div>
                    </div>
                    <div className='lg:w-7/12 flex max-w-xl mx-auto rounded-xl h-fit p-px bg-gradient-to-b from-teal-600 to-purple-600'>
                        <video className='rounded-[calc(.8rem-1px)]' autoPlay loop muted playsInline>
                            <source src="/videos/english.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='gap-6 flex flex-col justify-center md:flex-row'>
                    <div className='flex flex-col items-center justify-center py-20 rounded-lg max-w-xs px-8 border border-gray-400'>
                        <div className='bg-gradient-to-tl from-teal-600 to-purple-600 w-20 h-20 rotate-45 flex items-center justify-center rounded-xl mb-8'>
                            <Image src="/assets/icons/hand.svg" alt="logo" width={60} height={60} className='-rotate-45'/>
                        </div>
                        <span className='text-xl font-bold text-white mb-4'>Farmers</span>
                        <p className='text-lg text-white text-center'>Get an initial sum of money by pledging a lasting portion of your harvest legally.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-20 rounded-lg max-w-xs px-8 border border-gray-400'>
                        <div className='bg-gradient-to-tl from-teal-600 to-purple-600 w-20 h-20 rotate-45 flex items-center justify-center rounded-xl mb-8'>
                            <Image src="/assets/icons/clock-with-flower.svg" alt="logo" width={60} height={60} className='-rotate-45'/>
                        </div>
                        <span className='text-xl font-bold text-white mb-4'>Validators</span>
                        <p className='text-lg text-white text-center'>Assist in turning farmland crops into tokens/nfts using a decentralized system on the blockchain</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-20 rounded-lg max-w-xs px-8 border border-gray-400'>
                        <div className='bg-gradient-to-tl from-teal-600 to-purple-600 w-20 h-20 rotate-45 flex items-center justify-center rounded-xl mb-8'>
                            <Image src="/assets/icons/branch.svg" alt="logo" width={60} height={60} className='-rotate-45'/>
                        </div>
                        <span className='text-xl font-bold text-white mb-4'>Investors</span>
                        <p className='text-lg text-white text-center'>Purchase xTokens for a unique way to invest in real farmland goods.</p>
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
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 border border-gray-300 rounded-xl p-6'>
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
                            <li className='text-white text-lg leading-normal list-disc mb-7'>Investors ride the wave of real farmland gains with the xToken, catching daily returns in this unique agricultural adventure!</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>LandX gives money to real farmers, and in return, they get a permanent legal share of the crops.</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>The portion of the farmer&apos;s crops turns into a digital commodity vault in the form of ERC20 tokenized tokens, known as minted xTokens.</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>The agreement is guaranteed through a check of the farm, a security deposit, and a claim on their land.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='p-5 sm:p-7 md:p-24 border-b border-gray-300 w-full'>
                <div className='flex flex-col md:flex-row'>
                  
                    <div className='px-8 md:w-6/12'>
                        <h2 className='text-white text-4xl font-bold mb-7'>The LandX Token (LNDX)</h2>
                        <span className='text-white text-lg leading-normal inline-block mb-7'>Token that controls decisions in the LandX DAO.</span>
                        <ul>
                            <span className='text-white font-bold mb-3 inline-block text-xl'>People in the DAO:</span>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>Become eligible to be farmland validators.</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>Get a share of the trading fees.</li>
                            <li className='text-white text-lg leading-normal list-disc mb-7'>Play a part in shaping LandX&apos;s future – cast your vote on platform decisions and upcoming changes.</li>
                        </ul>
                        <div className='flex max-w-xs rounded-xl p-px bg-gradient-to-b from-teal-600 to-purple-600'>
                            <Link className='text-center py-4 px-7 text-base font-semibold text-white w-full h-full bg-black block rounded-[calc(.8rem-1px)]' href="#">LAUNCHING 15 DECEMBER 2023</Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mb-5 md:w-6/12'>
                        <Image src="/images/lndx-shining-cylinder.svg" alt="logo" width={350} height={326} className='mb-6 md:w-5/12 lg:w-6/12 md:max-w-sm'/>
                    </div>
                </div>
            </div>
            <div className='p-5 sm:p-7 md:p-24 border-b border-gray-300 w-full'>
            
                <div className='mb-8'>
                    <h2 className='text-white text-4xl font-bold leading-snug text-center'>Subscribe For Updates</h2>
                    <p className='text-white text-lg leading-normal text-center'>Launching in Q4 2023 - Enter your email to receive project updates.</p>
                </div>
                <div>
                    <form className=' flex flex-col items-center justify-center gap-6'>
                        <div className='max-w-xs w-full h-20 rounded-2xl overflow-hidden'>
                            <input type="text" className='w-full h-full px-6 text-lg font-medium outline-none border-none' placeholder="Email Address" />
                        </div>
                        <div className='max-w-xs h-20 w-full rounded-2xl  p-px overflow-hidden bg-gradient-to-br from-green-600 to-indigo-600'>
                            <button className='text-white font-bold text-lg bg-black rounded-[calc(1rem-1px)] w-full h-full'>Subscribe</button>
                        </div>
                    </form>
                    
                </div>
            </div>


        </>
    );
};

export default HomePage;