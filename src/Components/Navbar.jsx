import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoSearch } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiVideoPlus } from 'react-icons/bi';
import { AiFillAudio } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';


const Navbar = ({ onOpen}) => {

    return (
        <div className='w-full h-[10vh] sticky top-0 z-10 flex text-[#282828] bg-white '>

            <div className="w-[20%] h-full ml-[1.5rem] flex justify-start items-center gap-x-[1.5rem] ">
                <button onClick={()=>onOpen()} className='p-[0.8rem] rounded-[50%] flex justify-center items-center hover:bg-gray-200 '>
                    <RxHamburgerMenu className='text-[2rem]  ' />
                </button>
                <span className='h-full flex items-center gap-x-[0.5rem] text-[2rem] font-[700] '>
                    <BsYoutube className='text-[2.6rem] text-[#FF0000]  ' />
                    YouTube
                </span>
            </div>

            <div className="w-[65%] h-full flex justify-center items-center gap-x-[1rem]  ">
                <div className="w-[70%] h-[65%] flex items-center rounded-[5rem] border-[1px] border-gray-400 overflow-hidden ">
                    <input type="text" className='w-[88%] h-full text-[1.5rem] font-[400] border-r-[1px] border-gray-400 rounded-l-[5rem] px-[3%] ' placeholder='Search' />
                    <button className='w-[12%] h-full text-[1.8rem] flex justify-center items-center bg-gray-100  '>
                        <GoSearch />
                    </button>
                </div>
                <button className='p-[0.8rem] rounded-[50%] flex justify-center items-center hover:bg-gray-200 '>
                    <AiFillAudio className='text-[2rem] ' />
                </button>
            </div>

            <div className="w-[15%] h-full px-[0rem] flex justify-center items-center gap-x-[1rem]  ">
                <button className='p-[0.8rem] rounded-[50%] flex justify-center items-center hover:bg-gray-200 '>
                    <BiVideoPlus className='text-[2.5rem] ' />
                </button>
                <button className='p-[0.8rem] rounded-[50%] flex justify-center items-center hover:bg-gray-200 '>
                    <IoMdNotificationsOutline className='text-[2.5rem] ' />
                </button>
                <span className='w-[3.5rem] h-[3.5rem] rounded-[50%] overflow-hidden bg-gray-400 '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFPRd55XDz7WDI6tXStYiSNLJcMfcVi6Wvg&usqp=CAU" alt="profile_image" className='w-full h-full object-cover  ' />
                </span>
            </div>

        </div>
    )
};

export default Navbar;