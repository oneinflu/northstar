/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  TrophyIcon, 
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface Course {
  id: string;
  name: string;
  country: string;
  logo: string;
  description: string;
  duration: string;
  whoItsFor: string[];
  salaryRange: string;
  color: string;
  bgColor: string;
  flag: string;
}

interface WizardStep {
  question: string;
  options: { id: string; label: string; icon: React.ComponentType<any> }[];
}

interface Recommendation {
  course: string;
  careerLevel: string;
  salaryRange: string;
  duration: string;
  reasoning: string;
}

const GlobalCareerPath: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [wizardStep, setWizardStep] = useState(0);
  const [wizardAnswers, setWizardAnswers] = useState<string[]>([]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);

  const courses: Course[] = [
    {
      id: 'cma',
      name: 'CMA (US)',
      country: 'United States',
      logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center',
      description: 'Strategic Cost Management & Financial Planning',
      duration: '6–9 months',
      whoItsFor: ['B.Com graduates', 'CA Intermediate', 'Working professionals'],
      salaryRange: '₹8–18 LPA',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      flag: '🇺🇸'
    },
    {
      id: 'cpa',
      name: 'CPA (US)',
      country: 'United States',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=center',
      description: 'Public Accounting & Audit Excellence',
      duration: '9–12 months',
      whoItsFor: ['Commerce graduates', 'MBA aspirants', 'Finance professionals'],
      salaryRange: '₹10–25 LPA',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      flag: '🇺🇸'
    },
    {
      id: 'acca',
      name: 'ACCA (UK)',
      country: 'United Kingdom',
      logo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=center',
      description: 'Global Finance Leadership & Strategy',
      duration: '1–3 years',
      whoItsFor: ['Any graduate', 'Career switchers', 'Global aspirants'],
      salaryRange: '₹12–30 LPA',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      flag: '🇬🇧'
    }
  ];

  const wizardSteps: WizardStep[] = [
    {
      question: "Where do you want your career to go?",
      options: [
        { id: 'management', label: 'Finance Management', icon: TrophyIcon },
        { id: 'accounting', label: 'Public Accounting', icon: AcademicCapIcon },
        { id: 'global', label: 'Global Practice', icon: GlobeAltIcon },
        { id: 'audit', label: 'Audit & Assurance', icon: CheckCircleIcon },
        { id: 'tax', label: 'Tax Consulting', icon: DocumentTextIcon }
      ]
    },
    {
      question: "What is your current qualification?",
      options: [
        { id: 'bcom', label: 'B.Com Graduate', icon: AcademicCapIcon },
        { id: 'bba', label: 'BBA Graduate', icon: AcademicCapIcon },
        { id: 'ca_inter', label: 'CA Intermediate', icon: TrophyIcon },
        { id: 'working', label: 'Working Professional', icon: UserGroupIcon },
        { id: 'mba', label: 'MBA Graduate', icon: SparklesIcon }
      ]
    },
    {
      question: "When do you want to start earning?",
      options: [
        { id: 'immediate', label: 'Within 6 months', icon: ClockIcon },
        { id: 'year', label: 'Within 1 year', icon: ClockIcon },
        { id: 'long_term', label: '2–3 years', icon: ClockIcon }
      ]
    }
  ];

  const alumni = [
    { name: 'Priya S.', course: 'CMA', outcome: 'CMA got me into KPMG', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face' },
    { name: 'Rahul K.', course: 'CPA', outcome: 'CPA moved me to Dubai', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face' },
    { name: 'Anita M.', course: 'ACCA', outcome: 'I became ACCA Affiliate', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face' },
    { name: 'Vikash P.', course: 'CMA', outcome: 'Senior Analyst at EY', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face' },
    { name: 'Sneha R.', course: 'CPA', outcome: 'Big 4 Manager in 2 years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face' },
    { name: 'Arjun T.', course: 'ACCA', outcome: 'Finance Director at MNC', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face' }
  ];

  const getRecommendation = (): Recommendation => {
    const [career, qualification, timeline] = wizardAnswers;
    
    if (timeline === 'immediate' || (career === 'management' && qualification === 'working')) {
      return {
        course: 'CMA (US)',
        careerLevel: 'Financial Analyst / Cost Manager',
        salaryRange: '₹8–18 LPA',
        duration: '6–9 months',
        reasoning: 'Perfect for quick career advancement in management accounting'
      };
    } else if (career === 'accounting' || career === 'audit' || qualification === 'ca_inter') {
      return {
        course: 'CPA (US)',
        careerLevel: 'Audit Associate / Public Accountant',
        salaryRange: '₹10–25 LPA',
        duration: '9–12 months',
        reasoning: 'Ideal for public accounting and audit career paths'
      };
    } else {
      return {
        course: 'ACCA (UK)',
        careerLevel: 'Finance Manager / Global Analyst',
        salaryRange: '₹12–30 LPA',
        duration: '1–3 years',
        reasoning: 'Best for global finance leadership and strategic roles'
      };
    }
  };

  const handleWizardAnswer = (answerId: string) => {
    const newAnswers = [...wizardAnswers, answerId];
    setWizardAnswers(newAnswers);
    
    if (wizardStep < wizardSteps.length - 1) {
      setWizardStep(wizardStep + 1);
    } else {
      setShowRecommendation(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const resetWizard = () => {
    setWizardStep(0);
    setWizardAnswers([]);
    setShowRecommendation(false);
  };

  const getRelevantAlumni = (courseName: string) => {
    return alumni.filter(alum => alum.course === courseName.split(' ')[0]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              🎉
            </div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Choose Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block">
              Global Accounting Path
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            One mentor. Multiple certifications.<br />
            A clear roadmap to your global finance career.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 hover:-translate-y-2 border-2 ${
                selectedCourse === course.id ? 'border-indigo-500 ring-4 ring-indigo-200' : 'border-slate-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setSelectedCourse(course.id)}
              onMouseLeave={() => setSelectedCourse(null)}
            >
              {/* Course Header */}
              <div className={`${course.bgColor} p-6 text-center relative`}>
                <div className="absolute top-4 right-4 text-2xl">{course.flag}</div>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src={course.logo} alt={course.name} className="w-full h-full object-cover" />
                </div>
                <h3 className={`text-2xl font-bold ${course.color} mb-2`}>{course.name}</h3>
                <p className="text-slate-600 text-sm font-medium">{course.country}</p>
              </div>

              {/* Course Details */}
              <div className="p-6">
                <p className="text-slate-700 font-medium mb-4">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">Duration: <strong>{course.duration}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">Avg Salary: <strong>{course.salaryRange}</strong></span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Perfect for:</p>
                  <div className="flex flex-wrap gap-1">
                    {course.whoItsFor.map((target, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full ${course.color.replace('text-', 'bg-').replace('-600', '-500')} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
                  <span>View Course Details</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Career Outcomes */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.bgColor} opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-6`}>
                <div className="text-center">
                  <TrophyIcon className={`w-12 h-12 ${course.color} mx-auto mb-4`} />
                  <h4 className="font-bold text-slate-900 mb-2">Career Outcomes</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Big 4 Opportunities</li>
                    <li>• Global Job Market Access</li>
                    <li>• {course.salaryRange} Starting Range</li>
                    <li>• Leadership Positions</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Fit Chooser Callout */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-6 py-3 rounded-2xl border border-orange-200">
            <SparklesIcon className="w-5 h-5" />
            <span className="font-semibold">Unsure which course suits you best? 👇</span>
          </div>
          <p className="text-slate-600 mt-2">We will guide you in 30 seconds.</p>
        </div>

        {/* Interactive Course Fit Chooser */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            {!showRecommendation ? (
              <div>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">Step {wizardStep + 1} of {wizardSteps.length}</span>
                    <span className="text-sm text-slate-500">{Math.round(((wizardStep + 1) / wizardSteps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((wizardStep + 1) / wizardSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
                  {wizardSteps[wizardStep].question}
                </h3>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {wizardSteps[wizardStep].options.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleWizardAnswer(option.id)}
                        className="group p-6 bg-slate-50 hover:bg-indigo-50 rounded-2xl border-2 border-slate-200 hover:border-indigo-300 transition-all duration-300 text-left hover:scale-105"
                      >
                        <IconComponent className="w-8 h-8 text-slate-400 group-hover:text-indigo-500 mb-3 transition-colors duration-300" />
                        <p className="font-semibold text-slate-700 group-hover:text-indigo-700 transition-colors duration-300">
                          {option.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Recommendation Result */
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Perfect Match Found!</h3>
                </div>

                {(() => {
                  const recommendation = getRecommendation();
                  return (
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-indigo-700 mb-2">
                          🎯 Best Fit for You: {recommendation.course}
                        </h4>
                        <p className="text-slate-600 italic">{recommendation.reasoning}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="text-center">
                          <TrophyIcon className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                          <p className="font-semibold text-slate-700">Career Level</p>
                          <p className="text-sm text-slate-600">{recommendation.careerLevel}</p>
                        </div>
                        <div className="text-center">
                          <CurrencyDollarIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                          <p className="font-semibold text-slate-700">Salary Range</p>
                          <p className="text-sm text-slate-600">{recommendation.salaryRange}</p>
                        </div>
                        <div className="text-center">
                          <ClockIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                          <p className="font-semibold text-slate-700">Duration</p>
                          <p className="text-sm text-slate-600">{recommendation.duration}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                          <span>View Course Page</span>
                          <ChevronRightIcon className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => setShowLeadModal(true)}
                          className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <ChatBubbleLeftRightIcon className="w-4 h-4" />
                          <span>Talk to an Advisor</span>
                        </button>
                      </div>
                    </div>
                  );
                })()}

                <p className="text-sm text-slate-500 mb-4">Free counselling included. No obligations.</p>
                
                <button 
                  onClick={resetWizard}
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm underline"
                >
                  Take the quiz again
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Alumni Social Proof */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Success Stories by Course</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="text-center">
                <h4 className={`text-lg font-bold ${course.color} mb-4`}>{course.name} Alumni</h4>
                <div className="space-y-3">
                  {getRelevantAlumni(course.name).map((alum, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-white rounded-xl p-3 shadow-sm">
                      <img src={alum.image} alt={alum.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="text-left">
                        <p className="font-semibold text-slate-700 text-sm">{alum.name}</p>
                        <p className="text-xs text-slate-500">&quot;{alum.outcome}&quot;</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Row */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowLeadModal(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Book Free Counselling</span>
            </button>
            <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 flex items-center space-x-2">
              <CurrencyDollarIcon className="w-5 h-5" />
              <span>Learn Course Pricing & EMI</span>
            </button>
          </div>
          <p className="text-slate-500 mt-4">Get your personalized career plan from experts</p>
        </div>
      </div>

      {/* Lead Modal */}
      {showLeadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Talk to an Expert</h3>
              <p className="text-slate-600">Get personalized guidance for your career path</p>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              <select className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Interested Course</option>
                <option>CMA (US)</option>
                <option>CPA (US)</option>
                <option>ACCA (UK)</option>
              </select>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold">
                  Schedule Call
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowLeadModal(false)}
                  className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-xl font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default GlobalCareerPath;