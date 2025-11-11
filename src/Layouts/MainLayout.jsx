import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* <button className='btn join-item'>Add Coffee</button> */}
        </div>
    );
};

export default MainLayout;