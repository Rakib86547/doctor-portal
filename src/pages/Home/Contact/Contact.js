import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section className='py-14 text-center' style={{background: `url(${appointment})`}}>
            <div className='w-[400px] mx-auto text-white'>
                <div className='text-center mb-14'>
                    <h3 className='text-primary font-bold'>Contact Us</h3>
                    <h1 className='text-4xl'>Stay Connected With Us</h1>
                </div>
                <div className='w-full'>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-full" /> <br /> <br />
                    <input type="text" placeholder="Subjects" className="input input-bordered input-primary w-full" /> <br />
                    <br />
                    <textarea className="textarea textarea-secondary w-full" placeholder="Your Message"></textarea>
                </div>
            </div>
            <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary'>Submit</button>
        </section>
    );
};

export default Contact;