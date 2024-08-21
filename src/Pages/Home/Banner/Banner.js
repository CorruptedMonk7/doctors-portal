import React from 'react';
import './Banner.css';
import chair from "../../../assets/images/chair.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bannerBg pb-28 mb-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile <br />Starts Here!! </h1>
                    <p className="py-6">We are the best dental clinic in country for consicutive 2 years. So, hurry up and book now for an appointment. We have the best quality service with the best professionals service only for you!</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Banner;