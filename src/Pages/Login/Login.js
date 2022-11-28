import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }
    return (
        <div className='h-[800px] my-32 flex shadow-lg rounded-lg  justify-center items-center'>
            <div className='w-1/2 p-7'>
                <h2 className='text-3xl text-cyan-400 ml-16 mb-4 font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl font-semibold">Name</span></label>
                        <input type="text"
                            {...register("name",
                                { required: "Name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-500'>Name required</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl font-semibold">Email</span></label>
                        <input type="password"
                            {...register("email",
                                { required: 'email is required' })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-500'>Email is required</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl font-semibold">Password</span></label>
                        <input type="password"
                            {...register("password",
                                { required: 'Password is required' })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span className='text-red-500'>Password is required</span>}
                    </div>

                    <select className='text-xl my-4 font-semibold' {...register("role", { required: true })}>
                        <option value="">Select Users</option>
                        <option value="Seller">Seller</option>
                        <option value="Buyer" >Buyer</option>
                    </select>
                    <div className='my-2'>
                        <input type="radio" name="radio-2" className="radio radio-primary" />

                    </div>
                    <button className='btn btn-info w-1/2'>Login</button>
                    <div className='text-red-500'>
                        {
                            loginError && <p>{loginError}</p>
                        }
                    </div>

                </form>
                <p className='my-2 text-xl font semibold'>New to Product Resale Market? <Link to='/signup'><span className='font-bold text-cyan-400'>SignUp</span></Link></p>
                <button className='btn btn-info w-1/2'>Login With Google</button>

            </div>

        </div>
    );
};

export default Login;