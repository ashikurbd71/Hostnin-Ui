'use client';

import { useState } from 'react';
import { ChevronDown, Server, Zap, Cloud, Briefcase, Monitor } from 'lucide-react';
import Link from 'next/link';

export default function MobileHostingDropdown({ onClose }) {
    const [isOpen, setIsOpen] = useState(false);

    const hostingOptions = [
        {
            icon: Server,
            title: "Web Hosting",
            description: "NVMe SSD server"
        },
        {
            icon: Zap,
            title: "WordPress Hosting",
            description: "Fully Managed WordPress"
        },
        {
            icon: Monitor,
            title: "BDIX Hosting",
            description: "Lowest Network Latency"
        },
        {
            icon: Cloud,
            title: "Cloud Hosting",
            description: "Fast autoscaling server"
        },
        {
            icon: Briefcase,
            title: "Reseller Hosting",
            description: "Start your Business"
        },
        {
            icon: Zap,
            title: "Turbo Hosting",
            description: "Fast Speed Guaranteed"
        }
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <button
                onClick={handleToggle}
                className={`w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium flex items-center justify-between transition-colors duration-200 border-b border-gray-200 ${isOpen ? 'text-blue-600' : ''
                    }`}
            >
                Hosting
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="pl-6 space-y-1">
                    {hostingOptions.map((option, index) => {
                        const IconComponent = option.icon;
                        return (
                            <Link
                                key={index}
                                href={`#${option.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                                    }`}
                                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                                onClick={onClose}
                            >
                                <div className="flex-shrink-0 mt-0.5">
                                    <IconComponent className="h-4 w-4 font-bold text-gray-600 hover:text-blue-600 transition-colors duration-200" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium text-gray-700">
                                        {option.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {option.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
