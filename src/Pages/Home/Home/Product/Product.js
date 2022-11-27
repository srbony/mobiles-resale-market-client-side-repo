import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log(product);

    const { category, image, _id } = product;
    console.log(category);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                {/* <h2 className="card-title">{category}</h2> */}
                <div>
                    <figure><img src={image} alt="Shoes" /></figure>
                </div>


                <div className="card-actions justify-end">
                    <Link to={`/categories/${category}`}> <button className="btn btn-primary">SEE ALL</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Product;