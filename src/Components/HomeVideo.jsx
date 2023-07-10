import React from 'react';
import {FaCheckCircle} from 'react-icons/fa';
import {BsDot} from 'react-icons/bs';



const HomeVideo = () => {
    return (
        <div className='w-[35rem] flex flex-col items-center  '>

            <div className="w-full h-[20rem] mb-[1rem] rounded-[2rem] overflow-hidden bg-pink-200  ">
                <img src="https://images.ctfassets.net/bhsr3r63z25m/wU68fQZxe4VDEZPBT3TKV/0acd13a9fa70b0feb29a0b45349b8d35/johnny.jpeg" className='w-full h-full object-cover ' alt="thumbnail" />
            </div>

            <div className="w-[95%] h-[5rem] flex justify-between items-center overflow-hidden  ">
                 
                 <div className="w-[4rem] h-[4rem] rounded-[50%] overflow-hidden ">
                    <img src="https://pbs.twimg.com/profile_images/731848457703555072/lAwjqi6o_400x400.jpg" className='w-full h-full object-cover ' alt="profile_image" />
                 </div>

                 <div className='w-[85%] h-full text-[1.6rem] font-[500] break-words   '>
                        The Us Millitary is Planning for a War with China
                 </div>

            </div>

            <div className="w-[95%] h-auto flex justify-end  ">
                <div className="w-[85%] flex flex-col  ">
                    <span className='text-[1.5rem] text-gray-800 flex items-center gap-x-[5px] '>Johnny Harris <FaCheckCircle /> </span>
                    <span className='text-[1.5rem] text-gray-900 flex items-center '>2.9M views<BsDot/>3 days ago</span>
                </div>
            </div>

        </div>
    )
};

export default HomeVideo;