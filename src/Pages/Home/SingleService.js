import React from 'react';

const SingleService = ({service}) => {
     
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure class="pt-10">
                <img src={service.image} />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title ">{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default SingleService;