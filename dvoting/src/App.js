import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Voting from './Voting';
import Result from './Result';
import Home from './Home';
import NotFound from './NotFound';
import PartyDetails from './PartyDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Voting" element={<Voting />} />
            <Route path="/Result" element={<Result />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/party/:id" element={<PartyDetails />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
