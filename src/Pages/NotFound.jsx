import React from 'react';
import notFound from '../assets/404.jpeg'
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div>
            <div className='max-w-sm mx-auto my-10 space-y-4'>
                <h1 className='text-5xl font-bold text-red-500 text-center'>Page Not Found</h1>
                <img className='w-[450px] h-[270px]' src={notFound} alt="" />
                <Link to='/' className='btn bg-fuchsia-400 text-black hover:text-fuchsia-400 hover:bg-black'>Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;