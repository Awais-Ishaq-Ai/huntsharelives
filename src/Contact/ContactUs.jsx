import { useState } from "react";
import bear from '../assets/Images/bear.png'
import map from '../assets/Images/map.png'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            setError('Please fill out all fields!');
            setSuccess('');
            return;
        }

        // You can replace console.log with API call if needed
        console.log("Form Data Submitted:", formData);

        setSuccess('Your message has been sent successfully!');
        setError('');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    }

    return (
        <>
            {/* Top Section */}
            <div className="flex flex-col items-center">
                {/* Collaboration Section */}
                <div className="flex w-full py-10">
                    <div className="flex justify-center items-center w-1/2 h-[400px]">
                        <div className="text-justify">
                            <img className="h-16 w-16" src={bear} alt="Bear" />
                            <h1 className="text-5xl font-bold mt-4">Let's Collaborate</h1>
                            <p className="text-slate-400 text-2xl mt-2">Contact us for the details</p>
                        </div>
                    </div>
                    <div className="w-1/2 h-[400px] flex justify-center items-center">
                        <div
                            className="w-[70%] h-[270px] rounded-lg shadow-lg"
                            style={{
                                backgroundImage: `url(${map})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="flex w-full justify-around items-center py-10 border-t">
                    <div className="flex space-x-4">
                        <span className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 cursor-pointer">
                            <FaFacebookF />
                        </span>
                        <span className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 cursor-pointer">
                            <CiTwitter />
                        </span>
                        <span className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 cursor-pointer">
                            <FaLinkedinIn />
                        </span>
                        <span className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 cursor-pointer">
                            <IoLogoInstagram />
                        </span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-semibold">+92 4444 0909 0</span>
                    </div>

                    <div className="text-slate-400">
                        but also the leap into electronic typesetting.
                    </div>
                </div>

                {/* Say Hello Form Section */}
                <div className="w-full bg-purple-300 py-12 flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Say Hello</h2>
                    <p className="text-white mb-10">Your Information</p>

                    <form onSubmit={handleSubmit} className="w-[90%] md:w-[50%] flex flex-col space-y-4">
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        {success && <p className="text-green-500 text-center">{success}</p>}
                        
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="flex-1 p-3 bg-white rounded-md outline-none"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="flex-1 p-3 bg-white rounded-md outline-none mt-4 md:mt-0"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 rounded-md bg-white outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="p-3 rounded-md bg-white outline-none"
                        ></textarea>

                        <div className='flex justify-end'>
                            <button
                                type="submit"
                                className="self-center bg-purple-800 text-white px-6 py-3 rounded-md mt-4 hover:bg-purple-900"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
