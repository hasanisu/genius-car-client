import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState();
    const searchRef = useRef();

    const handleSearch=()=>{
        setSearch(searchRef.current.value)
    }


    useEffect(()=>{
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
        .then(res=> res.json())
        .then(data => setServices(data.data))
    },[isAsc, search])
    return (
        <div>
            <div className='text-center mb-7'>
                <p className='text-xl font-bold text-orange-600 mb-5'>Our Services</p>
                <h2 className='text-5xl mb-5 font-bold'>Our Service Area</h2>
                <p className='text-lg text-base-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable.  </p>
                 <button onClick={()=>setIsAsc(!isAsc)} className="btn btn-ghost">{isAsc ? 'High to low price' : 'Low to High Price'}</button><br />
                 <input ref={searchRef} type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" /> 
                 <button onClick={handleSearch} className='btn btn-ghost'>Search</button>
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