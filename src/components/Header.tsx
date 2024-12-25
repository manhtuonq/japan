import React from 'react';
import toggleButton from '../assets/img/toggle btn.svg';
import SearchBar from './SearchBar';

interface HeaderProps {
    toggleSidebar: () => void;
    isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <div className='w-full h-24 bg-white shadow-md flex items-center justify-between px-4'>
            <div>
                <img onClick={toggleSidebar} src={toggleButton} className='w-28 mt-6 cursor-pointer' />
            </div>
            <div className='flex-grow mx-4'>
                <SearchBar />
            </div>

            {/* TODO */}
            <div className='flex items-center space-x-4'>
                <div className='w-11 h-11 bg-gray-300 rounded-md'></div>
            </div>
        </div>
    );
};

export default Header;
