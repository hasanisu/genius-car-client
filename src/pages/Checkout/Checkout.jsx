import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const service = useLoaderData();
    const {title, price, _id} = service.data;
    const {user} = useContext(AuthContext);
    
    
    const handlePlaceOrder= e =>{
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name, 
            email,
            phone,
            message
        }
        

        // if(phone.length > 0){
        //     alert('Phone number should be ten character or longer')
        // }
        // else{

        // }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${localStorage.getItem('genius-token')}`
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                toast.success(data.message)
                form.reset();
            }
            else{
                toast.error(data.error)
            }
        })
        .catch(err => err.message)
    }

    return (
        <div className='mb-20'>
            <h2 className='text-4xl text-center'>You are about to order 
            <br />
           <span className='text-2xl font-semibold'>{title}</span>
            </h2>
            <h4 className="text-2xl font-semibold text-center mb-20">Price:${price}</h4>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6' >
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full bg-slate-100" />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full bg-slate-100" />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full bg-slate-100" required/>
                <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full bg-slate-100" readOnly/>
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full bg-slate-100" placeholder="Your Message" required></textarea>
                <input className='btn bg-orange-600' type='submit' value='Place your order'></input>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;