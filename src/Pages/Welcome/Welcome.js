import img from "./../../assets/images/welcome_screen.jpg";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-blue-400 bg-right-bottom bg-cover h-screen relative"
    >
      <div className="
      text-center text-3xl font-medium text-gray-800
      absolute bottom-32 md:text-4xl left-1/2 -translate-x-1/2
      w-full
      ">
        <h1>
          Come for the <span className="text-site font-semibold">weather</span>
        </h1>
        <h2>stay for the</h2>
        <p className="text-site mb-9 font-semibold">experience</p>

        <Link to="/home" className="py-1.5 text-2xl px-8 rounded-xl font-normal bg-site text-white">Get Started</Link>
      </div>
    </div>
  );
}

export default Welcome;
