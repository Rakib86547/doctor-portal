import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='my-16'>
        <div className='text-center my-16'>
            <h3 className='font-bold text-primary'>Services</h3>
            <h1 className='text-4xl'>Services We Provide</h1>
        </div>
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {
                serviceData.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;