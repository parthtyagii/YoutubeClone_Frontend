import React from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { MdSlowMotionVideo } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';


const ShrinkedMenu = () => {
    return (
        <div className='w-full h-full flex flex-col justify-start items-center overflow-auto ' >

            <div className='w-[90%] py-[1.5rem] rounded-[1rem] flex flex-col justify-center items-center gap-y-[0.5rem] hover:bg-gray-100 '>
                <MdHomeFilled className='text-[2.2rem]  ' />
                <span className='text-[0.8rem] '>Home</span>
            </div>

            <div className='w-[90%] py-[1.5rem] rounded-[1rem] flex flex-col justify-center items-center gap-y-[0.5rem] hover:bg-gray-100 '>
                <MdSlowMotionVideo className='text-[2.2rem]  ' />
                <span className='text-[0.8rem] '>Shorts</span>
            </div>

            <div className='w-[90%] py-[1.5rem] rounded-[1rem] flex flex-col justify-center items-center gap-y-[0.5rem] hover:bg-gray-100 '>
                <MdSubscriptions className='text-[2.2rem]  ' />
                <span className='text-[0.8rem] '>Subscriptions</span>
            </div>

            <div className='w-[90%] py-[1.5rem] rounded-[1rem] flex flex-col justify-center items-center gap-y-[0.5rem] hover:bg-gray-100 '>
                <MdVideoLibrary className='text-[2.2rem]  ' />
                <span className='text-[0.8rem] '>Library</span>
            </div>

        </div>
    )
};

export default ShrinkedMenu;