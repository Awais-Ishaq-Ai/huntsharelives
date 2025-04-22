import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white  py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About Section */}
                <div className=''>
                    <h2 className="text font-bold text-[#A65BFB]">Hunt Share Live</h2>
                    <p className="mt-3 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora?
                    </p>
                    <h3 className="mt-4 font-semibold text-lg">Download App</h3>
                    <div className="flex lg:flex-row  mt-2">
                        <a href="#" className="bg-[#A65BFB] text-white px-4 py-2 mr-1 rounded-lg  text-sm">Google Play</a>
                        <a href="#" className="bg-[#8844F2] text-white px-4 py-2 rounded-lg  text-sm">App Store</a>
                    </div>
                </div>

                {/* About Us Links */}
                <div>
                    <h3 className="font-semibold text-lg">About Us</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="hover:text-[#A65BFB] transition">Home</a></li>
                        <li><a href="#" className="hover:text-[#A65BFB] transition">About Us</a></li>
                        <li><a href="#" className="hover:text-[#A65BFB] transition">Services</a></li>
                        <li><a href="#" className="hover:text-[#A65BFB] transition">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="font-semibold text-lg">Contact Us</h3>
                    <ul className="mt-3 space-y-2 ">
                        <li><a href="mailto:awaisjam59@gmail.com" className="hover:text-[#A65BFB] transition">awaisjam59@gmail.com</a></li>
                        <li><a href="tel:03108727759" className="hover:text-[#A65BFB] transition">03108727759</a></li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className='flex'>
                    <div className="flex justify-end items-end  space-x-2 mt-3">
                        <a href="#" className="p-1 rounded-full bg-slate-200  hover:bg-[#A65BFB] transition"><FaFacebookF /></a>
                        <a href="#" className="p-1 rounded-full bg-slate-200  hover:bg-[#A65BFB] transition"><FaYoutube /></a>
                        <a href="#" className="p-1 rounded-full bg-slate-200  hover:bg-[#A65BFB] transition"><FaInstagram /></a>
                        <a href="#" className="p-1 rounded-full bg-slate-200  hover:bg-[#A65BFB] transition"><FaTiktok /></a>
                        <a href="#" className="p-1 rounded-full bg-slate-200  hover:bg-[#A65BFB] transition"><FaTwitter /></a>
                        <a href="#" className="p-1 rounded-full bg-slate-200  hover:bg-[#A65BFB] transition"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-gray-800 text-sm mt-10 border-t border-gray-700 pt-4">
                © 2025 Hunt Share Live. All Rights Reserved.
            </div>
        </footer>
    );
}