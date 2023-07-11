import React from 'react';
import Video from './Video';



const VideopageMain = () => {

    return (
        <div className='w-full h-auto flex justify-center '>
            <div className="w-[120rem] h-full pt-[2rem] pb-[5rem] flex  ">
                <div className="w-[65%] h-full  ">
                    <Video />
                </div>

                <div className="w-[35%] h-[100vh] bg-green-300  ">

                    {/* related suggestion videos */}

                </div>
            </div>
        </div>
    )
};

export default VideopageMain;