'use client';

import Link from 'next/link';

export default function DashboardButton() {
    return (
        <div className="hidden md:block">
            <Link
                href="#dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
                Dashboard
            </Link>
        </div>
    );
}
