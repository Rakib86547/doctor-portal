import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section className='mt-36' style={{background: `url(${appointment})`}}>
        <div className="hero text-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} alt='' className="hidden lg:block rounded-lg w-1/2 -mt-32" />
                <div className='w-1/2'>
                    <h3 className='text-primary font-bold'>Appointment</h3>
                    <h1 className="text-5xl font-bold">Make an Appointment Today</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default MakeAppointment;