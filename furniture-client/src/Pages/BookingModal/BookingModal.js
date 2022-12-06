import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ productInfo }) => {
    const { product_name, resale_price,img } = productInfo;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(name, email, price, phone, location);
        const bookedProduct = {
            img,
            product_name,
            price,
            email
        }
        fetch('https://furniture-server-zeta.vercel.app/bookedproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Booked');

                }
                else {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err));
    
        
    }
    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal text-black">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{product_name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                    <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" disabled />
                    <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" disabled />
                    <input name='price' type="text" defaultValue={`Price- ${resale_price}`} className="input w-full input-bordered" disabled />
                    <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                    <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                    <br />
                    <input className='w-full input-bordered btn btn-accent text-white font-bold' type="submit" value="Submit" />
                </form>
            </div>
        </div>
        <Toaster></Toaster>
    </div>
    );
};

export default BookingModal;