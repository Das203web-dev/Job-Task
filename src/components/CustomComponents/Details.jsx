import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaPlus } from "react-icons/fa6";


const Details = () => {
    const [details, setDetails] = useState([]);
    const data = [
        {
            "title": "The Ultimate Guide to Front-End Development",
            "description": "Front-end development is a crucial part of web development, focusing on the user interface and user experience. This comprehensive guide covers everything from HTML and CSS basics to advanced JavaScript frameworks and libraries. You'll learn about responsive design, accessibility, and performance optimization, ensuring you can create stunning, user-friendly websites. Whether you're a beginner or an experienced developer, this guide has something for everyone.",
            "tags": [
                "Design",
                "Development",
                "FrontEnd"
            ]
        },
        {
            "title": "Mastering Back-End Development",
            "description": "Back-end development is the backbone of any web application, handling server-side logic, database management, and integration with front-end services. This guide delves into the core technologies used in back-end development, including server-side languages like Node.js, Python, and Ruby, as well as databases such as MySQL, MongoDB, and PostgreSQL. You'll also learn about API design, security best practices, and deployment strategies. Perfect for developers looking to enhance their server-side skills and build robust, scalable applications.",
            "tags": [
                "node.js",
                "Design",
                "Deployment",
            ]
        }
    ]
    return (
        <div className=' flex flex-col gap-10 w-full'>
            {
                data.map((d, index) => <div className='relative bg-slate-200 rounded-lg gap-2 flex flex-col md:p-3 p-2' key={index}>
                    <div className=''>
                        <h1 className='text-xl font-bold mb-5'>{d.title}</h1>
                        <div className='overflow-y-scroll hide-scrollbar max-h-40 h-20'>
                            <p className='first-letter:ml-10'>{d.description}</p>
                        </div>
                    </div>
                    <div className='h-[0.3px] w-full bg-blue-600'></div>
                    <div className='flex justify-between items-center gap-2 md:gap-3 w-full bg-slate-200 py-2'>
                        <div className='flex md:gap-3 gap-1 items-center'>
                            <div className='flex md:gap-2 gap-1'>
                                {d.tags.map((tag, index) => <p className='bg-white rounded-full px-2 py-1 text-[8px] md:text-[10px] md:text-nowrap' key={index}>#{tag}</p>)}
                            </div>
                            <div className='h-4 w-4 flex justify-center items-center rounded-full bg-white'>
                                <FaPlus className='text-xs'></FaPlus>
                            </div>
                        </div>

                        <button className="bg-transparent hover:bg-transparent font-bold text-blue-700 text-nowrap text-sm md:text-base">Read More</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;