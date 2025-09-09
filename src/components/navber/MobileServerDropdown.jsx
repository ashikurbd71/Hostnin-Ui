'use client';

import { useState } from 'react';
import { ChevronDown, Cloud, HardDrive } from 'lucide-react';
import Link from 'next/link';

export default function MobileServerDropdown({ onClose }) {
    const [isOpen, setIsOpen] = useState(false);

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
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <button
                onClick={handleToggle}
                className={`w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium flex items-center justify-between transition-colors duration-200 border-b border-gray-200 ${isOpen ? 'text-blue-600' : ''
                    }`}
            >
                Server
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="pl-6 space-y-1">
                    {serverOptions.map((option, index) => {
                        const IconComponent = option.icon;
                        return (
                            <Link
                                key={index}
                                href={`#${option.title.toLowerCase()}`}
                                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                                    }`}
                                style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
                                onClick={onClose}
                            >
                                <div className="flex-shrink-0">
                                    <IconComponent className="h-4 w-4 font-bold text-gray-600 hover:text-blue-600 transition-colors duration-200" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">
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
