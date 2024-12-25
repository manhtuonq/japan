import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '@components/SideBar';
import Footer from '@components/Footer';
import Header from '@components/Header';

const BaseLayout: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className='relative min-h-screen flex flex-col'>
            <Header toggleSidebar={toggleSidebar} isVisible={isSidebarVisible} />

            <div className='relative flex flex-grow flex-col'>
                <div className='relative flex flex-grow'>
                    <div
                        className={`z-10 left-0 w-64 shadow-lg md:w-1/4 lg:w-1/5 transition-transform duration-300 ${
                            isSidebarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'
                        }`}
                    >
                        <SideBar isVisible={isSidebarVisible} />
                    </div>

                    {/* Main Content */}
                    <div className='relative flex-grow flex'>
                        <Outlet />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
