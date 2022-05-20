import React from 'react';

const SingleService = ({ service }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="pt-10">
                <img src={service.image} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default SingleService;