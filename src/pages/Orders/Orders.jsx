import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRaw from './OrderRaw';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [customerOrders, setCustomerOrders] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            const data = await res.json();
            setCustomerOrders(data.data)
        }
        fetchData();
    },[user?.email])

    const handleDelete = id =>{
        const procced = window.confirm(`Are you sure you want to delete this Id`);
        if(procced){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
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
    fetch(`http://localhost:5000/orders/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type':'application/json'
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
            <h2 className='text-5xl'>You have {customerOrders.length} Orders </h2>

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