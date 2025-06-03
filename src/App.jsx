import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ConnectPage from './components/ConnectPage';
import Telemetry from './components/Telemetry';
import Graphs from './components/Graphs';
import Simulate from './components/Simulate';
import Maps from './components/Maps';
import Options from './components/Options';


function App() {

  const [teamIdData, setTeamIdData] = useState("");

  const handleTeamId = (teamId) => {
    setTeamIdData(teamId);
  }

  return (
    <Router>
        <Navbar sendTeamIdToParent={handleTeamId} />
        <Routes>
          <Route path="/" element={<ConnectPage />} />
          <Route path="/telemetry" receivedTeamId={teamIdData} element={<Telemetry/>} />
          <Route path="/graph" element={<Graphs />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/simulate" element={<Simulate/>} />
        </Routes>
        <div className='absolute w-full bottom-0'>
          <Options/>
        </div>
    </Router>
  )
}

export default App
