import React from 'react';
import { Button } from '../ui/button';
import { FaPlus } from "react-icons/fa6";


const MoreButton = () => {
    return (
        <div className='flex justify-end w-full'>
            <Button className="bg-transparent text-center hover:bg-transparent p-0 gap-1 text-blue-600 flex items-center"><span>More</span> <FaPlus className='text-xs'></FaPlus></Button>
        </div>
    );
};

export default MoreButton;