import React from 'react';
import ShrinkedMenu from './ShrinkedMenu';
import HomeVideoSuggestions from './HomeVideoSuggestions';



const Main = () => {
    return (
        <div className='w-full h-[auto] flex '>

            <div className="w-[5%] h-[90vh] sticky top-[10vh]  ">
                <ShrinkedMenu />
            </div>

            <div className="w-[95%] h-full flex flex-col items-center  ">
                <div className="w-[95%] h-[10vh] sticky top-[10vh] flex items-center gap-x-[1rem] overflow-auto bg-white  ">
                    <button className='px-[1.2rem] py-[0.6rem] rounded-[0.8rem] text-[1.5rem] text-black bg-gray-100 hover:bg-gray-200  '>
                        All
                    </button>

                    <button className='px-[1.2rem] py-[0.6rem] rounded-[0.8rem] text-[1.5rem] text-black bg-gray-100 hover:bg-gray-200  '>
                        Computer
                    </button>

                    <button className='px-[1.2rem] py-[0.6rem] rounded-[0.8rem] text-[1.5rem] text-black bg-gray-100 hover:bg-gray-200  '>
                        Gaming
                    </button>

                    <button className='px-[1.2rem] py-[0.6rem] rounded-[0.8rem] text-[1.5rem] text-black bg-gray-100 hover:bg-gray-200  '>
                        All
                    </button>

                    <button className='px-[1.2rem] py-[0.6rem] rounded-[0.8rem] text-[1.5rem] text-black bg-gray-100 hover:bg-gray-200  '>
                        Computer
                    </button>

                    <button className='px-[1.2rem] py-[0.6rem] rounded-[0.8rem] text-[1.5rem] text-black bg-gray-100 hover:bg-gray-200  '>
                        Gaming
                    </button>
                </div>

                <div className="w-[95%] grow flex   ">

                    <HomeVideoSuggestions />

                </div>
            </div>
        </div>
    )
};

export default Main;