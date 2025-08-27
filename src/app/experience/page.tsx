"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/data/experience';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

interface ExperienceItem {
  title: string;
  company: string;
  timeline: string;
  description: React.ReactNode;
  content?: React.ReactNode;
}

const Experience = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">Work Experience</h1>
          <p className="text-sm md:text-md md:text-base text-gray-600 dark:text-gray-300">My professional journey so far</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2"></div>
          
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 ${index % 2 === 0 ? 'md:pl-8 md:pr-0 pr-6' : 'md:pr-8 md:pl-0 pl-6'} md:w-[calc(50%-16px)] ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}
            >
              <div className={`absolute top-5 ${index % 2 === 0 ? 'md:-left-2 left-2' : 'md:-right-2 right-2'} w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg`}></div>
              
              <div className="bg-white dark:bg-gray-900/50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    <FiBriefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs md:text-sm md:text-md text-gray-600 dark:text-gray-300">{item.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-xs md:text-sm md:text-md text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>{item.timeline}</span>
                  </div>
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 text-[8px] font-thin text-sm md:text-md max-w-none">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;