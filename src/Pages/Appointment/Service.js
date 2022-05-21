import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No slots available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space  '} available!</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal"
                        className="btn btn-sm modal-button btn-secondary text-white uppercase"
                    >Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default Service;