// import React from 'react'

// const Graphs = () => {
//   return (
//     <div className='h-[570px] flex items-center justify-center flex-wrap w-full gap-x-[30px] bg-gray-300'>
//       <div className='h-[275px] w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px]'>
//         <h1 className='text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300'> Altitude </h1>
//         <div className='h-[89%] w-full rounded-b-[10px]'></div>
//       </div>
//       <div className='h-[275px] w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px]'>
//         <h1 className='text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300'> Temprature </h1>
//         <div className='h-[89%] w-full rounded-b-[10px]'></div>
//       </div>
//       <div className='h-[275px] w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px]'>
//         <h1 className='text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300'> Pressure </h1>
//         <div className='h-[89%] w-full rounded-b-[10px]'></div>
//       </div>
//       <div className='h-[275px] w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px]'>
//         <h1 className='text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300'> Tilt X </h1>
//         <div className='h-[89%] w-full rounded-b-[10px]'></div>
//       </div>
//       <div className='h-[275px] w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px]'>
//         <h1 className='text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300'> Tilt X </h1>
//         <div className='h-[89%] w-full rounded-b-[10px]'></div>
//       </div>
//       <div className='h-[275px] w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px]'>
//         <h1 className='text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300'> Velocity </h1>
//         <div className='h-[89%] w-full rounded-b-[10px]'></div>
//       </div>
//     </div>
//   )
// }

// export default Graphs


import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const GraphCard = ({ title, data }) => {
  return (
    <div className="h-[275px] w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px]">
      <h1 className="text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300">
        {title}
      </h1>
      <div className="h-[89%] w-full rounded-b-[10px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Graphs = () => {
  const [altitudeData, setAltitudeData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [pressureData, setPressureData] = useState([]);
  const [tiltXData, setTiltXData] = useState([]);
  const [tiltYData, setTiltYData] = useState([]);
  const [velocityData, setVelocityData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = {
        time: new Date().toLocaleTimeString().split(" ")[0],
        value: Math.random() * 100,
      };

      setAltitudeData((prev) => (prev.length > 20 ? [...prev.slice(1), newPoint] : [...prev, newPoint]));
      setTemperatureData((prev) => (prev.length > 20 ? [...prev.slice(1), newPoint] : [...prev, newPoint]));
      setPressureData((prev) => (prev.length > 20 ? [...prev.slice(1), newPoint] : [...prev, newPoint]));
      setTiltXData((prev) => (prev.length > 20 ? [...prev.slice(1), newPoint] : [...prev, newPoint]));
      setTiltYData((prev) => (prev.length > 20 ? [...prev.slice(1), newPoint] : [...prev, newPoint]));
      setVelocityData((prev) => (prev.length > 20 ? [...prev.slice(1), newPoint] : [...prev, newPoint]));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[570px] flex items-center justify-center flex-wrap w-full gap-x-[30px] bg-gray-300">
      <GraphCard title="Altitude" data={altitudeData} />
      <GraphCard title="Temperature" data={temperatureData} />
      <GraphCard title="Pressure" data={pressureData} />
      <GraphCard title="Tilt X" data={tiltXData} />
      <GraphCard title="Tilt Y" data={tiltYData} />
      <GraphCard title="Velocity" data={velocityData} />
    </div>
  );
};

export default Graphs;
