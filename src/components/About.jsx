import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css'; // Import your global styles
import AjayPhoto from '../assets/ajay.jpg';
import SruthyPhoto from '../assets/sruthy.jpg';
import Akash from '../assets/akash.jpg';
import Revi from '../assets/revi.jpg';

const teamMembers = [
  {
    name: "Ajay",
    role: "JOKER 1",
    image: AjayPhoto,
    description: "Ajay is the lead developer responsible for smart contract implementation and blockchain integration."
  },
  {
    name: "Sruthy",
    role: "JOKER 2",
    image: SruthyPhoto,
    description: "Sruthy is a skilled frontend developer focusing on React.js, ensuring the voting system is user-friendly."
  },
  {
    name: "Reveena",
    role: "JOKER 3",
    image: Revi,
    description: "Revi designs intuitive and engaging interfaces to deliver a seamless experience to users."
  },
  {
    name: "Akash Raj",
    role: "JOKER 4",
    image: Akash,
    description: "Akash is the project manager who coordinates tasks, timelines, and ensures smooth project delivery."
  }
];

function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white flex items-center justify-center">
      <div className="container p-8 rounded-lg shadow-lg bg-gray-800 mt-20"> {/* Added mt-20 to lift it higher */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl mb-6 text-center"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-8"
        >
          We are a passionate team working on creating a transparent, secure, and efficient decentralized voting system.
        </motion.p>
        <div className="team grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member bg-gray-700 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white text-center">{member.name}</h3> 
              <h4 className="text-md text-gray-300 text-center mb-2">{member.role}</h4>
              <p className="text-sm text-gray-200 text-center">{member.description}</p> 
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
