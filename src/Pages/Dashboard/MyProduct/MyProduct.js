import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        fetch('https://y-nu-wine.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyProducts(data)
            })
    }, [])

    const handleDelteProduct = product => {
        // console.log(product)
        fetch(`https://y-nu-wine.vercel.app/categories/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${product.productName} Deleted successfully`)
                }
            })
        // fetch(`https://y-nu-wine.vercel.app/categories/${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    }




    return (
        <div>
            <h2 className='text-center'>My Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Seller Name</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.sellerName}</td>
                                <td><button onClick={() => handleDelteProduct(product)} className='btn btn-xm btn-primary'>Delete</button></td>
                                <td><button className='btn btn-xm btn-primary'>Advertise</button></td>
                            </tr>)
                        }



                        {/* <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr> */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;