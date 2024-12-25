import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className='fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-between px-6 py-3'>
            <button className='text-xl text-orange-500'>🏠</button>
            <button className='text-xl text-gray-500'>💬</button>
            <button className='text-xl text-gray-500'>❤️</button>
            <button className='text-xl text-gray-500'>👤</button>
        </nav>
    );
};

export default Navigation;
