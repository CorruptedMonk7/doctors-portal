import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import BannerOption from './BannerOption';

const BannerOptions = () => {
    const infoCards = [
        {
            id: 1,
            name: "Opening Hours",
            details: "Everyday from 6 PM till 11 PM",
            image: clock,
            bg: "bg-gradient-to-r from-secondary to-primary"

        },
        {
            id: 2,
            name: "Visit Us",
            details: "New York, Jackson Height, 157",
            image: marker,
            bg: "bg-neutral"
        },
        {
            id: 3,
            name: "Contact Us",
            details: "+157894333445",
            image: phone,
            bg: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-12'>
            {
                infoCards.map(card => <BannerOption
                    key={card.id}
                    card={card}
                ></BannerOption>)
            }

        </div>
    );
};

export default BannerOptions;