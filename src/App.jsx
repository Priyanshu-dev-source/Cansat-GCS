import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectPage from "./components/connectPage.jsx";
import Telemetry from "./components/telemetry.jsx";
import Navbar from "./components/navbar.jsx";
import Options from "./components/options.jsx";

function App() {

  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ConnectPage />} />
          <Route path="/telemetry" element={<Telemetry />} />
        </Routes>
        <div className='absolute w-full bottom-0'>
          <Options/>
        </div>
    </Router>
  )
}

export default App
