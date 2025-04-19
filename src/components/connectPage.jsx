import React, { useState } from "react";
import cansat from "/assets/cansat.png";

const ConnectPage = () => {

  const [baudrate, setBaudrate] = useState("");
  const [port, setPort] = useState("");

  return (
    <div className="h-[570px] w-full bg-gray-300 flex items-center justify-center">
      <div className="absolute z-3 top-[150px] h-[450px] w-[450px] left-[40px] rotate-[-45deg]">
        <img className="h-full w-full" src={cansat} alt="" />
      </div>
      <div className="absolute z-3 top-[150px] h-[450px] w-[450px] right-[100px] rotate-[45deg]">
        <img className="h-full w-full" src={cansat} alt="" />
      </div>
      <div className="h-[400px] w-[400px] z-[5] rounded-[20px] shadow-[rgb(255, 255, 0)] hover:shadow-[0_0_50px_rgba(255,255,0,7.25)] bg-[#0E0D28E5] flex hover:scale-[105%] transition-all duration-200 cursor-pointer items-center justify-between flex-col p-[10px]">
        <div className="h-20 w-full flex items-center justify-center gap-[20px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.8654 0C35.734 0.0628566 34.6026 0.18857 33.534 0.565709C31.8369 1.19428 30.2026 2.13712 28.8197 3.51997C28.4219 3.77219 28.0858 4.11064 27.8363 4.51027C27.5869 4.9099 27.4305 5.3605 27.3787 5.82873C27.3269 6.29697 27.381 6.77086 27.537 7.21536C27.693 7.65986 27.947 8.0636 28.2801 8.39671C28.6132 8.72982 29.017 8.98379 29.4615 9.13982C29.906 9.29586 30.3799 9.34997 30.8481 9.29816C31.3163 9.24634 31.7669 9.08993 32.1666 8.84049C32.5662 8.59105 32.9046 8.25496 33.1569 7.85707C33.8483 7.16565 34.6654 6.78851 35.5454 6.47423C37.7454 5.71995 40.4482 6.03423 42.2082 7.85707C44.6596 10.3085 44.6596 14.3942 42.2082 16.9084L32.7797 26.3369C30.014 29.1026 27.7512 29.354 26.1169 29.2912C24.4826 29.2283 23.5398 28.474 23.5398 28.474C23.1766 28.2677 22.7763 28.1349 22.3618 28.0832C21.9473 28.0315 21.5266 28.062 21.1239 28.1729C20.7212 28.2838 20.3442 28.473 20.0146 28.7295C19.6849 28.9861 19.409 29.3051 19.2027 29.6683C18.9963 30.0315 18.8635 30.4318 18.8119 30.8463C18.7602 31.2608 18.7907 31.6815 18.9016 32.0842C19.0125 32.4869 19.2016 32.8639 19.4582 33.1935C19.7148 33.5232 20.0338 33.7991 20.397 34.0054C20.397 34.0054 22.5341 35.3883 25.6769 35.5768C28.8197 35.7654 33.2197 34.5711 37.054 30.674L46.4825 21.2455C51.3853 16.3427 51.3853 8.42278 46.4825 3.58283C44.7225 1.82284 42.6482 0.754279 40.3854 0.251426C39.2539 0 37.9968 0 36.8654 0.0628566V0ZM24.2941 14.5199C21.1512 14.3942 16.8141 15.4627 13.1056 19.2341L3.67711 28.6626C-1.2257 33.5654 -1.2257 41.4854 3.67711 46.3253C7.19708 49.8453 12.2256 50.851 16.6256 49.2796C18.3227 48.651 19.957 47.7082 21.3398 46.3253C21.7377 46.0731 22.0738 45.7346 22.3232 45.335C22.5727 44.9354 22.7291 44.4848 22.7809 44.0165C22.8327 43.5483 22.7786 43.0744 22.6226 42.6299C22.4665 42.1854 22.2126 41.7817 21.8794 41.4486C21.5463 41.1155 21.1426 40.8615 20.6981 40.7055C20.2536 40.5494 19.7797 40.4953 19.3115 40.5471C18.8432 40.5989 18.3926 40.7554 17.993 41.0048C17.5934 41.2542 17.2549 41.5903 17.0027 41.9882C16.3113 42.6796 15.4942 43.0568 14.6142 43.3711C12.4142 44.1253 9.71134 43.811 7.95136 41.9882C5.49995 39.5368 5.49995 35.4511 7.95136 32.9369L17.3798 23.5084C19.8941 20.9941 22.0941 20.6798 23.8541 20.7427C25.6141 20.8055 26.8083 21.3084 26.8083 21.3084C27.1766 21.5846 27.6011 21.7765 28.0517 21.8706C28.5023 21.9647 28.9681 21.9586 29.4161 21.8529C29.8641 21.7471 30.2835 21.5442 30.6444 21.2585C31.0054 20.9729 31.2992 20.6114 31.5051 20.1996C31.7109 19.7879 31.8238 19.336 31.8358 18.8758C31.8478 18.4156 31.7585 17.9584 31.5743 17.5365C31.3901 17.1147 31.1155 16.7384 30.7698 16.4343C30.4242 16.1303 30.016 15.9059 29.574 15.777C29.574 15.777 27.4369 14.5199 24.2941 14.3942V14.5199Z"
              fill="#EEEEEE"
            />
          </svg>

          <h2 className="font-iceland text-[30px] font-bold text-white tracking-wider">
            Flight Connection
          </h2>
        </div>
        <div className="h-[160px] w-[80%] flex items-center justify-center gap-[20px] flex-col">
          <div className="relative w-full">
            <input
              value={port}
              onChange={(e) => {setPort(e.target.value)}}
              className="h-[50px] w-full flex items-start focus:border-[3px] focus:border-yellow-300 rounded-[20px] justify-center px-[70px] text-[25px] font-iceland outline-none"
              placeholder="Port"
              type="text"
            />
            <svg
              className="absolute left-[20px] top-1/2 transform -translate-y-1/2"
              width="28"
              height="28"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.944 0H7.47201V17.5182H14.944V0ZM34.8694 5.8394H27.3974V17.5182H34.8694V5.8394ZM24.9067 8.7591H17.4347V17.5182H24.9067V8.7591ZM0 21.3138V25.4014H7.47201V40.8758H14.944V25.4014H17.4347V32.1167H24.9067V25.4014H27.3974V35.0364H34.8694V25.4014H39.8507V21.3138H0Z"
                fill="#808080"
              />
            </svg>
          </div>
          <div className="relative w-full">
            <input
              value={baudrate}
              onChange={(e) => {setBaudrate(e.target.value)}}
              className="h-[50px] w-full flex rounded-[20px] focus:border-[3px] focus:border-yellow-300 items-start justify-center px-[70px] text-[25px] font-iceland outline-none"
              placeholder="Baudrate"
              type="text"
            />
            <svg
              className="absolute left-[20px] top-1/2 transform -translate-y-1/2"
              width="28"
              height="28"
              viewBox="0 0 43 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16.8115H6.46103L13.2873 1.98364L18.7483 31.6394L26.9399 9.39758L32.6603 24.2254L36.4967 16.8115H41.9577"
                stroke="#808080"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="h-[90px] w-full flex items-center justify-center pb-[30px]">
          <button className="h-[50px] w-[50%] focus:scale-[110%] focus:font-bold bg-yellow-300 rounded-[20px] text-[25px] font-iceland text-black hover:scale-[110%] hover:border-2 hover:border-white hover:bg-yellow-400 transition-all duration-200 ease-in-out">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
