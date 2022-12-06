import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {img, category_name, category_id} = category;
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                
                <div className="card-actions">
                    <Link to={`/category/${category_id}`}><button className="btn btn-primary">View All</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Category;