import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='grid md:grid-cols-3 gap-4 my-4'>

            {
                products.map(product => <div className='shadow-lg rounded'>
                    {product.name}
                    <img className='w-75 h-35 rounded-lg bg-slate-600' src={product.img} alt="" />
                </div>)
            }
        </div>
    );
};

export default Products;