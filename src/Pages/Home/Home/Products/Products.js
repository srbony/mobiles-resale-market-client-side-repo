import { useQuery } from '@tanstack/react-query';
import React from 'react';


const Products = () => {
  

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['produc'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })




    return (
        <div className='grid md:grid-cols-3 gap-4 my-12'>



            {
                products.map(product => <div className="card  card-compact  shadow-xl">
                    <h2 className=" font-bold text-xl text-center">{product.name}</h2>
                    <figure><img className='' src={product.img} alt="mobiles" /></figure>
                    <div className="">


                        <div className="">

                            <button className="btn btn-primary">SEE ALL</button>


                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Products;