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
        <div className="relative  group">
            <button
                onClick={handleToggle}
                className={`text-gray-700 font-semibold hover:text-blue-600 px-3 py-2 text-md  transition-colors duration-200 flex items-center ${isOpen ? 'text-blue-600' : ''
                    }`}
            >
                Hosting
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`} />
            </button>

            <div className={`absolute -left-[170px] top-full mt-2 w-[500px] bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'
                }`}>
                <div className="p-5">
                    <div className="grid grid-cols-2 gap-4">
                        {hostingOptions.map((option, index) => {
                            const IconComponent = option.icon;
                            return (
                                <Link
                                    key={index}
                                    href={`#${option.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                                        }`}
                                    style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                                    onClick={closeDropdown}
                                >
                                    <div className="flex-shrink-0">
                                        <IconComponent className="h-6 w-6 font-bold text-black hover:text-blue-600 transition-colors duration-200" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold text-gray-500">
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
        </div>
    );
}
