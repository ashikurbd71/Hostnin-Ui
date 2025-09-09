'use client';

import { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const openDropdown = (dropdownName) => {
        setActiveDropdown(dropdownName);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <DropdownContext.Provider value={{
            activeDropdown,
            openDropdown,
            closeDropdown,
            toggleDropdown
        }}>
            {children}
        </DropdownContext.Provider>
    );
}

export function useDropdown() {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('useDropdown must be used within a DropdownProvider');
    }
    return context;
}
