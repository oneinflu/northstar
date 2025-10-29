'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ClockIcon, BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function CMASyllabus() {
  const [expandedPart, setExpandedPart] = useState<number | null>(null);

  const syllabusData = [
    {
      part: 'Part 1',
      title: 'Financial Planning, Performance, and Analytics',
      duration: '3-4 months',
      weight: '100 MCQs + 2 Essays',
      topics: [
        {
          section: 'A. External Financial Reporting Decisions (15%)',
          subtopics: [
            'Financial Statements',
            'Recognition, Measurement, Valuation, and Disclosure',
            'Research and Analysis'
          ]
        },
        {
          section: 'B. Planning, Budgeting, and Forecasting (30%)',
          subtopics: [
            'Strategic Planning',
            'Budgeting Concepts',
            'Forecasting Techniques',
            'Budgeting Methodologies',
            'Annual Profit Plan and Supporting Schedules'
          ]
        },
        {
          section: 'C. Performance Management (20%)',
          subtopics: [
            'Cost and Variance Measures',
            'Responsibility Centers and Reporting Segments',
            'Performance Measures'
          ]
        },
        {
          section: 'D. Cost Management (20%)',
          subtopics: [
            'Measurement Concepts',
            'Costing Systems',
            'Overhead Costs',
            'Supply Chain Management',
            'Business Process Improvement'
          ]
        },
        {
          section: 'E. Internal Controls (15%)',
          subtopics: [
            'Governance, Risk, and Compliance',
            'Internal Auditing',
            'Systems Controls and Security Measures'
          ]
        }
      ]
    },
    {
      part: 'Part 2',
      title: 'Strategic Financial Management',
      duration: '3-4 months',
      weight: '100 MCQs + 2 Essays',
      topics: [
        {
          section: 'A. Financial Statement Analysis (25%)',
          subtopics: [
            'Financial Ratio Analysis',
            'Vertical and Horizontal Analysis',
            'Liquidity Analysis',
            'Profitability Analysis',
            'Leverage Analysis'
          ]
        },
        {
          section: 'B. Corporate Finance (20%)',
          subtopics: [
            'Risk and Return',
            'Financial Markets and Interest Rates',
            'Time Value of Money',
            'Valuation of Securities',
            'Working Capital Management'
          ]
        },
        {
          section: 'C. Decision Analysis (25%)',
          subtopics: [
            'Cost-Volume-Profit Analysis',
            'Marginal Analysis',
            'Pricing Decisions',
            'Make vs. Buy Decisions',
            'Capital Budgeting'
          ]
        },
        {
          section: 'D. Risk Management (10%)',
          subtopics: [
            'Enterprise Risk Management',
            'Financial Risk Management',
            'Operational Risk Management'
          ]
        },
        {
          section: 'E. Investment Decisions (20%)',
          subtopics: [
            'Capital Budgeting Process',
            'Discounted Cash Flow Analysis',
            'Payback and Accounting Rate of Return',
            'Risk Analysis in Capital Budgeting',
            'Optimal Capital Structure'
          ]
        }
      ]
    }
  ];

  const examDetails = [
    { label: 'Exam Format', value: '100 MCQs + 2 Essays per part' },
    { label: 'Duration', value: '4 hours per part' },
    { label: 'Passing Score', value: '360/500 points' },
    { label: 'Validity', value: 'Lifetime (with CPE requirements)' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            CMA{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Syllabus
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Master strategic financial management and business analytics with our comprehensive CMA curriculum designed for global finance leaders.
          </p>
        </motion.div>

        {/* Exam Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {examDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-sm text-slate-500 mb-2">{detail.label}</div>
              <div className="font-semibold text-slate-900">{detail.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Syllabus Parts */}
        <div className="space-y-6">
          {syllabusData.map((part, partIndex) => (
            <motion.div
              key={partIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: partIndex * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Part Header */}
              <div
                className="p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200"
                onClick={() => setExpandedPart(expandedPart === partIndex ? null : partIndex)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {part.part}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {part.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpenIcon className="w-4 h-4" />
                          {part.weight}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {part.title}
                    </h3>
                  </div>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${
                      expandedPart === partIndex ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {expandedPart === partIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-100"
                >
                  <div className="p-6 space-y-6">
                    {part.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="space-y-3">
                        <h4 className="font-semibold text-slate-900">
                          {topic.section}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {topic.subtopics.map((subtopic, subtopicIndex) => (
                            <div
                              key={subtopicIndex}
                              className="flex items-center gap-2 text-slate-600"
                            >
                              <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{subtopic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Get Complete CMA Study Material
          </h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Download detailed syllabus, study guides, and practice questions. Start your CMA preparation with expert-curated content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transform hover:scale-105 transition-all duration-200">
              Download Complete Syllabus
            </button>
            <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200">
              Book Free Demo Class
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}