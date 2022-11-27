import React from 'react';

const SingleCategory = ({ data }) => {
    const { productName, conditionType, price, yearsOfUse, date, sellerName, image, location,_id } = data;
    return (
        <div className="card w-96 bg-base-100  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Product Name:{productName}</h2>
                <p>Original Price:{price}</p>
                <p>Resale Price:{ }</p>
                <p>Years Of Use:{yearsOfUse}</p>
                <p>Date:{date}</p>
                <p>Seller Name:{sellerName}</p>
                <p>Location:{location}</p>
                <p>Condition Type:{conditionType}</p>
                <div>
                    <figure><img src={image} alt="Mobiles" /></figure>
                </div>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;