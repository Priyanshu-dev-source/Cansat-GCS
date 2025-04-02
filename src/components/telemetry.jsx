import React from "react";
import { useState } from "react";

const Telemetry = () => {
  const [cmoEcho, setCmoEcho] = useState("CX");
  const [packetCount, setPacketCount] = useState("25533");

  const toggleButtonState = (buttonState) => {
    setCmoEcho(buttonState);
  };

  return (
    <div className="h-[570px] w-full bg-gray-300 flex items-center justify-center">
      <div className="h-full w-[55%] bg-red-300 flex items-center justify-start py-[15px] flex-col gap-[10px]">
        <div className="h-[120px] w-[98%] rounded-[20px] flex items-start px-[20px] justify-start flex-col">
          <h1 className="text-[30px] font-iceland px-[10px]">Command Pannel</h1>
          <div className="h-[100px] w-full bg-white rounded-[15px] flex items-center justify-center gap-[30px]">
            <button
              value="CX"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              CX
            </button>
            <button
              value="CAL"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              CAL
            </button>
            <button
              value="PLR"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              PLR
            </button>
            <button
              value="ST"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              ST
            </button>
          </div>
        </div>
        <div className="h-[80px] w-[94%] bg-white rounded-[15px] flex items-start px-[20px] justify-start flex-col">
          <h1 className="text-[25px] font-iceland font-bold">
            CMO_ECHO
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[25px] font-iceland font-light">
              {cmoEcho}&nbsp;&nbsp; ON
            </span>
          </h1>
          <h1 className="text-[25px] font-iceland font-bold">
            Packet Count &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[25px] font-iceland font-light">
              {packetCount}
            </span>
          </h1>
        </div>
      </div>
      <div className="h-full w-[45%] bg-red-400"></div>
    </div>
  );
};

export default Telemetry;
