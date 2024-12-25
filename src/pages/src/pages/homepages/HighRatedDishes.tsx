import React, { useRef, useState, useEffect } from 'react';

const HighRatedDishes: React.FC = () => {
    const dishes = Array(10).fill({
        price: '5.50',
        rating: '4.5',
        name: 'Salmon Salad',
        deliveryTime: '10-15 mins'
    });

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
            className='p-6 rounded-lg'
            style={{
                background: 'linear-gradient(135deg, #ffdede, #ff1100)',
                paddingLeft: '40px',
                paddingRight: '40px'
            }}
        >
            <h2 className='text-lg font-bold text-red-500 mb-4'>高評価の料理</h2>
            <div className='relative'>
                {showLeftButton && (
                    <button
                        onClick={scrollLeft}
                        className='absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-colors'
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
                    {dishes.map((dish, index) => (
                        <div
                            key={index}
                            className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center'
                            style={{
                                minWidth: '150px',
                                flex: '1 0 auto'
                            }}
                        >
                            <div className='text-sm font-bold'>${dish.price}</div>
                            <div className='w-full h-32 bg-gray-300 rounded-lg overflow-hidden mb-4'>
                                <img
                                    src='link-to-your-image.jpg'
                                    alt={dish.name}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='text-yellow-500 text-sm'>⭐ {dish.rating}</div>
                            <div className='text-sm'>{dish.name}</div>
                            <div className='text-xs text-gray-500'>{dish.deliveryTime}</div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className='absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-colors'
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
                        &gt;
                    </span>
                </button>
            </div>
        </div>
    );
};

export default HighRatedDishes;
