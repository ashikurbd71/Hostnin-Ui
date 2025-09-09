import React from 'react'
import hero from '@/assets/hosting-01.svg'
import Image from 'next/image'
export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-[60vh] md:min-h-[60vh] lg:min-h-[800px]" style={{ background: 'linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)' }}>


            <div className="container py font-sans max-w-7xl mx-auto px-4 lg:py-0 py-14 relative z-10">
                <div className="grid lg:grid-cols-2 gap-5 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-[34px] sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Best Web Hostin <br />
                                <span className="relative">
                                    Company in Bangladesh

                                    <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-1 bg-white"></div>
                                </span>{' '}

                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto lg:mx-0 text-justify">
                            At Hostnin, you'll discover top-notch web hosting solutions tailored for portfolios,
                            e-commerce, and any type of website you can envision. Experience superior support,
                            advanced features, and competitive pricing when you purchase web hosting from
                            Bangladesh's best hosting provider.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <button className="group w-full sm:w-auto cursor-pointer bg-white text-gray-600 font-semibold px-6 sm:px-8 py-3 sm:py-4    rounded-full border border-gray-300 hover:bg-gray-100    transition-transform duration-300 ease-in-out    flex items-center justify-center text-sm sm:text-base lg:text-[17px]   hover:scale-105">
                                <span className=' pr-3 '>
                                    Start My Hosting Now
                                </span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg>
                            </button>

                            <div className="text-white">
                                <p className="text-white flex items-center group font-bold text-base sm:text-lg">Trusted By 5000+ Business</p>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-2 text-white/90">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="hidden lg:inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span className="text-sm text-white font-bold">30-Day Money-Back Guarantee. Cancel Anytime.</span>
                        </div>
                    </div>

                    {/* Right Content - Server Illustration */}
                    <div className="flex justify-center lg:pt-24 lg:justify-end">
                        <Image src={hero} alt="hero" width={400} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}
