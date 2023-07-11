import React from 'react';
import { BsDot } from 'react-icons/bs';



const VideopageSuggestionsVideo = () => {

    return (
        <div className="w-full h-[12rem] flex gap-x-[1rem]  ">
            <div className="w-[45%] h-full rounded-[1rem] relative overflow-hidden bg-gray-200  ">
                <img className="w-full h-full object-cover " src="https://static.skillshare.com/uploads/video/thumbnails/3d4e26f38f2cb702b655467f0be55771/448-252" alt="thumbnail" />
                <span className="py-[0rem] px-[0.5rem] absolute bottom-[0.5rem] right-[1rem] rounded-[0.5rem] text-[1.2rem] font-[500] text-white   bg-black ">8:32</span>
            </div>

            <div className="w-[55%] h-full flex flex-col  ">
                <div className="w-full max-h-[40%] mb-[0.2rem] text-[1.5rem] font-[500] overflow-hidden  ">
                    How I Manage My Time - The Trident Calendar System
                </div>

                <div className="w-full text-[1.25rem] font-[500] text-gray-500  ">
                    Ali Abdal
                </div>

                <div className="w-full text-[1.25rem] font-[500] whitespace-pre flex items-center text-gray-500  ">
                    32K views<BsDot />2 weeks ago
                </div>
            </div>
        </div>
    )
};

export default VideopageSuggestionsVideo;