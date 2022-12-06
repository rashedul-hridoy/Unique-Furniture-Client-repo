import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

const AllSeller = () => {

    const [sellers, setSeller] = useState([]);

    useEffect(()=>{
        fetch('https://furniture-server-zeta.vercel.app/users?role=Seller')
        .then(res => res.json())
        .then(data => setSeller(data))
    },[])

    const handleDelete = id => {
        fetch(`https://furniture-server-zeta.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    
                    const remaining = sellers.filter(seller => seller._id !== id);
                setSeller(remaining);
                toast.success('Seller Deleted Succesfully');
                    
                }
            })
    }

    const handleVerify = id => {
        fetch(`https://furniture-server-zeta.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Verified' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    
                    const remaining = sellers.filter(seller => seller._id !== id);
                    const verifying = sellers.find(seller => seller._id === id);
                    verifying.status = 'Verified';
                   const  result = [verifying, ...remaining];
                    setSeller(result);

                }

            })
        toast.success('Seller is verified');

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                                sellers.map((seller, i) => <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleVerify(seller._id)} className='btn btn-xs'>{seller.status ? seller.status : 'Unverified'}</button></td>
                                    <td><button onClick={()=> handleDelete(seller._id)} className='btn btn-xs'>Delete</button></td>
                                </tr>)
                                
                        }
                    </tbody>
                </table>
            </div>
            <Toaster/>
        </div>
    );
};

export default AllSeller;