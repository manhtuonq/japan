import React, { useState } from 'react';

interface StarRatingProps {
    rating: number;
    fixed?: boolean;
    onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, fixed = false, onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseEnter = (star: number) => {
        if (!fixed) {
            setHoverRating(star);
        }
    };

    const handleMouseLeave = () => {
        if (!fixed) {
            setHoverRating(0);
        }
    };

    const handleClick = (star: number) => {
        if (!fixed && onRatingChange) {
            onRatingChange(star);
        }
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <i
                    key={star}
                    className={`fa-star ${hoverRating >= star || rating >= star ? 'fas' : 'far'} text-yellow-500 cursor-pointer`}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;
