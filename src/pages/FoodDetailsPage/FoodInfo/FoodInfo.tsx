import React from 'react';
import pathIcon from '@assets/img/path-icon.png';
import { formatPrice } from '@/utils/priceFormatter';
import FoodCategories from './FoodCategories';

interface FoodInfoProps {
    restaurantName: string;
    location: string;
    price: number;
    details: string;
    categories: string[];
}

const FoodInfo: React.FC<FoodInfoProps> = ({ restaurantName, location, price, details, categories }) => (
    <div>
        <div className='flex justify-between text-xl items-center p-4 mt-2'>
            <div>
                <div className='flex text-red-600'>
                    <img src={pathIcon} className='h-6 mr-2' />
                    <div className='text-xl font-bold mb-2'>{restaurantName}</div>
                </div>
                <div className='italic mt-2'>{location}</div>
            </div>
            <div className='text-3xl text-red-600 font-bold'>{formatPrice(price, 'VND')}</div>
        </div>
        <div className='flex border-t p-4'>
            <div className='w-1/2'>
                <h2 className='text-red-600 text-2xl font-semibold'>詳細情報</h2>
                <p className='mt-2 text-slate-500 pr-20'>{details}</p>
            </div>
            <div className='w-1/2'>
                <FoodCategories categories={categories} />
            </div>
        </div>
    </div>
);

export default FoodInfo;
