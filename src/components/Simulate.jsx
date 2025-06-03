import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Simulate = () => {
  const [barometricValue, setBarometricValue] = useState(0);
  const [currentBarometricValueUploaded, setCurrentBarometricValueUploaded] = useState(0);
  const [isFlightActivateStatusOn, setIsFlightActivateStatusOn] = useState(false);
  const [isHandleFlightEnableOn, setIsHandleFlightEnableOn] = useState(false);

  const notify = () =>{
    setCurrentBarometricValueUploaded(barometricValue); 
    setBarometricValue(0);
    toast.success("Sent Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  }

  const handleFlightDisable = () => {
    setIsFlightActivateStatusOn(false);
    setIsHandleFlightEnableOn(false);
    toast.error("Flight Simulation Disabled", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  }

  const handleFlightActivate = () => {
    setIsFlightActivateStatusOn(true);
    toast.warning("Flight Simulation Activated", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleFlightEnable = () => {
    if (isFlightActivateStatusOn) {
      setIsHandleFlightEnableOn(true);
      toast.success("Flight Simulation Enabled", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Activate Flight Simulation", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center flex-col gap-[30px]">
        <div className="relative bottom-[50px] h-[250px] w-[40%] bg-[#0A071ADB] rounded-[30px] flex items-center justify-center flex-col gap-[15px] py-[20px]">
          <h1 className="text-[40px] text-white font-iceland font-bold">
            Barometric Pressure
          </h1>
          <div className="h-[60px] w-full flex items-center justify-center gap-[30px]">
            <input
              onChange={(e) => setBarometricValue(e.target.value)}
              className="h-[60%] w-[320px] text-[30px] text-black input-no-arrow font-iceland flex items-center focus:outline outline-none justify-center px-[20px]"
              type="number"
              placeholder="Barometric Value"
            />
            <button
              onClick={notify}
              className="text-[30px] h-[60%] w-[150px] hover:scale-[105%] transition-all duration-100 rounded-[5px] text-black font-iceland flex items-center justify-center bg-[#9FFCFF]"
            >
              Send
            </button>
          </div>
        </div>
        <div className=" relative bottom-[50px] h-[250px] w-[40%] bg-[#0A071ADB] rounded-[30px] flex items-center justify-center flex-col gap-[15px] py-[20px]">
          <h1 className="text-[40px] text-white font-iceland font-bold flex items-center justify-center gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e3e3e3"
            >
              <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            Flight Simulation
          </h1>
          <div className="h-[60px] w-full flex items-center justify-center gap-[30px]">
            <button
              onClick={handleFlightActivate}
              className="text-[30px] h-[60%] w-[150px] hover:scale-[105%] transition-all duration-100 rounded-[5px] text-black font-iceland flex items-center justify-center bg-[#9FFCFF]"
            >
              Activate
            </button>
            <button
              onClick={handleFlightEnable}
              className="text-[30px] h-[60%] w-[150px] hover:scale-[105%] transition-all duration-100 rounded-[5px] text-black font-iceland flex items-center justify-center bg-[#9FFCFF]"
            >
              Enable
            </button>
          </div>
          <div className="h-[60px] w-full flex items-center justify-center gap-[30px]">
            <button
            onClick={handleFlightDisable}
            className="text-[30px] h-[60%] w-[150px] rounded-[5px] hover:scale-[105%] transition-all duration-100 text-black font-iceland flex items-center justify-center bg-[#FF9B98F7]">
              Disable
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simulate;
