import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const GraphCard = ({ title, data }) => {
  return (
    <div className="h-[275px] w-full sm:w-[460px] bg-white flex items-center justify-center flex-col rounded-[10px] shadow-lg">
      <h1 className="text-[18px] sm:text-[22px] w-full text-center font-iceland font-bold border-b-2 border-gray-300">
        {title}
      </h1>
      <div className="h-[90%] w-full rounded-b-[10px] p-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 10 }}
              interval="preserveStartEnd"
              minTickGap={20}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              domain={['auto', 'auto']}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '12px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8884d8" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ r: 4 }}
            />
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
    <div className="min-h-screen w-full bg-gray-300 p-4">
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <GraphCard title="Altitude" data={altitudeData} />
        <GraphCard title="Temperature" data={temperatureData} />
        <GraphCard title="Pressure" data={pressureData} />
        <GraphCard title="Tilt X" data={tiltXData} />
        <GraphCard title="Tilt Y" data={tiltYData} />
        <GraphCard title="Velocity" data={velocityData} />
      </div>
    </div>
  );
};

export default Graphs;