import React from 'react';
import Banner from './Banner/Banner';
import BannerOptions from './BaannerOptions/BannerOptions';
import Services from './Services/Services';
import CareSection from './CareSection/CareSection';
import Appointment from './Appointment/Appointment';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BannerOptions></BannerOptions>
            <Services></Services>
            <CareSection></CareSection>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;