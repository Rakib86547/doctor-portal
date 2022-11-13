import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infoData = [
        {
            id: 1,
            icon: clock,
            detail: 'Opening 9am to 5pm in everyday',
            title: 'Opening Hours',
            background: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            icon: marker,
            detail: 'Opening 9am to 5pm in everyday',
            title: 'Visit Our Location',
            background: '#000'
        },
        {
            id: 3,
            icon: phone,
            detail: 'Opening 9am to 5pm in everyday',
            title: 'Contact Us Now',
            background: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
            {
                infoData.map(data => <InfoCard
                key={data.id}
                data={data}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;