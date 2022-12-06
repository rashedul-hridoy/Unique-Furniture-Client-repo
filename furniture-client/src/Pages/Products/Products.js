import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import BookProducts from '../BookProducts/BookProducts';

const Products = ({ categories, setCategories }) => {
    
        /* const { category_id } = categories;
    
        const { data: category = [] } = useQuery({
            queryKey: ['category'],
            queryFn: () => fetch(https://furniture-server-zeta.vercel.app/category/${category_id})
                .then(res => res.json())
        }) */
        const category = useLoaderData();
        const [productInfo, setProductInfo] = useState(null);
        console.log(category);
    return (
        <div>
        <h1 className='text-center text-3xl font-thin my-16'>See the used products you are looking for</h1>
        <div className='grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                category.map(product => <BookProducts
                    key={product._id}
                    product={product}
                    setProductInfo={setProductInfo}
                ></BookProducts>)
            }
        </div>
        {
            productInfo &&
            <BookingModal
                productInfo={productInfo}
            ></BookingModal>
        }
    </div>
    );
};

export default Products;