import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer';
import AppointmentHome from './AppointmentHome';
import Banner from './Banner/Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-8 lg:mx-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;