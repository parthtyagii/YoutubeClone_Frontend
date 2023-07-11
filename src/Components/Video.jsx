import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';


const Video = () => {

    return (
        <div className="w-full h-full flex flex-col items-center gap-y-[1rem] ">

            <div className="w-[90%] h-[35rem] bg-gray-400 ">
                <img className="w-full h-full object-cover " src="https://yt3.googleusercontent.com/ytc/AOPolaTVhmEDWywmORLSkp8xUk_4WH2HymdQWBKPloncmQ=s900-c-k-c0x00ffffff-no-rj " alt="video" />
            </div>

            <div className="w-[90%] text-[2rem] font-[500] break-words  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            <div className="w-[90%] flex justify-between items-center  ">
                <div className="w-auto h-auto flex items-center gap-x-[1rem]  ">
                    <span className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-500 ">
                        <img className="w-full h-full object-cover " src="https://yt3.googleusercontent.com/ytc/AOPolaTVhmEDWywmORLSkp8xUk_4WH2HymdQWBKPloncmQ=s900-c-k-c0x00ffffff-no-rj" alt="profile_img" />
                    </span>

                    <span className=" h-auto flex flex-col  ">
                        <span className="text-[1.7rem] font-[500] flex items-center gap-x-[0.5rem]  ">Mrwhosetheboss <FaCheckCircle className='text-[1.3rem]  ' /></span>
                        <span className="text-[1.2rem] font-[500] text-gray-500 ">15.9M subscribers</span>
                    </span>

                    <button className="p-[0.8rem] px-[1.5rem] rounded-[5rem] text-[1.4rem] font-[500] flex items-center gap-x-[0.5rem] text-white bg-black  ">
                        {/* <IoMdNotificationsOutline className="text-[2.2rem]  " /> */}
                        <span>Subscribed</span>
                    </button>
                </div>

                <div className="w-auto h-auto flex items-center gap-x-[1rem] ">
                    <span className="py-[0.8rem] flex items-center rounded-[5rem] bg-gray-200 ">
                        <button className="px-[1.5rem] text-[1.4rem] font-[500] flex items-center gap-x-[0.5rem] border-r-[1px] border-black "><AiOutlineLike className="text-[2.2rem] " /> 123K</button>
                        <button className="px-[1.5rem] text-[1.4rem] font-[500] flex items-center "><AiOutlineDislike className="text-[2.2rem] " /></button>
                    </span>

                    <span className="py-[1rem] px-[1.5rem] rounded-[5rem] bg-gray-200  ">
                        <button className="text-[1.4rem] font-[500] flex items-center gap-x-[0.5rem] "><PiShareFat className="text-[2.2rem]  " />Share</button>
                    </span>
                </div>
            </div>

            <div className="w-[90%] h-auto rounded-[1rem] p-[1rem] flex flex-col gap-y-[0.5rem] whitespace-pre-wrap bg-gray-200  ">
                <div className="w-full text-[1.4rem] font-[500]  ">
                    2M  4 days ago
                </div>

                <div className="text-[1.5rem]  ">
                    Zenfone 10 has fixed (almost) every nitpick I had with the 9.

                    That shirt: http://shop.MKBHD.com
                    ASUS Zenfone 10: https://geni.us/mMkgtdp

                    Tech I'm using right now: https://www.amazon.com/shop/MKBHD

                    Playlist of MKBHD Intro music: https://goo.gl/B3AWV5

                    Phone provided by Asus for review.

                    ~
                    http://twitter.com/MKBHD
                    http://instagram.com/MKBHD
                    http://facebook.com/MKBHD

                </div>

                <div className="w-full text-[1.4rem] font-[600]  ">
                    Show less
                </div>
            </div>

            <div className="w-[90%] text-[1.8rem] flex ">
                611 comments
            </div>


            {/* here new comments are written... */}

            <div className="w-[90%] p-[1rem] flex flex-col gap-y-[1rem] whitespace-pre-wrap  ">
                <div className="w-full h-auto flex gap-x-[2rem]  ">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-400  ">
                        <img className="w-full h-full object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchjdsqap2SgoTH3rBXtdoqt40whWkNvS5Lg&usqp=CAU" alt="profile_img" />
                    </div>

                    <div className="flex flex-1 flex-col gap-y-[1rem] ">
                        <textarea className="w-full h-auto border-0 border-b-[1px] border-black outline-none focus:border-b-[2px] py-[0.5rem] text-[1.5rem] flex-1 bg-transparent placeholder:text-gray-500 " placeholder='Add a comment...' rows={1}></textarea>
                        <div className="w-full flex justify-end gap-x-[1rem] ">
                            <button className="text-[1.4rem] font-[500] py-[0.6rem] px-[1.5rem] rounded-[5rem] hover:bg-gray-200 ">Cancel</button>
                            <button className="text-[1.4rem] font-[500] py-[0.6rem] px-[1.5rem] rounded-[5rem] bg-blue-700 text-white ">Comment</button>
                        </div>
                    </div>
                </div>
            </div>



            {/*  All the new comments will be added here... */}

            <div className="w-[90%] h-auto p-[1rem] flex flex-col gap-y-[2rem] whitespace-pre-wrap  ">

                <div className="w-full h-auto flex gap-x-[2rem]  ">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-400  ">
                        <img className="w-full h-full object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchjdsqap2SgoTH3rBXtdoqt40whWkNvS5Lg&usqp=CAU" alt="profile_img" />
                    </div>

                    <div className="flex flex-1 flex-col whitespace-pre-wrap  ">
                        <div className="w-full text-[1.4rem] font-[500]  ">rauhlsharma</div>
                        <div className="w-full text-[1.5rem]  ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas, quasi molestiae quam placeat minima illum iusto
                            esse voluptates magnam, delectus nobis corporis totam maiores omnis exercitationem reprehenderit ipsa neque?
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex gap-x-[2rem]  ">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-400  ">
                        <img className="w-full h-full object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchjdsqap2SgoTH3rBXtdoqt40whWkNvS5Lg&usqp=CAU" alt="profile_img" />
                    </div>

                    <div className="flex flex-1 flex-col whitespace-pre-wrap  ">
                        <div className="w-full text-[1.4rem] font-[500]  ">rauhlsharma</div>
                        <div className="w-full text-[1.5rem]  ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas, quasi molestiae quam placeat minima illum iusto
                            esse voluptates magnam, delectus nobis corporis totam maiores omnis exercitationem reprehenderit ipsa neque?
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex gap-x-[2rem]  ">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-400  ">
                        <img className="w-full h-full object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchjdsqap2SgoTH3rBXtdoqt40whWkNvS5Lg&usqp=CAU" alt="profile_img" />
                    </div>

                    <div className="flex flex-1 flex-col whitespace-pre-wrap  ">
                        <div className="w-full text-[1.4rem] font-[500]  ">rauhlsharma</div>
                        <div className="w-full text-[1.5rem]  ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas, quasi molestiae quam placeat minima illum iusto
                            esse voluptates magnam, delectus nobis corporis totam maiores omnis exercitationem reprehenderit ipsa neque?
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex gap-x-[2rem]  ">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-400  ">
                        <img className="w-full h-full object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchjdsqap2SgoTH3rBXtdoqt40whWkNvS5Lg&usqp=CAU" alt="profile_img" />
                    </div>

                    <div className="flex flex-1 flex-col whitespace-pre-wrap  ">
                        <div className="w-full text-[1.4rem] font-[500]  ">rauhlsharma</div>
                        <div className="w-full text-[1.5rem]  ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas, quasi molestiae quam placeat minima illum iusto
                            esse voluptates magnam, delectus nobis corporis totam maiores omnis exercitationem reprehenderit ipsa neque?
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex gap-x-[2rem]  ">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-400  ">
                        <img className="w-full h-full object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchjdsqap2SgoTH3rBXtdoqt40whWkNvS5Lg&usqp=CAU" alt="profile_img" />
                    </div>

                    <div className="flex flex-1 flex-col whitespace-pre-wrap  ">
                        <div className="w-full text-[1.4rem] font-[500]  ">rauhlsharma</div>
                        <div className="w-full text-[1.5rem]  ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas, quasi molestiae quam placeat minima illum iusto
                            esse voluptates magnam, delectus nobis corporis totam maiores omnis exercitationem reprehenderit ipsa neque?
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex gap-x-[2rem]  ">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden bg-gray-400  ">
                        <img className="w-full h-full object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchjdsqap2SgoTH3rBXtdoqt40whWkNvS5Lg&usqp=CAU" alt="profile_img" />
                    </div>

                    <div className="flex flex-1 flex-col whitespace-pre-wrap  ">
                        <div className="w-full text-[1.4rem] font-[500]  ">rauhlsharma</div>
                        <div className="w-full text-[1.5rem]  ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas, quasi molestiae quam placeat minima illum iusto
                            esse voluptates magnam, delectus nobis corporis totam maiores omnis exercitationem reprehenderit ipsa neque?
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Video;