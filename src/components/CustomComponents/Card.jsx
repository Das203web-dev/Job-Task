// import UseData from '@/hooks/UseData';
// import React from 'react';

// const Card = () => {
//     const [jsonData] = UseData()
//     console.log(jsonData, 'line 6');
//     return (
//         <div className='w-full mx-auto'>
//             <h1 className='text-center font-bold text-2xl textShadow uppercase my-5'>Json place holder data</h1>
//             <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto'>
//                 {
//                     jsonData.map(d => <div className='shadow shadow-black rounded-lg p-5 bg-white hover:bg-gray-100 transition duration-300' key={d.id}>
//                         <h1 className='text-2xl font-light capitalize font-medium'>{d?.title}</h1>
//                         <p>{d.body}</p>
//                     </div>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Card;




import UseData from '@/hooks/UseData';
import React, { useEffect, useState } from 'react';
import { CiPlay1 } from "react-icons/ci";

const Card = () => {
    const [jsonData] = UseData();
    const [photos, setPhotos] = useState([])
    // console.log(jsonData, 'line 6');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    console.log(photos);
    return (
        <div className='w-full mx-auto'>
            <h1 className='text-center font-bold text-3xl text-black drop-shadow-2xl capitalize my-8 underline-offset-8 underline'>
                JSON Placeholder Data
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                {jsonData.slice(0, 9).map((d) => (
                    <div
                        className='rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-slate-200 hover:bg-white'
                        key={d.id}
                    >
                        <div className='p-5 flex flex-col'>
                            <h1 className='text-xl flex-grow font-semibold mb-2 capitalize text-gray-800'>
                                {d?.title}
                            </h1>
                            <p className='text-gray-600'>{d.body}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='grid grid-cols-5 w-full'>
                {
                    photos.map((photo, index) => <div key={index}> <img src={photo?.thumbnailUrl} alt="" /></div>)
                }
            </div> */}
        </div>
    );
};

export default Card;




