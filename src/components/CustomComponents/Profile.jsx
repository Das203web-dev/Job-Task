import React, { useEffect } from 'react';
import pro from '../../assets/images/pro.jpg'
import { GoDotFill } from "react-icons/go";
import { MdAddAPhoto } from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import Details from './Details';
import Media from './Media';





const Profile = () => {
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));

    // }, [])
    return (
        <div className='mb-5 md:m-0'>
            <div className='relative flex h-fit items-start gap-1 w-full'>
                <img className='md:w-[30%] md:h-[30%] w-16 h-auto rounded-full top-1/2 -translate-y-1/2' src={pro} alt="" />
                <div className='flex justify-between items-end lg:items-baseline w-full'>
                    <div>
                        <div className='flex items-center md:pt-4 lg:gap-1'>
                            <p className='font-bold text-nowrap text-base md:text-xl'>John Doe </p>
                            <GoDotFill className='text-xs'></GoDotFill>
                            <a className='text-blue-700' href="#"> @johndoe</a>
                        </div>
                        <p className='flex gap-2 items-center text-sm'>Astrophotographer <MdAddAPhoto></MdAddAPhoto></p>
                        <p className='flex gap-2 items-center text-sm'>Gamer <TbDeviceGamepad2></TbDeviceGamepad2></p>
                    </div>
                    <button className="rounded-full text-white bg-blue-700 text-xs md:text-base font-normal px-3 py-1">Follow</button>
                </div>

            </div>
            <div className='md:hidden mt-5'>
                <Media></Media>
            </div>
        </div>
    );
};

export default Profile;