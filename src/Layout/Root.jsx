import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Componants/header/Nav';

const Root = () => {
    return (
        <div className='max-w-full lg:max-w-10/12 mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;