"use client"; 

import axios from "axios";
import React, { useEffect, useState } from "react";

function page() {

  const [cartItem,setCartItem] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/cart') 
        .then((res) =>  setCartItem(res.data))
    }, [])

  return (
    <>
      <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4 my-3">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
            <hr className="border-gray-300 mt-4 mb-8" />
            {cartItem.length > 0 ? cartItem.map((item) => {
              return(  <div className="space-y-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img
                      src={item.imageUrl}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="ml-auto">
                  <h4 className="text-base font-bold text-gray-800">${item.price}</h4>
                </div>
              </div>
            </div>)
            }):
            "No Item in cart"
            }
          </div>
          <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
            <ul className="text-gray-800 mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-base font-bold">
                Total <span className="ml-auto">${ cartItem.length > 0 &&
                  cartItem.map((item)=> (+item.price))
                  .reduce((sum, current)=> sum+ current) 
                }</span>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
