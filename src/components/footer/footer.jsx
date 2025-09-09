import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 font-sans text-white">
            {/* Upper Section - Navigation Links */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {/* Hosting Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Hosting</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Web Hosting</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Cloud Hosting</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">BDIX Hosting</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Turbo Hosting</Link></li>
                        </ul>
                    </div>

                    {/* Domain Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Domain</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Register Your Domain</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Transfer to Us</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Renew Domains</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Manage Domains</Link></li>
                        </ul>
                    </div>

                    {/* Service Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Service</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Manage Service</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">View Addons</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Renew Services</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Service Status</Link></li>
                        </ul>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Tools</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Website Backup</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Website Security</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Professional Emails</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">SSL Certificates</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">24/7 LiveChat</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">24/7 WhatsApp</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">24/7 Email</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Open Ticket</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Affiliate</Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Careers <span className="text-yellow-400">(Hiring)</span></Link></li>
                            <li><Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Separator Line */}
            <div className="border-t border-gray-600"></div>

            {/* Lower Section - Branding and Policies */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Part - Logo and Copyright */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        {/* HOSTNIN Logo */}
                        <div className="flex items-center mb-4">
                            <span className="text-4xl font-bold">H</span>
                            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mx-1">
                                <div className="w-4 h-4 border border-white rounded-full"></div>
                            </div>
                            <span className="text-4xl font-bold">STNIN</span>
                        </div>
                        <p className="text-sm text-gray-300">© 2025 Hostnin. All Rights Reserved</p>
                    </div>

                    {/* Right Part - Social Media and Policy Links */}
                    <div className="flex flex-col items-center md:items-end">
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mb-4">
                            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Facebook className="w-4 h-4 text-blue-900" />
                            </Link>
                            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Linkedin className="w-4 h-4 text-blue-900" />
                            </Link>
                            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Youtube className="w-4 h-4 text-blue-900" />
                            </Link>
                            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Instagram className="w-4 h-4 text-blue-900" />
                            </Link>
                        </div>

                        {/* Policy Links */}
                        <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
                            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                            <span className="text-gray-600">|</span>
                            <Link href="#" className="hover:text-gray-300 transition-colors">Refund Policy</Link>
                            <span className="text-gray-600">|</span>
                            <Link href="#" className="hover:text-gray-300 transition-colors">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
