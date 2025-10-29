'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon, AcademicCapIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

interface EligibilityQuestion {
  id: string;
  question: string;
  type: 'select' | 'radio';
  options: { value: string; label: string; points: number }[];
  required: boolean;
}

export default function CMAEligibilityChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [eligibilityScore, setEligibilityScore] = useState(0);

  const questions: EligibilityQuestion[] = [
    {
      id: 'education',
      question: 'What is your highest level of education?',
      type: 'radio',
      options: [
        { value: 'bachelor', label: "Bachelor's degree from accredited institution", points: 10 },
        { value: 'master', label: "Master's degree or higher", points: 15 },
        { value: 'diploma', label: 'Diploma/Associate degree', points: 5 },
        { value: 'high_school', label: 'High school/12th grade', points: 0 }
      ],
      required: true
    },
    {
      id: 'field',
      question: 'What field is your degree in?',
      type: 'radio',
      options: [
        { value: 'business', label: 'Business/Commerce/Finance/Accounting', points: 10 },
        { value: 'engineering', label: 'Engineering/Technology', points: 8 },
        { value: 'science', label: 'Science/Mathematics', points: 6 },
        { value: 'other', label: 'Other field', points: 4 }
      ],
      required: true
    },
    {
      id: 'experience',
      question: 'How much professional work experience do you have?',
      type: 'radio',
      options: [
        { value: '0', label: 'No professional experience', points: 0 },
        { value: '1-2', label: '1-2 years', points: 5 },
        { value: '3-5', label: '3-5 years', points: 10 },
        { value: '5+', label: '5+ years', points: 15 }
      ],
      required: true
    },
    {
      id: 'finance_exp',
      question: 'Do you have experience in finance/accounting roles?',
      type: 'radio',
      options: [
        { value: 'extensive', label: 'Extensive experience (3+ years)', points: 15 },
        { value: 'some', label: 'Some experience (1-3 years)', points: 10 },
        { value: 'basic', label: 'Basic exposure', points: 5 },
        { value: 'none', label: 'No finance/accounting experience', points: 0 }
      ],
      required: true
    },
    {
      id: 'commitment',
      question: 'How much time can you dedicate to CMA studies per week?',
      type: 'radio',
      options: [
        { value: '20+', label: '20+ hours per week', points: 15 },
        { value: '15-20', label: '15-20 hours per week', points: 12 },
        { value: '10-15', label: '10-15 hours per week', points: 8 },
        { value: '<10', label: 'Less than 10 hours per week', points: 4 }
      ],
      required: true
    },
    {
      id: 'timeline',
      question: 'When do you want to complete your CMA certification?',
      type: 'radio',
      options: [
        { value: '6months', label: 'Within 6 months', points: 15 },
        { value: '1year', label: 'Within 1 year', points: 12 },
        { value: '2years', label: 'Within 2 years', points: 8 },
        { value: 'flexible', label: 'Flexible timeline', points: 5 }
      ],
      required: true
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateEligibility = () => {
    let totalScore = 0;
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.points;
        }
      }
    });
    setEligibilityScore(totalScore);
    setShowResults(true);
  };

  const getEligibilityStatus = (score: number) => {
    if (score >= 70) {
      return {
        status: 'Highly Eligible',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: CheckCircleIcon,
        message: 'Excellent! You meet all the requirements for CMA certification and are well-positioned for success.',
        recommendations: [
          'You can start immediately with our accelerated program',
          'Consider the 6-9 month completion track',
          'You qualify for advanced study materials'
        ]
      };
    } else if (score >= 50) {
      return {
        status: 'Eligible with Preparation',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        icon: QuestionMarkCircleIcon,
        message: 'Good news! You are eligible for CMA, but some additional preparation would be beneficial.',
        recommendations: [
          'Consider our foundation course first',
          'Plan for a 9-12 month timeline',
          'Focus on strengthening accounting fundamentals'
        ]
      };
    } else {
      return {
        status: 'Need Foundation Building',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: XCircleIcon,
        message: 'You can still pursue CMA! We recommend building a strong foundation first.',
        recommendations: [
          'Start with our comprehensive foundation program',
          'Plan for a 12-18 month timeline',
          'Consider gaining relevant work experience'
        ]
      };
    }
  };

  const resetChecker = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setEligibilityScore(0);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEligibility();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const eligibilityResult = getEligibilityStatus(eligibilityScore);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            CMA{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Eligibility Checker
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find out if you&apos;re ready for CMA certification and get personalized recommendations 
            for your journey to becoming a Certified Management Accountant.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="bg-slate-50 px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-slate-600">
                    {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">
                      {questions[currentStep].question}
                    </h3>

                    <div className="space-y-4">
                      {questions[currentStep].options.map((option, index) => (
                        <motion.label
                          key={option.value}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            answers[questions[currentStep].id] === option.value
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name={questions[currentStep].id}
                              value={option.value}
                              checked={answers[questions[currentStep].id] === option.value}
                              onChange={(e) => handleAnswer(questions[currentStep].id, e.target.value)}
                              className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-slate-900 font-medium">
                              {option.label}
                            </span>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      currentStep === 0
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    Previous
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    disabled={!answers[questions[currentStep].id]}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      !answers[questions[currentStep].id]
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
                  </motion.button>
                </div>
              </div>
            </>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8"
            >
              {/* Score Display */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl font-bold mb-4"
                >
                  {eligibilityScore}
                </motion.div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  Your Eligibility Score
                </h3>
                <p className="text-slate-600">
                  Based on your responses, here&apos;s your CMA readiness assessment
                </p>
              </div>

              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${eligibilityResult.bgColor} ${eligibilityResult.borderColor} border-2 rounded-xl p-6 mb-8`}
              >
                <div className="flex items-center mb-4">
                  <eligibilityResult.icon className={`w-8 h-8 ${eligibilityResult.color} mr-3`} />
                  <h4 className={`text-2xl font-bold ${eligibilityResult.color}`}>
                    {eligibilityResult.status}
                  </h4>
                </div>
                <p className="text-slate-700 text-lg mb-6">
                  {eligibilityResult.message}
                </p>

                <div>
                  <h5 className="font-semibold text-slate-900 mb-3">Recommendations:</h5>
                  <ul className="space-y-2">
                    {eligibilityResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid md:grid-cols-3 gap-6 mb-8"
              >
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <AcademicCapIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h5 className="font-bold text-slate-900 mb-2">Get Started</h5>
                  <p className="text-sm text-slate-600">Book a free counselling session</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <ClockIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h5 className="font-bold text-slate-900 mb-2">Study Plan</h5>
                  <p className="text-sm text-slate-600">Get personalized timeline</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <GlobeAltIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h5 className="font-bold text-slate-900 mb-2">Global Career</h5>
                  <p className="text-sm text-slate-600">Explore opportunities</p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Free Counselling
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetChecker}
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-all duration-300"
                >
                  Retake Assessment
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}