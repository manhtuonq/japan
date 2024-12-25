import React, { useState } from 'react';
import UserReview from './UserReview';
import ReviewForm from './ReviewForm';

interface ReviewProps {
    username: string;
    date: string;
    comment: string;
    rating?: number;
    avatar?: string;
}

const mockReviews: ReviewProps[] = [
    {
        username: 'ユーザー名1',
        date: '25/06/2020',
        comment:
            'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    },
    {
        username: 'ユーザー名2',
        date: '26/06/2020',
        comment: 'Great experience overall. Would recommend to friends and family!'
    },
    {
        username: 'ユーザー名3',
        date: '27/06/2020',
        comment: 'The food was delicious and the service was excellent.'
    },
    {
        username: 'ユーザー名4',
        date: '28/06/2020',
        comment: 'A bit pricey but worth it for the quality.'
    }
];

// TODO: remove mock data
const UserReviewSection: React.FC<{ reviews?: ReviewProps[] }> = ({ reviews = mockReviews }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 2;

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const currentReviews = reviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage);

    return (
        <div className='flex border-t'>
            <div className='p-4 w-1/2'>
                <h2 className='text-2xl text-red-600 font-semibold'>レビュー</h2>
                {currentReviews.map((review, index) => (
                    <UserReview key={index} {...review} />
                ))}
                <div className='flex justify-center items-center p-4'>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`mx-2 px-3 py-1 border rounded ${
                                currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-200 text-red-600'
                            }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className='w-1/2'>
                <ReviewForm />
            </div>
        </div>
    );
};

export default UserReviewSection;
