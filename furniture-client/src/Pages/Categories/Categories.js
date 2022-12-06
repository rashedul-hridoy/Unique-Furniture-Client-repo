import React, { useState } from 'react';
import bed from '../../assets/images/bed.jpg';
import dining from '../../assets/images/dining.jpg';
import living from '../../assets/images/living.jpg';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const categoryData = [
        {
            id: 1,
            category_id: '1',
            category_name: 'Bed Room',
            img: bed
        },
        {
            id: 2,
            category_id: '2',
            category_name: 'Dining Room',
            img: dining
        },
        {
            id: 3,
            category_id: '3',
            category_name: 'Living Room',
            img: living
        }
    ]
    return (
        <div>
        <h1 className='text-center font-bold text-3xl mt-6'>Shop By Categories</h1>
        <div className='grid mt-16 gap-4 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categoryData.map(category => <Category
                    key={category.id}
                    category={category}
                    setCategories={setCategories}
                ></Category>)
            }
        </div>
        {/* {
            categories &&
            <Products
                categories={categories}
                setCategories={setCategories}
            ></Products>
        } */}
    </div>
    );
};

export default Categories;