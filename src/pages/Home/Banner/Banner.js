import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="rounded-lg shadow-2xl lg:w-1/2" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Start <br /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;