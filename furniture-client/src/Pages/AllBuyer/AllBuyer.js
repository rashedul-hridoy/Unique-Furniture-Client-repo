import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllBuyer = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(()=>{
        axios.get('https://furniture-server-zeta.vercel.app/users?role=Buyer')
        .then(res => setBuyers(res.data))
    },[])

    const handleDelete = id => {
        fetch(`https://furniture-server-zeta.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    
                    const remaining = buyers.filter(buyer => buyer._id !== id);
                setBuyers(remaining);
                toast.success('Seller Deleted Succesfully');
                    
                }
            })
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
                            
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                                buyers.map((buyer, i) => <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    
                                    <td><button onClick={()=> handleDelete(buyer._id)} className='btn btn-xs'>Delete</button></td>
                                </tr>)
                                
                        }
                    </tbody>
                </table>
            </div>
            <Toaster/>
        </div>
    );
};

export default AllBuyer;