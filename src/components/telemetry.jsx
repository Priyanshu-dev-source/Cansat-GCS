import React from "react";
import { useState } from "react";

const Telemetry = ({ teamIdData }) => {
  const [cmoEcho, setCmoEcho] = useState("");
  const [altitude, setAltitude] = useState("No Data");
  const [stats, setStats] = useState("No Data");
  const [longitude, setLongitude] = useState("05:34:65");
  const [latitude, setLatitude] = useState("23:54:56");
  const [humidity, setHumidity] = useState("No Data");
  const [gyro, setGyro] = useState("No Data");
  const [acceleration, setAcceleration] = useState("No Data");
  const [magneticField, setMagneticField] = useState("No Data");
  const [gyroRotation, setGyroRotation] = useState("No Data");
  const [pressure, setPressure] = useState("No Data");
  const [voltage, setVoltage] = useState("No Data");
  const [temprature, setTemprature] = useState("No Data");
  const [velocity, setVelocity] = useState("No Data");
  const [packetCount, setPacketCount] = useState("25533");

  const toggleButtonState = (buttonState) => {
    setCmoEcho(buttonState);
  };

  return (
    <div className="h-[570px] w-full bg-gray-300 flex items-center justify-center">
      <div className="h-full w-[55%] flex items-center justify-start py-[15px] flex-col gap-[10px]">
        <div className="h-[120px] w-[98%] rounded-[20px] flex items-start px-[20px] justify-start flex-col">
          <h1 className="text-[30px] font-iceland px-[10px] font-bold">
            Command Pannel
          </h1>
          <div className="h-[100px] w-full bg-white rounded-[15px] flex items-center justify-center gap-[30px]">
            <button
              value="CX ON"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              CX
            </button>
            <button
              value="CAL ON"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              CAL
            </button>
            <button
              value="PLR ON"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              PLR
            </button>
            <button
              value="ST ON"
              onClick={(e) => toggleButtonState(e.target.value)}
              className="h-[50%] w-[120px] focus:scale-[110%] focus:font-bold border-2 border-black hover:scale-[105%] transition-all duration-200 cursor-pointer bg-yellow-300 rounded-[5px] text-[25px] font-iceland"
            >
              ST
            </button>
          </div>
        </div>
        <div className="h-[80px] w-[94%] bg-white rounded-[15px] flex items-start px-[20px] justify-start flex-col">
          <h1 className="text-[25px] font-iceland">
            CMO_ECHO
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[25px] font-iceland font-light">
              {cmoEcho || ""}&nbsp;&nbsp;
            </span>
          </h1>
          <h1 className="text-[25px] font-iceland">
            Packet Count &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[25px] font-iceland font-light">
              {packetCount}
            </span>
          </h1>
        </div>
        <div className="h-[350px] w-full flex items-start justify-start flex-col pl-[25px]">
          <h1 className="text-[30px] font-iceland font-bold px-[15px]">LOGS</h1>
          <div className="h-[82%] w-[96%] bg-[#0D0C2BED] text-white pt-[10px] rounded-[10px] px-[10px] border-[8px] border-gray-500 flex items-start justify-start flex-col gap-[10px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <h2 className="text-[22px] font-iceland text-green-500">
              CMD, {teamIdData || 3107}, {cmoEcho || ""}
            </h2>
            <p className="font-iceland text-[20px] tracking-wider">
              3103, 00:00:06, 123, FLIGHT, DESCENT, 850.5, 22.3, 95.7, 4.8,
              0.12, 0.05, 0.08, 0.98, 0.02, 0.01, 0.15, 0.10, 0.12, 0.05,
              12:34:55, 850.2, 37.7749, -122.4194, 8, RESET_CMD
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-[45%] pt-[5px] flex items-center justify-start gap-[13px] flex-col">
        <div className="h-[120px] w-full flex items-center justify-evenly">
          <div className="h-full w-[42%] flex items-start justify-between flex-col ">
            <h1 className="text-[25px] font-bold font-iceland px-[10px]">
              GNSS Data
            </h1>
            <div className="h-[90%] w-full flex items-start justify-center flex-col pl-[10px] rounded-[20px] bg-white">
              <h1 className="text-[22px] font-iceland px-[10px]">
                Time
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-[22px] font-iceland ">00:00:00</span>{" "}
              </h1>
              <h1 className="text-[22px] font-iceland px-[10px]">
                Altitude &nbsp;{" "}
                <span className="text-[22px] font-iceland px-[10px]">
                  {altitude}
                </span>{" "}
              </h1>
              <h1 className="text-[22px] font-iceland px-[10px]">
                Stats &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-[22px] font-iceland px-[10px]">
                  {stats}
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="h-full w-[50%] flex items-start justify-between flex-col ">
            <h1 className="text-[25px] font-bold font-iceland px-[10px]">
              Position
            </h1>
            <div className="h-[90%] w-full flex items-start justify-start flex-col pl-[10px] rounded-[20px] bg-white">
              <h1 className="text-[25px] font-iceland px-[10px]">
                Latitude
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-[28px] font-iceland ">{latitude}</span>{" "}
              </h1>
              <h1 className="text-[25px] font-iceland px-[10px]">
                Longitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-[28px] font-iceland px-[10px]">
                  {longitude}
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="h-[180px]  w-full flex items-start justify-center pl-[20px] flex-col">
          <h1 className="text-[25px] font-bold font-iceland px-[10px] ">
            Cansat
          </h1>
          <div className="h-[73%] w-[95%] flex flex-wrap items-start justify-start flex-col pl-[10px] rounded-[20px] bg-white">
            <h1 className="text-[25px] font-iceland px-[10px]">
              Altitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[28px] font-iceland px-[10px]">
                {altitude}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Humidity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[28px] font-iceland px-[10px]">
                {humidity}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Pressure &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[28px] font-iceland px-[10px]">
                {pressure}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Voltage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[28px] font-iceland px-[10px]">
                {voltage}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Temprature &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[28px] font-iceland px-[10px]">
                {temprature}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Velocity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[28px] font-iceland px-[10px]">
                {velocity}
              </span>{" "}
            </h1>
          </div>
        </div>
        <div className="h-[300px] w-full flex items-start justify-start pl-[20px] flex-col">
          <h1 className="text-[25px] font-bold font-iceland px-[10px] ">
            Sensor Metrics
          </h1>
          <div className="h-[78%] pb-[2px] w-[95%] flex items-start justify-center flex-col pl-[10px] rounded-[20px] bg-white">
            <h1 className="text-[25px] font-iceland px-[10px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[28px] font-iceland px-[10px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Roll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pitch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yaw
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Gyro
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[25px] font-iceland px-[10px]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {gyro}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gyro}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gyro}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Acceleration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[25px] font-iceland px-[10px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {acceleration}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{acceleration}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{acceleration}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Magnetic Field &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[25px] font-iceland px-[10px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {magneticField}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{magneticField}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{magneticField}
              </span>{" "}
            </h1>
            <h1 className="text-[25px] font-iceland px-[10px]">
              Auto-Gyro-Rotation-rate (rpm) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[25px] font-iceland px-[10px]">
                &nbsp;{gyroRotation}
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemetry;
