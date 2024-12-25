import { useState } from 'react';
import StarRating from '@/components/StarRating';

const ReviewForm: React.FC = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        // TODO: submit review
        setReview('');
        setRating(0);
    };

    return (
        <div className='p-4'>
            <div className='p-2 shadow-md rounded-lg border-x min-h-64'>
                <div className='flex justify-between'>
                    <h3 className='text-lg text-red-600 font-semibold'>あなたのレビュー</h3>
                    <button className='px-3 py-1 bg-[#ff1100] font-bold text-white rounded-xl' onClick={handleSubmit}>
                        投稿
                    </button>
                </div>
                <div className='flex items-center'>
                    <StarRating rating={rating} onRatingChange={setRating} />
                </div>
                <textarea
                    className='w-full mt-2 p-2 border border-gray-300 rounded min-h-32'
                    placeholder='ここにレビューを追加してください...'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ReviewForm;
