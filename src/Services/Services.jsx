import React from 'react';
// import img7 from "../assets/Images/chart7.png"
// import img8 from "../assets/Images/chart8.png"
// import img9 from "../assets/Images/chart9.png"
// import icon1 from "../assets/Images/icon1.png"
// import icon2 from "../assets/Images/icon2.png"
// import icon4 from "../assets/Images/icon4.png"
// import icon7 from "../assets/Images/icon7.png"
// import icon5 from "../assets/Images/icon5.png"
// import icon9 from "../assets/Images/icon9.png"
// import icon6 from "../assets/Images/icon6.png"
// import icon8 from "../assets/Images/icon8.png"

import { BsCoin } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiBearFace } from "react-icons/gi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiGameControllerDuotone } from "react-icons/pi";
import { BsBattery } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { PiHandWithdrawLight } from "react-icons/pi";
// import Abouthunt2 from '../assets/Images/Abouthunt2.png'
import Abouthunt5 from '../assets/Images/Abouthunt5.png'
import Abouthunt3 from '../assets/Images/Abouthunt3.png'
import Abouthunt4 from '../assets/Images/Abouthunt4.png'
import speaker from '../assets/Images/speaker.png'
const Services = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-2">
          <img src={speaker} alt="Large icon" className="h-15" />
        </div>
        <h2 className="text-4xl font-bold mb-2">Our <span className="text-purple-500">Services</span></h2>
        <p className="text-gray-600 text-sm max-w-lg mx-auto">
          Lorem ipsum is simply dummy text of the  <br />printing and typesetting industry Lorem ipsum <br />has been the industry's.
        </p>
      </div>

      {/* Services Grid - First Row */}
      <div className="bg-white rounded-x1 shadow-md   p-6 mb-8 relative">
        <div className="absolute  -top-12 -right-3">
          {/* <img src={icon2} alt="Purple orb" className="h-22 mb-4 " /> */}

        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Coin Selling */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-2 rounded-xl">
              <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                  {/* <img src={icon1} alt="icon" className="h-6 w-6" /> */}
                  {/* <IoChatbubblesOutline /> */}
                  <BsCoin className='text-white text-9xl ' />
                </div>

              </div>

            </div>
            <span className="font-medium">Coin Selling</span>
          </div>

          {/* Agent System */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-2 rounded-xl">
              <div className="h-10 w-10 rounded-full flex items-center justify-center">
                <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                  <GiBearFace className='text-white text-9xl'/>
                </div>
              </div>
            </div>
            <span className="font-medium">Agent System</span>
          </div>

          {/* Live Streaming */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-2 rounded-xl">
              <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                < IoChatbubblesOutline className='text-white text-9xl' />
                </div>

              </div>
            </div>
            <span className="font-medium">Live Streaming</span>
          </div>

          {/* Live Chatting */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-3 rounded-xl">
              <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                <div className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center">
                  {/* <img src={Abouthunt4} alt="icon" className="h-6 w-6" /> */}
                  < IoChatbubblesOutline className='text-white text-9xl' />
                </div>
              </div>
            </div>
            <span className="font-medium">Live Chatting</span>
          </div>
        </div>
      </div>

      {/* Services Grid - Second Row */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12 relative">
        <div className="absolute -top-12 -right-5">
          {/* <img src={icon2} alt="Purple orb" className="h-23 mb-7" /> */}

        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* In Stream Games */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-2 rounded-xl">
              <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                <div className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center">
                  {/* <img src={Abouthunt3} alt="icon" className="h-6 w-6" /> */}
                  < PiGameControllerDuotone className='text-white text-9xl'/>
                </div>

              </div>
            </div>
            <span className="font-medium">In Stream Games</span>
          </div>

          {/* Instant Withdrawal */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-3 rounded-xl">
              <div className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center">
                <div className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center">
                  <PiHandWithdrawLight className='text-white text-9xl'/>
                </div>

              </div>
            </div>
            <span className="font-medium">Instant Withdrawal</span>
          </div>

          {/* Instant Recharge */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-2 rounded-xl">
              <div className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center">
                <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                  {/* <img src={icon6} alt="icon" className="h-6 w-6" /> */}
                  < BsBattery className='text-white text-9xl '/>
                </div>
              </div>
            </div>
            <span className="font-medium">Instant Recharge</span>
          </div>
          {/* 100% Bonus */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-2 rounded-xl">
              <div className=" h-10 w-10 rounded-full flex items-center justify-center">
                <div className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center">
                  {/* <img src={icon8} alt="icon" className="h-6 w-6" /> */}
                  <SlBadge className='text-white text-9xl'/>
                </div>

              </div>
            </div>
            <span className="font-medium">100% Bonus</span>
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="space-y-20">
        {/* Hunt Share Live */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-purple-800 font-bold text-xl mb-4">Hunt Share Live</h3>
            <p className="text-gray-700">
              Hunt Share Live is an amazing live streaming app where you don't just entertain – you earn too! Whether you're a gamer, an artist, or simply looking to connect with your fans, this platform is made for everyone.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Abouthunt4} alt="Hunt Share Live streaming device" />

          </div>
        </div>

        {/* Hunt Share Live Gifting */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-purple-800 font-bold text-xl mb-4">Hunt Share Live Gifting</h3>
            <p className="text-gray-700">
              Hunt Share Live offers an engaging gifting system where the better you perform, the more rewards you earn.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Abouthunt5} alt="Mobile app for Hunt Share Live Gifting" />

          </div>
        </div>

        {/* Hunt Share Live Chatting */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-purple-800 font-bold text-xl mb-4">Hunt Share Live Chatting</h3>
            <p className="text-gray-700">
              The live chat feature gives you an instant connection with your viewers, making the app even more interactive and engaging.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Abouthunt4} alt="Hunt Share Live chatting on mobile" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;