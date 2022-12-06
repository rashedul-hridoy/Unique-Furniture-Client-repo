import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://furniture-server-zeta.vercel.app/bookedproducts/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteProduct = id => {
        fetch(`https://furniture-server-zeta.vercel.app/bookedProducts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast('Product Deleted Succesfully');
                    refetch();
                }
            });
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <th>
                                <label>
                                    <button onClick={() =>
                                        handleDeleteProduct(product._id)} className="btn btn-ghost btn-xs">X</button>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.product_name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {product.price}
                            </td>

                            <td><button className='btn'>Pay</button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;