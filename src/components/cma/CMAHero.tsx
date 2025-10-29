'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircleIcon, PlayCircleIcon, UserGroupIcon, GlobeAltIcon, AcademicCapIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { TrendingUp } from 'lucide-react';

export default function CMAHero() {
  const [isSticky, setIsSticky] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const keyBadges = [
    { icon: CheckCircleIcon, text: 'IMA® USA Certification', color: 'bg-green-50 text-green-700 border-green-200' },
    { icon: GlobeAltIcon, text: 'Global Opportunities (100+ Countries)', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { icon: PlayCircleIcon, text: 'Live + Recorded Learning', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { icon: UserGroupIcon, text: 'Big 4 & MNC Placements', color: 'bg-orange-50 text-orange-700 border-orange-200' }
  ];

  const salaryProgression = [
    { level: 'Entry Level', salary: '$65,000', icon: CurrencyDollarIcon },
    { level: 'Mid Level', salary: '$85,000', icon: TrendingUp },
    { level: 'Senior Level', salary: '$120,000+', icon: AcademicCapIcon }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium"
            >
              🔥 Limited Seats - Next Batch Starts Soon!
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Become a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Certified Management Accountant
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-700">
                  (CMA – USA)
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-medium">
                Global Finance Career in{' '}
                <span className="text-blue-600 font-bold">6–9 Months</span>
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="font-medium">5000+ Students Placed</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>

            {/* Key Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {keyBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${badge.color} backdrop-blur-sm`}
                >
                  <badge.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                📞 Book Free Counselling
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
                📚 View Syllabus
              </button>
              <button className="px-6 py-4 text-slate-600 font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                <PlayCircleIcon className="w-5 h-5" />
                Watch Success Stories
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              style={{ y }}
              className="space-y-8"
            >
              {/* 3D CMA Credential Card */}
              <motion.div
                initial={{ opacity: 0, rotateY: -30 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-white space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold">CMA</h3>
                        <p className="text-blue-100">USA Certification</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <GlobeAltIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-blue-100">Certified Management Accountant</p>
                      <p className="text-lg font-semibold">Global Recognition</p>
                      <p className="text-sm text-blue-100">Valid in 100+ Countries</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-white/20">
                      <span className="text-sm">IMA® Authorized</span>
                      <span className="text-sm">Since 1972</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pass Rate Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-green-600">98%</div>
                <p className="text-green-700 font-medium">Pass Rate</p>
                <p className="text-sm text-green-600 mt-1">With NorthStar Academy</p>
              </motion.div>

              {/* Salary & Career Progression */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
              >
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Career Progression
                </h4>
                <div className="space-y-3">
                  {salaryProgression.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{item.level}</span>
                      </div>
                      <span className="font-semibold text-slate-900">{item.salary}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: isSticky ? 0 : 100, 
          opacity: isSticky ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 p-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-semibold text-slate-900">Ready to Start Your CMA Journey?</p>
            <p className="text-sm text-slate-600">Join 5000+ successful students</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
              Book Free Call
            </button>
            <button className="px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors duration-200">
              Get Syllabus
            </button>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}