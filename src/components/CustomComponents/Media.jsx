import React from 'react';
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.avif'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.avif'
import { Button } from '../ui/button';
import MoreButton from '../SharedComponents/MoreButton';
import vid1 from '../../assets/videos/vid1.mp4'
import vid2 from '../../assets/videos/vid2.mp4'
import vid3 from '../../assets/videos/vid3.mp4'
import vid4 from '../../assets/videos/vid4.mp4'
import { CiPlay1 } from "react-icons/ci";


// import img5 from '../../assets/images/5.jpg'

const Media = () => {
    const images = [img1, img2, img3, img4]
    const videos = [vid1, vid2, vid3, vid4]
    return (
        <div className='flex md:flex-col flex-row gap-5 md:gap-0 w-full'>
            {/* photo section  */}
            <div className='md:pt-4 w-full'>
                <h1 className='font-semibold mb-2'>Photos</h1>
                <div className='grid grid-cols-2 rounded-lg overflow-hidden h-32 md:h-auto'>
                    {
                        images.map((image, index) => <img className='md:h-40 h-16 w-full' key={index} src={image} alt="" />)
                    }
                </div>
                <MoreButton></MoreButton>
            </div>

            {/* video section  */}
            <div className='w-full'>
                <h1 className='font-semibold mb-2'>Videos</h1>
                <div className='grid grid-cols-3 gap-1 w-full h-32 md:h-auto'>
                    {
                        videos.map((video, index) => <div key={index} className={`w-full h-full relative group overflow-hidden ${index === 0 ? "col-span-3" : ""}`}>
                            <video className='w-full h-fit rounded-lg' src={video}></video>
                            <div className='w-full h-full bg-black text-white bg-opacity-50 absolute top-0 hidden group-hover:flex transition-opacity duration-1000 ease-in-out justify-center items-center rounded-lg'>
                                <button><CiPlay1 className='text-4xl'></CiPlay1></button>
                            </div>
                        </div>)
                    }
                </div>

                <MoreButton></MoreButton>
            </div>
        </div>
    );
};

export default Media;