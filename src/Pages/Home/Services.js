import React from 'react';
import SingleService from './SingleService';
import cavity from '../../assets/images/cavity.png'
import fluride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'

const Services = () => {
    const services = [
        { _id: 1, image: cavity, title: 'Cavity Filling', description: '' },
        { _id: 2, image: fluride, title: 'Fluride Treatment', description: '' },
        { _id: 3, image: whitening, title: 'Teeth Whitening', description: '' }
    ]

    return (
        <div className='text-center my-8'>
            <h3 className='text-secondary font-bold text-lg'>Our Services</h3>
            <h2 className='text-4xl uppercase mb-10'>Service we provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 '>
                {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }

            </div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg  shadow-2xl" />
                    <div>
                        <h1 class="lg:text-7xl text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;