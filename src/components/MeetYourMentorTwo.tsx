/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { 
  HeartIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BriefcaseIcon,
  PlayIcon,
  PhoneIcon,
  CheckBadgeIcon,
  TrophyIcon,
  
  ClockIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface ValuePillar {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface VideoTestimonial {
  id: string;
  studentName: string;
  course: string;
  company: string;
  companyLogo: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
}

const MeetYourMentor: React.FC = () => {
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [, setHoveredVideo] = useState<string | null>(null);
  const [signatureAnimated, setSignatureAnimated] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    // Trigger signature animation after component mounts
    const timer = setTimeout(() => setSignatureAnimated(true), 1000);
    
    // Trigger quote animation
    const quoteTimer = setTimeout(() => setQuoteVisible(true), 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(quoteTimer);
    };
  }, []);

  const valuePillars: ValuePillar[] = [
    {
      title: 'Mentorship-Led Approach',
      description: 'Personal guidance beyond lecture hours with dedicated support',
      icon: HeartIcon,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Indian-Friendly Explanations',
      description: 'Makes tough US concepts simple and relatable for Indian students',
      icon: AcademicCapIcon,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Exam Strategy Expertise',
      description: 'Study planners, mock tests, and detailed score analytics',
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Career Vision Guidance',
      description: 'Resume building, interview prep, and Big 4 placement support',
      icon: BriefcaseIcon,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: '1',
      studentName: 'Priya Sharma',
      course: 'CMA',
      company: 'KPMG',
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=200&fit=crop&crop=face',
      videoUrl: '#',
      title: 'How mentorship got me into KPMG'
    },
    {
      id: '2',
      studentName: 'Rahul Patel',
      course: 'CPA',
      company: 'Deloitte',
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face',
      videoUrl: '#',
      title: 'From B.Com to Big 4 Senior Associate'
    },
    {
      id: '3',
      studentName: 'Anita Reddy',
      course: 'ACCA',
      company: 'EY',
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=face',
      videoUrl: '#',
      title: 'ACCA Global Rank Holder Journey'
    },
    {
      id: '4',
      studentName: 'Vikash Kumar',
      course: 'CMA',
      company: 'PwC',
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=face',
      videoUrl: '#',
      title: 'Career transformation in 8 months'
    },
    {
      id: '5',
      studentName: 'Sneha Gupta',
      course: 'CPA',
      company: 'Grant Thornton',
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=200&fit=crop&crop=face',
      videoUrl: '#',
      title: 'Personal guidance made the difference'
    },
    {
      id: '6',
      studentName: 'Arjun Singh',
      course: 'ACCA',
      company: 'BDO',
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=200&fit=crop&crop=face',
      videoUrl: '#',
      title: 'From confusion to clarity with mentorship'
    }
  ];

  const mentorshipFeatures = [
    { icon: PhoneIcon, text: 'Live strategy calls' },
    { icon: ChartBarIcon, text: 'Weekly progress reports' },
    { icon: ChatBubbleLeftRightIcon, text: '1-on-1 doubt sessions' },
    { icon: DocumentTextIcon, text: 'Personalized study planner' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Mentor Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Mentor Portrait */}
          <div className="relative">
            <div className="relative">
              {/* Main Portrait */}
              <div className="relative w-80 h-96 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                  alt="Mohammed Irfat - Global Accounting Mentor" 
                  className="w-full h-full object-cover"
                />
                
                {/* Trust Badges Overlay */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <CheckBadgeIcon className="w-3 h-3" />
                    <span>98% Pass Success</span>
                  </div>
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <TrophyIcon className="w-3 h-3" />
                    <span>Rank Holders Created</span>
                  </div>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <HeartIcon className="w-3 h-3" />
                    <span>Personal Guidance</span>
                  </div>
                </div>

                {/* Hover Message Button */}
                <div className="absolute bottom-4 right-4">
                  <button 
                    onClick={() => setShowIntroVideo(true)}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <PlayIcon className="w-4 h-4 text-blue-600" />
                    <span>Message from Irfat Sir</span>
                  </button>
                </div>
              </div>

              {/* Animated Signature */}
              <div className="mt-8 text-center lg:text-left">
                <div className="relative inline-block">
                  <svg 
                    width="200" 
                    height="60" 
                    viewBox="0 0 200 60" 
                    className="text-slate-700"
                  >
                    <path 
                      d="M10 40 Q 50 10, 90 40 T 170 40" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                      strokeDasharray="200"
                      strokeDashoffset={signatureAnimated ? "0" : "200"}
                      className="transition-all duration-2000 ease-out"
                    />
                    <text x="10" y="55" className="text-sm font-medium fill-current">Mohammed Irfat</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Headline & Authority */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Learn from India&apos;s Most
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                Trusted Global Accounting Mentor
              </span>
            </h2>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Mohammed Irfat</h3>
              <p className="text-lg text-blue-600 font-semibold">
                Certified Global Accounting Expert • 15+ Years Experience
              </p>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              A mentor who has guided over <strong className="text-slate-900">25,000 students</strong> to 
              global certifications and careers — including rank holders, 
              Big 4 hires, and international professionals.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">25,000+</div>
                <div className="text-sm text-slate-600">Students Guided</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-slate-600">Pass Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
            </div>

            <button 
              onClick={() => setShowIntroVideo(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto lg:mx-0"
            >
              <PlayIcon className="w-5 h-5" />
              <span>Watch Introduction Video</span>
            </button>
          </div>
        </div>

        {/* Value Pillars */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Students Choose Irfat Sir&apos;s Mentorship
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Emotional Quote Strip */}
        <div className="mb-20">
          <div className={`text-center py-16 px-8 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl relative overflow-hidden transition-all duration-1000 ${quoteVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <blockquote className="relative z-10">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-relaxed">
                &quot;You are not just preparing for an exam.<br />
                You are preparing for a global career that can 
                <span className={`relative inline-block ${quoteVisible ? 'after:scale-x-100' : 'after:scale-x-0'} after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-orange-400 after:transition-transform after:duration-1000 after:delay-500`}>
                  transform your life
                </span>.&quot;
              </p>
              <cite className="text-lg text-blue-200 font-medium">— Mohammed Irfat</cite>
            </blockquote>
          </div>
        </div>

        {/* Success Video Playlist Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Success Stories: How Mentorship Changed Their Careers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div 
                key={video.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.studentName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <PlayIcon className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>

                  {/* Course Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {video.course}
                    </span>
                  </div>

                  {/* Company Logo */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full p-1">
                      <img src={video.companyLogo} alt={video.company} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 mb-2">{video.studentName}</h4>
                  <p className="text-slate-600 mb-3">{video.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">{video.company}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                      <span>Watch Story</span>
                      <PlayIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Mentorship Works */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">How Mentorship Works</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {mentorshipFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{feature.text}</p>
                  </div>
                );
              })}
            </div>
            
            <p className="text-lg text-slate-600 font-medium">
              Real mentor support — not just course access.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Learn Under Irfat Sir?</h3>
            <p className="text-xl text-blue-200 mb-8">Join thousands of successful students who transformed their careers</p>
            
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto mb-4">
              <CalendarDaysIcon className="w-5 h-5" />
              <span>Book Free Counselling with Irfat Sir</span>
            </button>
            
            <p className="text-sm text-blue-200">
              <span className="inline-flex items-center space-x-1">
                <ClockIcon className="w-4 h-4" />
                <span>Limited mentorship slots available per batch</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Intro Video Modal */}
      {showIntroVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Message from Irfat Sir</h3>
              <button 
                onClick={() => setShowIntroVideo(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-center">
                <PlayIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Video player would be embedded here</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-slate-600 mb-4">
                &quot;Welcome to your journey towards a global accounting career. I&apos;m here to guide you every step of the way.&quot;
              </p>
              <button 
                onClick={() => setShowIntroVideo(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MeetYourMentor;