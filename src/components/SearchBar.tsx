import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className='flex justify-center items-center py-4 bg-gray-100'>
            <input
                type='text'
                placeholder='食べ物やレストランを見つける...'
                className='w-4/5 max-w-lg px-4 py-2 rounded-md border border-gray-300'
            />
        </div>
    );
};

export default SearchBar;
