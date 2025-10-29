/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Send, 
  Users, 
  Award, 
  Play, 
  CheckCircle, 
  ArrowRight,
 
  Target,
  Briefcase
} from 'lucide-react';

const PlacementReadiness = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [, setIsVideoPlaying] = useState(false);

  // Placement process steps
  const placementSteps = [
    {
      id: 'resume',
      title: 'Resume Building',
      icon: FileText,
      description: 'ATS-optimized resume with CPA credentials',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      details: [
        'CPA-specific resume templates',
        'ATS optimization for Big 4',
        'Achievement quantification',
        'Industry keyword integration'
      ],
      stats: '95% ATS pass rate'
    },
    {
      id: 'application',
      title: 'Application Strategy',
      icon: Send,
      description: 'Strategic applications to target companies',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      details: [
        'Company-specific applications',
        'Referral network activation',
        'Application tracking system',
        'Follow-up strategies'
      ],
      stats: '3x higher response rate'
    },
    {
      id: 'interview',
      title: 'Mock Interviews',
      icon: Users,
      description: 'Big 4 style interview preparation',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      details: [
        'Technical accounting scenarios',
        'Behavioral interview prep',
        'Case study practice',
        'Video interview training'
      ],
      stats: '85% interview success'
    },
    {
      id: 'offer',
      title: 'Offer Negotiation',
      icon: Award,
      description: 'Maximize your compensation package',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      details: [
        'Salary benchmarking',
        'Benefits negotiation',
        'Offer comparison analysis',
        'Contract review support'
      ],
      stats: '15% salary increase avg'
    }
  ];

  // Company logos with tiers
  const companies = [
    { name: 'Deloitte', tier: 'Big 4', logo: '🔷' },
    { name: 'EY', tier: 'Big 4', logo: '🟨' },
    { name: 'PwC', tier: 'Big 4', logo: '🔶' },
    { name: 'KPMG', tier: 'Big 4', logo: '🔵' },
    { name: 'Amazon', tier: 'Tech', logo: '📦' },
    { name: 'Wipro', tier: 'IT', logo: '💻' },
    { name: 'HUL', tier: 'FMCG', logo: '🧴' },
    { name: 'Wells Fargo', tier: 'Banking', logo: '🏦' }
  ];

  // Alumni success videos
  const alumniVideos = [
    {
      id: 1,
      name: 'Rahul Sharma',
      company: 'Deloitte',
      role: 'Senior Consultant',
      thumbnail: '/api/placeholder/300/200',
      duration: '2:45',
      quote: 'NorthStar\'s placement support got me into Big 4 within 6 months of CPA completion'
    },
    {
      id: 2,
      name: 'Priya Patel',
      company: 'EY',
      role: 'Financial Analyst',
      thumbnail: '/api/placeholder/300/200',
      duration: '3:12',
      quote: 'The mock interviews were exactly like the real EY interview process'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      company: 'PwC',
      role: 'Tax Associate',
      thumbnail: '/api/placeholder/300/200',
      duration: '2:58',
      quote: 'From resume to offer letter - complete guidance throughout the journey'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      company: 'KPMG',
      role: 'Audit Senior',
      thumbnail: '/api/placeholder/300/200',
      duration: '3:25',
      quote: 'NorthStar\'s network helped me get referrals at multiple Big 4 firms'
    }
  ];

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % placementSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % alumniVideos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Target className="w-4 h-4" />
            Big 4 Focused Placement Program
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Placement Readiness: 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Big 4 Focus</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From resume to offer letter - our comprehensive placement program ensures you land your dream job at top accounting firms
          </motion.p>
        </div>

        {/* Visual Process Flow */}
        <div className="mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {placementSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative cursor-pointer group ${
                    isActive ? 'scale-105' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Connection Line */}
                  {index < placementSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 z-0">
                      <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-gray-400" />
                    </div>
                  )}
                  
                  <div className={`relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    isActive ? 'border-blue-500' : 'border-gray-100'
                  }`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center mb-4">{step.description}</p>
                    
                    <div className={`text-center text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.stats}
                    </div>
                    
                    {/* Progress indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mt-8 bg-gradient-to-r ${placementSteps[activeStep].bgColor} rounded-2xl p-8`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {placementSteps[activeStep].title} Details
                  </h3>
                  <ul className="space-y-3">
                    {placementSteps[activeStep].details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${placementSteps[activeStep].color} flex items-center justify-center mx-auto mb-4`}>
                    {React.createElement(placementSteps[activeStep].icon, {
                      className: "w-16 h-16 text-white"
                    })}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {placementSteps[activeStep].stats}
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Company Logos Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Alumni Work At
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * companies.length] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-md min-w-fit"
                >
                  <span className="text-2xl">{company.logo}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{company.name}</div>
                    <div className="text-sm text-gray-500">{company.tier}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Alumni Success Videos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Real Alumni Success Stories
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Featured Video */}
            <div className="relative">
              <motion.div
                key={currentVideoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video"
              >
                <img
                  src={alumniVideos[currentVideoIndex].thumbnail}
                  alt={`${alumniVideos[currentVideoIndex].name} success story`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {alumniVideos[currentVideoIndex].duration}
                </div>
              </motion.div>
              
              {/* Video Info */}
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-900">
                  {alumniVideos[currentVideoIndex].name}
                </h4>
                <p className="text-gray-600">
                  {alumniVideos[currentVideoIndex].role} at {alumniVideos[currentVideoIndex].company}
                </p>
                <blockquote className="mt-3 text-gray-700 italic">
                  &quot;{alumniVideos[currentVideoIndex].quote}&quot;
                </blockquote>
              </div>
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              {alumniVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    currentVideoIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={`${video.name} at ${video.company}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold text-sm text-gray-900">{video.name}</div>
                    <div className="text-xs text-gray-600">{video.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Land Your Dream Job?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join our placement program and get personalized support from resume building to offer negotiation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Start Placement Program
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Talk to Alumni
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementReadiness;