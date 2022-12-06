import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';

const Advertise = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`https://furniture-server-zeta.vercel.app/advertise`);
            const data = await res.json();
            return data;
        }
    })
    return (
        
            <div className='container mx-auto'>
                

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        products.map(product => <AdvertiseProduct
                            key={product._id}
                            product={product}
                        ></AdvertiseProduct>)
                    }
                </div>
            </div>
        
    );
};

export default Advertise;