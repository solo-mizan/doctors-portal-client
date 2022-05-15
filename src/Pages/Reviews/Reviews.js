import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        { _id: 1, name: 'Winson Harry', address: 'California', image: people1, comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { _id: 2, name: 'Rebecca Benaport', address: 'Los Angels', image: people2, comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { _id: 3, name: 'Amber Heard', address: 'Utah', image: people3, comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' }
    ]

    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-secondary text-lg text-bold'>Testimonial</h4>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;