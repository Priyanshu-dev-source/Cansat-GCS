import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const currentMode = pathSegments[1].toUpperCase();

  return (
    <div className="h-[59px] w-full bg-white border-t-2 border-black flex items-center justify-between">
      <div className="h-full w-[70%] flex items-center justify-start px-[20px] gap-[20px]">
        <button
        onClick={() => navigate("/graph")}
        className="h-[70%] w-[190px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland">
          Graphs
        </button>
        <button
          onClick={() => navigate("/telemetry")}
          className="h-[70%] w-[190px] border-2 border-black focus:scale-[110%] focus:font-bold hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
        >
          Telemetry
        </button>
        <button
        onClick={() => navigate("/map")}
        className="h-[70%] w-[190px] border-2 border-black focus:scale-[110%] focus:font-bold hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland">
          Map
        </button>
        <button className="h-[70%] w-[190px] border-2 border-black focus:scale-[110%] focus:font-bold hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland">
          Simulate
        </button>
      </div>
      <div className="h-full w-[30%] flex items-center justify-center">
        <h1 className="text-black text-[30px] font-iceland">
          Mode &nbsp;&nbsp;{" "}
          <span className="text-black text-[30px] font-iceland">
            {currentMode || "HOME"}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Options;
