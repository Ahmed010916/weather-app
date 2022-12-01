import React from "react";
import img from "./../../assets/day.svg";
function Home() {
  return (
    <div className="px-5 py-5 bg-sun h-screen">
      <div className="max-w-screen-md mx-auto">
        <div className="flex text-site justify-between">
          <div className="cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-settings"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
        </div>
        <div className="pt-5">
          <p className="font-medium mx-auto w-fit text-xl text-white">
            Egypt, Alexandria
          </p>
        </div>
        <div className="mx-auto w-fit">
          <img className="w-72 h-72 -translate-y-8" src={img} alt="img" />
        </div>
        <div className="flex justify-center text-white -translate-y-10">
          <span className="font-medium w-fit text-5xl text-white">31</span>
          <sup className="text-xl">o</sup>
          <span className="font-medium w-fit text-5xl">C</span>
        </div>
        <div className="flex flex-col gap-5 text-white mt-5">
          <div className="flex justify-between">
            <p>Today</p>
            <div className="flex">
              <p>
                31<sup>o</sup>
              </p>{" "}
              <span className="mx-2">/</span>
              <p>
                24<sup>o</sup>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>Monday</p>
            <div className="flex">
              <p>
                31<sup>o</sup>
              </p>{" "}
              <span className="mx-2">/</span>
              <p>
                24<sup>o</sup>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>Tuesday</p>
            <div className="flex">
              <p>
                31<sup>o</sup>
              </p>{" "}
              <span className="mx-2">/</span>
              <p>
                24<sup>o</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
