import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import cansat from "/assets/cansat.png";

const Maps = () => {
  const [tiltZ, setTiltZ] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setTiltZ((prev) => prev + 30);
    }, 500);
  },[])

  const [latLng, setLatLng] = useState({
    lat: 26.449530871109715,
    lng: 80.19259172671372,
  });

  return (
    <div className="h-[570px] w-full bg-gray-300 flex items-center gap-[10px] pt-[10px] justify-start flex-col overflow-hidden">
      <div className="h-[80px] w-[95%] bg-white flex items-center justify-center gap-[130px]">
        <div className="h-[98%] w-[45%] flex items-center justify-center gap-[120px]">
          <h1 className="font-iceland text-[35px] font-bold">Longitude</h1>
          <h1 className="font-iceland text-[35px] font-bold">{latLng.lat}</h1>
        </div>
        <div className="h-[98%] w-[45%] flex items-center justify-center gap-[180px]">
          <h1 className="font-iceland text-[35px]">Latitude</h1>
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
          <div className="h-[48%] w-[85%] bg-white flex items-end justify-center">
            <h1 className="h-[25px] w-full bg-gray-200 text-center font-iceland text-[20px]">
              GPS
            </h1>
          </div>
          <div className="h-[48%] w-[85%] bg-white flex items-center justify-between flex-col">
            <img
              className="h-[180px] relative top-[10px] w-[50%] transition-all duration-1000 ease-linear"
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
