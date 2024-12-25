import React from 'react';
import { NavLink } from 'react-router-dom';
import sidebarItems from '@configs/sidebarItems';

interface SideBarProps {
    isVisible: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isVisible }) => {
    return (
        <div
            className={`min-h-screen w-[386px] opacity-95 bg-gradient-to-r from-[#ff8486] to-[#ffd1d1] shadow transform transition-transform duration-300 ease-in-out z-40 ${
                isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className='flex flex-col p-4'>
                {sidebarItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center mb-4 p-3 rounded-md ${isActive ? 'bg-[#ffd1d1]' : 'hover:bg-[#ffe4e4]'}`
                        }
                    >
                        {item.icon && <item.icon className='w-6 h-6 mr-4' />}
                        <span className="text-black text-base font-['Roboto']">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
