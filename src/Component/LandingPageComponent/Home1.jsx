import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import huntImg1 from '../../assets/Images/HuntShareLive.png';
import MobleImg2 from '../../assets/Images/Mobile.png'
import BoxImg3 from '../../assets/Images/Box.png'
import { Button } from '@mui/material';

export default function Home1() {
    const [homeSlider, setHomeSlider] = useState([]);

    const productSlider = [
        {
            id: 0,
            title: <>Welcome to <span className="text-[#9850F8] font-bold">Hunt share Live</span> Your Ultimate Live Streaming Platform!</>,
            description: <>
                Hunt share Live offers a seamless and dynamic environment to share, connect, and grow.
                With advanced features like real-time streaming, virtual gifting, and interactive chat,
                Hunt share Live empowers creators to showcase their talent, build a loyal community, and monetize their content effectively.
            </>,
            img: huntImg1
        },
        {
            id: 1,
            title: <><span className='text-[#9850F8] font-bold'> Hunt Share Live  </span>EveryGamer's Identity, EveryMatch's Battlefield!</>,
            description: <>
                Hunt Share Live is a modern and thrilling gaming platform
                where gamers can seamlessly connect, share, and grow.
                With advanced features like real-time game streaming,
                interactive chat, and virtual gifting, Hunt Share Live enables
                gamers to showcase their skills, build a strong gamingc
                ommunity, and effectively monetize their content.
            </>,
            img: MobleImg2
        },
        {
            id: 2,
            title: <><span className='text-[#9850F8] font-bold'> Hunt Share Live !</span> <br />  <h1 className='flex-wrap'>Send and receive gifts on our app and support your favorite streamers!</h1> </>,
            description: <>
                Hunt Share Live provides you with a fantastic and interactive platform where you can send and receive exclusive virtual gifts during live streaming
            </>,
            img: BoxImg3
        }
    ];

    useEffect(() => {
        setHomeSlider(productSlider);
    }, []);

    return (
        <div className="md:h-[88vh] min-h-screen overflow-hidden relative bg-[#A566F933]">
            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={homeSlider.length>1} // Infinite loop
                className="mySwiper">
                {homeSlider.map((slide) => (
                    <SwiperSlide key={slide.id} className="">
                        <div className="w-[100%] md:flex justify-between items-center px-8">
                            <div className="md:w-[50%]">
                                <div className="lg:text-4xl md:text-2xl font-bold">{slide.title}</div>
                                <p className="mt-2 md:text-[10px]">{slide.description}</p>

                                {/* @ buttons */}
                                <div className='flex justify-between mt-5'>
                                    <Button
                                        sx={{
                                            background: "linear-gradient(to left, #A65BFB, #8844F2)",
                                            paddingInline: "40px",
                                            color: "white",
                                            marginRight: "5px",
                                            '&:hover': { background: "linear-gradient(to left, #8844F2, #A65BFB)" },
                                            fontSize: {
                                                xs: '10px', // Mobile screens
                                                sm: '14px', // Small screens
                                                md: '16px', // Medium screens and above
                                            },
                                        }}
                                        variant="contained"
                                        className="hidden md:block"
                                    >
                                        Download
                                    </Button>

                                    <Button
                                        sx={{
                                            backgroundColor: "white",
                                            color: "#A65BFB",
                                            transition: "background transform .9s ease-in-out",
                                            '&:hover': {
                                                background: "linear-gradient(to left, #8844F2, #A65BFB)",
                                                color: "white"
                                            },
                                             fontSize: {
                                                xs: '6px', // Mobile screens
                                                sm: '14px', // Small screens
                                                md: '16px', // Medium screens and above
                                            },
                                        }} variant="contained" className="hidden md:block">Download APK</Button>
                                </div>
                            </div>
                            <div className="md:w-[50%] mt-1">
                                <img src={slide.img} alt="Slider Image" className="lg:w-full lg:h-[460px] md:h-[300px]" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute -left-60 md:top-[298px] top-[370px] w-[111.3px] h-[531.77px] bg-[#9850F8] rotate-[59.71deg] rounded-full"></div>
            <div className="absolute right-0 top-[10px] ">
                <svg width="47" height="531" viewBox="0 0 47 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7283 186.353C40.6069 228.272 19.7551 282.23 45.6957 347.368C53.0404 365.811 56.5381 376.626 66.8342 393.597C116.83 476.003 189.595 521.937 285.656 529.148C352.27 534.148 431.191 533.543 460.244 467.249C489.603 400.257 473.972 315.214 423.839 241.2C368.644 159.713 320.481 102.416 231.244 45.3169C183.487 14.7592 88.0571 -27.7495 33.1692 24.9451C-8.61798 65.0625 -7.15036 144.434 16.7283 186.353Z" fill="#6E00FA" />
                </svg>
            </div>

        </div>
    );
}