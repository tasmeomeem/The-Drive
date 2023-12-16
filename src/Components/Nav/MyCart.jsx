import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import Nav from "./Nav";
import Swal from "sweetalert2";
import Footer from "../Footer";

const MyCart = () => {
    
    const cartsP = useLoaderData()
    console.log(cartsP)
    const [cart,setCart]=useState(cartsP)
    const handleDelete = id=>{
        fetch(`https://assingment-10-tasmeo.vercel.app/delete/${id}`,{
            method:'Delete'
        })
        .then(res=>res.json)
        .then(data=>{
            if (data.deletedCount>0){
                Swal('delete successful')
            console.log(data)
            }
            const remainning = cartsP.filter(cart=>cart._id !== id)
            setCart(remainning) 
        })
        
        
    }
    
    return (
        <div>
            <Nav/>
            {
                cart.map(cart=><div key={cart._id}>
                    <div className="card-body">
                    <figure><img src={cart.photo}  className="h-80"/></figure>
                    <p className="font-bold">Brand: {cart.brand}</p>
                    <h2 className="card-title">Model: {cart.model}</h2>
                    <p className="">{cart.details}</p>
                    <p className="font-bold">Price: {cart.price}</p>
                    <p className="font-bold">Rating:{cart.rating}</p>
                    
                    
                    <div className="card-actions justify-end"> 
                        <Link to="/MyCart"><button 
                        onClick={()=>{handleDelete(cart._id)}}
                         className="bg-cyan-600">Delete</button></Link>
                    
                    </div>
                    
                </div>
                </div>)
            }
            <Footer/>
        </div>
    );
};

export default MyCart;