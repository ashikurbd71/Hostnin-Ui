'use client';

export default function MobileMenuButton({ isOpen, onToggle }) {
    return (
        <div className="md:hidden">
            <button
                onClick={onToggle}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
}
