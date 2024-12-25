import React, { useState } from 'react';
import arrowLeft from '@assets/img/arrow-left.png';
import arrowRight from '@assets/img/arrow-right.png';

interface ImageSliderProps {
    images: string[];
    itemsToShow?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, itemsToShow = 4 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = images.length;
    const maxIndex = Math.max(0, totalItems - itemsToShow);

    const canScrollNext = currentIndex < maxIndex;
    const canScrollPrevious = currentIndex > 0;

    const goToPrevious = () => {
        if (canScrollPrevious) {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
        }
    };

    const goToNext = () => {
        if (canScrollNext) {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsToShow, maxIndex));
        }
    };

    return (
        <div className='relative w-full mx-auto rounded-2xl shadow-lg flex items-center p-8'>
            {/* Previous Button */}
            {canScrollPrevious && (
                <button onClick={goToPrevious} className='p-3 rounded-full transition'>
                    <img src={arrowLeft} alt='Previous' className='h-8' />
                </button>
            )}

            {/* Carousel Container */}
            <div className='overflow-hidden rounded-lg flex-1 mx-2'>
                <div
                    className='flex transition-transform duration-500'
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                flex: `0 0 ${100 / itemsToShow}%`
                            }}
                            className='px-2'
                        >
                            <img src={image} alt={`Image ${index}`} className='w-full h-48 object-cover rounded-lg' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            {canScrollNext && (
                <button onClick={goToNext} className='p-3 rounded-full transition'>
                    <img src={arrowRight} alt='Next' className='h-8' />
                </button>
            )}
        </div>
    );
};

export default ImageSlider;
