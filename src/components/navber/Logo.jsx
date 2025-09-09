'use client';
import logo from '@/assets/logo11.png'
import Image from 'next/image';
export default function Logo() {
    return (
        <div className="flex-shrink-0">
            <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    <Image src={logo} alt="logo" width={150} height={100} />
                </span>
            </div>
        </div>
    );
}
