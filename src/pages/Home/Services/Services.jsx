import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://genius-car-server-blush-five.vercel.app/services')
        .then(res=> res.json())
        .then(data => setServices(data.data))
    },[])
    return (
        <div>
            <div className='text-center mb-7'>
                <p className='text-xl font-bold text-orange-600 mb-5'>Our Services</p>
                <h2 className='text-5xl mb-5 font-bold'>Our Service Area</h2>
                <p className='text-lg text-base-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable.  </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    
                    ></ServiceCard>)
                }
            </div>

            <div className='text-center mt-10 mb-10'>
            <button className="btn btn-outline btn-warning">More Services</button>
            </div>
        </div>
    );
};

export default Services;