"use client";
import Image from "next/image";
import React, { useState } from "react";
import cPanel from "@/assets/cpanelmockup.png";
import webuzoMockup from "@/assets/webuzumockup.png";
import stactp from "@/assets/cloud hosting cPanel.png";
const ControlPanel = () => {
  const [activeTab, setActiveTab] = useState("cPanel");

  return (
    <div className="mx-auto mt-20 max-w-7xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#13205A] mb-4">
        User-Friendly Control Panel
      </h1>
      <p className="text-center text-[#222] mb-6 text-base sm:text-lg">
        Purchase fastest hosting from the best web hosting company in Bangladesh
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-10 space-x-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("cPanel")}
          className={`${
            activeTab === "cPanel"
              ? "py-2 px-3 sm:py-3 sm:px-6 m-1 text-lg sm:text-lg font-bold transition-colors duration-200 rounded text-blue-600 border-b-2 border-blue-600 cursor-pointer "
              : "py-2 px-3 sm:py-3 sm:px-6 m-1 text-lg sm:text-lg font-bold transition-colors duration-200 rounded text-gray-500 hover:text-gray-700 cursor-pointer"
          }`}
        >
          cPanel
        </button>
        <button
          onClick={() => setActiveTab("Webuzo")}
          className={`pb-2 text-lg font-medium transition-colors duration-200 ${
            activeTab === "Webuzo"
              ? "py-2 px-3 sm:py-3 sm:px-6 m-1 text-lg sm:text-lg font-bold transition-colors duration-200 rounded text-blue-600 border-b-2 border-blue-600 cursor-pointer "
              : "py-2 px-3 sm:py-3 sm:px-6 m-1 text-lg sm:text-lg font-bold transition-colors duration-200 rounded text-gray-500 hover:text-gray-700 cursor-pointer"
          }`}
        >
          Webuzo
        </button>
        <button
          onClick={() => setActiveTab("StackCP")}
          className={`pb-2 text-lg font-medium transition-colors duration-200 ${
            activeTab === "StackCP"
              ? "py-2 px-3 sm:py-3 sm:px-6 m-1 text-lg sm:text-lg font-bold transition-colors duration-200 rounded text-blue-600 border-b-2 border-blue-600 cursor-pointer "
              : "py-2 px-3 sm:py-3 sm:px-6 m-1 text-lg sm:text-lg font-bold transition-colors duration-200 rounded text-gray-500 hover:text-gray-700 cursor-pointer"
          }`}
        >
          StackCP
        </button>
      </div>

      {/* Cards */}
      <div className="w-full ">
        {/* cPanel Card */}
        {activeTab === "cPanel" && (
          <div className="flex flex-col p-4 mb-8 bg-white rounded-lg shadow-md lg:flex-row sm:p-6 md:p-8">
            <div className="flex flex-col space-y-4 lg:w-1/2 lg:pr-6">
              <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Easy Website Management with cPanel
              </h1>
              <div class="grid grid-cols-1 gap-3 sm:gap-4">
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    1-Click App Installer (Softaculous)
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Install WordPress, Joomla, Magento, or over 400+ apps in
                    just one click.
                  </p>
                </div>
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Powerful File &amp; Database Management
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Manage files with File Manager, and control databases with
                    phpMyAdmin—all from one place.
                  </p>
                </div>
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Email &amp; DNS Control
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Create custom email accounts, configure DNS zones, and
                    manage domains with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1 mt-6 lg:w-1/2 lg:mt-0">
              <div className="w-full md:h-full rounded-lg overflow-hidden flex items-center justify-center min-h-[140px] sm:min-h-[350px]">
                <Image
                  src={cPanel}
                  alt="Webuzo Mockup"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Webuzo Card */}
        {activeTab === "Webuzo" && (
          <div className="flex flex-col p-4 mb-8 bg-white rounded-lg shadow-md lg:flex-row sm:p-6 md:p-8">
            <div className="flex flex-col space-y-4 lg:w-1/2 lg:pr-6">
              <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Easy Website Management with Webuzo
              </h1>
              <div class="grid grid-cols-1 gap-3 sm:gap-4">
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    1-Click Application Deployment
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Launch WordPress, Laravel, Node.js, or 400+ other apps in
                    seconds with Softaculous.
                  </p>
                </div>
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Simple, Modern Interface
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Minimal, clutter-free dashboard designed for both beginners
                    and developers.
                  </p>
                </div>
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Developer-Friendly Stack
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Easily manage Apache, Nginx, LiteSpeed, MySQL, and PHP
                    versions from the panel.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1 mt-6 lg:w-1/2 lg:mt-0">
              <div className="w-full md:h-full rounded-lg overflow-hidden flex items-center justify-center min-h-[140px] sm:min-h-[350px]">
                <Image
                  src={webuzoMockup}
                  alt="Webuzo Mockup"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* StackCP Card */}
        {activeTab === "StackCP" && (
          <div className="flex flex-col p-4 mb-8 bg-white rounded-lg shadow-md lg:flex-row sm:p-6 md:p-8">
            <div className="flex flex-col space-y-4 lg:w-1/2 lg:pr-6">
              <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Easy Website Management with StackCP
              </h1>
              <div class="grid grid-cols-1 gap-3 sm:gap-4">
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    WordPress &amp; CMS Manager
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Install and manage WordPress and other CMSs with ease,
                    including staging &amp; cloning.
                  </p>
                </div>
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Cloud-Powered File &amp; Database Tools
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Fast file management and MySQL/MariaDB control, optimized
                    for 20i’s autoscaling cloud.
                  </p>
                </div>
                <div class="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    16+ CDN Worldwide
                  </h3>
                  <p class="text-gray-600 text-sm sm:text-base">
                    Accelerate your website with global reach. Our cloud hosting
                    comes with 16+ built-in CDN networks.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1 mt-6 lg:w-1/2 lg:mt-0">
              <div className="w-full md:h-full rounded-lg overflow-hidden flex items-center justify-center min-h-[140px] sm:min-h-[350px]">
                <Image
                  src={stactp}
                  alt="Webuzo Mockup"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
