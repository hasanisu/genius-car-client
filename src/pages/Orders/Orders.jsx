import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRaw from './OrderRaw';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Orders = () => {
    const {user, logoutUser} = useContext(AuthContext);
    const [customerOrders, setCustomerOrders] = useState([]);

    useEffect(()=>{
       
            fetch(`https://genius-car-server-blush-five.vercel.app/orders?email=${user?.email}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('genius-token')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logoutUser();
                }
                return res.json()
            })
            .then(data => setCustomerOrders(data.data))
    },[user?.email, logoutUser])

    const handleDelete = id =>{
        const procced = window.confirm(`Are you sure you want to delete this Id`);
        if(procced){
            fetch(`https://genius-car-server-blush-five.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('genius-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success){
                    toast.success(data.message)
                    const remainingOrders = customerOrders.filter(viewOrder => viewOrder._id !== id)
                    setCustomerOrders(remainingOrders)
                }
                else{
                    toast.error(data.error)
                }
            })

        }
    }

   const handleStatusUpdate= id => {
    fetch(`https://genius-car-server-blush-five.vercel.app/orders/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type':'application/json',
            authorization:`Bearer ${localStorage.getItem('genius-token')}`
        },
        body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.success){
            const remainingId = customerOrders.filter(odr => odr._id !== id)
            const approvingId = customerOrders.find(odr => odr._id === id)
            approvingId.status= 'Approved';

            const newOrders = [...approvingId, remainingId ]
            setCustomerOrders(newOrders)
        }
    })
   }


    return (
        <div>
            <h2 className='text-5xl'>You have {customerOrders?.length} Orders </h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
    {
        customerOrders.map(order => <OrderRaw
        key={order._id}
        order={order}
        handleDelete={handleDelete}
        handleStatusUpdate={handleStatusUpdate}
        ></OrderRaw>)
    }
    </tbody>
    
  </table>
</div>
<ToastContainer/>
        </div>
    );
};

export default Orders;