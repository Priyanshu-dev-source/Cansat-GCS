import { useState, useEffect } from "react";
import{ useNavigate } from "react-router-dom"
import vyom from "/assets/VyomPSIT.png";
import io from "socket.io-client";

const socket = io('http://localhost:5000');

const Navbar = ({sendTeamIdToParent}) => {
  const navigate = useNavigate();
  const [teamId, setTeamId] = useState("2024-ASI-CANSAT-052");
  const [teamName, setTeamName] = useState("PSIT Vyomnauts");
  const [state, setState] = useState("LAUNCHPAD");
  const [missionTime, setMissionTime] = useState("00:00:00");
  const [gpsTime, setGpsTime] = useState("00:00:00");

  useEffect(()=>{
    sendTeamIdToParent(teamId);
  },[teamId])

  useEffect(() => {
    socket.on('telemetryData', (data) => {
      if (data.TEAM_ID) setTeamId(data.TEAM_ID);
      if (data.TIME) setMissionTime(data.TIME);
      if (data.FLIGHT_SOFTWARE_STATE) setState(data.FLIGHT_SOFTWARE_STATE)
    });

    return () => socket.off('telemetryData');
  },[])

  return (
    <div className="w-full min-h-[80px] bg-white flex flex-col md:flex-row items-center justify-between px-2 md:px-4 border-b-2 border-black py-2 md:py-0">
      {/* Left Section */}
      <div className="w-full md:w-[33%] flex items-center justify-center md:justify-start gap-2 md:gap-[20px] mb-2 md:mb-0">
        <div className="h-16 md:h-20 w-[140px] md:w-[220px] hover:border-4 hover:border-gray-300 rounded-[10px] hover:scale-[105%] transition-all duration-200 cursor-pointer flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[16px] md:text-[22px] font-bold">Team Id</h2>
          <p className="font-iceland text-[16px] md:text-[22px]">{teamId}</p>
        </div>
        <div className="h-16 md:h-20 w-[140px] md:w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[16px] md:text-[22px] font-bold">Team Name</h2>
          <p className="font-iceland text-[16px] md:text-[22px]">{teamName}</p>
        </div>
      </div>

      {/* Center Section */}
      <div onClick={() => navigate("/")} className="w-full md:w-[33%] flex items-center justify-center gap-[20px] cursor-pointer mb-2 md:mb-0">
        <img className="h-10 md:h-14 w-24 md:w-32 rounded-[10px] hover:border-2 hover:border-gray-300 hover:scale-[109%] transition-all duration-200" src={vyom} alt="" />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[33%] flex items-center justify-center gap-2 md:gap-[20px]">
        <div className="h-16 md:h-20 w-[140px] md:w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[16px] md:text-[22px] font-bold">State</h2>
          <p className="font-iceland text-[16px] md:text-[22px]">{state}</p>
        </div>
        <div className="h-16 md:h-20 w-[140px] md:w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[16px] md:text-[22px] font-bold">Mission Time</h2>
          <p className="font-iceland text-[16px] md:text-[22px] text-center">{missionTime}</p>
        </div>
        <div className="h-16 md:h-20 w-[140px] md:w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[16px] md:text-[22px] font-bold">GPS Time</h2>
          <p className="font-iceland text-[16px] md:text-[22px]">{gpsTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
