import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto my-5">
            <div class="card-body">
                <p>{review.comment}</p>
            </div>
            <div className='flex items-center p-5'>
                <figure className='p-5'><img src={review.image} alt="" /></figure>
                <div>
                    <h2 class="card-title">{review.name}</h2>
                    <p>{review.address}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;