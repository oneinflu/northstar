'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-black/80 backdrop-blur-md text-white border-b border-gray-800/50 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 mx-40">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo and Programs */}
          <div className="flex items-center space-x-8">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-1">
                <Image
                  src="/logo.svg"
                  alt="Hero Vired Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
             
            </div>

            {/* Programs Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                <span>Programs</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Section - All other navigation items */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/skill-tests" className="text-white hover:text-gray-300 transition-colors">
                Skill Tests
              </Link>
              
              <Link href="/enterprise" className="text-white hover:text-gray-300 transition-colors">
                Enterprise
              </Link>
              
              <Link href="/blogs" className="text-white hover:text-gray-300 transition-colors">
                Blogs
              </Link>
              
              <Link href="/reviews" className="text-white hover:text-gray-300 transition-colors">
                Reviews
              </Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors">
                  <span>More</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
              </div>
              
              <Link href="/scholarships" className="text-white hover:text-gray-300 transition-colors">
                Scholarships
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/free-courses" 
                className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Free Courses
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;