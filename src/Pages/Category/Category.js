import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const categoryData = useLoaderData();
    console.log(categoryData);
    return (
        <div>
            <h2>Category{categoryData.length}</h2>
            <div className='flex justify-center'>
                {
                    categoryData.map(data => <SingleCategory
                        data={data}
                        key={data._id}
                    ></SingleCategory>)
                }
            </div>

            {/* <h2>Category{data.length}</h2> */}
        </div>
    );
};

export default Category;