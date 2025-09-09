import React from 'react';
import feature from '@/assets/features.webp'
import Image from 'next/image'
const OntherHost = () => {
    return (
        <section className="py-16 px-4 font-sans ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Illustration */}
                    <div className="flex justify-center">
                        <Image src={feature} alt="feature" width={500} height={500} />
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="space-y-6">
                        {/* Sub-heading */}
                        <div className="flex items-center space-x-3">
                            <h3 className="text-blue-600 text-lg font-medium">Moving Websites</h3>
                            <div className="w-12 h-0.5 bg-blue-600"></div>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Moving From Another Host?
                        </h2>

                        {/* First Paragraph */}
                        <p className="text-lg text-gray-900">
                            We'll Migrate your site for <span className="font-bold text-blue-600">FREE!</span>
                        </p>

                        {/* Second Paragraph */}
                        <p className="text-gray-700 leading-relaxed">
                            Migrating one hosting to another is daunting this is why we have dedicated team for migration of your website. Let's sit relax and look how your website migrate in a moment. We process this migration in 3 steps: Backup, transfer and restore.
                        </p>

                        {/* Call-to-Action Button */}
                        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                            View Pricing Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OntherHost;
