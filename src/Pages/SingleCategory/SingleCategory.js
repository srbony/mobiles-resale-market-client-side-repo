import React from 'react';

const SingleCategory = ({ data, setItems }) => {
    const { productName, conditionType, price, yearsOfUse, date, sellerName, image, location, resalePrice, mobile, _id } = data;
    return (
        <div className=" w-96 card bg-base-100  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Product Name:{productName}</h2>
                <p>Original Price:{price}</p>
                <p>Resale Price:{resalePrice}</p>

                <p>Years Of Use:{yearsOfUse}</p>
                <p>Date:{date}</p>
                <p>Seller Name:{sellerName}</p>
                <p>Location:{location}</p>
                <p>Condition Type:{conditionType}</p>
                <p>Phone Number:{mobile}</p>
                <div>
                    <figure><img src={image} className="w-45 h-35" alt="Mobiles" /></figure>
                </div>

                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Book Now</button> */}
                    <label
                        onClick={() => setItems(data)}
                        htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;