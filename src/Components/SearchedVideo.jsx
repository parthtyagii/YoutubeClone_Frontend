import React from 'react';
import { BsDot } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';




const SearchedVideo = () => {

    return (
        <div className="w-full h-[22rem] flex gap-x-[2rem]  ">

            <div className="w-[32%] h-full rounded-[2rem] overflow-hidden bg-pink-200  ">
                <img className='w-full h-full object-cover ' src="https://images.ctfassets.net/bhsr3r63z25m/wU68fQZxe4VDEZPBT3TKV/0acd13a9fa70b0feb29a0b45349b8d35/johnny.jpeg" alt="thumbnail" />
            </div>

            <div className="w-[68%] h-full  ">
                <div className="w-full max-h-[30%] text-[2.2rem] font-[400] break-words overflow-hidden   ">
                    The Us Millitary is Planning for a War with China
                </div>

                <div className="w-full mb-[1rem] text-[1.4rem] flex items-center ">2.9M views<BsDot />3 days ago</div>

                <div className="w-full mb-[1rem] flex justify-start items-center gap-x-[0.5rem]   ">
                    <span className='w-[3rem] h-[3rem] object-cover rounded-[50%] overflow-hidden bg-gray-500  '>
                        <img src="https://pbs.twimg.com/profile_images/731848457703555072/lAwjqi6o_400x400.jpg" alt="profile_img" />
                    </span>
                    <span className='text-[1.5rem] font-[400] flex items-center gap-x-[0.5rem]  '>
                        Johnny Harris
                        <FaCheckCircle className='text-[1.2rem]  ' />
                    </span>
                </div>

                <div className="w-full max-h-[38%] text-[1.4rem] break-words overflow-hidden  ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vero tenetur
                    fugit sint consequatur cum repudiandae harum veniam quod inventore, nam,
                    perferendis itaque? Et esse itaque dolores ex perferendis! Qui!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vero tenetur
                    fugit sint consequatur cum repudiandae harum veniam quod inventore, nam,
                    perferendis itaque? Et esse itaque dolores ex perferendis! Qui!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vero tenetur
                    fugit sint consequatur cum repudiandae harum veniam quod inventore, nam,
                    perferendis itaque? Et esse itaque dolores ex perferendis! Qui!
                </div>

            </div>
        </div>
    )
};

export default SearchedVideo;