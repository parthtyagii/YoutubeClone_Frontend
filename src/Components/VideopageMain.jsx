import React from 'react';
import Video from './Video';



const VideopageMain = () => {

    return (
        <div className='w-full h-[200vh] flex justify-center bg-red-100 '>
            <div className="w-[120rem] h-full flex bg-blue-100  ">
                <div className="w-[65%] h-full bg-green-100 ">
                    <Video />
                </div>

                <div className="w-[35%] h-full bg-green-300  ">

                </div>
            </div>
        </div>
    )
};

export default VideopageMain;