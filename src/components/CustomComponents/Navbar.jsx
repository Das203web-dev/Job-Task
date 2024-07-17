import React from 'react';
import { IoLogoSnapchat } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { GiHamburgerMenu } from "react-icons/gi";




const Navbar = () => {
    return (

        // for larger devices 
        <div className='bg-black text-white py-5'>
            <div className='mx-auto w-full px-5 lg:p-0 lg:w-4/5 xl:w-2/3 flex justify-between font-light items-center text-xl'>
                <div className='flex items-center gap-2'>
                    <IoLogoSnapchat></IoLogoSnapchat>
                    LogoIpsum
                </div>
                <div className='flex items-center font-thin text-base gap-5'>
                    <div className={`gap-5 items-center hidden md:flex`}>
                        <FaSearch></FaSearch>
                        <MdEdit></MdEdit>
                        <MdMessage></MdMessage>
                        <IoIosNotifications></IoIosNotifications>
                        <BsThreeDots></BsThreeDots>
                    </div>
                    {/* <CgProfile></CgProfile> */}
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='md:hidden'>
                        <GiHamburgerMenu></GiHamburgerMenu>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Navbar;