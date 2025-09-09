'use client';

import { ChevronDown, Cloud, HardDrive } from 'lucide-react';
import Link from 'next/link';
import { useDropdown } from './DropdownContext';

export default function ServerDropdown() {
    const { activeDropdown, toggleDropdown, closeDropdown } = useDropdown();
    const isOpen = activeDropdown === 'server';

    const serverOptions = [
        {
            icon: Cloud,
            title: "VPS"
        },
        {
            icon: HardDrive,
            title: "Dedicated"
        }
    ];

    const handleToggle = () => {
        toggleDropdown('server');
    };

    return (
        <div className="relative group">
            <button
                onClick={handleToggle}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${isOpen ? 'text-blue-600' : ''
                    }`}
            >
                Server
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                        {serverOptions.map((option, index) => {
                            const IconComponent = option.icon;
                            return (
                                <Link
                                    key={index}
                                    href={`#${option.title.toLowerCase()}`}
                                    className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                                    onClick={closeDropdown}
                                >
                                    <div className="flex-shrink-0">
                                        <IconComponent className="h-5 w-5 text-gray-700 " />
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 ">
                                        {option.title}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
