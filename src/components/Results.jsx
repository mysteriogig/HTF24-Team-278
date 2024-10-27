import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Results = ({ contract }) => {
  const [parties, setParties] = useState([]);
  const [message, setMessage] = useState('');

  const getResults = async () => {
    try {
      const results = await contract.getResults();
      const partiesList = results.map((party, index) => ({
        id: index,
        name: party.name,
        votes: party.voteCount.toString(),
      }));
      setParties(partiesList);
      setMessage('');
    } catch (error) {
      console.error('Error fetching results:', error);
      setMessage('Failed to fetch results.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white flex items-center justify-center">
      <div className="container p-8 rounded-lg shadow-lg bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl mb-6"
        >
          Election Results
        </motion.h2>
        <button
          onClick={getResults}
          className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md w-full mb-4"
        >
          Get Results
        </button>
        {message && <p className="text-red-400">{message}</p>}
        <ul className="mt-4">
          {parties.map((party) => (
            <li key={party.id} className="mb-2">
              <span className="font-bold">ID:</span> {party.id} | 
              <span className="font-bold"> Name:</span> {party.name} | 
              <span className="font-bold"> Votes:</span> {party.votes}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
