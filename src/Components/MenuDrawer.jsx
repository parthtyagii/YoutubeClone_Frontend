import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useStatStyles, Input, Button, } from '@chakra-ui/react';
import HomeVideoSuggestions from './HomeVideoSuggestions';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdHomeFilled } from 'react-icons/md';
import { MdSlowMotionVideo } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';
import { PiMusicNoteLight } from 'react-icons/pi';
import { LuClapperboard } from 'react-icons/lu';
import { HiMiniSignal } from 'react-icons/hi2';
import { FaGamepad } from 'react-icons/fa';
import { ImNewspaper } from 'react-icons/im';
import { GoTrophy } from 'react-icons/go';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiHanger } from 'react-icons/gi';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { RiFeedbackLine } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';


const MenuDrawer = ({ isOpen, onClose }) => {

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <div className="w-full h-full flex flex-col ">
                        <div className="w-full px-[2rem] text-[2rem] font-[700] pt-[1.6rem] pb-[1rem] flex items-center gap-x-[1.8rem] ">
                            <RxHamburgerMenu onClick={()=>onClose()} className="cursor-pointer " /> <span className="w-auto h-auto flex items-center gap-x-[0.5rem] cursor-pointer "><BsYoutube className='text-[2.6rem] text-[red] ' /> Youtube</span>
                        </div>

                        <div className="w-full h-full px-[1rem] text-[1.5rem] flex flex-col overflow-auto ">

                            <div className="w-full py-[1rem] flex flex-col  ">
                                <button className="w-full p-[1rem] py-[0.8rem] flex rounded-[0.8rem] items-center gap-x-[2rem] text-[1.4rem] hover:bg-gray-100  "><MdHomeFilled className="text-[2rem] " /> Home</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex rounded-[0.8rem] items-center gap-x-[2rem] text-[1.4rem] hover:bg-gray-100  "><MdSlowMotionVideo className="text-[2rem] " /> Shorts</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex rounded-[0.8rem] items-center gap-x-[2rem] text-[1.4rem] hover:bg-gray-100  "><MdSubscriptions className="text-[2rem] " /> Subscriptions</button>
                            </div>

                            <div className="w-full py-[1rem] flex flex-col border-y-[1px] border-gray-300  ">
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.7rem] font-[500] hover:bg-gray-100  ">Explore</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><HiFire className="text-[2rem] " />Trending</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><FiShoppingBag className="text-[2rem] " />Shopping</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><PiMusicNoteLight className="text-[2rem] " /> Music</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><LuClapperboard className="text-[2rem] " />Movies</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><HiMiniSignal className="text-[2rem] " />Live</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><FaGamepad className="text-[2rem] " />Gaming</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><ImNewspaper className="text-[2rem] " />News</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><GoTrophy className="text-[2rem] " /> Sports</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><HiOutlineLightBulb className="text-[2rem] " />Learning</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><GiHanger className="text-[2rem] " />Fashion & Beauty</button>
                            </div>

                            <div className="w-full py-[1rem] flex flex-col ">
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><AiOutlineSetting className="text-[2rem] " /> Settings</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><BsFlag className="text-[2rem] " /> Report history</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><BiHelpCircle className="text-[2rem] " /> Help</button>
                                <button className="w-full p-[1rem] py-[0.8rem] flex items-center gap-x-[2rem] rounded-[0.8rem] text-[1.4rem] hover:bg-gray-100  "><RiFeedbackLine className="text-[2rem] " /> Send feedback</button>
                            </div>

                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
};

export default MenuDrawer;