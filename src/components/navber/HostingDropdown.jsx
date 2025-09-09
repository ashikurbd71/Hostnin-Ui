'use client';

import { ChevronDown, Server, Zap, Cloud, Briefcase, Monitor } from 'lucide-react';
import Link from 'next/link';
import { useDropdown } from './DropdownContext';

export default function HostingDropdown() {
    const { activeDropdown, toggleDropdown, closeDropdown } = useDropdown();
    const isOpen = activeDropdown === 'hosting';

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
        toggleDropdown('hosting');
    };

    return (
        <div className="relative group">
            <button
                onClick={handleToggle}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${isOpen ? 'text-blue-600' : ''
                    }`}
            >
                Hosting
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-5">
                        <div className="grid grid-cols-2 gap-4">
                            {hostingOptions.map((option, index) => {
                                const IconComponent = option.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={`#${option.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                        onClick={closeDropdown}
                                    >
                                        <div className="flex-shrink-0">
                                            <IconComponent className="h-6 w-6 text-blue-600 " />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-gray-900 ">
                                                {option.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {option.description}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
