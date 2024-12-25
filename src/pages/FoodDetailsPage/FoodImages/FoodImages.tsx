import React from 'react';
import ImageSlider from '@components/ImageSlider';

const FoodImages: React.FC<{ images: string[] }> = ({ images }) => (
    <div className='flex items-center justify-center'>
        <ImageSlider images={images} />
    </div>
);

export default FoodImages;
