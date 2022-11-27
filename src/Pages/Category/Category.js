import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Modal from '../Modal/Modal';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const categoryData = useLoaderData();
    const [items, setItems] = useState(null);
    const { user } = useContext(AuthContext)
    console.log(categoryData);
    return (
        <div>
            <h2 className='text-center font-bold'>Available Category</h2>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                {
                    categoryData.map(data => <SingleCategory
                        data={data}
                        key={data._id}
                        setItems={setItems}
                    ></SingleCategory>)
                }
            </div>
            {items && user &&

                < Modal
                    items={items}
                    user={user}
                // categoryData={categoryData}
                ></Modal>}
            {/* <h2>Category{data.length}</h2> */}
        </div >
    );
};

export default Category;