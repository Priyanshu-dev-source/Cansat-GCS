import { useState, useEffect } from "react";
import{ useNavigate } from "react-router-dom"
import vyom from "/assets/VyomPSIT.png";

const Navbar = ({sendTeamIdToParent}) => {

  const navigate = useNavigate();
  const [teamId, setTeamId] = useState("3143");
  const [teamName, setTeamName] = useState("PSIT Vyomnauts");
  const [state, setState] = useState("LAUNCHPAD");
  const [missionTime, setMissionState] = useState("00:00:00");
  const [gpsTime, setGpsTime] = useState("00:00:00");

  useEffect(()=>{
    sendTeamIdToParent(teamId);
  },[teamId])

  return (
    <div className="w-full h-[100px] bg-white flex items-center justify-between px-4 border-b-2 border-black">
      <div className="h-full w-[33%] flex items-center justify-start px-4 gap-[20px]">
        <div className="h-20 w-[190px] hover:border-4 hover:border-gray-300 rounded-[10px] hover:scale-[105%] transition-all duration-200 cursor-pointer flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[22px] font-bold ">Team Id</h2>
          <p className="font-iceland text-[30px]">{teamId}</p>
        </div>
        <div className="h-20 w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[22px] font-bold">Team Name</h2>
          <p className="font-iceland text-[28px]">{teamName}</p>
        </div>
      </div>
      <div onClick={() => navigate("/")} className="h-full w-[33%] flex items-center justify-center gap-[20px] cursor-pointer">
        <img className="h-20 w-36 rounded-[10px] hover:border-2 hover:border-gray-300 hover:scale-[109%] transition-all duration-200" src={vyom} alt="" />
      </div>
      <div className="h-full w-[33%] flex items-center justify-center gap-[20px]">
        <div className="h-20 w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[22px] font-bold">State</h2>
          <p className="font-iceland text-[26px]">{state}</p>
        </div>
        <div className="h-20 w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[22px] font-bold">Mission Time</h2>
          <p className="font-iceland text-[26px]">{missionTime}</p>
        </div>
        <div className="h-20 w-[190px] hover:border-4 hover:border-gray-300 hover:scale-[105%] transition-all duration-200 cursor-pointer rounded-[10px] flex items-center justify-center flex-col">
          <h2 className="font-iceland text-[22px] font-bold">GPS Time</h2>
          <p className="font-iceland text-[26px]">{gpsTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
