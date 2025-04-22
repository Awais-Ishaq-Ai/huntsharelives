import React from 'react';
import Mobile1 from '../../assets/Images/Home2Mobile.png';
import Mobile3 from '../../assets/Images/Home2Mobile3.png';
import Mobile2 from '../../assets/Images/Home2Mobile2.png';

export default function Home2() {
    return (
        <div className='min-h-screen px-4 py-8 flex flex-col gap-12'>
            {/* Header */}
            <div className='w-full flex flex-col items-center text-center'>
                <h1 className='text-2xl md:text-3xl font-bold text-[#515151] w-full max-w-[600px]'>
                    Welcome to Hunt Share Live - Your Ultimate Live Streaming Platform!
                </h1>
                <p className='text-[#515151] mt-2'>Go Live, Connect, and Earn Through Gifting!</p>
            </div>

            {/* Section 1 */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
                <div className='md:w-1/2 flex flex-col items-center text-center md:text-left'>
                    <h1 className='text-xl md:ml-5 md:text-3xl font-bold'>
                        <span className='text-[#9850F8]'>Hunt Share Live</span> is a next-generation live streaming platform
                    </h1>
                    <p className='mt-4 md:ml-5 text-lg max-w-[550px]'>
                        Built with advanced mobile and web application technologies, Hunt Share Live offers a seamless experience.
                    </p>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img src={Mobile1} className='w-full max-w-[400px] object-contain' alt='Live Streaming' />
                </div>
            </div>

            {/* Section 2 */}
            <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16'>
                <div className='md:w-1/2 flex justify-center'>
                    <img src={Mobile3} className='w-full max-w-[400px] object-contain' alt='Gaming Platform' />
                </div>
                <div className='md:w-1/2 flex flex-col items-center text-center md:text-left'>
                    <div className='text-xl md:text-3xl font-bold'>
                        Play, Stream, and Win with <span className='text-[#9850F8]'>Hunt Share Live</span> Games!
                    </div>
                    <p className='mt-4 text-lg max-w-[550px]'>
                        Join Hunt Share Live today and be part of a platform that redefines live streaming with cutting-edge technology.
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
                <div className='md:w-1/2 flex flex-col items-center text-center md:text-left'>
                    <h1 className='text-xl md:text-3xl font-bold'>Virtual Gifting on Hunt Share Live</h1>
                    <p className='mt-4 text-lg max-w-[480px]'>
                        Celebrate your favorite creators with virtual gifts! Send hearts, stars, and more to show your support.
                    </p>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img src={Mobile2} className='w-full max-w-[400px] object-contain' alt='Virtual Gifting' />
                </div>
            </div>
        </div>
    );
}
