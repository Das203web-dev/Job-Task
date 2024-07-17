import React from 'react';
import bgImg from '../../assets/images/img.jpg'

const Banner = () => {
    return (
        <div className='w-full h-[400px] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgImg})` }}>
            {/* other content goes here if needed */}
        </div>
    );
};

export default Banner;