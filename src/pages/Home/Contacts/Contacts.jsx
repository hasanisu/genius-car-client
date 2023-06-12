import React from 'react';
import { FaRegCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
    return (
        // <div className='bg-black mb-8 '>
        //     <div className='flex'>
        //         <div className='text-orange-600 mt-2 mr-3'>
        //             <FaRegCalendarAlt className='w-10 h-10'/>
        //         </div>
        //         <div className='text-white'>
        //             <h2 >We are open monday-friday</h2>
        //             <p>7:00 am - 9:00 pm</p>
        //         </div>
        //     </div>
        // </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 shadow bg-black w-full mb-10 py-20 rounded-xl">

            <div className="flex text-center mx-auto">
                <div className="stat-figure mr-4">
                <FaRegCalendarAlt className='w-10 h-10 text-orange-600'/>
                </div>

                <div className='mt-4 text-start'>
                    <div className="stat-title text-white">We are open monday-friday</div>
                    <div className="stat-desc text-white font-semibold text-3xl">7:00 am - 9:00 pm</div>
                </div>
                
            </div>

            <div className="flex text-center mx-auto">
                <div className="stat-figure mr-4">
                <FaPhoneAlt className='w-10 h-10 text-orange-600'/>
                </div>

                <div className='mt-4 text-start'>
                    <div className="stat-title text-white">Have a question?</div>
                    <div className="stat-desc text-white font-semibold text-3xl">+2546 251 2658</div>
                </div>

                
            </div>
            <div className="flex text-center mx-auto">
                <div className="stat-figure mr-4">
                <FaMapMarkerAlt className='w-10 h-10 text-orange-600'/>
                </div>

                <div className='mt-4 text-start'>
                    <div className="stat-title text-white">Need a repair? our address</div>
                    <div className="stat-desc text-white font-semibold text-3xl">Liza Street, New York</div>
                </div>

                
            </div>

            

        </div>
    );
};

export default Contacts;