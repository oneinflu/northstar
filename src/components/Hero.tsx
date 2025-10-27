'use client';

import Image from "next/image";

const Hero = () => {
  return (
    <div 
      className="h-[50vh] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/bg-hero.avif')"
      }}
    >
      {/* Lighter overlay for better background visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-40">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  Crafting <span className="relative">
                    <span className="text-white">Careers</span>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
                  </span>,<br />
                  not Courses.
                </h1>
                
                <div className="space-y-3">
                  <p className="text-base text-gray-200 max-w-lg">
                    We help ambitious professionals turn passion into success.
                  </p>
                  <p className="text-base text-gray-200 max-w-lg">
                    Take the first step. Schedule your personalized session today.
                  </p>
                </div>
                
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                  Book Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-2xl font-bold text-white">62.6%</div>
                  <div className="text-xs text-gray-300">Avg. Salary Hike</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-xs text-gray-300">Success Stories</div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2 pt-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">4.5</span>
                <span className="text-gray-300 text-xs">Star ratings across platforms</span>
              </div>
            </div>
            
            {/* Right Side - Testimonial */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl p-5 max-w-sm shadow-2xl">
                <div className="flex items-start gap-3">
                  <Image
                    src="/bg-hero.avif"
                    alt="Kuldeep Sharma"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="bg-yellow-200 p-3 rounded-lg mb-3 relative">
                      <p className="text-xs text-gray-800 leading-relaxed">
                        &quot;The SMILES program was transformative. It deepened my understanding of strategic management, leadership, and emotional intelligence. The expert guidance helped me grow personally and professionally, boosting my confidence, career, and problem-solving skills.&quot;
                      </p>
                      <div className="absolute -bottom-2 left-4 w-3 h-3 bg-yellow-200 rotate-45"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">Senior Manager</div>
                        <div className="text-xs text-gray-600">Kuldeep Sharma</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-gray-600">CHS</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation arrows */}
                <div className="flex justify-center gap-2 mt-3">
                  <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;