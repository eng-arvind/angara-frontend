"use client"; 
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Order() {
 const[allOders,setOrders] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/order') 
          .then((res) =>  setOrders(res.data))
      }, [])


  return (
   <>
  
    return(
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">All Orders</h5>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {allOders.length> 0 ? allOders.map((order) => {
            return(
                <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={order.imageUrl} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                           {order.title}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${order.price}
                    </div>
                </div>
            </li>
            )
         }) :
            "No Order Available"
            }
        </ul>
   </div>
</div>
   </>
  )
}

export default Order