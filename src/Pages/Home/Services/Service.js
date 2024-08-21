import React from 'react';

const Service = ({ card }) => {
    const { id, logo, title, details } = card
    return (
        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title ">{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Service;