import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodImages from './FoodImages/FoodImages';
import FoodInfo from './FoodInfo/FoodInfo';
import UserReviewSection from './UserReviews/UserReviewSection';
import StarRating from '@/components/StarRating';
import { getFoodDetailsById } from '@/api/food-details.api';

interface FoodDetailsData {
    id: number;
    name: string;
    address: string;
    price: number;
    info: string;
    images: string[];
    categories: string[];
    restaurant: string;
}

// interface UserReview {
//     userName: number;
//     rating: number;
//     comment: string;
// }

const FoodDetailsPage: React.FC = () => {
    const { foodId } = useParams<{ foodId: string }>();
    const [foodDetails, setFoodDetails] = useState<FoodDetailsData | null>(null);

    // TODO: fetch reviews, calculate rating
    const rating = 4;

    useEffect(() => {
        const fetchFoodDetails = async () => {
            try {
                if (foodId) {
                    const data = await getFoodDetailsById(foodId);
                    setFoodDetails(data);
                }
            } catch (error) {
                console.error('Error fetching food details:', error);
            }
        };

        fetchFoodDetails();
    }, [foodId]);

    if (!foodDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mx-auto bg-white p-10'>
            <div className='flex items-center p-4'>
                <div className='text-red-600 font-bold text-2xl mr-4'>{foodDetails.name}</div>
                <div className='flex items-center'>
                    <StarRating rating={rating} fixed />
                </div>
            </div>
            <FoodImages images={foodDetails.images} />
            <FoodInfo
                restaurantName={foodDetails.restaurant}
                location={foodDetails.address}
                price={foodDetails.price}
                details={foodDetails.info}
                categories={foodDetails.categories}
            />
            <UserReviewSection />
        </div>
    );
};

export default FoodDetailsPage;
