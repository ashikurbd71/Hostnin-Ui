'use client';

export default function MobileMenuButton({ isOpen, onToggle }) {
    return (
        <div className="md:hidden">
            <button
                onClick={onToggle}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
            >
                <div className="relative w-6 h-6">
                    {/* Hamburger lines with smooth transitions */}
                    <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-2.5' : 'top-1'
                        }`}></span>
                    <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                        }`}></span>
                    <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-2.5' : 'top-4'
                        }`}></span>
                </div>
            </button>
        </div>
    );
}
