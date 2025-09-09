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
                className={`text-gray-700 font-semibold hover:text-blue-600 px-3 py-2 text-md  transition-colors duration-200 flex items-center ${isOpen ? 'text-blue-600' : ''
                    }`}
            >
                Server
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`} />
            </button>

            <div className={`absolute -left-[60px] top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 translate-y-0 max-h-48' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'
                }`}>
                <div className="py-2">
                    {serverOptions.map((option, index) => {
                        const IconComponent = option.icon;
                        return (
                            <Link
                                key={index}
                                href={`#${option.title.toLowerCase()}`}
                                className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-all duration-200 group transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                                    }`}
                                style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
                                onClick={closeDropdown}
                            >
                                <div className="flex-shrink-0">
                                    <IconComponent className="h-5 w-5 font-bold text-gray-700 transition-colors duration-200" />
                                </div>
                                <span className="text-sm font-bold text-gray-500">
                                    {option.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
