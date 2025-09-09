'use client';

import Link from 'next/link';

export default function DashboardButton() {
    return (
        <div className="hidden md:block">
            <Link
                href="#dashboard"
                className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-[15px] hover:from-blue-600 hover:to-blue-500 transition cursor-pointer"
            >
                Dashboard
            </Link>
        </div>
    );
}
