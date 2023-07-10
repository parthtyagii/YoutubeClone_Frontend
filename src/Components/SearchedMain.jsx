import React from 'react';
import ShrinkedMenu from './ShrinkedMenu';
import { BsDot } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import SearchedVideo from './SearchedVideo';





const SearchedMain = () => {
    return (
        <div className='w-full h-[auto] flex '>

            <div className="w-[5%] h-[90vh] sticky top-[10vh]  ">
                <ShrinkedMenu />
            </div>

            <div className="w-[95%] flex justify-center  ">
                <div className="w-[110rem] pt-[2rem] pb-[3rem] h-full flex flex-col gap-y-[2rem]  ">

                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />
                    <SearchedVideo />

                </div>
            </div>

        </div>
    )
};

export default SearchedMain;