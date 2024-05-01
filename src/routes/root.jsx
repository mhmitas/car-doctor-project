import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Root;