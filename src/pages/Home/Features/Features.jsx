import React from 'react';
import feature1 from '../../../assets/icons/Group 38729.svg'
import feature2 from '../../../assets/icons/deliveryt.svg'
import feature3 from '../../../assets/icons/check.svg'
import feature4 from '../../../assets/icons/group.svg'
import feature5 from '../../../assets/icons/person.svg'
import feature6 from '../../../assets/icons/Wrench.svg'

const Features = () => {
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600 mb-5'>Core Features</p>
                <h1 className='text-5xl mb-5 font-bold'>Why Choose Us</h1>
                <p className='text-lg text-base-400'>the majority have suffered alteration in some form, by injected humour, or randomised
                <br />
                    words which don't look even slightly believable. 
                </p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-12 mb-32'>
                <div className='text-center border border-orange-600 w-44 h-40 grid content-center rounded-xl'>
                    <img src={feature4} alt="" className='mx-auto mb-5'/>
                    <p className='text-xl font-bold'>Expert Team</p>
                </div>
                <div className='text-center border border-orange-600 bg-orange-600 w-44 h-40 grid content-center rounded-xl'>
                    <img src={feature1} alt="" className='mx-auto mb-5'/>
                    <p className='text-xl font-bold text-white'>Timely Delivery</p>
                </div>
                <div className='text-center border border-orange-600 w-44 h-40 grid content-center rounded-xl'>
                    <img src={feature5} alt="" className='mx-auto mb-5'/>
                    <p className='text-xl font-bold'>24/7 Support</p>
                </div>
                <div className='text-center border border-orange-600 w-44 h-40 grid content-center rounded-xl'>
                    <img src={feature6} alt="" className='mx-auto mb-5'/>
                    <p className='text-xl font-bold'>Best Equipment</p>
                </div>
                <div className='text-center border border-orange-600 w-44 h-40 grid content-center rounded-xl'>
                    <img src={feature3} alt="" className='mx-auto mb-5'/>
                    <p className='text-xl font-bold'>100% Guranty</p>
                </div>
                <div className='text-center border border-orange-600 w-44 h-40 grid content-center rounded-xl'>
                    <img src={feature2} alt="" className='mx-auto mb-5'/>
                    <p className='text-xl font-bold'>Timely Delivery</p>
                </div>
                
            </div>
        </div>
    );
};

export default Features;