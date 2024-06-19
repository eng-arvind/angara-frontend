"use client"; 
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import { useState, useEffect } from 'react'

export default function Home() {
  const [productData, setProductData] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:3001/product') 
    .then((res) =>  setProductData(res.data))
}, [])

  return (
    <main className="">
      <Header/>
      <div className="p-2" style={{display:'flex',flexDirection:'column',alignItems:'center', gap:'20px'}}>
        {productData.length > 0 ? productData.map((product) => {
          return <ProductCard product={product}/>
        }):
        "No Product Available Please Add Product"
        }
      </div>
    </main>
  );
}
