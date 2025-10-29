'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BuildingOfficeIcon, 
  GlobeAltIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';


const CMAGlobalPlacements = () => {
  const [currentOfferSlide, setCurrentOfferSlide] = useState(0);

  const companies = [
    { name: "Deloitte", logo: "/companies/deloitte.png" },
    { name: "EY", logo: "/companies/ey.png" },
    { name: "KPMG", logo: "/companies/kpmg.png" },
    { name: "PwC", logo: "/companies/pwc.png" },
    { name: "Amazon", logo: "/companies/amazon.png" },
    { name: "Accenture", logo: "/companies/accenture.png" },
    { name: "Microsoft", logo: "/companies/microsoft.png" },
    { name: "Google", logo: "/companies/google.png" },
    { name: "JP Morgan", logo: "/companies/jpmorgan.png" },
    { name: "Goldman Sachs", logo: "/companies/goldman.png" },
    { name: "McKinsey", logo: "/companies/mckinsey.png" },
    { name: "BCG", logo: "/companies/bcg.png" }
  ];

  const offerLetters = [
    {
      id: 1,
      studentName: "Arjun Mehta",
      company: "Deloitte",
      position: "Senior Financial Analyst",
      package: "₹18.5 LPA",
      location: "Mumbai",
      companyLogo: "/companies/deloitte.png",
      letterPreview: "/offer-letters/deloitte-offer.jpg",
      joiningDate: "July 2024",
      highlights: ["Big 4 Consulting", "Global Projects", "Fast Track Promotion"]
    },
    {
      id: 2,
      studentName: "Priya Singh",
      company: "Amazon",
      position: "Financial Planning Manager",
      package: "₹22.0 LPA",
      location: "Bangalore",
      companyLogo: "/companies/amazon.png",
      letterPreview: "/offer-letters/amazon-offer.jpg",
      joiningDate: "August 2024",
      highlights: ["FAANG Company", "Stock Options", "International Exposure"]
    },
    {
      id: 3,
      studentName: "Rohit Kumar",
      company: "KPMG",
      position: "Management Consultant",
      package: "₹16.8 LPA",
      location: "Delhi",
      companyLogo: "/companies/kpmg.png",
      letterPreview: "/offer-letters/kpmg-offer.jpg",
      joiningDate: "September 2024",
      highlights: ["Advisory Role", "Client Interaction", "Leadership Track"]
    },
    {
      id: 4,
      studentName: "Sneha Patel",
      company: "EY",
      position: "Senior Associate - Risk",
      package: "₹17.2 LPA",
      location: "Pune",
      companyLogo: "/companies/ey.png",
      letterPreview: "/offer-letters/ey-offer.jpg",
      joiningDate: "October 2024",
      highlights: ["Risk Management", "Global Team", "CMA Premium"]
    }
  ];

  const placementStats = [
    { label: "Average Package", value: "₹18.5 LPA", icon: "💰" },
    { label: "Highest Package", value: "₹45 LPA", icon: "🚀" },
    { label: "Big 4 Placements", value: "78%", icon: "🏢" },
    { label: "Global Opportunities", value: "156+", icon: "🌍" }
  ];

  const nextOfferSlide = () => {
    setCurrentOfferSlide((prev) => (prev + 1) % offerLetters.length);
  };

  const prevOfferSlide = () => {
    setCurrentOfferSlide((prev) => (prev - 1 + offerLetters.length) % offerLetters.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <GlobeAltIcon className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Where Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CMAs Work Today</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the elite league of CMAs working at world&apos;s top companies across the globe
          </p>
        </motion.div>

        {/* Placement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {placementStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rolling Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Leading Organizations Worldwide
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex space-x-12 items-center"
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-4"
                >
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">{company.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Offer Letter Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Recent Placement Success Stories
          </h3>
          
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentOfferSlide * 100}%)` }}
              >
                {offerLetters.map((offer, ) => (
                  <div key={offer.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mx-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Offer Details */}
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                              <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900">{offer.studentName}</h4>
                              <p className="text-gray-600">{offer.location}</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                <span className="text-xs font-bold text-gray-600">{offer.company.substring(0, 2)}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-green-600">{offer.package}</div>
                                <div className="text-sm text-gray-600">Annual Package</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Company:</span>
                                <span className="font-medium">{offer.company}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Position:</span>
                                <span className="font-medium">{offer.position}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Joining:</span>
                                <span className="font-medium">{offer.joiningDate}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h5 className="font-bold text-gray-900">Key Highlights:</h5>
                            {offer.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                <span className="text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Side - Offer Letter Preview */}
                        <div className="relative">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                          >
                            {/* Offer Letter Mockup */}
                            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-200 transform rotate-1">
                              <div className="space-y-4">
                                <div className="flex items-center justify-between border-b pb-4">
                                  <div className="w-12 h-8 bg-blue-600 rounded"></div>
                                  <div className="text-right">
                                    <div className="text-sm text-gray-600">Offer Letter</div>
                                    <div className="font-bold">{offer.company}</div>
                                  </div>
                                </div>
                                
                                <div className="space-y-3">
                                  <div className="text-lg font-bold">Dear {offer.studentName},</div>
                                  <div className="text-sm text-gray-600 space-y-2">
                                    <p>We are pleased to offer you the position of</p>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                      <div className="font-bold text-blue-900">{offer.position}</div>
                                      <div className="text-blue-700">Annual CTC: {offer.package}</div>
                                    </div>
                                    <p>Location: {offer.location}</p>
                                    <p>Joining Date: {offer.joiningDate}</p>
                                  </div>
                                </div>

                                <div className="border-t pt-4">
                                  <div className="text-xs text-gray-500">
                                    This offer is contingent upon successful completion of background verification.
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Floating Success Badge */}
                            <motion.div
                              animate={{ y: [-5, 5, -5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg"
                            >
                              <span className="text-sm font-bold">✓</span>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevOfferSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextOfferSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {offerLetters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOfferSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentOfferSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Micro CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want Guidance for Big 4 Placement?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get personalized career guidance from our placement experts who have helped 500+ students land their dream jobs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              <ChatBubbleLeftRightIcon className="w-6 h-6 mr-3" />
              Talk to Placement Team
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CMAGlobalPlacements;