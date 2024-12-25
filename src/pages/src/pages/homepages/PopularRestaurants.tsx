import React, { useRef, useState, useEffect } from 'react';

const PopularRestaurants: React.FC = () => {
    const restaurants = [
        { name: "McDonald's", menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' },
        { name: 'Starbuck', menu: ['BURGER', 'CHICKEN', 'FAST FOOD'], deliveryTime: '10-15 mins' }
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    const [showLeftButton, setShowLeftButton] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const isAtStart = scrollRef.current.scrollLeft === 0;
            setShowLeftButton(!isAtStart);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
            checkScroll();
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            checkScroll();
        }
    };

    useEffect(() => {
        checkScroll();
    }, []);

    return (
        <div
            className='p-6 rounded-lg mt-6'
            style={{
                background: 'linear-gradient(135deg, #ff1100, #ffdede)',
                paddingLeft: '40px',
                paddingRight: '40px'
            }}
        >
            <h2 className='text-lg font-bold text-white mb-4'>人気レストラン</h2>
            <div className='relative'>
                {showLeftButton && (
                    <button
                        onClick={scrollLeft}
                        className='absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-colors'
                        style={{ zIndex: 10 }}
                    >
                        <span
                            className='text-3xl'
                            style={{
                                transform: 'scaleY(6)',
                                display: 'inline-block',
                                lineHeight: 0,
                                fontWeight: 'lighter'
                            }}
                        >
                            &lt;
                        </span>
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className='flex space-x-4 overflow-hidden'
                    style={{
                        width: '100%',
                        maxWidth: '100%',
                        scrollBehavior: 'smooth',
                        overflow: 'hidden'
                    }}
                >
                    {restaurants.map((restaurant, index) => (
                        <div
                            key={index}
                            className='bg-white p-4 rounded-lg shadow-md flex flex-col min-w-[300px] relative'
                        >
                            <div className='w-full h-32 bg-gray-300 rounded-lg overflow-hidden mb-4'>
                                <img src='starbucks.jpg' alt={restaurant.name} className='w-full h-full object-cover' />
                            </div>

                            <div className='absolute top-2 right-2 text-red-500'>❤️</div>
                            <div className='text-sm font-bold'>{restaurant.name}</div>
                            <div className='text-xs text-gray-500'>{restaurant.deliveryTime}</div>
                            <div className='flex flex-wrap gap-1 mt-2'>
                                {restaurant.menu.map((item, i) => (
                                    <span key={i} className='px-2 py-1 text-xs bg-gray-200 rounded-full text-gray-600'>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className='absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-colors'
                    style={{ zIndex: 10 }}
                >
                    <span
                        className='text-3xl text-red-500'
                        style={{
                            transform: 'scaleY(6)',
                            display: 'inline-block',
                            lineHeight: 0,
                            fontWeight: 'lighter'
                        }}
                    >
                        &gt;
                    </span>
                </button>
            </div>
        </div>
    );
};

export default PopularRestaurants;
