import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectPage from "./components/connectPage.jsx";
import Telemetry from "./components/telemetry.jsx";
import Maps from "./components/maps.jsx";
import Graphs from "./components/graphs.jsx";
import Navbar from "./components/navbar.jsx";
import Options from "./components/options.jsx";

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
          <Route path="/telemetry" receivedTeamId={teamIdData} element={<Telemetry />} />
          <Route path="/graph" element={<Graphs />} />
          <Route path="/map" element={<Maps />} />
        </Routes>
        <div className='absolute w-full bottom-0'>
          <Options/>
        </div>
    </Router>
  )
}

export default App
