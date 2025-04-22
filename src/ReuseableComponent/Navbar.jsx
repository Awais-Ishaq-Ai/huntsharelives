import React from 'react';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <nav className="w-full  bg-[#A536F933]">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[60px]">
                <h1 className="text-3xl text-[#9850F8] font-[Poppins] font-bold">Logo</h1>
                <Button sx={{ background: "linear-gradient(to left, #A65BFB, #8844F2)", color: "white", '&:hover': { background: "linear-gradient(to left, #8844F2, #A65BFB)" } }} variant="contained" className="hidden md:block">Get App</Button>
            </div>
        </nav>
    );
}