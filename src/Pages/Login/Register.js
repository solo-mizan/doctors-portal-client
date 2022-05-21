import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, loading1, error1] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let LoginErrorMsg;

    if (loading || loading1) {
        return <Loading />
    }

    if (error || error1) {
        LoginErrorMsg = <p className='label-text-alt text-red-400'>{error?.message || error1?.message}</p>
    }

    if (gUser || user) {
        console.log(gUser || user);
    }

    const onSubmit = (data) => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);

    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter Your Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{5}/,
                                        message: 'Provide your Fullname '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter your email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid email  '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter your Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or long'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <label className='label'>
                            {LoginErrorMsg}
                        </label>
                        <input type='submit' value='Register' className='btn btn-outline w-full max-w-xs' />
                    </form>
                    <div className='flex justify-evenly'>
                        <div><p><small>Already have an account?</small></p></div>
                        <div><small><Link className='text-secondary' to="/login">Click here to Login</Link></small></div>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className='btn btn-outline'
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;