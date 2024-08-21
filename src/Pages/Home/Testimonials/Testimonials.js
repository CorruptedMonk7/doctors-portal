import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import p1 from "../../../assets/images/people1.png";
import p2 from "../../../assets/images/people2.png";
import p3 from "../../../assets/images/people3.png";
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: p1,
            location: "New Jersey"
        },
        {
            _id: 2,
            name: "Michela",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: p2,
            location: "New York"
        },
        {
            _id: 3,
            name: "Kayla",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: p3,
            location: "Washington"
        },
    ]
    return (
        <div className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Testimonials</h3>
                    <h2 className='text-3xl'>What our patients say</h2>
                </div>
                <figure className=' w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </figure>

            </div>
            <div className='grid gap-12 lg:m-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reviews.map(review => <Testimonial
                        key={review._id}
                        review={review}
                    >

                    </Testimonial>)
                }
            </div>

        </div>
    );
};

export default Testimonials;