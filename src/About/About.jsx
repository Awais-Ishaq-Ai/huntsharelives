import React from 'react'
import Abouthunt1 from '../assets/Images/Abouthunt1.png'
import Abouthunt2 from '../assets/Images/Abouthunt2.png'
import backgroundimg from '../assets/Images/background.jpg'
import Abouthunt3 from '../assets/Images/Abouthunt3.png'
import Abouthunt4 from '../assets/Images/Abouthunt4.png'

export default function About() {
  return (
    <>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row mt-5 gap-5 px-4'>
        {/* Left Images */}
        <div className='flex flex-col items-end sm:flex-row w-full md:w-[50%] gap-5'>
          {/* Image 1 */}
          <div className="relative h-[270px] w-full rounded-xl overflow-hidden border-none">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundimg})` }}
            />
            <div className="absolute inset-0 bg-slate-300 opacity-50" />
            <div className="relative flex justify-center items-center h-full">
              <img className='h-[250px] w-[70%]' src={Abouthunt1} alt="" />
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-[290px] w-full rounded-xl overflow-hidden border-none">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundimg})` }}
            />
            <div className="absolute inset-0 bg-slate-300 opacity-50" />
            <div className="relative flex justify-center items-center h-full">
              <img className='h-[250px] w-[105%]' src={Abouthunt2} alt="" />
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className='w-full md:w-[50%]'>
          <h1 className='text-[#A258FA] font-extrabold text-2xl md:text-4xl mb-4'>About Us</h1>
          <p className='text-[#A258FA] font-bold mb-2 text-lg'>Welcome to Hunt share live</p>
          <p className='text-base text-justify'>
            We bring the world closer with a dynamic blend of gifting, live streaming, gaming, and real-time chatting - all in one powerful platform. Whether you're here to connect with friends, showcase your talent, compete in exciting games, or share joy through virtual gifts, we've got something for everyone.
          </p>
        </div>
      </div>

      {/* Middle Images Section */}
      <div className='flex flex-col sm:flex-row justify-center items-center flex-wrap gap-5 py-5 px-4'>
        {/* Image 3 */}
        <div className="relative h-[230px] w-full sm:w-[48%] md:w-[35%] rounded-xl overflow-hidden border-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundimg})` }}
          />
          <div className="absolute inset-0 bg-slate-300 opacity-50" />
          <div className="relative flex justify-center items-center h-full">
            <img
              className="h-[200px] w-full object-contain px-2"
              src={Abouthunt3}
              alt="About Hunt"
            />
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative h-[230px] w-full sm:w-[48%] md:w-[35%] rounded-xl overflow-hidden border-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundimg})` }}
          />
          <div className="absolute inset-0 bg-slate-300 opacity-50" />
          <div className="relative flex justify-center items-center h-full">
            <img className='h-[200px] w-full object-contain px-2' src={Abouthunt4} alt="" />
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className='flex flex-col justify-center items-center px-4 mb-10'>
        <div className='w-full md:w-[70%]'>
          <h2 className='text-2xl md:text-4xl font-bold mb-3 text-[#A258FA] text-center md:text-left'>
            Join the Hunt share live family and be part of the future of digital interaction.
          </h2>
          <p className='text-justify mt-5 mb-4'>
            Express your feelings and appreciation with unique virtual gifts. Make someone's day brighter in just a tap! Go live and share your moments with the world or discover amazing streamers from around the globe. Dive into fun, interactive games designed for thrill, competition, and endless entertainment.
          </p>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="hidden md:block absolute -left-65 top-[298px] w-[111.3px] h-[531.77px] bg-[#1090CB] rotate-[59.71deg] rounded-full"></div>
      <div className="hidden md:block absolute right-0 top-[60px] -z-50">
        <svg width="47" height="531" viewBox="0 0 47 531" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7283 186.353C40.6069 228.272 19.7551 282.23 45.6957 347.368C53.0404 365.811 56.5381 376.626 66.8342 393.597C116.83 476.003 189.595 521.937 285.656 529.148C352.27 534.148 431.191 533.543 460.244 467.249C489.603 400.257 473.972 315.214 423.839 241.2C368.644 159.713 320.481 102.416 231.244 45.3169C183.487 14.7592 88.0571 -27.7495 33.1692 24.9451C-8.61798 65.0625 -7.15036 144.434 16.7283 186.353Z" fill="#6E00FA" />
        </svg>
      </div>
    </>
  )
}
