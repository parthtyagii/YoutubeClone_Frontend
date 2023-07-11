import React from 'react';
import Video from './Video';
import VideopageSuggestions from './VideopageSuggestions';



const VideopageMain = () => {

    return (
        <div className='w-full h-auto flex justify-center '>
            <div className="w-[120rem] h-full pt-[2rem] pb-[5rem] flex  ">
                <div className="w-[65%] h-full  ">
                    <Video />
                </div>

                <div className="w-[35%] h-auto  ">
                    <VideopageSuggestions />
                </div>
            </div>
        </div>
    )
};

export default VideopageMain;