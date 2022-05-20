import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot)
        setTreatment(null);

    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <label for="booking-modal" className="btn modal-button">open modal</label>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center'>
                        <input type="text" readOnly={true} value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select booking time</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;