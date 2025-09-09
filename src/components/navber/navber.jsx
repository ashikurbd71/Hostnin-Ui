'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import HostingDropdown from './HostingDropdown';
import ServerDropdown from './ServerDropdown';
import AboutDropdown from './AboutDropdown';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import DashboardButton from './DashboardButton';
import { DropdownProvider } from './DropdownContext';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <DropdownProvider>
            <nav className="bg-white shadow-sm border-b border-gray-100 relative font-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Logo />

                        {/* Desktop Navigation */}
                        <div className="flex items-center gap-5">

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        href="#pricing"
                                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                                    >
                                        Pricing
                                    </Link>

                                    <HostingDropdown />

                                    <Link
                                        href="#domain"
                                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                                    >
                                        Domain
                                    </Link>

                                    <ServerDropdown />

                                    <AboutDropdown />
                                </div>
                            </div>

                            {/* Dashboard Button */}
                            <DashboardButton />

                        </div>



                        {/* Mobile menu button */}
                        <MobileMenuButton
                            isOpen={isMenuOpen}
                            onToggle={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>

                    {/* Mobile Navigation */}
                    <MobileMenu
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                    />
                </div>
            </nav>
        </DropdownProvider>
    );
}
