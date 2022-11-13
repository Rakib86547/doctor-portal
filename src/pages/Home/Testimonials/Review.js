import React from 'react';

const Review = ({ review }) => {
    const { name, description, location, img } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5 mt-16">
            <p>{description}</p>
            <div className="flex justify-start mt-5">
                <div>
                    <figure><img src={img} className='w-16 border border-rose-500 rounded-full' alt="Shoes" /></figure>
                </div>
                <div className='ml-5'>
                    <h2 className="card-title">{name}</h2>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;