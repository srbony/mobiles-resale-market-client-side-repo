import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    // console.log(imageHostKey);
    const onSubmit = data => {
        // console.log(data)

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const category = {
                        productName: data.productName,
                        price: data.price,
                        resalePrice: data.resalePrice,
                        image: imgData.data.url,
                        categoryId: data.categoryId,
                        category: data.category,
                        conditionType: data.conditionType,
                        mobile: data.mobile,
                        location: data.location,
                        date: data.date,
                        sellerName: data.sellerName,
                        yearsOfUse: data.yearsOfUse,

                    }
                    fetch('http://localhost:5000/categories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(category)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Added product successfully');
                            Navigate('/dashboard/myproduct')
                        })
                }
                // console.log(imgData);

            })

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("productName")} className="input input-bordered w-1/2 my-2" placeholder='product name' /> <br />
                <input type="text" {...register("price")} className="input input-bordered w-1/2 my-2" placeholder='price' /> <br />
                <input type="text" {...register(" resalePrice")} className="input input-bordered w-1/2" placeholder='resale price' /> <br />

                <div>
                    <label htmlFor="">Category image</label> <br />
                    <input type="file" {...register("image")} className="input input-bordered w-1/2 my-2" /> <br />


                </div>
                <div>
                    <label htmlFor="">Category Id</label> <br />
                    <input type="text" {...register("categoryId")} className="input input-bordered w-1/2 my-2" placeholder='id' />

                </div>


                <select className='text-xl my-4 font-semibold' {...register("category", { required: true })}>
                    <option value="">Select Category</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple" >Apple</option>
                    <option value="Huawei" >Huawei</option>
                </select>

                <div>
                    <label htmlFor="">Condition type</label> <br />
                    <select {...register("conditionType")} className="my-3">
                        <option value="excellent">excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>
                <input type="text" {...register("mobile")} className="input input-bordered w-1/2 my-3" placeholder='mobile number' /> <br />
                <input type="text" {...register("location")} className="input input-bordered w-1/2 my-2" placeholder='location' /> <br />
                {/* <div>
                    <label htmlFor="">Product image</label> <br />
                    <input type="file" {...register("product-image1")} className="input input-bordered w-1/2 my-2" placeholder='image' /> <br />
                </div> */}
                {/* <div>
                    <label htmlFor="">Product image</label> <br />
                    <input type="file" {...register("product-image2")} className="input input-bordered w-1/2 my-2" placeholder='image' /> <br />
                </div> */}
                <div>
                    <label htmlFor="">Product Id</label> <br />
                    <input type="text" {...register("product-id")} className="input input-bordered w-1/2 my-2" placeholder='id' /> <br />
                </div>

                <input type="date" {...register("date")} className="input input-bordered w-1/2 my-2" placeholder='date' /> <br />
                <input type="text" {...register("sellerName")} className="input input-bordered w-1/2 my-2" placeholder='seller name' /> <br />
                <input type="text" {...register("yearsOfUse")} className="input input-bordered w-1/2 my-2" placeholder='years of use' /> <br />

                {/* <input type="Add Product " value="Add Product" /> */}
                <button className='btn btn-primary'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;