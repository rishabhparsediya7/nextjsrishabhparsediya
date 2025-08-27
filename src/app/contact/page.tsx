'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: error.message || 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
          Get In Touch
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
      </motion.div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div variants={item} className="space-y-6">
          <p className="text-md text-gray-700 dark:text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <motion.div variants={item} className="space-y-1">
              <h3 className="font-thin text-gray-800 dark:text-gray-200 text-[8px] text-sm md:text-md">Email</h3>
              <a href="mailto:parsediyarishabh@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                parsediyarishabh@gmail.com
              </a>
            </motion.div>
            
            <motion.div variants={item} className="space-y-1">
              <h3 className="font-thin text-gray-800 dark:text-gray-200 text-[8px] text-sm md:text-md">Location</h3>
              <p className="text-gray-700 dark:text-gray-300 text-[8px] text-sm md:text-md font-thin">New Delhi, India</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={item}
          className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitStatus && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}
              >
                {submitStatus.message}
              </motion.div>
            )}
            
            <motion.div 
              variants={item}
              className="space-y-1"
            >
              <label htmlFor="name" className="block text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 text-sm md:text-md py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-700/50 dark:text-white"
              />
            </motion.div>
            
            <motion.div 
              variants={item}
              className="space-y-1"
            >
              <label htmlFor="email" className="block text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 text-sm md:text-md py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-700/50 dark:text-white"
              />
            </motion.div>
            
            <motion.div 
              variants={item}
              className="space-y-1"
            >
              <label htmlFor="message" className="block text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 text-sm md:text-md py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-700/50 dark:text-white"
              />
            </motion.div>
            
            <motion.div 
              variants={item}
              className="space-y-1"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm md:text-md tracking-wide shadow-md"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
