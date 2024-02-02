// HeroSection.js
import Playstore from "../assets/img/Playstore.png";
import Apple from "../assets/img/Vector.png";
import Component from "../assets/img/Component.png";
//import Play from '../assets/img/Button-Play.png'
import Component2 from '../assets/img/Component-3.png'
const HeroSection = () => {
  return (
    <div className="hero-section text-black  z-0 font-custom overflow-x-hidden p-1">
      <h1 className="w-[360px] text-neutral-900 text-3xl font-bold font-['Plus Jakarta Sans'] leading-10">DISCOVER THE EASE OF LEARNING</h1>
      <p className="w-[250px] text-2xl font-medium mt-3">ONLINE WITH</p>
      <p className="text-indigo-600 text-2xl font-bold">
        WOLU <span className="text-yellow-500">CLASSROOM</span>
      </p>
      <p className="w-[350px] text-neutral-900 text-lg font-normal font-['Plus Jakarta Sans'] mt-3">Simple. powerful. and fast—the key to a highly efficient online learning experience.</p>
      <button className="bg-indigo-600 text-white w-[21.9rem] py-4 text-sm font-medium font-['Plus Jakarta Sans'] mt-8 rounded-md hover:bg-indigo-700 transition-all">Get Started</button>
      <button className="bg-white text-indigo-600 border-[0.5px] border-solid border-indigo-600 w-[21.9rem] py-4 text-sm font-medium font-['Plus Jakarta Sans'] mt-3 rounded-md hover:bg-indigo-600 hover:text-white transition-all">
        Learn More
      </button>
      <div className="flex gap-3 mt-10">
        <a className="bg-neutral-500 px-[4.7rem] py-5 rounded-md hover:bg-indigo-600 transition-all">
          <img src={Playstore} className="w-4 h-4"></img>
        </a>
        <a className="bg-neutral-500 px-[4.9rem] py-5 rounded-md hover:bg-indigo-600 transition-all">
          <img src={Apple} className="w-4 h-4"></img>
        </a>
      </div>
      <img className="mt-[83px] mb-[32px]" src={Component}></img>
      <a className="bg-white shadow-lg shadow-neutral-200 text-xs font-semibold px-7 py-4">Watch Video</a>
      <img src={Component2} className="mt-20 w-44"></img>
    </div>
  );
};

export default HeroSection;
