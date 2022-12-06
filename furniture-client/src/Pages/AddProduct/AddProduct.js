import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const date = new Date();
    const category = ["Bed Room", "Dining Room", "Drawing Room"];
    const navigate = useNavigate();
    const handleAddProduct = data => {
        console.log(data);
        const sellerAddProduct = {
            category_name: data.category_name,
            product_name: data.product_name,
            category_id: `${data.category_name === 'Bed Room' ? '1' : data.category_name === 'Dining Room' ? '2' : '3'}`,
            img: data.img,
            location: data.location,
            resale_price: data.resale_price,
            original_price: data.original_price,
            years_use: data.years_use,
            posting_time: date,
            email: user.email,
            seller_info: {
                seller_name: user.displayName,
                phone_num: data.phone_num
            },
            condition_type: data.condition_type,
            description: data.description,
            purchase_year: data.purchase_year
        }
        fetch('https://furniture-server-zeta.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellerAddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Added');
                    navigate('/dashboard/myproducts')
                }
                else {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div className='h-[800px] flex justify-center items center'>
            <div className='w-1/2 p-7'>
                <h2 className='text-xl text-center'>Add Your Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input type='text'
                            className="input input-bordered w-full max-w-xs"
                            {...register("product_name", {
                                required: "Please fill up the field"
                            })} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Condition</span></label>
                        <input type='text' className="input input-bordered w-full max-w-xs"
                            {...register("condition_type", {
                                required: "Please fill up the field"
                            })} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product Image</span></label>
                        <input type='text' className="input input-bordered w-full max-w-xs"
                            {...register("img", {
                                required: "Please fill up the field"
                            })} />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Product Details</span></label>
                        <input type='text' className="input input-bordered w-full h-24"
                            {...register("description", {
                                required: "Please fill up the field"
                            })} />


                    </div>
                    <div className=" w-full max-w-xs flex">
                        <div>
                            <label className="label"><span className="label-text">Original Price</span></label>
                            <input type='text' className="input input-bordered w-full "
                                {...register("original_price", {
                                    required: "Please fill up the field"
                                })} />
                        </div>
                        <div className='ml-10'>
                            <label className="label"><span className="label-text">Resale Price</span></label>
                            <input type='text' className="input input-bordered w-full"
                                {...register("resale_price", {
                                    required: "Please fill up the field"
                                })} />
                        </div>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Phone Number</span></label>
                        <input type='text' className="input input-bordered w-full max-w-xs"
                            {...register("phone_num", {
                                required: "Please fill up the field"
                            })} />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type='text' className="input input-bordered w-full max-w-xs"
                            {...register("location", {
                                required: "Please fill up the field"
                            })} />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product Category</span></label>
                        <select type='text' className="select select-bordered w-full max-w-xs mt-4" {...register("category_name", {
                            required: "Please fill up the field"
                        })}>
                            {
                                category.map((role, i) => <option
                                    key={i}
                                    value={role}
                                >{role}</option>)
                            }
                        </select>


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Years of Use</span></label>
                        <input type='text' className="input input-bordered w-full max-w-xs"
                            {...register("years_use", {
                                required: "Please fill up the field"
                            })} />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Purchase Year</span></label>
                        <input type='text' className="input input-bordered w-full max-w-xs"
                            {...register("purchase_year", {
                                required: "Please fill up the field"
                            })} />


                    </div>
                    <input className='mt-10 btn btn-info w-full' value='Add Product' type="submit" />

                </form>

            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddProduct;