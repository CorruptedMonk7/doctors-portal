import React from 'react';
import appointment from "../../../assets/images/appointment.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='flex flex-col items-center py-16'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='flex flex-col items-center'>
                <h3 className='text-xl font-bold text-primary'>Contact Us</h3>
                <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
            </div>
            <div className='flex flex-col my-4'>
                <input type="text" placeholder="Email Address" className="my-2 input input-bordered input-sm w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="my-2 input input-bordered input-md w-full max-w-xs" />
                <input type="text" placeholder="Your Message" className="my-2 input input-bordered input-lg w-full max-w-xs" />
            </div>
            <PrimaryButton></PrimaryButton>
        </div>
    );
};

export default Contact;