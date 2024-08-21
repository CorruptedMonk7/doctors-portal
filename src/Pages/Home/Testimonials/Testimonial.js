import React from 'react';

const Testimonial = ({ review }) => {
    const { name, details, location, image } = review
    return (
        <div className="card w-90 bg-base-100 shadow-xl ">
            <div className="card-body flex">
                <p>{details}</p>
                <div className='flex flex-row-reverse justify-evenly mt-6'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;