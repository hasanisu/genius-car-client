import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600 mb-5'>Popular Products</p>
                <h2 className='text-5xl mb-5 font-bold'>Browser Our Products</h2>
                <p className='text-lg text-base-400'>the majority have suffered alteration in some form, by injected humour, or randomised
                    <br />
                    words which don't look even slightly believable.
                </p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductsItem
                    key={product._id}
                    product={product}
                    ></ProductsItem>)
                }
            </div>

            <div className='text-center mt-12 mb-28'>
            <button className="btn btn-outline btn-warning">More Services</button>
            </div>

        </div>
    );
};

export default Products;