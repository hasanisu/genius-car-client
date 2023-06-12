import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductsItem = ({product}) => {
    const {img, title, price} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl bg-stone-400 w-80 h-56" />
            </figure>
            <div className="card-body items-center text-center">
               <div className='flex'>
                <FaStar className='w-5 h-5 text-orange-600'/>
                <FaStar className='w-5 h-5 text-orange-600'/>
                <FaStar className='w-5 h-5 text-orange-600'/>
                <FaStar className='w-5 h-5 text-orange-600'/>
                <FaStar className='w-5 h-5 text-orange-600'/>
               </div>
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-lg font-semibold text-orange-600'>${price}</p>
            </div>
        </div>
    );
};

export default ProductsItem;