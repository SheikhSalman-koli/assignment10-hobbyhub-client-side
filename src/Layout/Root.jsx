import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Componants/header/Nav';
import Footer from '../Componants/Footer';

const Root = () => {
    return (
        <div className='w-full lg:max-w-10/12 mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;