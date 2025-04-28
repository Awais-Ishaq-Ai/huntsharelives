import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-[#A536F933] relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[60px]">
        <span onClick={() => setToggle(true)} className="md:hidden text-xl text-[#9850F8] cursor-pointer">
          <FaBars />
        </span>
        <h1 className="text-3xl text-[#9850F8] font-bold font-[Poppins]">
          <Link to="/">
            Logo
          </Link>
        </h1>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="home" className="text-[#9850F8]">Home</Link>
          <Link to="about" className="text-[#9850F8]">About Us</Link>
          <Link to="services" className="text-[#9850F8]">Services</Link>
          <Link to="contact" className="text-[#9850F8]">Contact</Link>
          <Button
            sx={{
              background: "linear-gradient(to left, #A65BFB, #8844F2)",
              color: "white",
              '&:hover': { background: "linear-gradient(to left, #8844F2, #A65BFB)" }
            }}
            variant="contained"
          >
            Get App
          </Button>
        </nav>
      </div>

      {/* Shade Overlay */}
      <div
        onClick={() => setToggle(false)}
        className={`fixed top-0 left-0 w-full h-full bg-black/40 z-30 transition-opacity duration-300 ${toggle ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[60%] bg-[#9850F8] z-40 p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${toggle ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">Logo</h1>
          <IoClose onClick={() => setToggle(false)} className="text-2xl text-gray-200 cursor-pointer" />
        </div>
        <ul className="flex flex-col gap-6 text-lg text-white">
          <Link to="home">Home</Link>
          <Link to="about">About Us</Link>
          <Link to="services">Services</Link>
          <Link to="blog">Blog</Link>
          <Button
            fullWidth
            sx={{
              background: "linear-gradient(to left, #A65BFB, #8844F2)",
              color: "white",
              mt: 2,
              '&:hover': { background: "linear-gradient(to left, #8844F2, #A65BFB)" }
            }}
            variant="contained"
          >
            Get App
          </Button>
        </ul>
      </div>
    </nav>
  );
}
