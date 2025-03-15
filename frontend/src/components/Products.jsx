import React, { use, useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import styles from "./products.module.css";
const Products = () => {
    const [products,setProducts]=useState([]);
    function getData(){
        axios.get("https://fakestoreapi.com/products")
        .then((data)=>{
            console.log(data);
            setProducts(data.data);
        }).catch((err)=>{
            console.log(console.error(err));
        })
    }

    getData();

    useEffect(()=>{
        getData();
    },[])

  return (
    <>
    <h1>Produts</h1>
    <div className={styles.products}>
        {
            products.map((ele)=>{
                return <Card key={ele.id} product={ele}/>
            })
        }
    </div>
    </>
  )
}

export default Products
