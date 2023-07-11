import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';


const Video = () => {

    return (
        <div className="w-full h-full flex flex-col items-center  ">

            <div className="w-[90%] h-[35rem] bg-gray-400 ">
                <img className="w-full h-full object-cover " src="https://yt3.googleusercontent.com/ytc/AOPolaTVhmEDWywmORLSkp8xUk_4WH2HymdQWBKPloncmQ=s900-c-k-c0x00ffffff-no-rj " alt="video" />
            </div>

            <div className="w-[90%] text-[2.2rem] font-[500] break-words bg-red-100  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint eum accusamus,
                voluptas et velit tempora cum atque ratione? Facere quaerat quam cum laboriosam eius?
                Suscipit repellat in officia labore.
            </div>

            <div className="w-[90%] flex justify-between items-center bg-red-200  ">
                <div className="w-auto h-auto flex items-center gap-x-[1rem]  ">
                    <span className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-500 ">
                        <img className="w-full h-full object-cover " src="https://yt3.googleusercontent.com/ytc/AOPolaTVhmEDWywmORLSkp8xUk_4WH2HymdQWBKPloncmQ=s900-c-k-c0x00ffffff-no-rj" alt="profile_img" />
                    </span>

                    <span className=" h-auto flex flex-col bg-gray-300  ">
                        <span className="text-[1.7rem] font-[500] flex items-center gap-x-[0.8rem]  ">Mrwhosetheboss <FaCheckCircle className='text-[1.2rem]  ' /></span>
                        <span className="text-[1.2rem] font-[500] ">15.9M subscribers</span>
                    </span>

                    <button className="p-[1rem] px-[1.5rem] rounded-[5rem] text-[1.4rem] font-[500] flex items-center gap-x-[0.5rem] bg-gray-200  ">
                        <IoMdNotificationsOutline className="text-[2.2rem]  " />
                        <span>Subscribed</span>
                    </button>
                </div>

                <div className="w-auto h-auto flex items-center gap-x-[1rem] ">
                    <span className="py-[1rem] flex items-center rounded-[5rem] bg-gray-200 ">
                        <button className="px-[1.5rem] text-[1.4rem] font-[500] flex items-center gap-x-[0.5rem] border-r-[1px] border-black "><AiOutlineLike className="text-[2.2rem] " /> 123K</button>
                        <button className="px-[1.5rem] text-[1.4rem] font-[500] flex items-center "><AiOutlineDislike className="text-[2.2rem] " /></button>
                    </span>

                    <span className="py-[1rem] px-[1.5rem] rounded-[5rem] bg-gray-200  ">
                        <button className="text-[1.4rem] font-[500] flex items-center gap-x-[0.5rem] "><PiShareFat className="text-[2.2rem]  " />Share</button>
                    </span>
                </div>
            </div>



        </div>
    )
};

export default Video;