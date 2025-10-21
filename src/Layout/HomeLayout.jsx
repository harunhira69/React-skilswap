import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const HomeLayout = () => {
    return (
        <div>
         <header>
               <Navbar></Navbar>
         </header>
            <main className='min-h-screen w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;