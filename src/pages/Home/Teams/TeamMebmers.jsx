import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


const TeamMebmers = ({member}) => {
    const {_id, img, name, title} = member;
    return (
        <div id={`slide${_id}`} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <div className="card-actions">
                <FaFacebook className='w-10 h-10 rounded-xl text-blue-800'/>
                <FaTwitter className='w-10 h-10 rounded-xl text-cyan-400'/>
                <FaLinkedin className='w-10 h-10 rounded-xl text-sky-600'/>
                <FaInstagram className='w-10 h-10 rounded-xl text-rose-500'/>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      
    </div>
        </div>
    );
};

export default TeamMebmers;