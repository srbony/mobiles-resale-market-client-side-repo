import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            })
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Byers Name</th>
                        <th>Item Name</th>
                        <th>Price</th>

                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.slice(0, 1).map(order => <tr>
                            <th>1</th>
                            <td>{order.name}</td>
                            <td>{order.ItemName}</td>
                            <td>{order.price}</td>
                            <td><button className='btn btn-xs'>Pay</button></td>

                        </tr>)
                    }






                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;