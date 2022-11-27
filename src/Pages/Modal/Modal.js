import React from 'react';
import toast from 'react-hot-toast';


const Modal = ({ items, user }) => {



    console.log(items, user);

    const handleModalData = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const productName = form.productName.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;

        const booking = {
            email,
            name,
            ItemName: productName,
            phone,
            price,
            location
        }
        console.log(booking);
        // fetch('http://localhost:5000/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'applicatioon/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             toast.success('Item is booked');
        //         }
        //     })

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Item is booked')
                }
            })





    }





    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleModalData} className='grid grid-cols-1 gap-4'>
                        <input type="email" name="email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="name" defaultValue={user?.displayName} readOnly placeholder="User Name" className="input input-bordered w-full max-w-xs" />




                        <input type="text" name="productName" value={items?.productName} placeholder="Item Name" readOnly className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="price" value={items?.price} placeholder="Price" readOnly className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="user Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="location" placeholder="user Location" className="input input-bordered w-full max-w-xs" />
                        <button className='btn btn-primary max-w-xs'>Submit</button>

                        {/* <input type="text" className='btn btn-primary max-w-xs' value="Submit" /> */}

                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;