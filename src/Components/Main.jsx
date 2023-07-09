import React from 'react';
import ShrinkedMenu from './ShrinkedMenu';



const Main = () => {
    return (
        <div className='w-full h-[900vh] flex  '>

            <div className="w-[5%] h-[90vh] sticky top-[10vh]  ">
                <ShrinkedMenu />
            </div>

            <div className="grow h-full flex bg-yellow-50 "></div>

        </div>
    )
};

export default Main;