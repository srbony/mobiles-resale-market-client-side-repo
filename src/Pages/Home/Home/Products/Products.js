import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from '../Product/Product';


const Products = () => {


    // const { data: allproducts = [], } = useQuery({
    //     queryKey: ['product'],
    //     queryFn: () => fetch('https://y-nu-wine.vercel.app/allProducts')
    //         .then(res => res.json())
    // })

    const { data: allproducts = [] } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('https://y-nu-wine.vercel.app/categories')
            .then(res => res.json())
    })




    return (
        <div className='grid md:grid-cols-3 gap-4 my-12'>

            {
                allproducts.slice(0, 3).map(product => <Product
                    product={product}
                    key={product._id}
                ></Product>)
            }






        </div>
    );
};

export default Products;