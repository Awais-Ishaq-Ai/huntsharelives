import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import huntImg1 from '../assets/Images/HuntShareLive.png';

export default function Search() {
    const [name, setName] = useState('');

    return (
        <div className="md:flex justify-between items-center bg-[#EDE0FE] space-y-4 mx:px-10 px-2">
            <div>
                <img src={huntImg1} alt="Hunt Share Live" className="h-[400px]" />
            </div>
            <div className='md:flex md:w-[50%] w-[100%] pb-2 justify-between '>
                <div className=''>
                <TextField sx={{ marginRight: "15px", backgroundColor: "white" }} id="outlined-controlled" label="Enter your email" value={name} onChange={(event) => setName(event.target.value)} variant="outlined" fullWidth />
                </div>
                <div className='md:mt-0 mt-2 md:flex   flex justify-end'>
                    <Button sx={{ float: "right", background: "linear-gradient(to left, #A65BFB, #8844F2)", paddingInline: "25px", color: "white", '&:hover': { background: "linear-gradient(to left, #8844F2, #A65BFB)" } }} variant="contained" className="hidden md:block">Download</Button>
                </div>
            </div>
        </div>
    );
}