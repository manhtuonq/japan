import React from 'react';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className='inline-flex items-center px-4 py-1 bg-red-400 text-white font-semibold rounded-xl'>
        {children}
    </span>
);

const Categories: React.FC<{ categories: string[] }> = ({ categories }) => (
    <div className='p-4'>
        <h2 className='p-2 text-xl text-red-600 font-semibold'>カテゴリー</h2>
        <div className='p-2 flex flex-wrap gap-2 shadow-md rounded-lg border min-h-32 items-start'>
            {categories.map((category, index) => (
                <Tag key={index}>{category}</Tag>
            ))}
        </div>
    </div>
);

export default Categories;
