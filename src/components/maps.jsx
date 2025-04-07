import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "leaflet/dist/leaflet.css";
import cansat from "/assets/cansat.png";

const Graphs = ({ data }) => {
  return (
    <div className="h-[48%] w-[85%] bg-white flex flex-col items-end justify-center">
      <div className="h-[89%] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h1 className="h-[25px] w-full bg-gray-200 text-center font-iceland text-[20px]">
        GPS
      </h1>
    </div>
  );
};

const Maps = () => {
  const [gpsData, setGpsData] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = {
        time: new Date().toLocaleTimeString().split(" ")[0],
        value: Math.random() * 100,
      };

      setGpsData((prev) =>
        prev.length > 20 ? [...prev.slice(1), newPoint] : [...prev, newPoint]
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [tiltZ, setTiltZ] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTiltZ((prev) => prev + 10);
    }, 1000);
  }, []);

  const [latLng, setLatLng] = useState({
    lat: 26.449530871109715,
    lng: 80.19259172671372,
  });

  return (
    <div className="h-[570px] w-full bg-gray-300 flex items-center gap-[10px] pt-[10px] justify-start flex-col overflow-hidden">
      <div className="h-[80px] w-[95%] bg-white flex items-center justify-center gap-[130px]">
        <div className="h-[98%] w-[45%] flex items-center justify-center gap-[120px]">
          <h1 className="font-iceland text-[35px] font-bold">Longitude</h1>
          <h1 className="font-iceland text-[35px]">{latLng.lat}</h1>
        </div>
        <div className="h-[98%] w-[45%] flex items-center justify-center gap-[180px]">
          <h1 className="font-iceland text-[35px] font-bold">Latitude</h1>
          <h1 className="font-iceland text-[35px]">{latLng.lng}</h1>
        </div>
      </div>

      <div className="h-[480px] w-full pl-[29px] flex items-center justify-center gap-[20px]">
        <div className="h-[98%] w-[65%] bg-white">
          <MapContainer
            center={latLng}
            zoom={10}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={latLng}>
              <Popup>
                Selected Location <br /> ({latLng.lat}, {latLng.lng})
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="h-full w-[32%] flex items-center justify-center flex-col gap-[10px]">
          <Graphs data={gpsData} />
          <div className="h-[48%] w-[85%] bg-white flex items-center justify-between flex-col">
            <img
              className="h-[180px] relative top-[10px] w-[50%] transition-all duration-500 ease-linear"
              style={{ transform: `rotateZ(${tiltZ}deg)` }}
              src={cansat}
              alt=""
            />
            <h1 className="h-[25px] w-full bg-gray-200 text-center font-iceland text-[20px]">
              Cansat Tilt Angel
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
