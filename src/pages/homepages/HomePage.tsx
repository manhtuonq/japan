import React from 'react';
import HighRatedDishes from './HighRatedDishes';
import PopularRestaurants from './PopularRestaurants';

const HomePage: React.FC = () => {
    return (
        <div className='w-full bg-gray-50'>
            <div className='max-w-screen-xl mx-auto w-full'>
                <div className='flex items-center py-8 px-4'>
                    <p className='text-red-500 font-bold text-xl flex-grow'>今日はお昼ご飯に何が食べたいですか？</p>
                    <button
                        className='px-4 py-2 rounded-lg text-black font-bold bg-gradient-to-r from-pink-100 to-red-500 hover:from-red-500 hover:to-red-700 shadow-md transition-all'
                        onClick={() => alert('カスタマイズを選択しました！')}
                    >
                        メニューのカスタマイズ
                    </button>
                </div>

                <section className='py-8 px-4'>
                    <HighRatedDishes />
                </section>

                <section className='py-8 px-4'>
                    <PopularRestaurants />
                </section>
            </div>
        </div>
    );
};

export default HomePage;
