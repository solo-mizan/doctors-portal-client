import React from 'react';
import AppointmentHome from './AppointmentHome';
import Banner from './Banner/Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
        </div>
    );
};

export default Home;