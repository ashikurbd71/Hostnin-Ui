'use client';

import Link from 'next/link';
import MobileHostingDropdown from './MobileHostingDropdown';
import MobileServerDropdown from './MobileServerDropdown';
import MobileAboutDropdown from './MobileAboutDropdown';

export default function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="px-2 pt-2 pb-3 space-y-5 sm:px-3 overflow-y-auto h-[90vh] bg-white border-t border-gray-100 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-y-0' : '-translate-y-2'
            }">
                <Link
                    href="#pricing"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium border-b border-gray-200"
                    onClick={onClose}
                >
                    Pricing
                </Link>

                <MobileHostingDropdown onClose={onClose} />

                <Link
                    href="#domain"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium border-b border-gray-200"
                    onClick={onClose}
                >
                    Domain
                </Link>

                <MobileServerDropdown onClose={onClose} />

                <MobileAboutDropdown onClose={onClose} />
                <Link
                    href="#dashboard"
                    className="bg-gradient-to-r from-blue-700 to-blue-600  py-3 hover:bg-blue-700 text-center text-white block px-3  text-base font-medium rounded-md  border-b border-gray-200"
                    onClick={onClose}
                >
                    Dashboard
                </Link>
            </div>
        </div>
    );
}
