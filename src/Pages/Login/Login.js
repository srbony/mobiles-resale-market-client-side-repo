import React from 'react';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[550px] flex shadow-lg rounded-lg  justify-center items-center'>
            <div className='w-1/2 p-7'>
                <h2 className='text-3xl text-cyan-400 font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl font-semibold">Email</span></label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl font-semibold">Password</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <select className='text-xl my-4 font-semibold' {...register("category", { required: true })}>
                        <option value="">Select Users</option>
                        <option value="Seller">Seller</option>
                        <option value="Buyer" >Buyer</option>
                    </select>
                    <div className='my-2'>
                        <input type="radio" name="radio-2" className="radio radio-primary" />

                    </div>
                    <button className='btn btn-info w-1/2'>Login</button>

                </form>
                <p className='my-2 text-xl font semibold'>New to Product Resale Market? <Link to='/signup'><span className='font-bold text-cyan-400'>SignUp</span></Link></p>
                <button className='btn btn-info w-1/2'>Login With Google</button>

            </div>

        </div>
    );
};

export default Login;