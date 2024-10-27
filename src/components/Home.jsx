import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <div className="video-background">
        <video autoPlay loop muted className="video-content">
          <source src="/videos/crypto-background.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      <div className="content text-center px-4 relative z-0 mt-0"> 

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-8 mb-10"
        >
          Welcome to the Decentralized Voting System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="description text-xl lg:text-2xl max-w-2xl mx-auto"
        >
          This platform allows you to register, vote, and see election results securely using blockchain technology.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="description text-xl lg:text-2xl max-w-2xl mx-auto"
        >
          About the System
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="description text-xl lg:text-2xl max-w-2xl mx-auto"
        >
          Our decentralized voting system leverages blockchain technology to ensure transparency, security, and anonymity in the voting process. Every vote is recorded on an immutable ledger, guaranteeing that the results are tamper-proof and verifiable.
        </motion.p>
      </div>
  </div>
);

export default Home;
