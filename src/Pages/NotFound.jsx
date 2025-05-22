import React from 'react';
import notFound from '../assets/404.jpeg'

const NotFound = () => {
    return (
        <div>
            <div className='max-w-sm mx-auto my-10 space-y-4'> 
            <h1 className='text-5xl font-bold text-red-500 text-center'>Page Not Found</h1>
            <img className='w-[450px] h-[270px]' src={notFound} alt="" />
        </div>
        </div>
    );
};

export default NotFound;