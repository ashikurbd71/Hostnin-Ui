
"use client"

import React, { useState } from 'react';
import com from '@/assets/com-domain-offer.png'
import Image from 'next/image';
const SearchDomain = () => {
    const [domainInput, setDomainInput] = useState('');

    const handleSearch = () => {
        // Handle domain search logic here
        console.log('Searching for domain:', domainInput);
    };

    const domainExtensions = [
        { name: '.com', price: '৳1650/Year', color: 'text-blue-600' },
        { name: '.net', price: '৳1650/Year', color: 'text-red-600' },
        { name: '.org', price: '৳1650/Year', color: 'text-green-600' },
        { name: '.xyz', price: '৳599/Year', color: 'text-yellow-600' }
    ];

    return (
        <div className="bg-white font-sans p-8 mb-14 rounded-xl max-w-7xl mx-auto">
            <div className="space-y-8">
                {/* Heading */}


                <div className='flex lg:flex-row flex-col  justify-between  items-center gap-8'>
                    <div className=' space-y-5'>
                        <h2 className="lg:text-3xl text-2xl font-bold text-gray-900 ">
                            Search your Domain Name
                        </h2>

                        {/* Search Input */}
                        <div className="flex w-full">
                            <input
                                type="text"
                                placeholder="yourdomain.com"
                                value={domainInput}
                                onChange={(e) => setDomainInput(e.target.value)}
                                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg flex items-center gap-2 transition-colors duration-200 font-bold"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Search
                            </button>
                        </div>

                        {/* Domain Extensions - Horizontal Layout */}
                        <div className="flex  gap-8 flex-wrap">
                            {domainExtensions.map((extension, index) => (
                                <div key={index} className="text-center">
                                    <div className={`text-2xl font-bold ${extension.color} mb-2`}>
                                        {extension.name}
                                    </div>
                                    <div className="text-gray-900 font-medium">
                                        {extension.price}
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className='flex lg:justify-end'>
                        <Image src={com} alt='com' width={400} height={300} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchDomain;
