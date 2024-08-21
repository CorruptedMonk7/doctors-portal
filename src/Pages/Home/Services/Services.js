import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const serviceCards = [
        {
            id: 1,
            logo: fluoride,
            title: "Fluoride Treatment",
            details: "Clean your teeth and removes bacteria"
        },
        {
            id: 2,
            logo: cavity,
            title: "Cavity Filling",
            details: "Fill up your cavity and remove pain"
        },
        {
            id: 3,
            logo: whitening,
            title: "Teeth Whitening",
            details: "Make your teeth white and get a beautiful smile"
        }
    ]
    return (
        <div>
            <div className=' text-center my-12 '>
                <h3 className='text-xl text-primary'> <b>Our Services</b> </h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-12 lg:m-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    serviceCards.map(card => <Service
                        key={card.id}
                        card={card}
                    >

                    </Service>)
                }
            </div>

        </div>
    );
};

export default Services;