import React from 'react';
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <section className=''
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="card lg:card-side flex flex-col lg:flex-row">
                <figure className='-mt-16'><img src={doctor} alt="Album" /></figure>
                <div className="card-body flex flex-col items-center">
                    <h3 className='text-xl font-semibold text-primary'>Appointment</h3>
                    <h2 className="card-title text-3xl text-white">Make an appointment Today</h2>
                    <p className='text-white'>We are taking appointment 24/7 by our website. To book for an appointment at your desired time and with your personal doctor click the button below.</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Appointment;