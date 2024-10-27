import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => (
  <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white flex items-center justify-center">
    <div className="container p-8 rounded-lg shadow-lg bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl mb-6"
      >
        Contact Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-4"
      >
        If you have any questions or suggestions, feel free to reach out to us!
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mb-2"
      >
        <span className="font-bold">Email:</span> support@votingsystem.com
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mb-2"
      >
        <span className="font-bold">Phone:</span> +1 234 567 8900
      </motion.p>
    </div>
  </div>
);

export default ContactUs;
