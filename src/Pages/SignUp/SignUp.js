import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, providerLogin, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const [token] = useToken(createdUserEmail);
    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully');
                const userInfo = {
                    displayName: data.name

                }
                updateUser(userInfo)
                    .then(() => {
                        savedByer(data.name, data.email, data.role);

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message);
            });

    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.error(error);

            })
    }


    const savedByer = (name, email, role) => {
        const byer = { name, email, role };
        fetch('http://localhost:5000/byers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(byer)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                // getUserToken(email)
                // console.log("saved byer", data);

            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken)
    //                 navigate('/')
    //             }
    //         })
    // }

    return (
        <div className='h-[800px] my-32 flex shadow-lg rounded-lg  justify-center items-center'>
            <div className='w-1/2 p-7'>
                <h2 className='text-3xl text-cyan-400 ml-16 mb-4 font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl font-semibold">Name</span></label>
                        <input type="text"
                            {...register("name")}
                            className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl font-semibold">Email</span></label>
                        <input type="text"
                            {...register("email",
                                { required: "Email Address is required" })}
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
                    <button className='btn btn-info w-1/2'>Sign Up</button>
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }

                </form>
                <p className='my-2 text-xl font semibold'>Already have an account? <Link to='/login'><span className='font-bold text-cyan-400'>Please Login</span></Link></p>
                <button onClick={handleGoogleSignIn} className='btn btn-info w-1/2'>Login With Google</button>

            </div>

        </div>
    );
};

export default SignUp;