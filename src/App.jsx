import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ethers, BrowserProvider } from 'ethers';
import VotingSystemABI from './VotingSystemABI.json';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Vote from './components/Vote';
import Results from './components/Results';
import ContactUs from './components/ContactUs';
import AboutUs from './components/About';
import './styles.css'; 
import './styles/tailwind.css'; 

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

function App() {
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        try {
          const provider = new BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const votingContract = new ethers.Contract(CONTRACT_ADDRESS, VotingSystemABI, signer);

          setContract(votingContract);
          setConnected(true);
        } catch (error) {
          console.error('Error connecting to provider:', error);
          setConnected(false); // Update connection state on error
        }
      } else {
        console.error('MetaMask not detected.');
      }
    };

    initProvider();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register contract={contract} connected={connected} />} />
            <Route path="/vote" element={<Vote contract={contract} connected={connected} />} />
            <Route path="/results" element={<Results contract={contract} connected={connected} />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<h2 className="text-center">Page Not Found</h2>} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
