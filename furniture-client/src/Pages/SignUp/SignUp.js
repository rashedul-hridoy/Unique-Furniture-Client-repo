
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const roleData = [
        "Buyer", "Seller"
    ]

    const handleSignUp = data => {
        console.log('user', data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Succcessfully');
                const userInfo = {
                    displayName: data.name,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => {
                        console.error(err)

                    });
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
                setSignUpError(error.message);
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://furniture-server-zeta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Succcessfully');
                const userInfo = {
                    displayName: user.displayName,
                    role: "Buyer"
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(user.displayName, user.email, userInfo.role);
                    })
                    .catch(err => {
                        console.error(err)

                    });
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
                setSignUpError(error.message);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type='text' {...register("name", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type='email' {...register("email", { required: "Email Address is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type='password' {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must have uppercase number and special characters" }
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    <select type='role' className="select select-bordered w-full max-w-xs mt-4" {...register("role")}>
                        {
                            roleData.map((role, i) => <option
                                key={i}
                                value={role}
                            >{role}</option>)
                        }
                    </select>
                </div>

                <input className='btn btn-accent w-full mt-4 text-white' value='Sign Up' type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></p>
            <div className='divider'>OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;