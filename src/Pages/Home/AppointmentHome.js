import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'

const AppointmentHome = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }}
            className='flex text-white items-center rounded-xl shadow-2xl p-5'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl py-3'>Make an Appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary my-3">Get Started</button>
            </div>
        </section>
    );
};

export default AppointmentHome;