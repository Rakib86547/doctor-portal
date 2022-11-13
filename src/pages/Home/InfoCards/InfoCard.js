import React from 'react';

const InfoCard = ({ data }) => {
    const { title, detail, icon, background } = data;
    return (
        <div className={`card card-side p-3 text-white shadow-xl ${background}`}>
            <figure><img src={icon} className='w-16' alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default InfoCard;