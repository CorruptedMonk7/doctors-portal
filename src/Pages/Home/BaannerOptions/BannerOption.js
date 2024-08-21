import React from 'react';

const BannerOption = ({ card }) => {
    const { id, name, bg, details, image } = card;
    return (
        <div className={`card text-white card-side bg-base-100 shadow-xl px-8 ${bg}`}>
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default BannerOption;