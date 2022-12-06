import React from 'react';

import img1 from '../../../assets/images/furniture1.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> Unique Furniture</h1>
                    <p className="mb-5">Unique Furniture provides various used furniture at an affordable price. We provide Bedroom , Kitchen and Dining room furnitures. You can get variety of these three categories products at a good price. The price mainly depends on the state of the products. You may also be lucky to get a new product at a very cheap price. So, feel free to buy from us. Happy Shopping.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;