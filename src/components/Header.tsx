'use client';

import  { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/nsa.png"
                alt="NorthStar Academy Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                <span>Courses</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/cma-usa" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                    CMA
                  </Link>
                  <Link href="/cpa-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                    CPA (US)
                  </Link>
                  <Link href="/acca-uk" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                    ACCA
                  </Link>
                </div>
              )}
            </div>

            <Link href="/placements" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Placements
            </Link>
            
            <Link href="/success-stories" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Success Stories
            </Link>
            
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Pricing/EMI
            </Link>
            
            <Link href="/blogs" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Blog
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              About
            </Link>
            
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="text-sm font-medium">WhatsApp</span>
            </Link>

            {/* Primary CTA */}
            <Link
              href="/book-counselling"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Book Free Counselling
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div>
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-indigo-600 font-medium"
                >
                  <span>Courses</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {isCoursesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/cma-usa" className="block text-gray-600 hover:text-indigo-600">CMA</Link>
                    <Link href="/cpa-us" className="block text-gray-600 hover:text-indigo-600">CPA (US)</Link>
                    <Link href="/acca-uk" className="block text-gray-600 hover:text-indigo-600">ACCA</Link>
                  </div>
                )}
              </div>
              
              <Link href="/placements" className="text-gray-700 hover:text-indigo-600 font-medium">Placements</Link>
              <Link href="/success-stories" className="text-gray-700 hover:text-indigo-600 font-medium">Success Stories</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing/EMI</Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium">Blog</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
              
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;