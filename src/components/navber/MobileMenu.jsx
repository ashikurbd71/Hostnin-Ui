'use client';

import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                <Link
                    href="#pricing"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={onClose}
                >
                    Pricing
                </Link>
                <Link
                    href="#hosting"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={onClose}
                >
                    Hosting
                </Link>
                <Link
                    href="#domain"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={onClose}
                >
                    Domain
                </Link>
                <Link
                    href="#server"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={onClose}
                >
                    Server
                </Link>
                <Link
                    href="#about"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={onClose}
                >
                    About
                </Link>
                <Link
                    href="#dashboard"
                    className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 text-base font-medium rounded-md mt-4"
                    onClick={onClose}
                >
                    Dashboard
                </Link>
            </div>
        </div>
    );
}
