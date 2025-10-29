/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  VideoCameraIcon, 
  ChartBarIcon,
  AcademicCapIcon,
  StarIcon,
  TrophyIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CMALearningExperience = () => {
  const advantages = [
    {
      title: "Mentorship by Irfat Sir",
      description: "Personal guidance from India's #1 CMA mentor with 15+ years of experience",
      icon: AcademicCapIcon,
      feature: "portrait",
      quote: "Every student deserves personalized attention to unlock their CMA potential",
      image: "/mentors/irfat-sir.jpg",
      stats: "10,000+ Students Mentored"
    },
    {
      title: "Doubt Clearance Guaranteed",
      description: "24/7 doubt resolution with average response time under 2 hours",
      icon: ChatBubbleLeftRightIcon,
      feature: "chat",
      messages: [
        { sender: "student", text: "How to approach variance analysis?", time: "2:30 PM" },
        { sender: "mentor", text: "Great question! Let me break it down step by step...", time: "2:32 PM" },
        { sender: "mentor", text: "First, identify the standard vs actual costs", time: "2:33 PM" }
      ],
      stats: "98% Doubts Resolved in <2hrs"
    },
    {
      title: "Live + Recorded Classes",
      description: "Interactive live sessions with lifetime access to recordings",
      icon: VideoCameraIcon,
      feature: "devices",
      devices: ["laptop", "tablet", "mobile"],
      stats: "500+ Hours of Content"
    },
    {
      title: "Mock Tests & Analytics",
      description: "AI-powered performance tracking with detailed analytics",
      icon: ChartBarIcon,
      feature: "progress",
      progressData: [
        { subject: "Financial Planning", score: 85, trend: "up" },
        { subject: "Financial Decision Making", score: 78, trend: "up" },
        { subject: "Performance Management", score: 92, trend: "stable" },
        { subject: "Cost Management", score: 88, trend: "up" }
      ],
      stats: "50+ Mock Tests Available"
    }
  ];

  const gamificationSteps = [
    {
      step: "Track Progress",
      icon: ChartBarIcon,
      description: "Monitor your learning journey with detailed analytics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "Earn Badges",
      icon: TrophyIcon,
      description: "Unlock achievements as you master each topic",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "Stay Accountable",
      icon: CheckCircleIcon,
      description: "Daily goals and streaks keep you motivated",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

 

  const renderFeature = (advantage: any) => {
    switch (advantage.feature) {
      case "portrait":
        return (
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4 mx-auto">
              <AcademicCapIcon className="w-10 h-10 text-blue-600" />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-sm italic text-gray-600">&quot;{advantage.quote}&quot;</p>
              <p className="text-xs text-blue-600 font-medium mt-2">- Irfat Sir</p>
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            {advantage.messages.map((msg: any, idx: number) => (
              <div key={idx} className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg.sender === 'student' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-800 border'
                }`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'student' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center text-green-600 text-sm">
              <CheckCircleIcon className="w-4 h-4 mr-1" />
              Mentor is typing...
            </div>
          </div>
        );

      case "devices":
        return (
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-12 bg-gray-800 rounded-md flex items-center justify-center">
              <div className="w-12 h-8 bg-blue-500 rounded-sm"></div>
            </div>
            <div className="w-12 h-16 bg-gray-800 rounded-md flex items-center justify-center">
              <div className="w-8 h-12 bg-blue-500 rounded-sm"></div>
            </div>
            <div className="w-8 h-12 bg-gray-800 rounded-md flex items-center justify-center">
              <div className="w-6 h-8 bg-blue-500 rounded-sm"></div>
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="space-y-3">
            {advantage.progressData.map((item: any, idx: number) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.subject}</span>
                  <span className="font-medium">{item.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">NorthStar Advantage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class CMA preparation with personalized mentorship, cutting-edge technology, and proven methodologies
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
             
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                  <p className="text-blue-600 font-medium text-sm">{advantage.stats}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{advantage.description}</p>
              
              {renderFeature(advantage)}
            </motion.div>
          ))}
        </motion.div>

        {/* Gamified Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Gamified Learning Journey
            </h3>
            <p className="text-gray-600 text-lg">
              Stay motivated with our interactive progress tracking system
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {gamificationSteps.map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {index < gamificationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Topic Master', 'Speed Demon', 'Consistency King', 'Mock Test Pro'].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full border border-yellow-200"
              >
                <StarIcon className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-yellow-800 font-medium">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CMALearningExperience;