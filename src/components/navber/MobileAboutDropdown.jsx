'use client';

import { useState } from 'react';
import { ChevronDown, Building, FileText, Briefcase, Phone } from 'lucide-react';
import Link from 'next/link';

export default function MobileAboutDropdown({ onClose }) {
    const [isOpen, setIsOpen] = useState(false);

    const aboutOptions = [
        {
            icon: Building,
            title: "Privacy Policy"
        },
        {
            icon: FileText,
            title: "Terms & Condition"
        },
        {
            icon: Briefcase,
            title: "Careers",
            badge: "Hiring"
        },
        {
            icon: Phone,
            title: "Contact"
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
                About
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="pl-6 space-y-1">
                    {aboutOptions.map((option, index) => {
                        const IconComponent = option.icon;
                        return (
                            <Link
                                key={index}
                                href={`#${option.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                                    }`}
                                style={{ transitionDelay: isOpen ? `${index * 80}ms` : '0ms' }}
                                onClick={onClose}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <IconComponent className="h-4 w-4 font-bold text-gray-600 hover:text-blue-600 transition-colors duration-200" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">
                                        {option.title}
                                    </span>
                                </div>
                                {option.badge && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 transition-all duration-200">
                                        {option.badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
