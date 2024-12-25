import React from 'react';
import userAvatar from '@assets/img/user-avatar.svg';

interface ReviewProps {
    username: string;
    date: string;
    comment: string;
    avatar?: string;
}

const UserReview: React.FC<ReviewProps> = ({ username, date, comment, avatar }) => (
    <div className='p-4 border-b'>
        <div className='flex items-center gap-2'>
            <img src={avatar || userAvatar} className='w-10 h-10 rounded-full border' />
            <div>
                <h4 className='font-bold'>{username}</h4>
                <span className='text-gray-500 text-sm'>{date}</span>
            </div>
        </div>
        <p className='mt-2'>{comment}</p>
    </div>
);

export default UserReview;
