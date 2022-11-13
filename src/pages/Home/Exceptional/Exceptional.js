import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Exceptional = () => {
    return (
        <div className="card card-side">
            <figure><img src={treatment} className='w-1/2 rounded-lg' alt="Movie" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-4xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions">
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;