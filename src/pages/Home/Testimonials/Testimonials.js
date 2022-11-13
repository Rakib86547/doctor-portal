import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Hery',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location: 'California'
        },
        {
            id: 2,
            name: 'Winson Hery',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location: 'California'
        },
        {
            id: 3,
            name: 'Winson Hery',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location: 'California'
        },
    ]
    return (
        <div className='my-32'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='font-bold text-primary'>Testimonials</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>

                <div>
                    <figure>
                        <img className='w-24 lg:w-48' src={quote} alt="" />
                    </figure>
                </div>
            </div>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;