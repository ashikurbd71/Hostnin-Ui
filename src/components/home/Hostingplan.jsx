import React from 'react'

export default function Hostingplan() {
    return (
        <section className="py-16 lg:py-24 font-sans">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Select Your Perfect Hosting Plan
                    </h2>
                </div>

                {/* Hosting Plans Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Cloud Hosting - Featured Plan */}
                    <div className=" bg-gray-100  rounded-2xl p-8 text-gray-800 transform hover:bg-gradient-to-br from-blue-600 to-blue-800 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl border border-gray-200 group">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-center mb-4">Cloud Hosting</h3>

                        {/* Description */}
                        <p className="text-gray-600 text-center mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            Perfect for landing pages, e-commerce stores with reliable speed and strong security.
                        </p>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold">৳999</span>
                            <span className="text-gray-500 ml-2 group-hover:text-white/80 transition-colors duration-300">/year</span>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2">
                            See Plans
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </button>
                    </div>

                    {/* Web Hosting */}
                    <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 text-gray-800 transform hover:bg-gradient-to-br from-blue-600 to-blue-800 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl relative group">
                        {/* Free Gift Badge */}
                        <div className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                            Free Gift
                        </div>

                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-center mb-4">Web Hosting</h3>

                        {/* Description */}
                        <p className="text-gray-600 text-center mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            Best choice for personal websites, portfolios, and small projects with highly flexible resources.
                        </p>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold">৳3595</span>
                            <span className="text-gray-500 ml-2 group-hover:text-white/80 transition-colors duration-300">/year</span>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2">
                            See Plans
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </button>
                    </div>

                    {/* Turbo Hosting */}
                    <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 text-gray-800 transform hover:bg-gradient-to-br from-blue-600 to-blue-800 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl group">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-center mb-4">Turbo Hosting</h3>

                        {/* Description */}
                        <p className="text-gray-600 text-center mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            Built for high-traffic online stores and demanding applications that need extra power.
                        </p>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold">৳8999</span>
                            <span className="text-gray-500 ml-2 group-hover:text-white/80 transition-colors duration-300">/year</span>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2">
                            See Plans
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}